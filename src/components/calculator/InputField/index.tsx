type PropsType = {
  label: string;
  value: string;
  onFieldChanged: (key: string, val: number) => void;
};

function InputField(props: PropsType) {
  function onChanged(event: React.ChangeEvent<HTMLInputElement>) {
    const val = event.target.value;
    if (val.length > 8) {
      return;
    }
    props.onFieldChanged(props.label, val === "" ? 0 : parseInt(val));
  }
  return (
    <div className="w-[32%] max-w-[150px] h-10 rounded border border-grey-200 mt-3 relative">
      <input
        type="number"
        className="w-full h-full text-sm px-2 bg-transparent outline-none rounded"
        placeholder="0"
        value={props.value}
        onChange={onChanged}
      />
      <p className="absolute left-3 top-0 bg-white px-2 text-[13px] justify-center items-center text-gray-700 font-bold -translate-y-1/2">
        {props.label}
      </p>
    </div>
  );
}

export default InputField;
