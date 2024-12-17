"use client";

import { useRecoilState, useRecoilValue } from "recoil";

import { ReloadIcon } from "@/components";

import {
  categorySelector,
  languageSelector,
  wordListSelector,
} from "../recoil/selectors";
import { Category, Language } from "../types";
import {
  createLanguageDisplayName,
  getAllCategories,
  getCategory,
} from "../helpers";
import { FlashCard } from "./FlashCard";
import { useCardChecker, useResetCards, useFireworks } from "../hooks";

import { wordLists } from "../wordlists";

export const Cards = () => {
  const [language, setLanguage] = useRecoilState<Language>(languageSelector);
  const [category, setCategory] = useRecoilState<Category>(categorySelector);
  const list = useRecoilValue(wordListSelector);
  const cardChecker = useCardChecker();
  const resetCards = useResetCards();
  const { canvas } = useFireworks();

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
    if (newCategory) {
      setCategory(newCategory);
    } else {
      warn(category.name, newLanguage);
    }
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
    if (newCategory) {
      setCategory(newCategory);
    } else {
      warn(newCategoryName, language);
    }
  };

  return (
    <div className="grid gap-6 sm:gap-8 justify-items-center items-center">
      <div className="grid gap-4 rounded sm:gap-10 auto-cols-min grid-flow-col">
        <select
          className="bg-neutral-900 p-2 w-fit"
          value={language}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onLanguageChange(event.target.value as Language)
          }
        >
          {createLanguageOptionsList()}
        </select>
        <select
          className="bg-neutral-900 rounded p-2 w-fit capitalize"
          value={category.name}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            onCategoryChange(event.target.value as Category["name"], language)
          }
        >
          {createCategoryOptionsList(language)}
        </select>
        <button
          className="bg-neutral-900 p-2 rounded shadow w-fit"
          onClick={() => resetCards()}
        >
          <ReloadIcon />
        </button>
      </div>

      <div className="grid gap-4 sm:gap-8 justify-center grid-cols-[repeat(auto-fill,_300px)] w-full h-full">
        {list?.map((word) => (
          <FlashCard key={word} word={word} cardChecker={cardChecker} />
        ))}
      </div>

      {canvas}
    </div>
  );
};
