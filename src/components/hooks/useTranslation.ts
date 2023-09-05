import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

interface TranslationState {
  en: Record<string, string>;
  ar: Record<string, string>;
}

interface RootState {
  icon: TranslationState;
}

interface TranslationFunctions {
  t: (key: string) => string | undefined;
}

function useTranslation(): TranslationFunctions {
  const { locale } = useRouter();
  const { en, ar } = useSelector((state: RootState) => state.icon);

  const t = (key: string): string | undefined => {
    if (locale === 'ar') {
      return ar[key];
    }
    if (locale === 'en' || !locale) {
      return en[key];
    }
    return undefined;
  };

  return { t };
}

export default useTranslation;
