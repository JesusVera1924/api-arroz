import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Cronograma from '../models/cronograma';


export const getCronogramas = async (req: Request, res: Response) => {

    try {
        const cronograma = await Cronograma.findAll();

        res.json(cronograma);
    } catch (error) {
        console.log(error);
    }
}

export const getCronograma = async (req: Request, res: Response) => {

    const { id } = req.params;

    const cronograma = await Cronograma.findByPk(id);

    if (cronograma) {
        res.json(cronograma);
    } else {
        res.status(404).json({
            msg: `No existe un cronograma con el id ${id}`
        });
    }


}

export const postCronograma = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const cronograma = Cronograma.build(body);

        await cronograma.save();

        res.json(cronograma);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putCronograma = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const cronograma = await Cronograma.findByPk(id);
        if (!cronograma) {
            return res.status(404).json({
                msg: 'No existe un cronograma con el id ' + id
            });
        }

        await cronograma.update(body);

        res.json(cronograma);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteCronograma = async (req: Request, res: Response) => {

    const { id } = req.params;

    const cronograma = await Cronograma.findByPk(id);
    if (!cronograma) {
        return res.status(404).json({
            msg: 'No existe un cronograma con el id ' + id
        });
    }

    await cronograma.update({ estado: false });

    // await cronograma.destroy();

    res.json(cronograma);
}