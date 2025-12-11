import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function App() {
  const [size, setSize] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [prediction, setPrediction] = useState(null);

  const llamarAPI = async () => {
    try {
      const response = await fetch("https://fastapi-demo.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          size: parseFloat(size),
          rooms: parseInt(rooms),
          bathrooms: parseInt(bathrooms)
        })
      });

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error("Error llamando a la API", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Predicción de Precio</Text>

      <TextInput
        style={styles.input}
        placeholder="Tamaño (m2)"
        keyboardType="numeric"
        value={size}
        onChangeText={setSize}
      />

      <TextInput
        style={styles.input}
        placeholder="Habitaciones"
        keyboardType="numeric"
        value={rooms}
        onChangeText={setRooms}
      />

      <TextInput
        style={styles.input}
        placeholder="Baños"
        keyboardType="numeric"
        value={bathrooms}
        onChangeText={setBathrooms}
      />

      <Button title="Calcular predicción" onPress={llamarAPI} />

      {prediction && (
        <Text style={styles.result}>
          Precio estimado: {prediction.toFixed(2)} €
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: "center",
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
});
