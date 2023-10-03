import { UserData } from "@/types/UserData";
import Data from "@/functional/kvk-data.json";

type DataType = {
  id: number;
  pre_kvk_name: string;
  current_name: string;
  pre_kvk_power: number;
  current_power: number | "-";
  pre_kvk_dead_points: number;
  current_dead_points: number | "-";
  pre_kvk_kill_points: number;
  current_kill_points: number | "-";
  pre_kvk_t5_kill_points: number;
  current_t5_kill_points: number | "-";
  pre_kvk_t4_kill_points: number;
  current_t4_kill_points: number | "-";
  pre_kvk_t123_kill_points: number;
  current_t123_kill_points: number | "-";
  dead_t4: number | "-";
  dead_t5: number | "-";
  is_zeroed: boolean;
  is_migrated: boolean;
};

export default function getData() {
  const listUser: UserData[] = [];
  const KPI_PER_T4_KILL = 2;
  const KPI_PER_T5_KILL = 4;
  const KPI_PER_T4_DEAD = 10;
  const KPI_PER_T5_DEAD = 20;

  function getRequireKPI(power: number) {
    if (power <= 40000000) {
      return 10000000;
    } else if (power > 40000000 && power <= 50000000) {
      return 20000000;
    } else if (power > 50000000 && power <= 60000000) {
      return 30000000;
    } else if (power > 60000000 && power <= 70000000) {
      return 45000000;
    } else if (power > 70000000 && power <= 80000000) {
      return 60000000;
    } else if (power > 80000000 && power <= 90000000) {
      return 70000000;
    } else if (power > 90000000 && power <= 100000000) {
      return 85000000;
    } else if (power > 100000000) {
      return 100000000;
    }
  }

  function getSearchKey(data: DataType) {
    const endName = removeVietnameseTones(data.current_name);
    return data.id + endName + data.current_name;
  }

  function removeVietnameseTones(str: string) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str;
  }

  function getKillPointsKPI(data: DataType) {
    if (
      data.current_t5_kill_points === "-" ||
      data.current_t4_kill_points === "-"
    ) {
      return 0;
    }
    const totalPointFromKillT5 =
      data.current_t5_kill_points - data.pre_kvk_t5_kill_points;
    const totalPointFromKillT4 =
      data.current_t4_kill_points - data.pre_kvk_t4_kill_points;
    return (
      (totalPointFromKillT4 / 10) * KPI_PER_T4_KILL +
      (totalPointFromKillT5 / 20) * KPI_PER_T5_KILL
    );
  }

  function getDeadPointsKPI(data: DataType) {
    if (data.dead_t4 === "-" || data.dead_t5 === "-" || data.is_zeroed) {
      return 0;
    }
    return data.dead_t4 * KPI_PER_T4_DEAD + data.dead_t5 * KPI_PER_T5_DEAD;
  }

  function getNewUserData(data: DataType) {
    const currentKpi = getKillPointsKPI(data) + getDeadPointsKPI(data);
    const require_kpi = getRequireKPI(data.pre_kvk_power);
    const searchKey = getSearchKey(data);
    return {
      rank: 0,
      id: data.id,
      key: searchKey,
      name: data.current_name,
      preKvkPower: data.pre_kvk_power,
      currentPower: data.current_power,
      preKvkDead: data.pre_kvk_dead_points,
      currentDead: data.current_dead_points,
      preKvkKillPoints: data.pre_kvk_kill_points,
      currentKillPoints: data.current_kill_points,
      preKvkT4KillPoints: data.pre_kvk_t4_kill_points,
      currentT4KillPoints: data.current_t4_kill_points,
      preKvkT5KillPoints: data.pre_kvk_t5_kill_points,
      currentT5KillPoints: data.current_t5_kill_points,
      totalT5Dead: data.dead_t5,
      totalT4Dead: data.dead_t4,
      isMigrated: data.is_migrated,
      isZeroed: data.is_zeroed,
      kpi: currentKpi,
      require_kpi: require_kpi,
    } as UserData;
  }

  function onChangeDataToList() {
    for (let i = 0; i < Data.root.length; i++) {
      const data = Data.root[i];
      listUser.push(getNewUserData(data));
    }
  }

  function onRerankList() {
    for (let i = 0; i < listUser.length; i++) {
      let maxKpiUser = listUser[i];
      if (i < listUser.length) {
        for (let j = i + 1; j < listUser.length; j++) {
          let currentUser = listUser[j];
          if (currentUser.kpi > maxKpiUser.kpi) {
            const tempUser = currentUser;
            listUser[j] = maxKpiUser;
            maxKpiUser = tempUser;
          }
        }
      }
      maxKpiUser.rank = i + 1;
      listUser[i] = maxKpiUser;
    }
  }

  onChangeDataToList();
  onRerankList();

  return listUser;
}
