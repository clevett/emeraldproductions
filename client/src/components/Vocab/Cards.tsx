import {
  categorySelector,
  languageSelector,
  wordListSelector,
} from "./recoil/selectors";
import { FlashCard } from "./components/FlashCard/FlashCard";
import { useCardChecker } from "./hooks/useCardChecker";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./styles.module.css";
import { wordLists } from "./wordlists";
import { createLanguageDisplayName, getAllCategories } from "./helpers";
import { Category, Language } from "./types";
import { ResetIcon } from "@radix-ui/react-icons";

export const Cards = () => {
  const [language, setLanguage] = useRecoilState<Language>(languageSelector);
  const [category, setCategory] = useRecoilState<Category>(categorySelector);
  const list = useRecoilValue(wordListSelector);
  const { cardCheck, resetCards } = useCardChecker();

  const createLanguageOptionsList = (lang: Language) => {
    return Object.keys(wordLists).map((langAbbr) => (
      <option key={langAbbr} value={langAbbr}>
        {createLanguageDisplayName(langAbbr)}
      </option>
    ));
  };

  const createCategoryOptionsList = (lang: Language) => {
    const categories = getAllCategories(lang);
    return categories.map((category) => (
      <option key={category} value={category}>
        {category}
      </option>
    ));
  };

  const onCategoryChange = (
    newCategoryName: Category["name"],
    language: Language
  ) => {
    const languageCategories: Category[] = wordLists[language];
    const newCategory = languageCategories.find(
      ({ name }: Category) => name === newCategoryName
    );

    if (newCategory) {
      setCategory(newCategory);
    } else {
      console.warn(`Category ${newCategoryName} not found in ${language}`);
    }
  };

  return (
    <div>
      <div className="grid gap-1 grid-flow-col mb-5">
        <select
          className="bg-neutral-900 w-fit"
          value={language}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setLanguage(event.target.value as Language)
          }
        >
          {createLanguageOptionsList(language)}
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
          <FlashCard key={word} word={word} cardChecker={cardCheck} />
        ))}
      </div>
    </div>
  );
};
