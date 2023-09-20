import lodash from "lodash";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDatabase } from "./ProvideDB";
import { useSnackbar } from "./ProvideSnackbar";

interface IProvideExpense {
  children: React.ReactNode;
}

const withExpense = createContext<any | undefined>(undefined);

const ProvideExpense: React.FC<IProvideExpense> = ({ children }) => {
  const { database } = useDatabase();
  const { openSnackbar } = useSnackbar();
  const [isUpdated, setIsUpdated] = useState(false);
  const [open, setOpen] = useState(false);
  const [allExpenses, setAllExpenses] = useState<any[]>([]);
  const [topExpenses, setTopExpenses] = useState<any[]>([]);
  const [totalExpense, setTotalExpense] = useState(0);

  //HANDLERS
  const handleIsUpdated = () => setIsUpdated(!isUpdated);
  //HANDLERS
  const openExpenseForm = () => setOpen(true);
  const closeExpenseForm = () => setOpen(false);

  const deleteExpense = async (id: number | string) => {
    database
      .collection("expenses")
      .doc({ id: id })
      .delete()
      .then(() => {
        handleIsUpdated();
        openSnackbar("Expense transaction deleted.");
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  };

  const fetchExpenses = useCallback(async () => {
    await database
      .collection("expenses")
      .orderBy("created", "desc")
      .get()
      .then((expenses: any) => {
        setAllExpenses(expenses);
        let _total = lodash.sumBy(expenses, (expense: any) => {
          return Number(expense.lrd);
        });
        setTotalExpense(_total);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }, []);

  const getTopExpense = useCallback(async () => {
    await database
      .collection("expenses")
      .orderBy("lrd", "desc")
      .limit(5)
      .get()
      .then((income: any) => {
        const data = lodash.map(income, (item) => ({
          title: item.title,
          amount: parseInt(item.lrd, 10),
        }));
        setTopExpenses(data);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }, []);

  useEffect(() => {
    fetchExpenses();
    getTopExpense();
  }, [isUpdated]);

  const contextValues = {
    handleIsUpdated,
    deleteExpense,
    allExpenses,
    isUpdated,
    topExpenses,
    open,
    openExpenseForm,
    closeExpenseForm,
    totalExpense,
  };
  return (
    <withExpense.Provider value={contextValues}>
      {children}
    </withExpense.Provider>
  );
};

const useExpense = () => {
  const context = useContext(withExpense);
  if (!context) {
    console.error("useExpense must be used in ProvideExpense context provider");
  }
  return context;
};

export { ProvideExpense, useExpense };
