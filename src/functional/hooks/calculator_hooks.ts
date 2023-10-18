import {
  resourceState,
  TCornResource,
  TWoodResource,
  TStoneResource,
  TGoldResource,
} from "@/recoil/calculatorState";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function useResourceState() {
  const resource = useRecoilValue(resourceState);
  return resource;
}

export function useSetCornResourceState(): (
  cornKey: keyof TCornResource,
  cornValue: number
) => void {
  const setCornResourceState = useSetRecoilState(resourceState);
  const resource = useRecoilValue(resourceState);
  function setCornState(cornKey: keyof TCornResource, cornValue: number) {
    setCornResourceState({
      ...resource,
      corn: {
        ...resource.corn,
        [cornKey]: cornValue,
      },
    });
  }
  return setCornState;
}

export function useSetWoodResourceState(): (
  woodKey: keyof TWoodResource,
  woodValue: number
) => void {
  const setCornResourceState = useSetRecoilState(resourceState);
  const resource = useRecoilValue(resourceState);
  function setWoodState(woodKey: keyof TWoodResource, woodValue: number) {
    setCornResourceState({
      ...resource,
      wood: {
        ...resource.wood,
        [woodKey]: woodValue,
      },
    });
  }
  return setWoodState;
}

export function useSetStoneResourceState(): (
  stoneKey: keyof TStoneResource,
  stoneValue: number
) => void {
  const setCornResourceState = useSetRecoilState(resourceState);
  const resource = useRecoilValue(resourceState);
  function setStoneState(stoneKey: keyof TStoneResource, stoneValue: number) {
    setCornResourceState({
      ...resource,
      stone: {
        ...resource.stone,
        [stoneKey]: stoneValue,
      },
    });
  }
  return setStoneState;
}

export function useSetGoldResourceState(): (
  goldKey: keyof TGoldResource,
  goldValue: number
) => void {
  const setCornResourceState = useSetRecoilState(resourceState);
  const resource = useRecoilValue(resourceState);
  function setGoldState(goldKey: keyof TGoldResource, goldValue: number) {
    setCornResourceState({
      ...resource,
      gold: {
        ...resource.gold,
        [goldKey]: goldValue,
      },
    });
  }
  return setGoldState;
}
