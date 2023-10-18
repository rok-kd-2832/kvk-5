import { TCornResource } from "@/recoil/calculatorState";
import InputField from "../../InputField";
import {
  useResourceState,
  useSetCornResourceState,
} from "@/functional/hooks/calculator_hooks";

type CornFieldType = {
  cornResources: TCornResource;
  onFieldChanged: (key: string, val: number) => void;
};

function CornArea() {
  const resource = useResourceState();
  const setCornResource = useSetCornResourceState();

  function onCornFieldChanged(key: string, val: number) {
    setCornResource(key as keyof TCornResource, val);
  }

  return (
    <>
      <h3 className="text-xs font-bold">CORN</h3>
      <div className="flex flex-wrap justify-between">
        <CornFields
          cornResources={resource.corn}
          onFieldChanged={onCornFieldChanged}
        />
      </div>
    </>
  );
}
export default CornArea;

function CornFields(props: CornFieldType) {
  const list = [];
  for (let item in props.cornResources) {
    const val =
      props.cornResources[item as keyof typeof props.cornResources] === 0
        ? ""
        : props.cornResources[
            item as keyof typeof props.cornResources
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
