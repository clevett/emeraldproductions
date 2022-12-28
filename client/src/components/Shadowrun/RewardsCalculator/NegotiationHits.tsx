import { EuiTitle, EuiSpacer, EuiFieldText } from "@elastic/eui";
import { useState } from "react";

export const NegotiationHits = () => {
  const [value, setValue] = useState("0");
  //   const [dice, setDice] = useRecoilState(opposedDicePoolAtom);
  //   const setKarma = useSetRecoilState(diceKarmaAtom);
  //   const setNuyen = useSetRecoilState(diceNuyenAtom);

  const onBlur = () => {
    const num = parseInt(value);
    // if (isNaN(num)) {
    //   setValue(`${dice}`);
    // } else {
    //   setDice(num);
    //   setKarma(getDicePoolKarma(num));
    //   setNuyen(getDicePoolNuyen(num));
    // }
  };

  return (
    <div className="grid w-fill">
      <EuiTitle className="text-center" size="s">
        <h5>Negotiation Hits</h5>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiFieldText
        onBlur={onBlur}
        className="text-center"
        aria-label="Enter the highest opposed dice pool"
        onChange={(e) => setValue(e.target.value)}
        placeholder="14"
        value={value}
      />
    </div>
  );
};
