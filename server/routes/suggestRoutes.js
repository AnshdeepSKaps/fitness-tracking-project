import express from 'express'

import { readFile } from 'fs/promises';
const data = JSON.parse(
    await readFile(
        new URL('../data.json', import.meta.url)
    )
);

const router = express.Router()

router.post('', (req, res) => {

    let condition = req.body.cond
    res.json(data.diseases[`${condition.toLowerCase()}`])
})

export default router