import { TGoldResource } from "@/recoil/calculatorState";
import InputField from "../../InputField";
import {
  useResourceState,
  useSetGoldResourceState,
} from "@/functional/hooks/calculator_hooks";

type GoldFieldType = {
  goldResources: TGoldResource;
  onFieldChanged: (key: string, val: number) => void;
};

function GoldArea() {
  const resource = useResourceState();
  const setGoldResource = useSetGoldResourceState();

  function onGoldFieldChanged(key: string, val: number) {
    setGoldResource(key as keyof TGoldResource, val);
  }

  return (
    <>
      <h3 className="text-xs font-bold">STONE</h3>
      <div className="flex flex-wrap justify-between">
        <GoldFields
          goldResources={resource.gold}
          onFieldChanged={onGoldFieldChanged}
        />
      </div>
    </>
  );
}
export default GoldArea;

function GoldFields(props: GoldFieldType) {
  const list = [];
  for (let item in props.goldResources) {
    const val =
      props.goldResources[item as keyof typeof props.goldResources] === 0
        ? ""
        : props.goldResources[
            item as keyof typeof props.goldResources
          ].toString();
    list.push(
      <InputField
        label={item}
        value={val}
        onFieldChanged={props.onFieldChanged}
        key={item}
      />
    );
  }
  return list;
}
