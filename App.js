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

import useStyles from "./assets/styles/useStyles";
import SizedBox from "./helpers/SizedBox";
import { loginService } from "./services/authentification/loginService";
import Login from "./pages/login/login";

export default function App() {
  const styles = useStyles();

  return (
    <View style={styles.root}>
      <Login />
    </View>
  );
}
