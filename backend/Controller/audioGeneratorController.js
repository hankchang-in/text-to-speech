const textToSpeech = require("@google-cloud/text-to-speech");
const fs = require("fs");
const util = require("util");

const dotenv = require('dotenv')

dotenv.config()
const googleCredentials = JSON.parse(process.env.GOOGLE_API_CREDENTIALS)
// console.log(process.env.GOOGLE_API_CREDENTIALS);
const client = new textToSpeech.TextToSpeechClient({
    credentials: googleCredentials, // Path to service account JSON
});
module.exports.audioGenerator = async (req, res) => {
   
    try {
        const { text, voice , languageCode , ssmlGender} = req.body;
        console.log(req.body )
        if (!text) {
            return res.status(400).json({ error: "Text is required" });
        }
        // Google TTS API request
        const request = {
            input: { text },
           "voice": { 
            "languageCode": languageCode, 
            "name":  voice, 
            "ssmlGender": ssmlGender, 
            },
            audioConfig: { audioEncoding: "MP3" },
        };

        const [response] = await client.synthesizeSpeech(request);
        const filePath = "audio.mp3";
        const fileSaving = await util.promisify(fs.writeFile)(__dirname+"/"+filePath, response.audioContent, "binary");
        console.log(fileSaving)
        res.setHeader("Content-Disposition", "attachment; filename=output.mp3");
        res.setHeader("Content-Type", "audio/mpeg");
        console.log(__dirname+"/"+filePath)
        res.sendFile(__dirname+"/"+filePath, (err) => {
            console.log(__dirname+"/"+filePath)
            if (err) {
                console.error("Error sending file:", err);
                res.status(500).json({ error: "Error sending file" });
            }
            // fs.unlinkSync(filePath); // Delete after sending
        });
    } catch (error) {
        console.error("TTS Error:", error);
        res.status(500).json({ error: "Failed to generate speech" });
    }
}

module.exports.getVoices = async (req, res) => {    
    try{
        const [result] = await client.listVoices({});
        const voices = result.voices;
        res.json(voices);
    }catch(err){
        console.error("Error getting voices:", err);
        res.status(500).json({ error: "Failed to get voices" });
    }
}
