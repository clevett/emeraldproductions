import { Heading } from "@radix-ui/themes";
import { Filters } from "./Filters";
import { SearchNPCs } from "./SearchNPCs";
import { TableNPCs } from "./TableNPCs";

export const Bestiary = () => {
  return (
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
  );
};
