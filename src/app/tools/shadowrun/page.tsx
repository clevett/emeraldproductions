import { systems } from "@/resources";
import { Cards } from "@/components";

export default function Shadowrun() {
  const { list } = systems.sr5e;
  const { list: sr6 } = systems.sr6e;

  return <Cards list={[...list, ...sr6]} />;
}
