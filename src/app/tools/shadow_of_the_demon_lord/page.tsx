import { systems } from "@/resources";
import { Cards } from "@/components";

export default function ShadowOfTheDemonLord() {
  const { list } = systems.sotdl;
  return <Cards list={list} />;
}
