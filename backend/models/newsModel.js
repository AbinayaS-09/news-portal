module.exports = (sequelize, DataTypes) => {
    const News = sequelize.define("news", {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        title : {
            type : DataTypes.STRING,
            allowNull : false
        },
        category : {
            type : DataTypes.STRING,
            allowNull : false
        },
        imageUrl : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        desc : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        content : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        view : {
            type : DataTypes.INTEGER,
            allowNull : false,
            defaultValue : 0
        }
    })
    return News
}