import { Input } from "@/components";

export const SearchBar = ({
  label,
  onSubmit,
  placeholder,
  styles,
}: {
  label: string;
  onSubmit: (term: string) => void;
  placeholder: string;
  styles?: string;
}) => {
  return (
    <div className={`search-bar ui segment min-w-[250px]  ${styles ?? ""}`}>
      <Input label={label} placeholder={placeholder} submit={onSubmit} />
    </div>
  );
};
