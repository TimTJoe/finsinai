import { createContext, useContext, useState } from "react";

interface IWithForm {
  open: boolean;
  openForm: () => void;
  closeForm: () => void;
}

interface IProvideForm {
  children: React.ReactNode;
}

const withForm = createContext<IWithForm | undefined>(undefined);

const ProvideForm: React.FC<IProvideForm> = ({ children }) => {
  //DECLARATIONS
  const [open, setOpen] = useState(false);

  //HANDLERS
  const openForm = () => setOpen(true);
  const closeForm = () => {
    setOpen(false);
  };

  const contextValues: IWithForm = {
    open,
    openForm,
    closeForm,
  };

  return (
    <withForm.Provider value={contextValues}>{children}</withForm.Provider>
  );
};

const useFormHooks = () => {
  let context = useContext(withForm);
  if (!context) {
    throw new Error(
      "useFormHook must be used within a ProvideForm context provider"
    );
  }
  return context;
};

export { ProvideForm, useFormHooks };
