"use client";
import { useState } from "react";

export const SearchBar = ({
  onTermSubmit,
  styles,
}: {
  onTermSubmit: (term: string) => void;
  styles?: string;
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
      <form className={`w-full ${styles}`} onSubmit={onFormSubmit}>
        <input
          aria-label="Type in the name of a 5e monster the press enter"
          onChange={onChange}
          placeholder="Search monsters"
          value={term}
        />
      </form>
    </div>
  );
};
