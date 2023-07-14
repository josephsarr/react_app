import React from "react";

import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Controller, useForm } from "react-hook-form";

import SizedBox from "../../helpers/SizedBox";
import { loginService } from "../../services/authentification/loginService";
import useStyles from "../../assets/styles/useStyles";

const Login = () => {
  
  const styles = useStyles();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    loginService(data);
  });


  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.content}
      >
        <Text style={styles.title}>Bienvenue</Text>

        <SizedBox height={8} />

        <Text style={styles.subtitle}>Connectez vous à votre compte :</Text>

        <SizedBox height={32} />

        <Pressable>
          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>

            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="email"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  returnKeyType="next"
                  style={styles.textInput}
                  textContentType="username"
                  value={value}
                />
              )}
            />
          </View>
        </Pressable>

        <SizedBox height={16} />

        <Pressable>
          <View style={styles.form}>
            <Text style={styles.label}>Password</Text>

            <Controller
              control={control}
              name="password"
              render={({ field: { onBlur, onChange, value } }) => (
                <TextInput
                  autoCapitalize="none"
                  autoCompleteType="password"
                  autoCorrect={false}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  onSubmitEditing={onSubmit}
                  returnKeyType="done"
                  secureTextEntry
                  style={styles.textInput}
                  textContentType="password"
                  value={value}
                />
              )}
            />
          </View>
        </Pressable>

        <SizedBox height={16} />

        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.textButton}>Création d'un nouveau compte</Text>
        </View>

        <SizedBox height={16} />

        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonTitle}>Se connecter</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;