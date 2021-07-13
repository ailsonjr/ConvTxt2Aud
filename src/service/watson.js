const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');



const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: '' }),
  serviceUrl: ''
});

const params = {
  text: 'Hello from IBM Watson',
  voice: 'pt-BR_IsabelaVoice',
  accept: 'audio/wav'
};

textToSpeech
  .synthesize(params)
  .then(response => {
    const audio = response.result;
    return textToSpeech.repairWavHeaderStream(audio);
  })
  .then(repairedFile => {
    fs.writeFileSync('audio.wav', repairedFile);
    console.log('audio.wav written with a corrected wav header');
  })
  .catch(err => {
    console.log(err);
  });
