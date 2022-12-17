import { EuiFieldText } from "@elastic/eui";
import { useState } from "react";

export const SearchBar = ({
  onTermSubmit,
}: {
  onTermSubmit: (term: string) => void;
}) => {
  const [term, setTerm] = useState("");

  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => setTerm(event.target.value);

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit}>
        <EuiFieldText
          aria-label="Type in the name of a 5e monster the press enter"
          onChange={onChange}
          placeholder="Search monsters"
          value={term}
        />
      </form>
    </div>
  );
};
