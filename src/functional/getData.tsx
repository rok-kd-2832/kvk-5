import { UserData } from "@/types/UserData";
import Data from "@/functional/kvk-data.json";

type DataType = {
  id: number;
  pre_kvk_name: string;
  current_name: string;
  pre_kvk_power: number;
  current_power: number | null;
  pre_kvk_dead_points: number;
  current_dead_points: number | null;
  pre_kvk_kill_points: number;
  current_kill_points: number | null;
  pre_kvk_t5_kill_points: number;
  current_t5_kill_points: number | null;
  pre_kvk_t4_kill_points: number;
  current_t4_kill_points: number | null;
  pre_kvk_t123_kill_points: number;
  current_t123_kill_points: number | null;
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

  function getKillPointsKPI(data: DataType) {
    if (!data.current_t5_kill_points || !data.current_t4_kill_points) {
      return 0;
    }
    const killT5 = data.current_t5_kill_points - data.pre_kvk_t5_kill_points;
    const killT4 = data.current_t4_kill_points - data.pre_kvk_t4_kill_points;
    return killT4 * KPI_PER_T4_KILL + killT5 * KPI_PER_T5_KILL;
  }

  function getDeadPointsKPI(data: DataType) {
    if (!data.current_dead_points || data.is_zeroed) {
      return 0;
    }
    const deadPointsDiff = data.current_dead_points - data.pre_kvk_dead_points;
    return deadPointsDiff * KPI_PER_T5_DEAD;
  }

  function getNewUserData(data: DataType) {
    const currentKpi = getKillPointsKPI(data) + getDeadPointsKPI(data);
    const require_kpi = getRequireKPI(data.pre_kvk_power);
    return {
      rank: 0,
      id: data.id,
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
      totalT5Dead: 0,
      totalT4Dead: 0,
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
