import { TextField, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { Formik } from 'formik';
import React from 'react';
import Header from '../../components/Header';
import * as yup from "yup";

const Form = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFromSubmit = (values) => {
    console.log(values);
  };

	return (
    <Box m="20px">
      <Header title={"Forms"} subtitle="forms primaries" />

      <Formik
        onSubmit={handleFromSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="grid" gap="20px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": {gridColumn:isNonMobile? undefined: "span 4"}}}>
              <TextField
                fullWidth
								variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={!!touched.firstName && !!errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
								variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={!!touched.lastName && !!errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
								variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={!!touched.email && !!errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
								variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={!!touched.contact && !!errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                name="address"
                error={!!touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address: yup.string().required("required"),
});

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address: "",
}
export default Form;