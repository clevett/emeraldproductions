import { Suspense } from "react";
import Loading from "./loading";
import DiceRoller from "../../components/diceroller/DiceRoller";

export default function DiceRollerHome() {
  return (
    <Suspense fallback={<Loading />}>
      <DiceRoller />
    </Suspense>
  );
}
