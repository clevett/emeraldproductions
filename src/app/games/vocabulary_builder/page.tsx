"use client";
import dynamic from "next/dynamic";

const VocabularyGameClient = dynamic(() => import("./components/VocabularyGame"), {
  ssr: false,
});

//Made using CodingFriends/basic-vocabulary-word-lists/
export default function VocabularyGame() {
  return <VocabularyGameClient />;
}
