const express = require('express');
const routes = express.Router();
const audioGeneratorController = require('../Controller/audioGeneratorController');

routes.post('/tts', audioGeneratorController.audioGenerator);
routes.get('/getVoices', audioGeneratorController.getVoices);   
module.exports = routes;