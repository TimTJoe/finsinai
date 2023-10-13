import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDatabase } from "./ProvideDB";
import { useSnackbar } from "./ProvideSnackbar";

interface IProvideUser {
  children: React.ReactNode;
}

const withUser = createContext<any | undefined>(undefined);

const ProvideUser: React.FC<IProvideUser> = ({ children }) => {
  const { database } = useDatabase();
  const { openSnackbar } = useSnackbar();
  const [isUpdated, setIsUpdated] = useState(false);
  const handleIsUpdated = () => {
    setIsUpdated(!isUpdated);
  };

  const [user, setUser] = useState<any[]>([]);

  const deleteUser = async (id: number | string) => {
    database
      .collection("user")
      .doc({ id: id })
      .delete()
      .then(() => {
        handleIsUpdated();
        openSnackbar("User Deleted");
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  };

  const getUser = useCallback(async (id: number) => {
    await database
      .collection("users")
      .get({ id })
      .then((user: any) => {
        setUser(user);
        return user;
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  }, []);

  const userExist = async (email: string) => {
    return await database
      .collection("users")
      .doc({ email: email })
      .get()
      .then((user: any) => {
        if (user === undefined || user === null) {
          return false;
        } else {
          return true;
        }
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  };

  useEffect(() => {
  },[user])

  const contextValues = {
    handleIsUpdated,
    user,
    getUser,
    deleteUser,
    userExist,
    setUser,
  };
  return (
    <withUser.Provider value={contextValues}>{children}</withUser.Provider>
  );
};

const useUser = () => {
  const context = useContext(withUser);
  if (!context) {
    console.error("useUser must be used in ProvideUser context provider");
  }
  return context;
};

export { ProvideUser, useUser };
