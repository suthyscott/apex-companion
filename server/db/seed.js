import { User, Legend, LegendClass, Main, Passive, Ultimate, Tactical } from "./models.js"
import { sequelize } from "./database.js"
import legendData from './legendData.json' assert {type: 'json'}

await sequelize.sync({ force: true })


// await User.sync()
legendData.forEach(async classObj => {
    const newClass = await LegendClass.create({class: classObj.class, classAbility: classObj.classAbility})
    
    classObj.legends.forEach(async leg => {
        const newLegend = await Legend.create({...leg, LegendClassId: newClass.legendClassId})
    })
})
await User.create({ username: "scott", password: "scott" })

console.log('Donzo')

sequelize.close()
