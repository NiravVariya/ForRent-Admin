import useTranslation from "@/components/hooks/useTranslation";
import { Rating } from "@smastrom/react-rating";
import React, { useRef, useState } from "react";

const {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Textarea,
} = require("@chakra-ui/react");

interface PropsType{
    isOpen:boolean;
    onClose:()=>void
}

const  ReviewForm:React.FC<PropsType> = ({ onClose, isOpen })=> {
  const cancelRef = useRef();
  const {t} = useTranslation()
  const [rating, setRating] = useState(0);
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>{'sas'}</AlertDialogHeader>
          
          <AlertDialogBody >
            <Rating
              style={{ maxWidth: 140 }}
              value={rating}
              onChange={setRating}
            />
            <Textarea my='2'  placeholder={t("write")}  width={"full"} />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} ml='2' onClick={onClose}>
              {t("cancel")}
            </Button>
            <Button bg='#FFBB00' color={'white'} ml={3}>
              {t("fomr.submit")}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ReviewForm
