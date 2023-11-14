import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [alturaM, setAlturaM] = useState('');
  const [imc, setIMC] = useState(null);
  const [resultado, setResultado] = useState('');

  const calcularIMC = () => {
    const pesoFloat = parseFloat(peso);
    const alturaMetros = parseFloat(alturaM);

    if (isNaN(pesoFloat) || isNaN(alturaMetros) || alturaMetros === 0) {
      alert('Por favor, ingrese valores válidos para peso y altura.');
      return;
    }

    const calculoIMC = pesoFloat / (alturaMetros * alturaMetros);
    setIMC(calculoIMC.toFixed(2));

    if (calculoIMC < 18.5) {
      setResultado('Bajo peso');
    } else if (calculoIMC >= 18.5 && calculoIMC < 25) {
      setResultado('Peso normal');
    } else if (calculoIMC >= 25 && calculoIMC < 30) {
      setResultado('Sobrepeso');
    } else {
      setResultado('Obesidad');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={(text) => setPeso(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Altura (m)"
          keyboardType="numeric"
          value={alturaM}
          onChangeText={(text) => setAlturaM(text)}
        />

        <TouchableOpacity style={styles.button} onPress={calcularIMC}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>

        {imc !== null && (
          <View style={styles.result}>
            <Text style={styles.resultText}>Tu IMC es: {imc}</Text>
            <Text style={styles.resultText}>Estado: {resultado}</Text>
          </View>
        )}
      </View>

      <StatusBar style="auto" />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Mauricio Joaquín Martínez Chan</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#3498db',
    padding: 10,
    width: '100%', // Ocupar todo el ancho de la pantalla
    textAlign: 'center',
    borderRadius: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#3498db',
    borderWidth: 1,
    marginBottom: 10,
    width: 200,
    textAlign: 'center',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    color: '#2ecc71',
    marginBottom: 5,
  },
  footer: {
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  footerText: {
    textAlign: 'right',
    color: '#7f8c8d',
  },
});
