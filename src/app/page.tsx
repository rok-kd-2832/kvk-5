"use client";

import { useState } from "react";
import { TCornResource } from "@/recoil/calculatorState";
import CollapseBody from "@/components/anim/CollapseBody";
import InputField from "@/components/calculator/InputField";
import CornArea from "@/components/calculator/Resources/CornArea";
import WoodArea from "@/components/calculator/Resources/WoodArea";
import ResourceResult from "@/components/calculator/Resources/ResourceResult";
import StoneArea from "@/components/calculator/Resources/StoneArea";
import GoldArea from "@/components/calculator/Resources/GoldArea";

export default function Home() {
  const [isShowResources, setShowResources] = useState(true);
  const [isShowSpeedups, setShowSpeedups] = useState(false);

  function onShowResourcesChanged() {
    setShowResources(!isShowResources);
  }

  function onShowSpeedupsChanged() {
    setShowSpeedups(!isShowSpeedups);
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
            <CornArea />
            <WoodArea />
            <StoneArea />
            <GoldArea />
          </div>
          <ResourceResult />
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
          <h3 className="text-xs font-bold mt-5">RESEARCH</h3>
          <h3 className="text-xs font-bold mt-5">TRAINING</h3>
          <h3 className="text-xs font-bold mt-5">HEALING</h3>
          <h3 className="text-xs font-bold mt-5">GENERAL</h3>
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
