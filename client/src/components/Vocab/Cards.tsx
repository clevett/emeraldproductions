import {
  categorySelector,
  languageSelector,
  wordListSelector,
} from "./recoil/selectors";
import { Category, Language } from "./types";
import { createLanguageDisplayName, getAllCategories } from "./helpers";
import { FlashCard } from "./components/FlashCard/FlashCard";
import { ResetIcon } from "@radix-ui/react-icons";
import { useCardChecker } from "./hooks/useCardChecker";
import { useRecoilState, useRecoilValue } from "recoil";
import { useResetCards } from "./hooks/useResetCards";
import { wordLists } from "./wordlists";
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
