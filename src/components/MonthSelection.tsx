import { Select, SelectItem } from "@tremor/react";

type Props = {
  selectedDate: string;
  handleChangeDate: (value: string) => void;
  selections: string[];
};

export default function MonthSelection({
  selectedDate,
  handleChangeDate,
  selections,
}: Props) {
  return (
    <div>
      <Select
        value={selectedDate}
        onValueChange={handleChangeDate}
        className="py-2 my-2 w-fit"
        placeholder="Select Y/M"
      >
        {selections.map((selection) => (
          <SelectItem value={selection} key={selection} className="bg-white">
            {selection.length === 5
              ? `${selection.substring(0, 4)}/${selection.substring(4)}`
              : selection.length === 6
              ? `${selection.substring(0, 4)}/${selection.substring(4, 6)}`
              : "all"}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
