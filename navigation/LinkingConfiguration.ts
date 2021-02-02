import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      MedicationFormScreen: 'MedicationForm',
      TestButton: 'TestButton',
      NotFound: '*',
    },
  },
};
