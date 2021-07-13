const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: '{https://cloud.ibm.com/services/text-to-speech/crn%3Av1%3Abluemix%3Apublic%3Atext-to-speech%3Aus-south%3Aa%2F4b9b090993a446cd974c023e9aeaef3a%3A857333aa-9461-4afd-a2df-8bd79ee9aaf8%3A%3A?paneId=gettingStarted#getting-started-curl}',
  }),
  serviceUrl: 'https://api.us-east.text-to-speech.watson.cloud.ibm.com',
});
