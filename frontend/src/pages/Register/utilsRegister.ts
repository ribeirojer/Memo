import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  name: yup.string().trim().min(3).max(100).required(),
  email: yup.string().trim().email().required(),
  password: yup.string().trim().min(8).max(100).required(),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});
