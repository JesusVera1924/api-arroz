import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Historial from '../models/historial';


export const getHistorials = async (req: Request, res: Response) => {

    try {
        const historial = await Historial.findAll();

        res.json(historial);
    } catch (error) {
        console.log(error);
    }
}

export const getHistorialTerreno = async (req: Request, res: Response) => {

    try {
        const { id } = req.params;

        const historial = await Historial.findAll({
            where: {
                referencia: id
            }
        });

        res.json(historial);
    } catch (error) {
        console.log(error);
    }
}

export const getHistorial = async (req: Request, res: Response) => {

    const { id } = req.params;

    const hist = await Historial.findByPk(id);

    if (hist) {
        res.json(hist);
    } else {
        res.status(404).json({
            msg: `No existe un hist con el id ${id}`
        });
    }


}

export const postHistorial = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const hist = Historial.build(body);

        await hist.save();

        res.json(hist);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putHistorial = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const hist = await Historial.findByPk(id);
        if (!hist) {
            return res.status(404).json({
                msg: 'No existe un hist con el id ' + id
            });
        }

        await hist.update(body);

        res.json(hist);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteHistorial = async (req: Request, res: Response) => {

    const { id } = req.params;

    const hist = await Historial.findByPk(id);
    if (!hist) {
        return res.status(404).json({
            msg: 'No existe un hist con el id ' + id
        });
    }

    await hist.update({ estado: false });

    // await hist.destroy();
    res.json(hist);
}