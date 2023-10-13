import { useState } from "react";
import { useForm } from "react-hook-form";
import Pattern from "@components/form/Pattern";
import { Box } from "@mui/material";
import monify from "@components/utils/helpers/monify";
import { InputField } from "@components/styled/forms.styled";
import FormDialog from "@components/form/form.dialog";
import { useDatabase } from "@components/providers/ProvideDB";
import genID from "@components/utils/helpers/genID";
import { useSnackbar } from "@components/providers/ProvideSnackbar";
import { useExpense } from "@components/providers/ProvideExpense";

export const ExpenseForm: React.FC = () => {
  //DECLARATIONS
  const { database } = useDatabase();
  const { openSnackbar } = useSnackbar();
  const { handleIsUpdated, open, closeExpenseForm } = useExpense();
  const [values, setValues] = useState({
    id: "",
    title: "",
    lrd: "",
    usd: "",
    created: new Date(),
    updated: new Date(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //HANDLERS
  const handleErrors = () => {};

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: monify(e) });
  };

  const handleSave = async () => {
    values["id"] = genID(12);
    values["lrd"] = values.lrd.replace(/[^0-9]/g, "");
    values["usd"] = values.usd.replace(/[^0-9]/g, "");
    database
      .collection("expenses")
      .add(values)
      .then((data: any) => {
        handleIsUpdated();
        openSnackbar("Expense transaction added");
        console.log(data)
      })
      .catch((error: string | undefined) => {
        throw new Error(error);
      });
  };

  return (
    <FormDialog
      open={open}
      closeForm={closeExpenseForm}
      handleSubmit={handleSubmit(handleSave, handleErrors)}
      title={"Add New Expense"}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "17px" }}>
        <InputField
          fullWidth
          label="TITLE"
          type="text"
          placeholder="Stationary & Printing"
          InputLabelProps={{ shrink: true }}
          value={values.title}
          {...register("title", Pattern.title)}
          error={Boolean(errors.title)}
          helperText={(errors.title as any)?.message}
          onChange={handleChange}
          required
        />
        <Box sx={{ display: "flex", gap: "17px" }}>
          <InputField
            sx={{ flexGrow: 1 }}
            label="LRD"
            type="text"
            placeholder="7,300.00"
            InputLabelProps={{ shrink: true }}
            value={values.lrd}
            {...register("lrd", Pattern.lrd)}
            error={Boolean(errors.lrd)}
            helperText={(errors.lrd as any)?.message}
            onChange={handleChange}
            required
          />
          <InputField
            sx={{ flexGrow: 1 }}
            label="USD"
            type="text"
            placeholder="10.75"
            InputLabelProps={{ shrink: true }}
            value={values.usd}
            {...register("usd", Pattern.usd)}
            error={Boolean(errors.usd)}
            helperText={(errors.usd as any)?.message}
            onChange={handleChange}
            required
          />
        </Box>
      </Box>
    </FormDialog>
  );
};

export default ExpenseForm;
