

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios'; 

export default function QuestionnaireScreen({ navigation }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    availability: '',
    frequency: '',
    goals: '',
  });

  const questions = [
    { question: 'Combien de jours par semaine êtes-vous disponible pour vous entraîner ?', key: 'availability' },
    { question: 'Quelle est votre fréquence d’entraînement idéale (par semaine) ?', key: 'frequency' },
    { question: 'Quels sont vos objectifs de fitness principaux ?', key: 'goals' },
  ];

  const handleAnswerChange = (text) => {
    const currentKey = questions[step].key;
    setAnswers({ ...answers, [currentKey]: text });
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Une fois toutes les questions répondues, envoyer les réponses à l'API pour générer le plan d'entraînement
      generateWorkoutPlan();
    }
  };

  const generateWorkoutPlan = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `Générer un plan d'entraînement basé sur les informations suivantes : Disponibilité : ${answers.availability} jours par semaine, Fréquence : ${answers.frequency} fois par semaine, Objectifs : ${answers.goals}.`,
        max_tokens: 100,
      }, {
        headers: {
          'Authorization': `Bearer YOUR_OPENAI_API_KEY`,
        },
      });

      const workoutPlan = response.data.choices[0].text;
      navigation.navigate('WorkoutPlanScreen', { workoutPlan });
    } catch (error) {
      console.error("Erreur lors de la génération du plan d'entraînement :", error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>{questions[step].question}</Text>
      <TextInput
        style={{ borderWidth: 1, marginBottom: 20, padding: 10 }}
        onChangeText={handleAnswerChange}
        value={answers[questions[step].key]}
      />
      <Button title={step < questions.length - 1 ? 'Suivant' : 'Générer Plan'} onPress={handleNext} />
    </View>
  );
}
