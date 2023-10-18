import { atom } from "recoil";

export type TCornResource = {
  "1K": number;
  "10K": number;
  "50K": number;
  "150K": number;
  "500K": number;
  "1M5": number;
  "5M": number;
};

export type TWoodResource = {
  "1K": number;
  "10K": number;
  "50K": number;
  "150K": number;
  "500K": number;
  "1M5": number;
  "5M": number;
};

export type TStoneResource = {
  "750": number;
  "7K5": number;
  "37K5": number;
  "112K5": number;
  "375K": number;
  "1M125K": number;
  "3M750K": number;
};
export type TGoldResource = {
  "500": number;
  "3K": number;
  "15K": number;
  "50K": number;
  "200K": number;
  "600K": number;
  "2M": number;
};

export type TResourceState = {
  corn: TCornResource;
  wood: TWoodResource;
  stone: TStoneResource;
  gold: TGoldResource;
};

export const resourceState = atom({
  key: "resourceState",
  default: {
    corn: {
      "1K": 0,
      "10K": 0,
      "50K": 0,
      "150K": 0,
      "500K": 0,
      "1M5": 0,
      "5M": 0,
    },
    wood: {
      "1K": 0,
      "10K": 0,
      "50K": 0,
      "150K": 0,
      "500K": 0,
      "1M5": 0,
      "5M": 0,
    },
    stone: {
      "750": 0,
      "7K5": 0,
      "37K5": 0,
      "112K5": 0,
      "375K": 0,
      "1M125K": 0,
      "3M750K": 0,
    },
    gold: {
      "500": 0,
      "3K": 0,
      "15K": 0,
      "50K": 0,
      "200K": 0,
      "600K": 0,
      "2M": 0,
    },
  } as TResourceState,
});
