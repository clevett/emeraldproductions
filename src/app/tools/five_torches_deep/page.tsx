import { systems } from "@/resources";
import { Cards } from "@/components";

export default function FiveTorchesDeep() {
  const { list } = systems.ftd;
  return <Cards list={list} />;
}
