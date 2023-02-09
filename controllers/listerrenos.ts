import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Listterreno from '../models/listterreno';


export const getListterrenos = async (req: Request, res: Response) => {
    try {
        const listterreno = await Listterreno.findAll();

        res.json(listterreno);
    } catch (error) {
        console.log(error);
    }
}

export const getListterreno = async (req: Request, res: Response) => {

    const { id } = req.params;

    const terrenos = await Listterreno.findByPk(id);

    if (terrenos) {
        res.json(terrenos);
    } else {
        res.status(404).json({
            msg: `No existe un terrenos con el id ${id}`
        });
    }


}

export const postListterreno = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const terrenos = Listterreno.build(body);

        await terrenos.save();

        res.json(terrenos);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putListterreno = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const listerrenos = await Listterreno.findByPk(id);
        if (!listerrenos) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await listerrenos.update(body);

        res.json(listerrenos);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteListterreno = async (req: Request, res: Response) => {

    const { id } = req.params;

    const listterreno = await Listterreno.findByPk(id);
    if (!listterreno) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await listterreno.update({ estado: false });

    // await finca.destroy();

    res.json(listterreno);
}