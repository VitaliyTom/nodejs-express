import Cards from "../models/Cards.js";

export const popup = async (req, res) => {
    let card
    try {
        const {id} = req.query;

        card = await Cards.find({_id: id}, {__v: 0});

    } catch (e) {
        console.log(e);
        res.status(500).json({message: e.message})
    }
    res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(card)
}
