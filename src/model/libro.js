import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Libro = sequelize.define('libro',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    formato:{
        type: DataTypes.STRING
    },
    autor:{
        type: DataTypes.STRING
    },
    editorial:{
        type: DataTypes.STRING
    },
    categoria:{
        type: DataTypes.STRING
    },
    anio:{
        type: DataTypes.INTEGER
    },
    idioma:{
        type: DataTypes.STRING
    },
    nro_paginas:{
        type: DataTypes.INTEGER
    },
    isbn13:{
        type: DataTypes.STRING
    },
    portada_url:{
        type: DataTypes.STRING
    },
    titulo:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
})
export default Libro;