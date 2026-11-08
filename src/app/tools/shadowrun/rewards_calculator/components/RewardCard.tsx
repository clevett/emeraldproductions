import { useAtomValue } from "jotai";
import { selectNuyen, selectKarma } from "../state";
import { Card, Heading } from "@/components";

export const RewardCard = () => {
  const nuyen = useAtomValue(selectNuyen);
  const karma = useAtomValue(selectKarma);

  return (
    <Card type="business">
      <div className="grid grid-flow-col gap-4 p-2 sm:py-4 sm:px-6 content-center justify-items-center w-full h-full text-center">
        <div>
          <Heading as="h3">Nuyen Reward</Heading>
          <p>{nuyen.toLocaleString()}¥</p>
        </div>
        <div>
          <Heading as="h3">Karma Reward</Heading>
          <p>{karma.toLocaleString()}</p>
        </div>
      </div>
    </Card>
  );
};
