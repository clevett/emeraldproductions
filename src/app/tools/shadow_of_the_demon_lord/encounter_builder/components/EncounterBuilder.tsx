import { danger } from "@/data";
import { Heading } from "@/components";
import RecoilContext from "@/recoil";

import { Monster } from "../types";
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

export const findIndex = (selected: Monster[], beast: Monster) =>
  Array.isArray(selected) ? selected.indexOf(beast) : false;

export const EncounterBuilder = ({ data }: { data?: Monster[] }) => {
  if (data === undefined) {
    return (
      <div className="flex justify-center items-center h-full">
        <Heading as="h4">Monster list not found...</Heading>
      </div>
    );
  }

  return (
    <RecoilContext>
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

        {data && (
          <div className="flex flex-row flex-wrap gap-4">
            <div className="grid gap-2 content-start flex-1 min-w-[300px]">
              <Heading as="h4" className="text-center">
                <span className="mr-2">Encounter Difficulty =</span>
                <DifficultyTotal />
              </Heading>
              <div className="py-2 sm:px-2 sm:py-4 rounded shadow-2xl">
                <TableSelected data={data} />
              </div>
            </div>

            <div className="grid gap-2 content-start flex-1 min-w-[300px]">
              <div className="grid grid-cols-1 gap-4 grid-rows-2 xl:grid-rows-1 justify-center content-center">
                <div className="xl:col-start-1 xl:col-end-2  xl:row-start-1">
                  <Filters data={data} />
                </div>

                <Heading
                  as="h4"
                  className="text-center row-start-1 xl:col-start-2 xl:col-end-3 xl:row-start-1"
                >
                  Bestiary
                </Heading>
                <SearchNPCs data={data} />
              </div>
              <div className="py-2 sm:px-2 sm:py-4 rounded shadow-2xl">
                <TableNPCs data={data} />
              </div>
            </div>
          </div>
        )}
      </div>
    </RecoilContext>
  );
};
