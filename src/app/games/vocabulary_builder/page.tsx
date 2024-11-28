"use client";
import { RecoilRoot } from "recoil";
import { Cards } from "./components/Cards";

//Made using CodingFriends/basic-vocabulary-word-lists/
export default function VocabularyGame() {
  return (
    <RecoilRoot>
      <Cards />
    </RecoilRoot>
  );
}
