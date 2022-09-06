import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { firestore } from "../firebase";
import MeuEstilo from "../meuestilo";

const Listar = () => {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [horarios, setHorarios] = useState([]); // Initial empty array of users

  useEffect(() => {
    const subscriber = firestore
      .collection("Horario")
      .onSnapshot((querySnapshot) => {
        const horarios = [];
        querySnapshot.forEach((documentSnapshot) => {
          horarios.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setHorarios(horarios);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Item = ({ id, text, bebido }) => (
    <View style={MeuEstilo.item}>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text style={MeuEstilo.title}>{"Data e Hora: " + text}</Text>
        <Text style={MeuEstilo.title}>{"ML's bebidos: " + bebido + "ml"}</Text>
      </View>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item id={item.id} text={item.text} bebido={item.bebido} />
  );

  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList
        data={horarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

// const MeuEstilo = MeuEstiloheet.create({
//   containerlistar: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: '#0782F9',
//     fontWeight: '700',
//   },
// });

export default Listar;
