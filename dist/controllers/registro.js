"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRegistro = exports.postRegistro = exports.deleteRegistro = exports.getRegistros = exports.getRegistro = void 0;
const registro_1 = require("../models/registro");
const getRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listRegistro = yield registro_1.Registro.findAll();
    res.json(listRegistro);
});
exports.getRegistro = getRegistro;
const getRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_Cliente } = req.params;
    const registro = yield registro_1.Registro.findByPk(id_Cliente);
    if (registro_1.Registro) {
        res.json(registro_1.Registro);
    }
    else {
        res.status(404).json({
            msg: `No existe un Registro con el id ${id_Cliente}`
        });
    }
});
exports.getRegistros = getRegistros;
const deleteRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_Cliente } = req.params;
    const registro = yield registro_1.Registro.findByPk(id_Cliente);
    if (!registro_1.Registro) {
        res.status(404).json({
            msg: `No existe un Registro con el id ${id_Cliente}`
        });
    }
    else {
        yield registro_1.Registro.destroy();
        res.json({
            msg: 'El Registroo fue eliminado con exito!'
        });
    }
});
exports.deleteRegistro = deleteRegistro;
const postRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield registro_1.Registro.create(body);
        res.json({
            msg: `El Registroo fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.postRegistro = postRegistro;
const updateRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id_Cliente } = req.params;
    try {
        const registro = yield registro_1.Registro.findByPk(id_Cliente);
        if (registro) {
            yield registro.update(body);
            res.json({
                msg: 'El Registroo fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un Registroo con el id ${id_Cliente}`
            });
        }
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.updateRegistro = updateRegistro;
