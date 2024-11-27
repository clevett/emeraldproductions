import { RecoilRoot } from "recoil";

import { Options } from "@/data";
import { Card } from "@/components";

import { ResetButton } from "./ResetButton";
import { NaturalLanguage } from "./NaturalLanguage";
import { MissionCard } from "./MissionCard";

export const MissionGenerator = () => {
  const cardNodes = Object.values(Options).map((item, index) => {
    return <MissionCard key={index} item={item} />;
  });

  return (
    <RecoilRoot>
      <div className="grid gap-4 justify-start auto-rows-min">
        <Card type="business">
          <div className="grid grid-rows-[1fr_min-content] gap-4 py-4 px-6 h-full w-full">
            <NaturalLanguage />
            <ResetButton />
          </div>
        </Card>
        <div className="flex flex-wrap gap-4">{cardNodes}</div>
      </div>
    </RecoilRoot>
  );
};
