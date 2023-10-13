import { Button, Divider, InputAdornment, LinearProgress } from "@mui/material";
import { Subline, Infoline } from "@components/styled/typography.styled";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  FormBody,
  FormBox,
  FormFooter,
  FormHeader,
  InputField,
} from "@components/styled/forms.styled";
import { SquardLogo } from "@components/common/Logo";
import handleShowPassword from "@components/utils/helpers/handleShowPassword";
import { useForm } from "react-hook-form";
import wodify from "@components/utils/helpers/wodify";
import setDocTitle from "@components/utils/helpers/setDocTitle";
import { useDatabase } from "@components/providers/ProvideDB";
import Pattern from "./Pattern";
import lodash from "lodash";
import { useUser } from "@components/providers/ProvideUser";

export const SigninForm = () => {
  setDocTitle("Sign in - Finsinai");
  const { showPassword, setShowPassword } = handleShowPassword();
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const { database } = useDatabase();
  const { setUser } = useUser();

  const goto = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (values.password) {
      setDisable(false);
    }
  }, [values.password]);

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleErrors = (errors: any) => { console.error(errors)};

  function handleChange(e: any) {
    setValues({ ...values, [e.target.name]: wodify(e) });
  }

  async function handleSave() {
    setLoading(true);
    setDisable(true);
    let dbUser = await database
      .collection("users")
      .doc({ email: values.email })
      .get()
      .then((user: any) => {
        if (user === undefined || user === null) {
          setError("email", {
            type: "custom",
            message: "Wrong email address. Please try again.",
          });
          setLoading(false);
          setDisable(false);
          return user;
        }
        return user;
      })
      .catch((error: any) => {
        throw new Error(error);
      });
    if (dbUser && lodash.isEqual(dbUser, values)) {
      setUser(dbUser);
      setTimeout(() => {
        setLoading(false);
        setDisable(false);
        goto("/");
      }, 1000);
    }
    setLoading(false);
    setDisable(false);
  }
  return (
    <FormBox
      component={"form"}
      // method="post"
      onSubmit={handleSubmit(handleSave, handleErrors)}
    >
      {loading && <LinearProgress />}
      <FormHeader>
        <SquardLogo />
        <Subline variant="h6"> Sign in </Subline>
      </FormHeader>
      <FormBody>
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
          type="submit"
          color="primary"
          variant="contained"
          disableElevation
          fullWidth
          disabled={disable}
        >
          Sign in
        </Button>
      </FormBody>
      <Divider sx={{ mt: 2 }} />
      <FormFooter>
        <Infoline variant="caption">
          Don't have an account ? <a href="signup"> Create new account</a>
        </Infoline>
      </FormFooter>
    </FormBox>
  );
};
