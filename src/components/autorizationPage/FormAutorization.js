import './FormAutorization.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../../hooks/useAuth';
import routesPages from '../../routes/routesPages';
import { FormControl } from '@mui/material';
import { StyledTextField, StyledLoadingButton, StyledBox, StyledInputLabel, StyledFormHelperText } from './styledComponents';

const Login = () => {
  const autContext = useAuth();
  const navigate = useNavigate();
  const { mainPageRoute } = routesPages;

  const SignupSchema = Yup.object({
    email: Yup.string().email('Некоректный адрес эдектронной почты').required('Обязательное поле'),
    password: Yup.string()
      .min(8, 'Пароль должен содержать не менее 8 символов')
      .matches(/[A-Z]/, 'В пароле должна присутствовать одна заглавная буква')
      .required('Обязательное поле')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: () => {
      values.password = values.password.trim();
      const refreshId = setInterval(() => {                                // имитацию проверки равная 2-ум секундам
        try {
          autContext.logIn(formik.values);
          navigate(mainPageRoute);
          clearInterval(refreshId)
        } catch (_) {
          clearInterval(refreshId)
        }
      }, 2000)
    },
  });

  const {
    errors, touched, values, handleChange, handleSubmit, isSubmitting,
  } = formik;
  

  const MyFormHelperText = ({ formikTouch, formikError }) => {
    return formikTouch && formikError ? <StyledFormHelperText
      style={{ color: "red" }}
    >
      {formikError}
    </StyledFormHelperText> : null;
  };

  return (
    <div className='autorization_container'>
      <div className='autorization_content'>
        <h1 className='title'>Авторизация</h1>
        <StyledBox
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 4, width: '40ch' },
          }}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <FormControl>
            <StyledInputLabel shrink htmlFor="outlined-required" style={{ color: "white" }}>
              Электронная почта
            </StyledInputLabel>
            <StyledTextField
              sx={{
                '& .MuiTextField-root': { color: "red" },
              }}
              id="outlined-required"
              name="email"
              type="text"
              onChange={handleChange}
              value={values.email}
              autoFocus
              error={touched.email && errors.email}
            />
            < MyFormHelperText formikTouch={touched.email} formikError={errors.email} />
          </FormControl>
          <FormControl>
            <StyledInputLabel shrink htmlFor="outlined-password-input" style={{ color: "white" }}>
              Пароль
            </StyledInputLabel>
            <StyledTextField
              id="outlined-password-input"
              type="password"
              autoComplete="current-password"
              name="password"
              onChange={handleChange}
              value={values.password}
              error={touched.password && errors.password}
            />
            < MyFormHelperText formikTouch={touched.password} formikError={errors.password} />
          </FormControl>
          <StyledLoadingButton
            variant="contained"
            type="submit"
            loading={isSubmitting}
            disabled={isSubmitting}
          >Авторизация
          </StyledLoadingButton>
        </StyledBox>
      </div>
    </div>
  );
};
export default Login;
