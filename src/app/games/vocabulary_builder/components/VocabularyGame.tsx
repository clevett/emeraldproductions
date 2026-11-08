"use client";

import { Provider } from "jotai";
import { Cards } from "./Cards";

export default function VocabularyGame() {
  return (
    <Provider>
      <Cards />
    </Provider>
  );
}
