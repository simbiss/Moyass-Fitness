import axios from 'axios';
import Config from 'react-native-config';

const openaiApiKey = Config.OPENAI_API_KEY;

export const generateWorkoutPlan = async (availability, frequency, goals) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', 
        prompt: `Créez un plan d'entraînement pour quelqu'un qui est disponible ${availability} jours par semaine, souhaite s'entraîner ${frequency} fois par semaine, et dont les objectifs sont : ${goals}.`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${openaiApiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Erreur lors de la génération du plan d'entraînement :", error);
    throw new Error("Impossible de générer le plan d'entraînement.");
  }
};
