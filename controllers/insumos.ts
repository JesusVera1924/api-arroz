import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Insumo from '../models/insumo';


export const getInsumos = async (req: Request, res: Response) => {

    const insumos = await Insumo.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(insumos);
}

export const getInsumo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const insumo = await Insumo.findByPk(id);

    if (insumo) {
        res.json(insumo);
    } else {
        res.status(404).json({
            msg: `No existe un insumo con el id ${id}`
        });
    }


}

export const postInsumo = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const insumo = Insumo.build(body);

        await insumo.save();

        res.json(insumo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putInsumo = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const insumo = await Insumo.findByPk(id);
        if (!insumo) {
            return res.status(404).json({
                msg: 'No existe un insumo con el id ' + id
            });
        }

        await insumo.update(body);

        res.json(insumo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteInsumo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const insumo = await Insumo.findByPk(id);
    if (!insumo) {
        return res.status(404).json({
            msg: 'No existe un insumo con el id ' + id
        });
    }

    await insumo.update({ estado: false });

    // await insumo.destroy();

    res.json(insumo);
}