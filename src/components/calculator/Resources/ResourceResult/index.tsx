import abbreviateNumber from "@/functional/abbreviateNumber";
import { useResourceState } from "@/functional/hooks/calculator_hooks";

function ResourceResult() {
  const resource = useResourceState();

  function getTotalCorn() {
    let corn = 0;
    corn += resource.corn["1K"] * 1000;
    corn += resource.corn["10K"] * 10000;
    corn += resource.corn["50K"] * 50000;
    corn += resource.corn["150K"] * 150000;
    corn += resource.corn["500K"] * 500000;
    corn += resource.corn["1M5"] * 1500000;
    corn += resource.corn["5M"] * 5000000;
    return abbreviateNumber(corn);
  }

  function getTotalWood() {
    let wood = 0;
    wood += resource.wood["1K"] * 1000;
    wood += resource.wood["10K"] * 10000;
    wood += resource.wood["50K"] * 50000;
    wood += resource.wood["150K"] * 150000;
    wood += resource.wood["500K"] * 500000;
    wood += resource.wood["1M5"] * 1500000;
    wood += resource.wood["5M"] * 5000000;
    return abbreviateNumber(wood);
  }

  function getTotalStone() {
    let stone = 0;
    stone += resource.stone["750"] * 750;
    stone += resource.stone["7K5"] * 7500;
    stone += resource.stone["37K5"] * 37500;
    stone += resource.stone["112K5"] * 112500;
    stone += resource.stone["375K"] * 375000;
    stone += resource.stone["1M125K"] * 1125000;
    stone += resource.stone["3M750K"] * 3750000;
    return abbreviateNumber(stone);
  }

  function getTotalGold() {
    let gold = 0;
    gold += resource.gold["500"] * 500;
    gold += resource.gold["3K"] * 3000;
    gold += resource.gold["15K"] * 15000;
    gold += resource.gold["50K"] * 50000;
    gold += resource.gold["200K"] * 200000;
    gold += resource.gold["600K"] * 600000;
    gold += resource.gold["2M"] * 2000000;
    return abbreviateNumber(gold);
  }

  return (
    <div className="px-3">
      <div className="mt-5 border border-main px-3 rounded text-sm font-bold">
        <div className="flex py-2 border-b border-dot">
          <p className="w-16">CORN</p>
          <p>: {getTotalCorn()}</p>
        </div>
        <div className="flex py-2 border-b border-dot">
          <p className="w-16">WOOD</p>
          <p>: {getTotalWood()}</p>
        </div>
        <div className="flex py-2 border-b border-dot">
          <p className="w-16">STONE</p>
          <p>: {getTotalStone()}</p>
        </div>
        <div className="flex py-2">
          <p className="w-16">GOLD</p>
          <p>: {getTotalGold()}</p>
        </div>
      </div>
    </div>
  );
}

export default ResourceResult;
