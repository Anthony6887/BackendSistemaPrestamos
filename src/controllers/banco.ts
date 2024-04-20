import { Request, Response } from 'express';
import { Banco } from '../models/banco';

export const getBanco = async (req: Request, res: Response) => {
    const listBanco = await Banco.findAll();
    res.json(listBanco);
}

export const getBancos = async (req: Request, res: Response) => {
    const { id_Cliente } = req.params;
    const banco = await Banco.findByPk(id_Cliente);

    if (Banco) {
        res.json(Banco)
    } else {
        res.status(404).json({
            msg: `No existe un Banco con el id ${id_Cliente}`
        })
    }
}

export const deleteBanco = async (req: Request, res: Response) => {
    const { id_Cliente } = req.params;
    const banco = await Banco.findByPk(id_Cliente);

    if (!Banco) {
        res.status(404).json({
            msg: `No existe un Banco con el id ${id_Cliente}`
        })
    } else {
        await Banco.destroy();
        res.json({
            msg: 'El Bancoo fue eliminado con exito!'
        })
    }

}

export const postBanco = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Banco.create(body);

        res.json({
            msg: `El Bancoo fue agregado con exito!`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}

export const updateBanco = async (req: Request, res: Response) => {
    const { body } = req;
    const { id_Cliente } = req.params;

    try {

        const banco = await Banco.findByPk(id_Cliente);

        if (banco) {
            await banco.update(body);
            res.json({
                msg: 'El Bancoo fue actualziado con exito'
            })

        } else {
            res.status(404).json({
                msg: `No existe un Bancoo con el id ${id_Cliente}`
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}
