import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import ListInsumos from '../models/listinsumos';


export const getListInsumos = async (req: Request, res: Response) => {

    try {
        const listinsumo = await ListInsumos.findAll();

        res.json(listinsumo);
    } catch (error) {
        console.log(error);
    }
}

export const getListInsumo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const insumos = await ListInsumos.findByPk(id);

    if (insumos) {
        res.json(insumos);
    } else {
        res.status(404).json({
            msg: `No existe un insumos con el id ${id}`
        });
    }


}

export const postListInsumo = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const insumo = ListInsumos.build(body);

        await insumo.save();

        res.json(insumo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putListInsumo = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const listInsumo = await ListInsumos.findByPk(id);
        if (!listInsumo) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await listInsumo.update(body);

        res.json(listInsumo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteListInsumo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const listInsumo = await ListInsumos.findByPk(id);
    if (!listInsumo) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await listInsumo.update({ estado: false });

    // await finca.destroy();

    res.json(listInsumo);
}