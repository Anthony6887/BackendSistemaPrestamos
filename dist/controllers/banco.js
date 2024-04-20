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
exports.updateBanco = exports.postBanco = exports.deleteBanco = exports.getBancos = exports.getBanco = void 0;
const banco_1 = require("../models/banco");
const getBanco = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listBanco = yield banco_1.Banco.findAll();
    res.json(listBanco);
});
exports.getBanco = getBanco;
const getBancos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_Cliente } = req.params;
    const banco = yield banco_1.Banco.findByPk(id_Cliente);
    if (banco_1.Banco) {
        res.json(banco_1.Banco);
    }
    else {
        res.status(404).json({
            msg: `No existe un Banco con el id ${id_Cliente}`
        });
    }
});
exports.getBancos = getBancos;
const deleteBanco = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_Cliente } = req.params;
    const banco = yield banco_1.Banco.findByPk(id_Cliente);
    if (!banco_1.Banco) {
        res.status(404).json({
            msg: `No existe un Banco con el id ${id_Cliente}`
        });
    }
    else {
        yield banco_1.Banco.destroy();
        res.json({
            msg: 'El Bancoo fue eliminado con exito!'
        });
    }
});
exports.deleteBanco = deleteBanco;
const postBanco = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield banco_1.Banco.create(body);
        res.json({
            msg: `El Bancoo fue agregado con exito!`
        });
    }
    catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        });
    }
});
exports.postBanco = postBanco;
const updateBanco = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id_Cliente } = req.params;
    try {
        const banco = yield banco_1.Banco.findByPk(id_Cliente);
        if (banco) {
            yield banco.update(body);
            res.json({
                msg: 'El Bancoo fue actualziado con exito'
            });
        }
        else {
            res.status(404).json({
                msg: `No existe un Bancoo con el id ${id_Cliente}`
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
exports.updateBanco = updateBanco;
