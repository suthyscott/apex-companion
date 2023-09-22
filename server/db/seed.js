import {
    User,
    Legend,
    LegendClass,
    Main,
    Passive,
    Ultimate,
    Tactical
} from "./models.js"
import { sequelize } from "./database.js"
import legendData from "./legendData.json" assert { type: "json" }

await sequelize.sync({ force: true })

// await User.sync()
await legendData.forEach(async classObj => {
    const newClass = await LegendClass.create({
        class: classObj.class,
        classAbility: classObj.classAbility
    })

    classObj.legends.forEach(async leg => {
        const newLegend = await Legend.create({ ...leg, LegendClassId: newClass.legendClassId })
        await Passive.create({
            passiveName: leg.passive.passiveName,
            desc: leg.passive.desc,
            LegendId: newLegend.legendId
        })
        await Tactical.create({
            tacticalName: leg.tactical.tacticalName,
            desc: leg.tactical.desc,
            LegendId: newLegend.legendId
        })
        await Ultimate.create({
            ultimateName: leg.ultimate.ultimateName,
            desc: leg.ultimate.desc,
            LegendId: newLegend.legendId
        })
    })
})
// await User.create({ username: "scott", password: "scott" })
console.log("Donzo")

// sequelize.close()

