import {DataTypes} from 'sequelize'
import {sequelize} from "./database.js"

const User = sequelize.define('user', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(500),
        allowNull: false
    }
})

const Legend = sequelize.define('legend', {
    legendId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    legendName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Passive = sequelize.define('passive', {
    passiveId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Tactical = sequelize.define('tactical', {
    tacticalId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Ultimate = sequelize.define('ultimate', {
    ultimateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const LegendClass = sequelize.define('legend_class', {
    legendClassId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    class: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classAbility: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Main = sequelize.define('main', {
    mainId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    mainTier: {
        type: DataTypes.STRING
    }
})

const Tag = sequelize.define('tag', {
    tagId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    tagName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const LegendTag = sequelize.define('legend_tag', {
    legendTagId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    details: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

User.hasMany(Main, {foreignKey: 'userId'})
Main.belongsTo(User, {foreignKey: 'userId'})

LegendClass.hasMany(Legend, {foreignKey: 'LegendClassId'})
Legend.belongsTo(LegendClass, {foreignKey: 'LegendClassId'})

Legend.hasMany(LegendTag, {foreignKey: 'LegendId'})
LegendTag.belongsTo(Legend, {foreignKey: 'LegendId'})

Tag.hasMany(LegendTag, {foreignKey: 'tagId'})
LegendTag.belongsTo(Tag, {foreignKey: 'tagId'})

Legend.hasOne(Passive, {foreignKey: 'LegendId'})
Passive.belongsTo(Legend, {foreignKey: 'LegendId'})

Legend.hasOne(Tactical, {foreignKey: 'LegendId'})
Tactical.belongsTo(Legend, {foreignKey: 'LegendId'})

Legend.hasOne(Ultimate, {foreignKey: 'LegendId'})
Ultimate.belongsTo(Legend, {foreignKey: 'LegendId'})

export {User, Legend, LegendClass, Main, Passive, Ultimate, Tactical}