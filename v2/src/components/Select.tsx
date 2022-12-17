const Select = ({
  onSelectValueChange,
  options,
  selected,
  label = "",
  id = "",
}: {
  onSelectValueChange: (arg: string) => void;
  options: string[];
  selected: string;
  label: string;
  id?: string;
}) => {
  const handleChange = (event: { target: { value: any } }) => {
    onSelectValueChange(event.target.value);
  };

  const renderedList = (options: string[]) =>
    options.map((option: string, index: number) => (
      <option value={option} key={`${option}-${index}`}>
        {option}
      </option>
    ));

  return (
    <div className="SelectBuilder self-center">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select
        className="text-capitalize"
        id={id || ""}
        defaultValue={selected}
        onChange={handleChange}
      >
        {renderedList(options)}
      </select>
    </div>
  );
};

export default Select;
