interface RadioOptionProps {
    index: number;
    selectedIndex?: number;
  
    onSelect: (index: number) => void;
  
    children: React.ReactNode;
  }
  const RadioOption = (props: RadioOptionProps) => {
    const isSelected = props.index === props.selectedIndex;
    return (
      <div
        className={`flex items-center gap-2 shadow cursor-pointer transition duration-300 mx-1 rounded-md p-2 py-3  flex-1 text-xs font-bold text-slate-600 lg:font-normal lg:text-sm hover:shadow-md ${
          isSelected ? "bg-blue-700 text-white" : "bg-slate-50"
        }`}
        onClick={() => {
          props.onSelect(props.index)
        }}
      >
        <div
          className={`rounded-full w-4 h-4 border transition ${
            isSelected && "border-4 border-sky-500 bg-sky-300"
          } `}
        ></div>
        {props.children}
      </div>
    );
  };
  
  export default RadioOption;