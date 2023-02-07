import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Dwre from '../models/dwre';


export const getDwres = async (req: Request, res: Response) => {

    try {
        const dwre = await Dwre.findAll();

        res.json(dwre);
    } catch (error) {
        console.log(error);
    }
}

export const getDwre = async (req: Request, res: Response) => {

    const { id } = req.params;

    const dwre = await Dwre.findByPk(id);

    if (dwre) {
        res.json(dwre);
    } else {
        res.status(404).json({
            msg: `No existe un dwre con el id ${id}`
        });
    }


}

export const postDwre = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const dwre = Dwre.build(body);

        await dwre.save();

        res.json(dwre);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putDwere = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const dwre = await Dwre.findByPk(id);
        if (!dwre) {
            return res.status(404).json({
                msg: 'No existe un dwre con el id ' + id
            });
        }

        await dwre.update(body);

        res.json(dwre);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteDwre = async (req: Request, res: Response) => {

    const { id } = req.params;

    const dwre = await Dwre.findByPk(id);
    if (!dwre) {
        return res.status(404).json({
            msg: 'No existe un dwre con el id ' + id
        });
    }

    await dwre.update({ estado: false });

    // await dwre.destroy();

    res.json(dwre);
}