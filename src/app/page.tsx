"use client";

import { useState } from "react";
import CollapseBody from "@/components/anim/CollapseBody";
import InputField from "@/components/calculator/InputField";

export default function Home() {
  const [isShowResources, setShowResources] = useState(true);
  const [isShowSpeedups, setShowSpeedups] = useState(false);

  function onShowResourcesChanged() {
    setShowResources(!isShowResources);
  }

  function onShowSpeedupsChanged() {
    setShowSpeedups(!isShowSpeedups);
  }

  function onFieldChanged(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
  }

  return (
    <div className="pt-5 pb-20">
      <h2
        className="text-sm px-3 border-y bg-gray-100 py-2 font-bold"
        onClick={onShowResourcesChanged}
      >
        RESOURCES
      </h2>
      <CollapseBody isShow={isShowResources}>
        <div className="pb-10">
          <div className="p-3">
            <h3 className="text-xs font-bold">CORN</h3>
            <div className="flex flex-wrap justify-between">
              <InputField label="1K" onFieldChanged={onFieldChanged} />
              <InputField label="10K" onFieldChanged={onFieldChanged} />
              <InputField label="50K" onFieldChanged={onFieldChanged} />
              <InputField label="150K" onFieldChanged={onFieldChanged} />
              <InputField label="500K" onFieldChanged={onFieldChanged} />
              <InputField label="1M5" onFieldChanged={onFieldChanged} />
              <InputField label="5M" onFieldChanged={onFieldChanged} />
            </div>
            <h3 className="text-xs font-bold mt-5">WOOD</h3>
            <div className="flex flex-wrap justify-between">
              <InputField label="1K" onFieldChanged={onFieldChanged} />
              <InputField label="10K" onFieldChanged={onFieldChanged} />
              <InputField label="50K" onFieldChanged={onFieldChanged} />
              <InputField label="150K" onFieldChanged={onFieldChanged} />
              <InputField label="500K" onFieldChanged={onFieldChanged} />
              <InputField label="1M5" onFieldChanged={onFieldChanged} />
              <InputField label="5M" onFieldChanged={onFieldChanged} />
            </div>
            <h3 className="text-xs font-bold mt-5">STONE</h3>
            <div className="flex flex-wrap justify-between">
              <InputField label="1K" onFieldChanged={onFieldChanged} />
              <InputField label="10K" onFieldChanged={onFieldChanged} />
              <InputField label="50K" onFieldChanged={onFieldChanged} />
              <InputField label="150K" onFieldChanged={onFieldChanged} />
              <InputField label="500K" onFieldChanged={onFieldChanged} />
              <InputField label="1M5" onFieldChanged={onFieldChanged} />
              <InputField label="5M" onFieldChanged={onFieldChanged} />
            </div>
            <h3 className="text-xs font-bold mt-5">GOLD</h3>
            <div className="flex flex-wrap justify-between">
              <InputField label="1K" onFieldChanged={onFieldChanged} />
              <InputField label="10K" onFieldChanged={onFieldChanged} />
              <InputField label="50K" onFieldChanged={onFieldChanged} />
              <InputField label="150K" onFieldChanged={onFieldChanged} />
              <InputField label="500K" onFieldChanged={onFieldChanged} />
              <InputField label="1M5" onFieldChanged={onFieldChanged} />
              <InputField label="5M" onFieldChanged={onFieldChanged} />
            </div>
          </div>
          <div className="px-3">
            <div className="mt-5 border border-main px-3 rounded text-sm font-bold">
              <div className="flex py-2 border-b border-dot">
                <p className="w-16">CORN</p>
                <p>: 1B2</p>
              </div>
              <div className="flex py-2 border-b border-dot">
                <p className="w-16">WOOD</p>
                <p>: 1B2</p>
              </div>
              <div className="flex py-2 border-b border-dot">
                <p className="w-16">STONE</p>
                <p>: 1B2</p>
              </div>
              <div className="flex py-2">
                <p className="w-16">GOLD</p>
                <p>: 1B2</p>
              </div>
            </div>
          </div>
        </div>
      </CollapseBody>
      <h2
        className="text-sm px-3 border-y bg-gray-100 py-2 font-bold"
        onClick={onShowSpeedupsChanged}
      >
        SPEED UPS
      </h2>
      <CollapseBody isShow={isShowSpeedups}>
        <div className="p-3">
          <h3 className="text-xs font-bold">BUILDING</h3>
          <div className="flex flex-wrap justify-between">
            <InputField label="1 min" onFieldChanged={onFieldChanged} />
            <InputField label="5 min" onFieldChanged={onFieldChanged} />
            <InputField label="10 min" onFieldChanged={onFieldChanged} />
            <InputField label="15 min" onFieldChanged={onFieldChanged} />
            <InputField label="30 min" onFieldChanged={onFieldChanged} />
            <InputField label="60 min" onFieldChanged={onFieldChanged} />
            <InputField label="3 hours" onFieldChanged={onFieldChanged} />
            <InputField label="8 hours" onFieldChanged={onFieldChanged} />
            <InputField label="15 hours" onFieldChanged={onFieldChanged} />
            <InputField label="24 hours" onFieldChanged={onFieldChanged} />
          </div>
          <h3 className="text-xs font-bold mt-5">RESEARCH</h3>
          <div className="flex flex-wrap justify-between">
            <InputField label="1 min" onFieldChanged={onFieldChanged} />
            <InputField label="5 min" onFieldChanged={onFieldChanged} />
            <InputField label="10 min" onFieldChanged={onFieldChanged} />
            <InputField label="15 min" onFieldChanged={onFieldChanged} />
            <InputField label="30 min" onFieldChanged={onFieldChanged} />
            <InputField label="60 min" onFieldChanged={onFieldChanged} />
            <InputField label="3 hours" onFieldChanged={onFieldChanged} />
            <InputField label="8 hours" onFieldChanged={onFieldChanged} />
            <InputField label="15 hours" onFieldChanged={onFieldChanged} />
            <InputField label="24 hours" onFieldChanged={onFieldChanged} />
          </div>
          <h3 className="text-xs font-bold mt-5">TRAINING</h3>
          <div className="flex flex-wrap justify-between">
            <InputField label="1 min" onFieldChanged={onFieldChanged} />
            <InputField label="5 min" onFieldChanged={onFieldChanged} />
            <InputField label="10 min" onFieldChanged={onFieldChanged} />
            <InputField label="15 min" onFieldChanged={onFieldChanged} />
            <InputField label="30 min" onFieldChanged={onFieldChanged} />
            <InputField label="60 min" onFieldChanged={onFieldChanged} />
            <InputField label="3 hours" onFieldChanged={onFieldChanged} />
            <InputField label="8 hours" onFieldChanged={onFieldChanged} />
            <InputField label="15 hours" onFieldChanged={onFieldChanged} />
            <InputField label="24 hours" onFieldChanged={onFieldChanged} />
          </div>
          <h3 className="text-xs font-bold mt-5">HEALING</h3>
          <div className="flex flex-wrap justify-between">
            <InputField label="1 min" onFieldChanged={onFieldChanged} />
            <InputField label="5 min" onFieldChanged={onFieldChanged} />
            <InputField label="10 min" onFieldChanged={onFieldChanged} />
            <InputField label="15 min" onFieldChanged={onFieldChanged} />
            <InputField label="30 min" onFieldChanged={onFieldChanged} />
            <InputField label="60 min" onFieldChanged={onFieldChanged} />
            <InputField label="3 hours" onFieldChanged={onFieldChanged} />
            <InputField label="8 hours" onFieldChanged={onFieldChanged} />
            <InputField label="15 hours" onFieldChanged={onFieldChanged} />
            <InputField label="24 hours" onFieldChanged={onFieldChanged} />
          </div>
          <h3 className="text-xs font-bold mt-5">GENERAL</h3>
          <div className="flex flex-wrap justify-between">
            <InputField label="1 min" onFieldChanged={onFieldChanged} />
            <InputField label="5 min" onFieldChanged={onFieldChanged} />
            <InputField label="10 min" onFieldChanged={onFieldChanged} />
            <InputField label="15 min" onFieldChanged={onFieldChanged} />
            <InputField label="30 min" onFieldChanged={onFieldChanged} />
            <InputField label="60 min" onFieldChanged={onFieldChanged} />
            <InputField label="3 hours" onFieldChanged={onFieldChanged} />
            <InputField label="8 hours" onFieldChanged={onFieldChanged} />
            <InputField label="15 hours" onFieldChanged={onFieldChanged} />
            <InputField label="24 hours" onFieldChanged={onFieldChanged} />
            <InputField label="3 days" onFieldChanged={onFieldChanged} />
            <InputField label="7 days" onFieldChanged={onFieldChanged} />
          </div>

          <div className="mt-5 border border-main px-3 rounded text-sm font-bold">
            <div className="flex py-2 border-b border-dot">
              <p className="w-20">BUILDING</p>
              <p>: 2500 days</p>
            </div>
            <div className="flex py-2 border-b border-dot">
              <p className="w-20">RESEARCH</p>
              <p>: 2500 days</p>
            </div>
            <div className="flex py-2 border-b border-dot">
              <p className="w-20">TRAINING</p>
              <p>: 2500 days</p>
            </div>
            <div className="flex py-2 border-b border-dot">
              <p className="w-20">HEALING</p>
              <p>: 2500 days</p>
            </div>
            <div className="flex py-2">
              <p className="w-20">GENERAL</p>
              <p>: 2500 days</p>
            </div>
          </div>
        </div>
      </CollapseBody>
    </div>
  );
}
