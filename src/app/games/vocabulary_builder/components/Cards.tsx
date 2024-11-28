import {
  categorySelector,
  languageSelector,
  wordListSelector,
} from "../recoil/selectors";
import { Category, Language } from "./types";
import {
  createLanguageDisplayName,
  getAllCategories,
  getCategory,
} from "../helpers";
import { FlashCard } from "./FlashCard/FlashCard";
import { ResetIcon } from "@radix-ui/react-icons";
import { useCardChecker } from "../hooks/useCardChecker";
import { useRecoilState, useRecoilValue } from "recoil";
import { useResetCards } from "../hooks/useResetCards";
import { wordLists } from "../../../../client_backup/src/components/Vocab/wordlists";
import styles from "./styles.module.css";

export const Cards = () => {
  const [language, setLanguage] = useRecoilState<Language>(languageSelector);
  const [category, setCategory] = useRecoilState<Category>(categorySelector);
  const list = useRecoilValue(wordListSelector);
  const cardChecker = useCardChecker();
  const resetCards = useResetCards();

  const createLanguageOptionsList = () => {
    return Object.keys(wordLists).map((langAbbr) => (
      <option key={langAbbr} value={langAbbr}>
        {createLanguageDisplayName(langAbbr)}
      </option>
    ));
  };

  const warn = (c: string, l: string) =>
    console.warn(`Category ${c} not found in ${l}`);

  const onLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);

    const newCategory = getCategory(newLanguage, category.name);
    newCategory ? setCategory(newCategory) : warn(category.name, newLanguage);
  };

  const createCategoryOptionsList = (lang: Language) => {
    const categories = getAllCategories(lang);
    return categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
  };

  const onCategoryChange = async (
    newCategoryName: Category["name"],
    language: Language
  ) => {
    const newCategory = getCategory(language, newCategoryName);
    newCategory ? setCategory(newCategory) : warn(newCategoryName, language);
  };

  return (
    <div>
      <div className="grid gap-1 grid-flow-col mb-5">
        <select
          className="bg-neutral-900 w-fit"
          value={language}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onLanguageChange(event.target.value as Language)
          }
        >
          {createLanguageOptionsList()}
        </select>
        <select
          className="bg-neutral-900 w-fit capitalize"
          value={category.name}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onCategoryChange(event.target.value as Category["name"], language)
          }
        >
          {createCategoryOptionsList(language)}
        </select>
        <button className="bg-neutral-900 w-fit" onClick={() => resetCards()}>
          <ResetIcon />
        </button>
      </div>
      <div className={styles.layout}>
        {list?.map((word) => (
          <FlashCard key={word} word={word} cardChecker={cardChecker} />
        ))}
      </div>
    </div>
  );
};
