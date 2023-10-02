import formatNumber from "@/functional/formatNumber";
import { UserData } from "@/types/UserData";

type PropsType = {
  data: UserData | null;
  isShowModal: boolean;
  setShowModal: (isShow: boolean) => void;
};

function DataModal(props: PropsType) {
  return props.data ? (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-half-black py-20 px-5 flex items-center justify-center ${
        !props.isShowModal && "hidden"
      }`}
    >
      <div className="w-full bg-white rounded-md p-3 max-w-[600px]">
        <table className="w-full font-normal border border-main text-sm">
          <thead className="bg-main font-bold border-b border-white">
            <tr>
              <td className="p-2 text-white max-w-[100px] border-r"></td>
              <td className="p-2 text-white max-w-[100px] border-r">Pre-KVK</td>
              <td className="p-2 text-white max-w-[100px] border-r">
                Hiện tại
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                id
              </td>
              <td
                className="p-2 max-w-[100px] border-r border-b border-main text-center"
                colSpan={2}
              >
                {props.data.id}
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                Tên
              </td>
              <td
                className="p-2 max-w-[100px] border-r border-b border-main text-center"
                colSpan={2}
              >
                {props.data.name}
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                Power
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                {formatNumber(props.data.preKvkPower)}
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                <p>{formatNumber(props.data.currentPower)}</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                Kill Points
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                {formatNumber(props.data.preKvkKillPoints)}
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                <p>{formatNumber(props.data.currentKillPoints)}</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                T4 Dead
              </td>
              <td
                className=" text-center p-2 max-w-[100px] border-r border-b border-main"
                colSpan={2}
              >
                {formatNumber(props.data.totalT4Dead)}
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                T5 Dead
              </td>
              <td
                className=" text-center p-2 max-w-[100px] border-r border-b border-main"
                colSpan={2}
              >
                {formatNumber(props.data.totalT5Dead)}
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                Kill T4
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                {formatNumber(props.data.preKvkT4KillPoints)}
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                <p>{formatNumber(props.data.currentT4KillPoints)}</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                Kill T5
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                {formatNumber(props.data.preKvkT5KillPoints)}
              </td>
              <td className="p-2 max-w-[100px] border-r border-b border-main">
                <p>{formatNumber(props.data.currentT5KillPoints)}</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                KPI Yêu cầu
              </td>
              <td
                className="p-2 max-w-[100px] border-r border-b border-main"
                colSpan={2}
              >
                <p className="flex flex-wrap">
                  {formatNumber(props.data.require_kpi)}
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px] border-b border-b-white">
                KPI Đã Đạt
              </td>
              <td
                className="p-2 max-w-[100px] border-r border-b border-main"
                colSpan={2}
              >
                <p className="flex flex-wrap">
                  {props.data.kpi} (
                  {formatNumber(
                    Math.floor((100 * props.data.kpi) / props.data.require_kpi)
                  )}
                  %)
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 bg-main text-white max-w-[100px]">
                Trạng Thái
              </td>
              <td
                className="p-2 max-w-[100px] border-r border-main"
                colSpan={2}
              >
                <p className="flex flex-wrap">
                  {props.data.kpi >= props.data.require_kpi ? (
                    <span className="text-xs py-1 px-2 bg-main text-white font-bold rounded">
                      Đã đạt KPI
                    </span>
                  ) : (
                    <span className="text-xs py-1 px-2 bg-main text-white font-bold rounded">
                      Chưa đạt KPI
                    </span>
                  )}
                  {props.data.isZeroed && (
                    <span className="text-xs py-1 px-2 bg-[#EF4444] text-white font-bold rounded">
                      Đã bị zero
                    </span>
                  )}
                  {props.data.isMigrated && (
                    <span className="text-xs py-1 px-2 bg-[#3B82F6] text-white font-bold rounded">
                      Đã di cư
                    </span>
                  )}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-5">
          <button
            className="text-xs py-2 px-3 text-white bg-main rounded-md"
            onClick={() => {
              props.setShowModal(false);
            }}
          >
            ĐÓNG
          </button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default DataModal;
