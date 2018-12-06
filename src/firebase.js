// Initialize Firebase
const config = {
  apiKey: 'AIzaSyC3SF5qOFMCYm-fWYLDNiKct-jte0EQV5o',
  authDomain: 'cds-pipeline-2018.firebaseapp.com',
  databaseURL: 'https://cds-pipeline-2018.firebaseio.com',
  projectId: 'cds-pipeline-2018',
  storageBucket: '',
  messagingSenderId: '714796233736'
};
firebase.initializeApp(config);

const database = firebase.database();

const saveGenderEstimate = (div, status, data) => {
  status = status.toLowerCase();

  const ref = database.ref(`/gender/${div}/${status}`);
  const { key } = ref.push();
  return ref.update({ [key]: data });
};

const getGenderEstimates = () => {
  return database.ref('/gender/').once('value');
};