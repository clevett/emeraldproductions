import { Input } from "@/app/components";

export const SearchBar = ({
  onTermSubmit,
}: {
  onTermSubmit: (term: string) => void;
  styles?: string;
}) => {
  return (
    <div className="search-bar ui segment">
      <Input
        label="Type in the name of a 5e monster the press enter"
        placeholder="Search monsters"
        submit={onTermSubmit}
      />
    </div>
  );
};
