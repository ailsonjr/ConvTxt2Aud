const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');



const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({ apikey: 'Tcj_yO7o1MNfpfDsZCFupEYYxHS7uErulJfjtdZaBvej' }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/857333aa-9461-4afd-a2df-8bd79ee9aaf8'
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


// {
//   "apikey": "Tcj_yO7o1MNfpfDsZCFupEYYxHS7uErulJfjtdZaBvej",
//   "iam_apikey_description": "Auto-generated for key cab5b9d3-11ab-4904-8410-7caffdfd4dbf",
//   "iam_apikey_name": "Auto-generated service credentials",
//   "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",
//   "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/4b9b090993a446cd974c023e9aeaef3a::serviceid:ServiceId-4a96fd27-490b-41c5-b2fc-c72e2f652340",
//   "url": "https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/857333aa-9461-4afd-a2df-8bd79ee9aaf8"
// }