import {DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Usuario = sequelize.define('usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre:{
        type: DataTypes.STRING
    },
    apellidos:{
        type: DataTypes.STRING
    },
    tipo_documento:{
        type: DataTypes.STRING
    },
    NroDni:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    rol:{
        type: DataTypes.INTEGER
    },
})
export default Usuario;