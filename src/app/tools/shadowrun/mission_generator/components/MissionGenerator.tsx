import RecoilContext from "@/recoil";
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
    <div className="grid gap-4 sm:gap-8 justify-items-center auto-rows-min h-full w-full">
      <RecoilContext>
        <Card type="business">
          <div className="grid grid-rows-[1fr_min-content] gap-4 py-4 px-6 h-full w-full">
            <NaturalLanguage />
            <ResetButton />
          </div>
        </Card>
        <div className="flex flex-wrap justify-center gap-4">{cardNodes}</div>
      </RecoilContext>
    </div>
  );
};
