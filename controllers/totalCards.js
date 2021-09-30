import Cards from "../models/Cards.js";

export const totalCards = async (req, res) => {
    let totalNumber
    try {
        totalNumber = await Cards.find().count();
    } catch (e) {
        console.log(e);
        res.status(500).json({message: e.message})
    }
    res.setHeader('Access-Control-Allow-Origin', '*').status(200).json({totalNumber})
}