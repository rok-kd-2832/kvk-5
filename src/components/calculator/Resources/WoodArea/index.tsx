import { TWoodResource } from "@/recoil/calculatorState";
import InputField from "../../InputField";
import {
  useResourceState,
  useSetWoodResourceState,
} from "@/functional/hooks/calculator_hooks";

type WoodFieldType = {
  woodResources: TWoodResource;
  onFieldChanged: (key: string, val: number) => void;
};

function WoodArea() {
  const resource = useResourceState();
  const setWoodResource = useSetWoodResourceState();

  function onWoodFieldChanged(key: string, val: number) {
    setWoodResource(key as keyof TWoodResource, val);
  }

  return (
    <>
      <h3 className="text-xs font-bold">WOOD</h3>
      <div className="flex flex-wrap justify-between">
        <WoodFields
          woodResources={resource.wood}
          onFieldChanged={onWoodFieldChanged}
        />
      </div>
    </>
  );
}
export default WoodArea;

function WoodFields(props: WoodFieldType) {
  const list = [];
  for (let item in props.woodResources) {
    const val =
      props.woodResources[item as keyof typeof props.woodResources] === 0
        ? ""
        : props.woodResources[
            item as keyof typeof props.woodResources
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
