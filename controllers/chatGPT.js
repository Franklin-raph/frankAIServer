const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const chatGptClone = async (req, res) =>{
    try {
        const prompt = req.body.prompt
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            max_tokens: 4000,
            n: 1,
            temperature: 0,
            top_p: 0.7,
            frequency_penalty: 0.5,
            presence_penalty: 0,
          });

        const data = completion.data.choices[0].text
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        res.status(200).json({
            success: false,
            error: "Oopps something went wrong"
        })
        console.log(error)
    }
}

const imageGeneration = async (req, res) => {
    const prompt = req.body.prompt
    try {
        const generateImage = await openai.createImage({
            prompt: `${prompt}`,
            n: 1,
        })

        const data = generateImage.data.data[0].url
        res.status(200).json({
            success: true,
            data: data
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: "Oopps something went wrong"
        })
        console.log(error)
    }
}

module.exports ={
    chatGptClone,
    imageGeneration
}