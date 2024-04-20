import sequelize from "../db/connection";
import { DataTypes } from "sequelize";


export const Registro = sequelize.define("usuario", {

    id_Cliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    usuario: {
        type: DataTypes.STRING
    },
    contrasenia: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.INTEGER
    },
    telefono: {
        type: DataTypes.INTEGER
    },
    rol: {
        type: DataTypes.INTEGER
    }
});