import { languageSelector, wordListSelector } from "./recoil/selectors";
import { FlashCard } from "./components/FlashCard/FlashCard";
import { useCardChecker } from "./hooks/useCardChecker";
import { useRecoilState, useRecoilValue } from "recoil";

import styles from "./styles.module.css";
import { wordLists } from "./wordlists";
import { getLanguageName } from "./helpers";
import { Language } from "./types";
import { defaultLanguage } from "./recoil/atoms";

export const Cards = () => {
  const [language, setLanguage] = useRecoilState<Language>(languageSelector);
  const list = useRecoilValue(wordListSelector);
  const hideCards = useCardChecker();

  const getLanguageOptions = () => {
    const getLanguageDisplay = (language: string) => {
      const [from, to] = language.split("-");
      return `${getLanguageName(from)} - ${getLanguageName(to)}`;
    };

    return Object.keys(wordLists).map((langAbbr) => (
      <option key={langAbbr} value={langAbbr}>
        {getLanguageDisplay(langAbbr)}
      </option>
    ));
  };

  return (
    <div>
      <div>
        <select className="bg-neutral-900" value={defaultLanguage}>
          {getLanguageOptions()}
        </select>
      </div>
      <div className={styles.layout}>
        {list?.map((word) => (
          <FlashCard key={word} word={word} cardChecker={hideCards} />
        ))}
      </div>
    </div>
  );
};
