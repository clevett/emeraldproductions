import { Options } from "../../../data/srMissions";
import user from "../../../imgs/icomoon/250-hipster.svg";
import yen from "../../../imgs/icomoon/063-coin-yen.svg";
import office from "../../../imgs/icomoon/004-office.svg";
import gift from "../../../imgs/icomoon/160-gift.svg";
import twist from "../../../imgs/icomoon/304-infinite.svg";

type Option = `${Options}`;

export const getIcon = (option: Option) => {
  switch (option) {
    case Options.EMPLOYER:
      return user;
    case Options.LOCATION:
      return office;
    case Options.JOB:
      return yen;
    case Options.MACGUFFIN:
      return gift;
    case Options.TWIST:
      return twist;
    default:
      return undefined;
  }
};
