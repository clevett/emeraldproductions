import { Environment, Environments } from "../data/myz_environments";

import deadWood from "../imgs/dead_woods.png";
import derelict from "../imgs/industry.png";
import ash from "../imgs/ash.png";
import crater from "../imgs/crater.png";
import crumbling from "../imgs/crumbling.png";
import decayed from "../imgs/decayed.png";
import marsh from "../imgs/marsh.png";
import overgrown from "../imgs/overgrown.png";
import scrubland from "../imgs/scrubland.png";
import settlement from "../imgs/settlement2.png";
import thickwood from "../imgs/thickwood.png";
import unscathed from "../imgs/unscathed.png";
import glas from "../imgs/glassfield.png";

export const getImg = (title: Environment) => {
  switch (title) {
    case Environments.ASH_DESERT:
      return ash;
    case Environments.CRUMBLING_RUINS:
      return crumbling;
    case Environments.DEAD_WOODS:
      return deadWood;
    case Environments.DECAYED_RUINS:
      return decayed;
    case Environments.DERELICT_INDUSTRIES:
      return derelict;
    case Environments.GLASIFIED_FIELD:
      return glas;
    case Environments.HUGE_CREATOR:
      return crater;
    case Environments.MARSHLANDS:
      return marsh;
    case Environments.OVERGROWN_RUINS:
      return overgrown;
    case Environments.SCRUBLANDS:
      return scrubland;
    case Environments.SETTLEMENT:
      return settlement;
    case Environments.THICK_WOODS:
      return thickwood;
    case Environments.UNSCATHED_RUINS:
      return unscathed;
    default:
      return ash;
  }
};
