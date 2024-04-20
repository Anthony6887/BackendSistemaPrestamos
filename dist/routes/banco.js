"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banco_1 = require("../controllers/banco");
const router = (0, express_1.Router)();
router.get('/', banco_1.getBanco);
router.get('/:id', banco_1.getBancos);
router.delete('/:id', banco_1.deleteBanco);
router.post('/', banco_1.postBanco);
router.put('/:id', banco_1.updateBanco);
exports.default = router;
