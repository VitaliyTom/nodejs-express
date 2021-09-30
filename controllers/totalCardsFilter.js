import Cards from "../models/Cards.js";

export const totalCardsFilter = async (req, res) => {
    let card

    try {
        const {q} = req.query;

        card = await Cards.find({
            $or: [{title: {$regex: q, $options: 'i'}}, {
                about: {
                    $regex: q,
                    $options: 'i'
                }
            }, {city: {$regex: q, $options: 'i'}}]
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({message: e.message})
    }

    res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(card)
}
