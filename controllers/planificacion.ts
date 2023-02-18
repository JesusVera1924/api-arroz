
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Planificacion from '../models/planificacion';


export const getPlanificaciones = async (req: Request, res: Response) => {

    const detallesPlanificacion = await Planificacion.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(detallesPlanificacion);
}

export const getPlanificacion = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detallesPlanificacion = await Planificacion.findByPk(id);

    if (detallesPlanificacion) {
        res.json(detallesPlanificacion);
    } else {
        res.status(404).json({
            msg: `No existe un Planificacion con el id ${id}`
        });
    }


}

export const postPlanificacion = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const planificacion = Planificacion.build(body);

        await planificacion.save();

        res.json(planificacion);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putPlanificacion = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const planificacion = await Planificacion.findByPk(id);

        if (!planificacion) {
            return res.status(404).json({
                msg: 'No existe un Planificacion con el id ' + id
            });
        }

        await planificacion.update(body);

        res.json(planificacion);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deletePlanificacion = async (req: Request, res: Response) => {

    const { id } = req.params;

    const planificacion = await Planificacion.findByPk(id);
    if (!planificacion) {
        return res.status(404).json({
            msg: 'No existe un Planificacion con el id ' + id
        });
    }

    await planificacion.update({ estado: false });

    // await Planificacion.destroy();


    res.json(Planificacion);
}