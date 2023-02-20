import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Terreno from '../models/terreno';


export const getTerrenos = async (req: Request, res: Response) => {

    const terrenos = await Terreno.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(terrenos);
}

export const getFincaAndTerrenos = async (req: Request, res: Response) => {

    const { id } = req.params;

    const terrenos = await Terreno.findAll({
        where: {
            idFinca: id,
            estado: 1
        }
    });

    res.json(terrenos);
}

export const getTerreno = async (req: Request, res: Response) => {

    const { id } = req.params;

    const terreno = await Terreno.findByPk(id);

    if (terreno) {
        res.json(terreno);
    } else {
        res.status(404).json({
            msg: `No existe un terreno con el id ${id}`
        });
    }


}

export const postTerreno = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const terreno = Terreno.build(body);

        await terreno.save();

        res.json(terreno);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTerreno = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const terreno = await Terreno.findByPk(id);
        if (!terreno) {
            return res.status(404).json({
                msg: 'No existe un terreno con el id ' + id
            });
        }

        await terreno.update(body);

        res.json(terreno);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTerreno = async (req: Request, res: Response) => {

    const { id } = req.params;

    const terreno = await Terreno.findByPk(id);
    if (!terreno) {
        return res.status(404).json({
            msg: 'No existe un terreno con el id ' + id
        });
    }

    await terreno.update({ estado: false });

    // await terreno.destroy();
    res.json(terreno);
}