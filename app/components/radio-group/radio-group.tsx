import React, { useState } from "react";
import RadioOption from "./radio-option";

interface IProps {
  options: React.ReactElement[];
  onChange?: (selectedIndex: number) => void;
  value?: number;
  labelText?: string;
}
const RadioGroup = ({ options, onChange, value, labelText }: IProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  function onSelect(index: number) {
    setSelectedIndex(index);
    onChange && onChange(index);
  }
  return (
    <div>
      <div className="flex justify-evenly">
        {options.map((el, index) => (
          <RadioOption
            key={index + 1}
            index={index + 1}
            selectedIndex={selectedIndex}
            onSelect={(index:any) => onSelect(index)}
          >
            {el}
          </RadioOption>
        ))}
      </div>
    </div>
  );
};
export default RadioGroup;