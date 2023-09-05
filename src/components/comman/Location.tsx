import { Text ,Image} from '@chakra-ui/react'
import React from 'react'
import location from "@/../../public/assets/Group.png";
import useTranslation from '../hooks/useTranslation';

interface PropsType{
    title:string
}

const Location:React.FC<PropsType> = ({title}) => {
 console.log('title',title);
 
    const {t} = useTranslation()
  return (
    <>
       <Image mx="auto" src={location.src} />
        <Text
          fontWeight={500}
          my="5"
          fontSize={"1.5rem"}
          color={"blackAlpha.800"}
          textAlign={"center"}
        >
          {t(title)}
        </Text>
    </>
  )
}

export default Location
