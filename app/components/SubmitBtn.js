import React from "react";
import AppBtn from "./AppBtn";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";

const SubmitBtn = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <>
      <AppBtn style={styles.button} title={title} onPress={handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginVertical: 200,
    width: "80%",
  },
});

export default SubmitBtn;
