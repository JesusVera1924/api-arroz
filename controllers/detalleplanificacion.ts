
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import DetallePlanificacion from '../models/detalleplanificacion';
import ListPersonal from '../models/listpersonal';


export const getDetallePlanificaciones = async (req: Request, res: Response) => {

    const detallesPlanificacion = await DetallePlanificacion.findAll({

        where: {
            estado: 1,
        }
    });

    res.json(detallesPlanificacion);
}

export const getDetalleUsuariosPlanificaciones = async (req: Request, res: Response) => {

    try {
        const { body } = req; /// CODIGO DE USUARIO Y ESTADO
        var list3 = [];

        const detalleAct = await ListPersonal.findAll({
            where: {
                idPersonal: body.referencia,//P-01
            }
        });

        // TODO LOS REGISTROS DE DETALLE DE ACTIVIDADES QUE ESTA VINCULADO EL USUARIO QUE ESTA LOGEADO EN LA APP
        for (let numero of detalleAct) {
            // OBJETO DEL DETALLE DE ACTIVIDAD
            //console.log(numero.dataValues.idPlanificacion);
            const detallesPlanificacion2 = await DetallePlanificacion.findAll({
                where: {
                    iddetalleplanificacion: numero.dataValues.idPlanificacion,
                    estado: 1,
                }
            });

            //----> AGREGAR ESTA SOBREESCRIBIENDO
            for (let numero of detallesPlanificacion2) {
                list3.push(numero);
                console.log(list3.length);
            }
        }

    } catch (error) {
        console.error(error);
    }
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