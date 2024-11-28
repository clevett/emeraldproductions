import { systems } from "@/resources";
import { Cards } from "@/components";

export default function MutantYearZero() {
  const { list } = systems.myz;
  return <Cards list={list} />;
}
