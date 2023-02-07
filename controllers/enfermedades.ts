import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Enfermedad from '../models/enfermedad';


export const getEnfermedades = async (req: Request, res: Response) => {

    const enfermedades = await Enfermedad.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(enfermedades);
}

export const getEnfermedad = async (req: Request, res: Response) => {

    const { id } = req.params;

    const enfermedad = await Enfermedad.findByPk(id);

    if (enfermedad) {
        res.json(enfermedad);
    } else {
        res.status(404).json({
            msg: `No existe un enfermedad con el id ${id}`
        });
    }


}

export const postEnfermedad = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const enfermedad = Enfermedad.build(body);

        await enfermedad.save();

        res.json(enfermedad);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putEnfermedad = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const enfermedad = await Enfermedad.findByPk(id);

        if (!enfermedad) {
            return res.status(404).json({
                msg: 'No existe un enfermedad con el id ' + id
            });
        }

        await enfermedad.update(body);

        res.json(enfermedad);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteEnfermedad = async (req: Request, res: Response) => {

    const { id } = req.params;

    const enfermedad = await Enfermedad.findByPk(id);
    if (!enfermedad) {
        return res.status(404).json({
            msg: 'No existe un enfermedad con el id ' + id
        });
    }

    await enfermedad.update({ estado: false });

    // await enfermedad.destroy();


    res.json(enfermedad);
}