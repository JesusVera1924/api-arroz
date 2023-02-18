
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Tipoenfermedades from '../models/tiposenfermedades';


export const getTipoenfermedadeses = async (req: Request, res: Response) => {

    const detallesPlanificacion = await Tipoenfermedades.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(detallesPlanificacion);
}

export const getTipoenfermedades = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detallesPlanificacion = await Tipoenfermedades.findByPk(id);

    if (detallesPlanificacion) {
        res.json(detallesPlanificacion);
    } else {
        res.status(404).json({
            msg: `No existe un Tipoenfermedades con el id ${id}`
        });
    }


}

export const postTipoenfermedades = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const tipoenfermedades = Tipoenfermedades.build(body);

        await tipoenfermedades.save();

        res.json(Tipoenfermedades);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTipoenfermedades = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const tipoenfermedades = await Tipoenfermedades.findByPk(id);

        if (!tipoenfermedades) {
            return res.status(404).json({
                msg: 'No existe un Tipoenfermedades con el id ' + id
            });
        }

        await tipoenfermedades.update(body);

        res.json(Tipoenfermedades);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTipoenfermedades = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tipoenfermedades = await Tipoenfermedades.findByPk(id);
    if (!tipoenfermedades) {
        return res.status(404).json({
            msg: 'No existe un Tipoenfermedades con el id ' + id
        });
    }

    await tipoenfermedades.update({ estado: false });

    // await Tipoenfermedades.destroy();


    res.json(Tipoenfermedades);
}