import { Button, Divider, InputAdornment, LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Subline, Infoline } from "@components/styled/typography.styled";
import { useForm } from "react-hook-form";
import Pattern from "@components/form/Pattern";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SquardLogo } from "@components/common/Logo";
import {
  FormBox,
  FormHeader,
  FormBody,
  FormFooter,
  InputField,
} from "@components/styled/forms.styled";
import handleShowPassword from "@components/utils/helpers/handleShowPassword";
import wodify from "@components/utils/helpers/wodify";
import setDocTitle from "@components/utils/helpers/setDocTitle";
import genID from "@components/utils/helpers/genID";
import { useDatabase } from "@components/providers/ProvideDB";
import { useSnackbar } from "@components/providers/ProvideSnackbar";
import { useUser } from "@components/providers/ProvideUser";

export const SignupForm = () => {
  setDocTitle("Create new account - Finsinai");
  const { database } = useDatabase();
  const { showPassword, setShowPassword } = handleShowPassword();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const goto = useNavigate();
  const { openSnackbar } = useSnackbar();
  const { userExist } = useUser();
  const [values, setValues] = useState({
    id: "",
    fullname: "",
    email: "",
    password: "",
  });
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //HANDLERS
  const handleErrors = (errors: any) => {console.error(errors)};

  function handleChange(e: any) {
    setValues({ ...values, [e.target.name]: wodify(e) });
  }

  async function handleSave() {
    if (await userExist(values.email)) {
      setError("email", {
        type: "manual",
        message: "Email is taken. Try another one.",
      });
    } else {
      setLoading(true);
      setDisable(true);
      setTimeout(() => {
        values["id"] = genID(12);
        database
          .collection("users")
          .add(values)
          .then((data: any) => {
            setDisable(false);
            setLoading(false);
            openSnackbar("Account created successfull");
            setTimeout(() => {
              goto("/account/signin");
            }, 1000);
            console.log(data)
          })
          .catch((error: string | undefined) => {
            throw new Error(error);
          });
      }, 2000);
    }
  }

  //  EFFECTS
  useEffect(() => {
    if (values.password) {
      setDisable(false);
    }
  }, [values.password]);

  return (
    <FormBox
      component={"form"}
      // method="post"
      onSubmit={handleSubmit(handleSave, handleErrors)}
    >
      {loading && <LinearProgress />}
      <FormHeader>
        <SquardLogo />
        <Subline variant="h6"> Create an account </Subline>
      </FormHeader>
      <FormBody>
        <InputField
          label="Full name"
          type="fullname"
          value={values.fullname}
          placeholder="John N. Doe"
          InputLabelProps={{ shrink: true }}
          {...register("fullname", Pattern.fullname)}
          error={Boolean(errors.fullname)}
          helperText={(errors.fullname as any)?.message}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          value={values.email}
          placeholder="john@email.com"
          InputLabelProps={{ shrink: true }}
          {...register("email", Pattern.email)}
          error={Boolean(errors.email)}
          helperText={(errors.email as any)?.message}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="********"
          value={values.password}
          InputLabelProps={{ shrink: true }}
          {...register("password", Pattern.password)}
          error={Boolean(errors.password)}
          helperText={(errors.password as any)?.message}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{ cursor: "pointer" }}
                onClick={setShowPassword}
                position="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </InputAdornment>
            ),
          }}
        />
        <Button
          color="success"
          variant="contained"
          disableElevation
          fullWidth
          type="submit"
          size="large"
          disabled={disable}
        >
          Create Account
        </Button>
      </FormBody>
      <Divider sx={{ mt: 2 }} />
      <FormFooter>
        <Infoline variant="caption">
          Already have an account ?<a href="signin"> Sign In </a>
        </Infoline>
      </FormFooter>
    </FormBox>
  );
};
