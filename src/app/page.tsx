"use client";
import { ReactElement, useEffect, useState } from "react";
import getData from "@/functional/getData";
import { UserData } from "@/types/UserData";
import DataModal from "@/components/modal/DataModal";
import formatNumber from "@/functional/formatNumber";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [isShowModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<UserData | null>(null);
  const [dataList, setDataList] = useState<UserData[]>([]);

  useEffect(() => {
    const dataList = getData();
    setDataList(dataList);
  }, []);
  function onRenderUserList() {
    const list: ReactElement[] = [];
    for (let i = 0; i < dataList.length; i++) {
      const element = dataList[i] as unknown as UserData;
      const isShow =
        searchKey === ""
          ? true
          : element.id.toString().indexOf(searchKey) != -1;
      list.push(
        <tr
          key={i}
          className={`text-sm border-b border-main ${!isShow && "hidden"}`}
          onClick={() => {
            onOpenModal(element);
          }}
        >
          <td className="p-2 w-[40px] border-r border-main font-bold text-center">
            {element.rank}
          </td>
          <td className="p-2 border-r border-main max-w-[125px]">
            {element.id}
          </td>
          <td className="p-2 border-r border-main max-w-[125px] overflow-hidden whitespace-nowrap">
            <p>{element.name}</p>
            <p className="lg:hidden">
              {element.isMigrated && (
                <span className="rounded bg-[#3B82F6] text-white text-xs p-1">
                  Đã di cư
                </span>
              )}
            </p>
          </td>
          <td className="p-2 border-r border-main hidden lg:table-cell">
            {formatNumber(element.currentPower - element.preKvkPower)}
          </td>
          <td className="p-2 border-r border-main hidden lg:table-cell">
            {formatNumber(element.currentKillPoints - element.preKvkKillPoints)}
          </td>
          <td className="p-2 border-r border-main hidden lg:table-cell">
            {formatNumber(element.currentDead - element.preKvkDead)}
          </td>
          <td className="p-2 border-r border-main hidden lg:table-cell">
            {formatNumber(element.kpi)}
          </td>
          <td className="p-2 lg:border-r lg:border-main">
            {getKPIRatio(element.kpi, element.require_kpi)}%
          </td>
          <td className="p-2 hidden lg:table-cell">
            <p className="flex flex-wrap">
              {element.kpi >= element.require_kpi ? (
                <span className="rounded text-white bg-[#10B981] py-1 px-3 mr-2">
                  Đã Đạt KPI
                </span>
              ) : (
                <span className="rounded text-white bg-main py-1 px-3 mr-2">
                  Chưa Đạt KPI
                </span>
              )}
              {element.isMigrated && (
                <span className="rounded text-white bg-[#3B82F6] py-1 px-3 mr-2">
                  Đã di cư
                </span>
              )}
              {element.isZeroed && (
                <span className="rounded text-white bg-[#EF4444] py-1 px-3 mr-2">
                  Đã bị Zero
                </span>
              )}
            </p>
          </td>
        </tr>
      );
    }
    return list;
  }

  function onOpenModal(data: UserData) {
    setModalData(data);
    onSetShowModal(true);
  }

  function onSetShowModal(isShow: boolean) {
    setShowModal(isShow);
  }

  function getKPIRatio(number1: number, number2: number) {
    return Math.floor((100 * number1) / number2);
  }

  return (
    <div>
      <header className="bg-main">
        <h1 className="text-center font-bold text-white text-xl py-2">
          2832 KVK DATA
        </h1>
      </header>
      <div className="px-5">
        <div className="rounded-md border border-main overflow-hidden mt-5 w-full max-w-[400px]">
          <input
            type="text"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            className="h-[32px] text border-0 w-full outline-0 px-2"
            placeholder="Nhập Tên hoặc ID để tìm"
          />
        </div>
        <div className="mt-5">
          <table className="w-full font-normal border border-main">
            <thead className="bg-main font-bold">
              <tr>
                <td className="p-2 text-white w-[40px] border-r">TOP</td>
                <td className="p-2 text-white border-r">ID</td>
                <td className="p-2 text-white border-r">Tên</td>
                <td className="p-2 text-white border-r hidden lg:table-cell">
                  Pow Diff
                </td>
                <td className="p-2 text-white border-r hidden lg:table-cell">
                  Kill Diff
                </td>
                <td className="p-2 text-white border-r hidden lg:table-cell">
                  Dead Diff
                </td>
                <td className="p-2 text-white border-r hidden lg:table-cell">
                  Điểm KPI
                </td>
                <td className="p-2 text-white lg:border-r">KPI</td>
                <td className="p-2 text-white hidden lg:table-cell">
                  Trạng Thái
                </td>
              </tr>
            </thead>
            <tbody>{onRenderUserList()}</tbody>
          </table>
        </div>
      </div>
      <DataModal
        data={modalData}
        setShowModal={onSetShowModal}
        isShowModal={isShowModal}
      />
    </div>
  );
}
