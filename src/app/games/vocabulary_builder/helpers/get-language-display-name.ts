import { getLanguageName } from "./get-language-name";

export const createLanguageDisplayName = (langAbbreviation: string) => {
  const [from, to] = langAbbreviation.split("-");
  return `${getLanguageName(from)} - ${getLanguageName(to)}`;
};
