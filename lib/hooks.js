import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import config from "../config";
import { removePrefixFromPath } from './utils';

export function useLanguage() {
  const [language, setLanguage] = useState(config.defaultLanguage);
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    const pathWithoutPrefix = removePrefixFromPath(path);

    const currentLanguage =
      Object.keys(config.languages).find(lang =>
        pathWithoutPrefix.match(new RegExp(`^/${lang}(/.*)?$`))
      ) || config.defaultLanguage;

    setLanguage(currentLanguage);
  }, [router.asPath]);

  return language;
}
