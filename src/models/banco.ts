import sequelize from "../db/connection";
import { DataTypes } from "sequelize";


export const Banco = sequelize.define("banco", {

    id_Banco: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    logo: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.INTEGER
    },
    rol: {
        type: DataTypes.INTEGER
    },
    id_Administrador: {
        type: DataTypes.INTEGER
    }
});