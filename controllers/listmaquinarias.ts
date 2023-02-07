import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import ListMaquinarias from '../models/listmaquinarias';


export const getListMaquinarias = async (req: Request, res: Response) => {
    try {
        const maquinaria = await ListMaquinarias.findAll();

        res.json(maquinaria);
    } catch (error) {
        console.log(error);
    }
}

export const getListMaquinaria = async (req: Request, res: Response) => {

    const { id } = req.params;

    const maquinarias = await ListMaquinarias.findByPk(id);

    if (maquinarias) {
        res.json(maquinarias);
    } else {
        res.status(404).json({
            msg: `No existe un maquinarias con el id ${id}`
        });
    }


}

export const postListMaquinarias = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const maquinarias = ListMaquinarias.build(body);

        await maquinarias.save();

        res.json(maquinarias);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putListMaquinarias = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const maquinarias = await ListMaquinarias.findByPk(id);
        if (!maquinarias) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await maquinarias.update(body);

        res.json(maquinarias);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteListMaquinarias = async (req: Request, res: Response) => {

    const { id } = req.params;

    const maquinarias = await ListMaquinarias.findByPk(id);
    if (!maquinarias) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await maquinarias.update({ estado: false });

    // await finca.destroy();

    res.json(maquinarias);
}