import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import ListCultivo from '../models/listcultivo';


export const getListCultivos = async (req: Request, res: Response) => {

    try {
        const list = await ListCultivo.findAll();

        res.json(list);
    } catch (error) {
        console.log(error);
    }
}

export const getListCultivo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const list = await ListCultivo.findByPk(id);

    if (list) {
        res.json(list);
    } else {
        res.status(404).json({
            msg: `No existe un list con el id ${id}`
        });
    }


}

export const postListCultivo = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const listcultivo = ListCultivo.build(body);

        await listcultivo.save();

        res.json(listcultivo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putListCultivo = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const listcultivo = await ListCultivo.findByPk(id);
        if (!listcultivo) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await listcultivo.update(body);

        res.json(listcultivo);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteListCultivo = async (req: Request, res: Response) => {

    const { id } = req.params;

    const listcultivo = await ListCultivo.findByPk(id);
    if (!listcultivo) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await listcultivo.update({ estado: false });

    // await finca.destroy();

    res.json(listcultivo);
}