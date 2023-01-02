import { useSetRecoilState } from "recoil";
import { getArtifactCount, getArtifacts } from "../helpers/getArtifacts";

import { sectorArtifactAtom } from "../recoil";

export const useRefreshArtifacts = () => {
  const setArtifacts = useSetRecoilState(sectorArtifactAtom);

  return (rolls: number[]) => {
    const count = getArtifactCount(rolls);
    const artifacts = getArtifacts(count);
    setArtifacts(artifacts);
  };
};
