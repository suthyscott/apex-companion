import {User, Legend, LegendClass, Main, Passive, Ultimate, Tactical} from '../db/models.js'

export default {
    getAllLegends: async (req, res) => {
        const legends = await Legend.findAll({
            include: {
                model: LegendClass
            }
        })
        res.send(legends)
    },
    getRandomLegend: async (req, res) => {
        const legends = await Legend.findAll({
            include: {
                model: LegendClass
            }
        })

        const rando = legends[Math.floor(Math.floor(Math.random() * legends.length + 1))]
        res.send(rando)
    }
}