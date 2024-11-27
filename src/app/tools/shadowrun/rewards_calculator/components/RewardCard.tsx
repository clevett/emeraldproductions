import { useRecoilValue } from "recoil";
import { selectNuyen, selectKarma } from "../recoil";
import { Card, Heading } from "@/components";

export const RewardCard = () => {
  const nuyen = useRecoilValue(selectNuyen);
  const karma = useRecoilValue(selectKarma);

  return (
    <Card type="business">
      <div className="grid grid-flow-col gap-4 py-4 px-6 content-center justify-items-center w-full h-full text-center">
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
