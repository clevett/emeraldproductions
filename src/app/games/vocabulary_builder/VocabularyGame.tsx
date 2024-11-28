import { RecoilRoot } from "recoil";
import { Cards } from "./components/Cards";

//Made using CodingFriends/basic-vocabulary-word-lists/

export const VocabularyGame = () => {
  return (
    <RecoilRoot>
      <Cards />
    </RecoilRoot>
  );
};
