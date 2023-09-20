import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDatabase } from "./ProvideDB";
import { useSnackbar } from "./ProvideSnackbar";
import lodash from "lodash";

interface IProvideIncome {
  children: React.ReactNode;
}

const withIncome = createContext<any | undefined>(undefined);

const ProvideIncome: React.FC<IProvideIncome> = ({ children }) => {
  const [totalIncome, setTotalIncome] = useState(0);
  const { database } = useDatabase();
  const { openSnackbar } = useSnackbar();
  const [isUpdated, setIsUpdated] = useState(false);
  const handleIsUpdated = () => {
    setIsUpdated(!isUpdated);
  };
  const [open, setOpen] = useState(false);
  //HANDLERS
  const openIncomeForm = () => setOpen(true);
  const closeIncomeForm = () => setOpen(false);

  const [allIncomes, setAllIncomes] = useState<any[]>([]);
  const [topIncomes, setTopIncomes] = useState<any[]>([]);

  const deleteIncome = async (id: number | string) => {
    database
      .collection("incomes")
      .doc({ id: id })
      .delete()
      .then(() => {
        handleIsUpdated();
        openSnackbar("Income transaction deleted.");
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  };

  const fetchIncomes = useCallback(async () => {
    await database
      .collection("incomes")
      .orderBy("created", "desc")
      .get()
      .then((incomes: any) => {
        setAllIncomes(incomes);
        let _total = lodash.sumBy(incomes, (income: any) => {
          return Number(income.lrd);
        });
        setTotalIncome(_total);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }, []);

  const getTopIncomes = useCallback(async () => {
    await database
      .collection("incomes")
      .orderBy("lrd", "desc")
      .limit(5)
      .get()
      .then((income: any) => {
        const data = lodash.map(income, (item) => ({
          title: item.title,
          amount: parseInt(item.lrd, 10),
        }));
        setTopIncomes(data);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchIncomes();
    getTopIncomes();
  }, [, isUpdated]);

  const contextValues = {
    handleIsUpdated,
    deleteIncome,
    allIncomes,
    isUpdated,
    topIncomes,
    open,
    openIncomeForm,
    closeIncomeForm,
    totalIncome,
  };
  return (
    <withIncome.Provider value={contextValues}>{children}</withIncome.Provider>
  );
};

const useIncome = () => {
  const context = useContext(withIncome);
  if (!context) {
    console.error("useIncome must be used in ProvideIncome context provider");
  }
  return context;
};

export { ProvideIncome, useIncome };
