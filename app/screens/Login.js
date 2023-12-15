import React, { useState } from "react";
import Screen from "../components/Screen";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import AppFormField from "../components/AppFormField";
import SubmitBtn from "../components/SubmitBtn";
import AppForm from "../components/AppForm";

const Login = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password"),
    });


  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/UnStuffLogo.png")}
        style={styles.logo}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
                <AppFormField
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                <AppFormField
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    keyboardType="default"
                    textContentType="password"
                    secureTextEntry
                />
                <SubmitBtn title={'Login'}/>
               
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  btn: {
    alignSelf: "center",
    marginVertical: 250,
    width: "80%",
  },
  container: {
    padding: 15,
  },
});

export default Login;
