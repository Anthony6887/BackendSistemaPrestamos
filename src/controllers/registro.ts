import { Request, Response } from 'express';
import { Registro } from '../models/registro';

export const getRegistro = async (req: Request, res: Response) => {
    const listRegistro = await Registro.findAll();
    res.json(listRegistro);
}

export const getRegistros = async (req: Request, res: Response) => {
    const { id_Cliente } = req.params;
    const registro = await Registro.findByPk(id_Cliente);

    if (Registro) {
        res.json(Registro)
    } else {
        res.status(404).json({
            msg: `No existe un Registro con el id ${id_Cliente}`
        })
    }
}

export const deleteRegistro = async (req: Request, res: Response) => {
    const { id_Cliente } = req.params;
    const registro = await Registro.findByPk(id_Cliente);

    if (!Registro) {
        res.status(404).json({
            msg: `No existe un Registro con el id ${id_Cliente}`
        })
    } else {
        await Registro.destroy();
        res.json({
            msg: 'El Registroo fue eliminado con exito!'
        })
    }

}

export const postRegistro = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Registro.create(body);

        res.json({
            msg: `El Registroo fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateRegistro = async (req: Request, res: Response) => {
    const { body } = req;
    const { id_Cliente } = req.params;

    try {

        const registro = await Registro.findByPk(id_Cliente);

        if (registro) {
            await registro.update(body);
            res.json({
                msg: 'El Registroo fue actualziado con exito'
            })

        } else {
            res.status(404).json({
                msg: `No existe un Registroo con el id ${id_Cliente}`
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}
