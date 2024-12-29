import { danger } from "@/data";
import { Heading } from "@/components";

import { getColor } from "../utils";
import { SelectLevel } from "./SelectLevel";
import { DifficultRange } from "./DifficultySubheader";
import { DifficultyTotal } from "./DifficultyTotal";
import { TableSelected } from "./TableSelected";
import { TableNPCs } from "./TableNPCs";
import { SearchNPCs } from "./SearchNPCs";
import { Filters } from "./Filters";

const difficultiesKeys = Object.keys(danger.starting) as Array<
  keyof typeof danger.starting
>;

export const EncounterBuilder = () => {
  return (
    <div className="grid gap-4 sm:p-2 sm:gap-10 auto-rows-min md:p-4 w-full h-full">
      <div className="flex flex-row flex-wrap gap-4 bg-card rounded shadow justify-center p-2 sm:px-8 sm:py-6 sm:justify-between text-center">
        <div className="grid gap-4">
          <Heading as="h4">Level</Heading>
          <SelectLevel />
        </div>

        {difficultiesKeys.map((difficulty) => {
          const title =
            difficulty === "max" ? "Max. Creature Difficulty" : difficulty;
          return (
            <div className="grid gap-2 sm:gap-4" key={`level-${difficulty}`}>
              <Heading
                as="h4"
                className={`text-${getColor(difficulty)}-600 capitalize`}
              >
                {title}
              </Heading>
              <DifficultRange difficulty={difficulty} />
            </div>
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap gap-4">
        <div className="grid gap-2 content-start flex-1 min-w-[300px] grid-rows-[minmax(32px,_min-content)_minmax(32px,_min-content)_1fr]">
          <Heading as="h4" className="text-center">
            <span className="mr-2">Encounter Difficulty</span>
          </Heading>
          <Heading as="h5" className="text-center min-h-[32px]">
            <DifficultyTotal />
          </Heading>
          <div className="py-2 sm:px-2 sm:py-4 rounded shadow-2xl max-h-[600px] overflow-y-auto">
            <TableSelected />
          </div>
        </div>

        <div className="grid gap-2 content-start flex-1 min-w-[300px] grid-rows-[minmax(32px,_min-content)_minmax(32px,_min-content)_1fr]">
          <div className="grid justify-center content-center">
            <Heading as="h4" className="text-center">
              Bestiary
            </Heading>
          </div>

          <div className="flex flex-wrap gap-4 w-full min-w-[300px]">
            <div className="flex-none">
              <SearchNPCs />
            </div>
            <div className="flex-1">
              <Filters />
            </div>
          </div>
          <div className="py-2 sm:px-2 sm:py-4 rounded shadow-2xl max-h-[600px] overflow-y-auto">
            <TableNPCs />
          </div>
        </div>
      </div>
    </div>
  );
};
