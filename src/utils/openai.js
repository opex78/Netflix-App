import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env['']
})
export default openai;