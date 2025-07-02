import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native';
import { getSheetData, appendSheetData } from '../services/sheets';

const SHEET_NAME = 'Acta Saliente Paga N° 1';

const ActaSalienteScreen = () => {
  const [formFields, setFormFields] = useState<string[]>([]);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchFormFields = async () => {
      const data = await getSheetData(SHEET_NAME);
      if (data && data.length > 0) {
        const headers = data[0]; // First row as headers
        setFormFields(headers);
        // Initialize form data state
        const initialFormData: { [key: string]: string } = {};
        headers.forEach((header: string) => {
          initialFormData[header] = '';
        });
        setFormData(initialFormData);
      }
    };

    fetchFormFields();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const rowData = formFields.map((field) => formData[field] || '');
    const success = await appendSheetData(SHEET_NAME, rowData);
    if (success) {
      alert('Datos guardados correctamente');
      // Optionally, clear the form
      const initialFormData: { [key: string]: string } = {};
      formFields.forEach((header: string) => {
        initialFormData[header] = '';
      });
      setFormData(initialFormData);
    } else {
      alert('Error al guardar los datos');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Acta de Entrega Saliente Pro</Text>
      {formFields.map((field, index) => (
        <View key={index} style={styles.inputContainer}>
          <Text style={styles.label}>{field}</Text>
          <TextInput
            style={styles.input}
            value={formData[field] || ''}
            onChangeText={(text) => handleInputChange(field, text)}
            placeholder={`Ingrese ${field.toLowerCase()}`}
          />
        </View>
      ))}
      <Button title="Guardar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default ActaSalienteScreen;
