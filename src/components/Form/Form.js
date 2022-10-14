import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import styles from "./Form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart } from "../../store/Add to cart/ActionsCreator";
import { hideCheckoutForm } from "../../store/CheckOut form/actionsCreator";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Form = () => {
  const dispatch = useDispatch();
  const goodsInCart = useSelector((store) => store.addToCart.carts);
  const checkOutIsopen = useSelector((store) => store.checkOut.checkOutIsopen);
  const location = useLocation();
  useEffect(() => {
    dispatch(hideCheckoutForm());
  }, [dispatch, location.pathname]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      adress: "",
      mobilePhone: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      age: Yup.number().positive().integer().required("Required"),
      adress: Yup.string()
        .max(160, "Must be 160 characters or less")
        .min(5, "Must be 10 characters or more")
        .required("Required"),
      mobilePhone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Phone number is not valid"
        )
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      console.log("goods in cart:", goodsInCart);
      console.log("Data from Form:", JSON.stringify(values, null, 2));
      dispatch(cleanCart());
      dispatch(hideCheckoutForm());
    },
  });

  if (!checkOutIsopen) {
    return null;
  }

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1 className={styles.header}> Please fill in all the fields </h1>
      <button
        className={styles.closeBtn}
        onClick={() => {
          dispatch(hideCheckoutForm());
        }}
      >
        X
      </button>
      <label htmlFor="firstName">
        First Name
        <input
          id="fisrsName"
          type="text"
          {...formik.getFieldProps(`firstName`)}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className={styles.error}>{formik.errors.firstName}</div>
        ) : null}
      </label>

      <label htmlFor="lastName">
        Last Name
        <input
          id="lastName"
          type="text"
          {...formik.getFieldProps(`lastName`)}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className={styles.error}>{formik.errors.lastName}</div>
        ) : null}
      </label>

      <label htmlFor="age">
        Age
        <input id="age" type="text" {...formik.getFieldProps(`age`)} />
        {formik.touched.age && formik.errors.age ? (
          <div className={styles.error}>{formik.errors.age}</div>
        ) : null}
      </label>

      <label htmlFor="adress">
        Address
        <input id="adress" type="text" {...formik.getFieldProps(`adress`)} />
        {formik.touched.adress && formik.errors.adress ? (
          <div className={styles.error}>{formik.errors.adress}</div>
        ) : null}
      </label>

      <label htmlFor="mobilePhone">
        Mobile Phone
        <input
          id="mobilePhone"
          type="text"
          {...formik.getFieldProps(`mobilePhone`)}
        />
        {formik.touched.mobilePhone && formik.errors.mobilePhone ? (
          <div className={styles.error}>{formik.errors.mobilePhone}</div>
        ) : null}
      </label>

      <label htmlFor="email">
        e-mail
        <input id="email" type="email" {...formik.getFieldProps(`email`)} />
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.error}>{formik.errors.email}</div>
        ) : null}
      </label>
      <button className={styles.checkoutBtn} type="submit">
        Check Out
      </button>
    </form>
  );
};
