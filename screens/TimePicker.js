import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { firestore } from "../firebase";
import firebase from "firebase/compat/app";
import MeuEstilo from "../meuestilo";

export default function TimePicker() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [bebido, setBebido] = useState("");

  const enviarDados = () => {
    const reference = firestore.collection("Horario").doc();

    reference
      .set({
        id: reference.id,
        text: text,
        bebido: bebido,
      })
      .then(() => {
        alert("Horário " + text + " Adicionado com Sucesso");
      });
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    console.log(event, selectedDate);
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime = "Horário: " + tempDate.getHours() + ":" + tempDate.getMinutes();
    setText(fDate + "\n" + fTime);
    console.log(fDate + " (" + fTime + ")");
  };

  // const showDatepicker = () => {
  //   showMode("date");
  // };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20 }}>{text}</Text>
      <View style={{ margin: 20 }}>
        <Button title="DatePicker" onPress={() => showMode("date")}></Button>
        <Button title="TimePicker" onPress={() => showMode("time")}></Button>
        <TextInput
          placeholder="Quantos ML's você bebeu?"
          value={bebido}
          onChangeText={(text) => setBebido(text)}
          keyboardType={"number-pad"}
          maxLength={4}
          style={MeuEstilo.input}
        />
        <TouchableOpacity onPress={enviarDados} style={MeuEstilo.button}>
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
