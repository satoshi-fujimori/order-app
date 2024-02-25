import { DayEarning, History, RankedMenu } from "@/types";

export function useDashboard(histories: History[]) {
  let MenuRankList: RankedMenu[] = [];
  const rankMenu = () => {
    for (let history of histories) {
      for (let item of history.itemList) {
        let flag: boolean = false;
        for (let menu of MenuRankList) {
          if (menu.id === item.id) {
            menu.sumAmount += item.amount;
            menu.sumEarnings += item.amount * item.unitPrice;
            flag = true;
            break;
          }
        }
        if (!flag) {
          MenuRankList.push({
            id: item.id,
            name: item.name,
            sumAmount: item.amount,
            sumEarnings: item.amount * item.unitPrice,
          });
        }
      }
    }
  };
  rankMenu();

  let EarningList: DayEarning[] = [];
  const calcEarning = () => {
    for (let history of histories) {
      let flag: boolean = false;
      const dateObj: Date = new Date(history.date);
      const formattedDate: string =
        dateObj.getFullYear().toString() +
        (dateObj.getMonth() < 9 ? "0" : "") +
        (dateObj.getMonth() + 1).toString() +
        (dateObj.getDate() < 10 ? "0" : "") +
        dateObj.getDate().toString();
      for (let earning of EarningList) {
        if (earning.date === formattedDate) {
          earning.sumEarnings += history.totalPrice;
          flag = true;
          break;
        }
      }
      if (!flag) {
        EarningList.push({
          date: formattedDate,
          sumEarnings: history.totalPrice,
        });
      }
    }
    EarningList.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });
  };
  calcEarning();

  return { MenuRankList, EarningList };
}
