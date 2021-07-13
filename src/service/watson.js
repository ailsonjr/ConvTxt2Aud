const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: '<apikey>' }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com'
});

const params = {
  text: 'Converting text to Speech with IBM Watson',
  voice: 'pt-Br_IsabelaVoice',
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

textToSpeech.synthesizeUsingWebSocket(params);
synthStream.pipe(fs.createWriteStream('./audio.ogg'));