import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import config from "../config";
import { removePrefixFromPath } from "./utils";

type LangId = keyof typeof config.languages;

export function useLanguage(): LangId {
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
  }, [router]);

  return language as LangId;
}
