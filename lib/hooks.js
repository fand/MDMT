import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import config from "../config";

export function useLanguage() {
  const [language, setLanguage] = useState(config.defaultLanguage);
  const router = useRouter();

  useEffect(() => {
    const currentLanguage =
      Object.keys(config.languages).find(lang =>
        router.asPath.match(`^/${lang}(/.*)?$`)
      ) || config.defaultLanguage;

    setLanguage(currentLanguage);
  }, [router]);

  return language;
}
