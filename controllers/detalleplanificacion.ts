
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import DetallePlanificacion from '../models/detalleplanificacion';


export const getDetallePlanificaciones = async (req: Request, res: Response) => {

    const detallesPlanificacion = await DetallePlanificacion.findAll({

        where: {
            estado: 1,
        }
    });

    res.json(detallesPlanificacion);
}

export const getDetalleUsuariosPlanificaciones = async (req: Request, res: Response) => {

    const { body } = req;


    const detallesPlanificacion = await DetallePlanificacion.findAll({
        where: {
            observacion: body.referencia,
            estado: body.obs,
        }
    });

    const detallesPlanificacion2 = await DetallePlanificacion.findAll({
        where: {
            observacion: "-",
            estado: 1,
        }
    });

    const list3 = [...detallesPlanificacion, ...detallesPlanificacion2]

    res.json(list3);
}


export const getDetallePlanificacion = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detallesPlanificacion = await DetallePlanificacion.findByPk(id);

    if (detallesPlanificacion) {
        res.json(detallesPlanificacion);
    } else {
        res.status(404).json({
            msg: `No existe un detallePlanificacion con el id ${id}`
        });
    }


}

export const postDetallePlanificacion = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const detallePlanificacion = DetallePlanificacion.build(body);
        await detallePlanificacion.save();
        res.json(detallePlanificacion);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putDetallePlanificacion = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const detallePlanificacion = await DetallePlanificacion.findByPk(id);

        if (!detallePlanificacion) {
            return res.status(404).json({
                msg: 'No existe un detallePlanificacion con el id ' + id
            });
        }

        await detallePlanificacion.update(body);

        res.json(detallePlanificacion);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteDetallePlanificacion = async (req: Request, res: Response) => {

    const { id } = req.params;

    const detallePlanificacion = await DetallePlanificacion.findByPk(id);
    if (!detallePlanificacion) {
        return res.status(404).json({
            msg: 'No existe un detallePlanificacion con el id ' + id
        });
    }

    await detallePlanificacion.update({ estado: false });

    // await detallePlanificacion.destroy();


    res.json(detallePlanificacion);
}