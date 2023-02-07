import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Finca from '../models/finca';


export const getFincas = async (req: Request, res: Response) => {

    const fincas = await Finca.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(fincas);
}

export const getFinca = async (req: Request, res: Response) => {

    const { id } = req.params;

    const finca = await Finca.findByPk(id);

    if (finca) {
        res.json(finca);
    } else {
        res.status(404).json({
            msg: `No existe un finca con el id ${id}`
        });
    }


}

export const postFinca = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const finca = Finca.build(body);

        await finca.save();

        res.json(finca);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putFinca = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const finca = await Finca.findByPk(id);
        if (!finca) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await finca.update(body);

        res.json(finca);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteFinca = async (req: Request, res: Response) => {

    const { id } = req.params;

    const finca = await Finca.findByPk(id);
    if (!finca) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await finca.update({ estado: false });

    // await finca.destroy();

    res.json(finca);
}