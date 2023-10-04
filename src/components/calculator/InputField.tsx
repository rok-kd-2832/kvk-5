type PropsType = {
  label: string;
  onFieldChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField(props: PropsType) {
  return (
    <div className="w-[32%] max-w-[150px] h-10 rounded border border-grey-200 mt-3 relative">
      <input
        type="number"
        className="w-full h-full text-sm px-2 bg-transparent outline-none rounded"
        placeholder="0"
        onChange={props.onFieldChanged}
      />
      <p className="absolute left-3 top-0 bg-white px-2 text-[13px] justify-center items-center text-gray-700 font-bold -translate-y-1/2">
        {props.label}
      </p>
    </div>
  );
}

export default InputField;
