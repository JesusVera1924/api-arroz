import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Maquinaria from '../models/maquinaria';


export const getMaquinarias = async (req: Request, res: Response) => {

    const maq = await Maquinaria.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(maq);
}

export const getMaquinaria = async (req: Request, res: Response) => {

    const { id } = req.params;

    const maquinaria = await Maquinaria.findByPk(id);

    if (maquinaria) {
        res.json(maquinaria);
    } else {
        res.status(404).json({
            msg: `No existe un maquinaria con el id ${id}`
        });
    }
}

export const postMaquinaria = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const maq = Maquinaria.build(body);

        await maq.save();

        res.json(maq);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putMaquinaria = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const maq = await Maquinaria.findByPk(id);
        if (!maq) {
            return res.status(404).json({
                msg: 'No existe un maq con el id ' + id
            });
        }

        await maq.update(body);

        res.json(maq);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteMaquinaria = async (req: Request, res: Response) => {

    const { id } = req.params;

    const maq = await Maquinaria.findByPk(id);
    if (!maq) {
        return res.status(404).json({
            msg: 'No existe un maquinaria con el id ' + id
        });
    }

    await maq.update({ estado: false });

    // await maq.destroy();


    res.json(maq);
}