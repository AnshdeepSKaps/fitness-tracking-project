import express from 'express'
import Suggestion from '../models/suggestions.js';

const router = express.Router()

router.post('', async (req, res) => {

    let condition = req.body.cond
    const result = await Suggestion.find({ Disease: condition.toLowerCase() })
    res.json(result[0])

})

export default router