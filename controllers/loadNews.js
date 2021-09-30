import Cards from "../models/Cards.js";

export const loadNews = async (req, res) => {
    let cards
    try {
        const {page, limit, q} = req.query;

        const skipCards = +page <= 1 ? 0 : +page * +limit - +limit;

        cards = await Cards.find({
            $or: [{title: {$regex: q, $options: 'i'}}, {
                about: {
                    $regex: q,
                    $options: 'i'
                }
            }, {city: {$regex: q, $options: 'i'}}]
        }, {__v: 0}).limit(+limit).skip(skipCards);

    } catch (e) {
        console.log(e);
        res.status(500).json({message: e.message})
    }
    res.setHeader('Access-Control-Allow-Origin', '*').status(200).json(cards)
}
