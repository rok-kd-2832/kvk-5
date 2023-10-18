import { TStoneResource } from "@/recoil/calculatorState";
import InputField from "../../InputField";
import {
  useResourceState,
  useSetStoneResourceState,
} from "@/functional/hooks/calculator_hooks";

type StoneFieldType = {
  stoneResources: TStoneResource;
  onFieldChanged: (key: string, val: number) => void;
};

function StoneArea() {
  const resource = useResourceState();
  const setStoneResource = useSetStoneResourceState();

  function onStoneFieldChanged(key: string, val: number) {
    setStoneResource(key as keyof TStoneResource, val);
  }

  return (
    <>
      <h3 className="text-xs font-bold">STONE</h3>
      <div className="flex flex-wrap justify-between">
        <StoneFields
          stoneResources={resource.stone}
          onFieldChanged={onStoneFieldChanged}
        />
      </div>
    </>
  );
}
export default StoneArea;

function StoneFields(props: StoneFieldType) {
  const list = [];
  for (let item in props.stoneResources) {
    const val =
      props.stoneResources[item as keyof typeof props.stoneResources] === 0
        ? ""
        : props.stoneResources[
            item as keyof typeof props.stoneResources
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
