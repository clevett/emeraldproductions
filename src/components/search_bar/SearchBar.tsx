import { Input } from "@/components";

export const SearchBar = ({
  label,
  placeholder,
  onSubmit,
  styles,
}: {
  onSubmit: (term: string) => void;
  styles?: string;
  placeholder: string;
  label: string;
}) => {
  return (
    <div className={`search-bar ui segment min-w-[250px]  ${styles ?? ""}`}>
      <Input label={label} placeholder={placeholder} submit={onSubmit} />
    </div>
  );
};
