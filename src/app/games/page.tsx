import { games } from "@/resources";
import { Cards } from "@/components";

export default function MatchingGame() {
  return <Cards list={games} />;
}
