import { RecoilRoot } from "recoil";
import { LayoutBody } from "../LayoutBody";
import { Sector } from "./components/Sector";

export const CreateTheZone = () => {
  return (
    <LayoutBody
      DriveThruId="139453"
      subtitle="Create the Zone"
      title="Mutant Year Zero"
    >
      <RecoilRoot>
        <Sector />
      </RecoilRoot>
    </LayoutBody>
  );
};
