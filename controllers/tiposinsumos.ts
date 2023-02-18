
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Tiposinsumos from '../models/tiposinsumos';


export const getTiposinsumoses = async (req: Request, res: Response) => {

    const tiposinsumos = await Tiposinsumos.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(tiposinsumos);
}

export const getTiposinsumos = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tiposinsumos = await Tiposinsumos.findByPk(id);

    if (tiposinsumos) {
        res.json(tiposinsumos);
    } else {
        res.status(404).json({
            msg: `No existe un Tiposinsumos con el id ${id}`
        });
    }


}

export const postTiposinsumos = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const tiposinsumos = Tiposinsumos.build(body);

        await tiposinsumos.save();

        res.json(tiposinsumos);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTiposinsumos = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const tiposinsumos = await Tiposinsumos.findByPk(id);

        if (!tiposinsumos) {
            return res.status(404).json({
                msg: 'No existe un Tiposinsumos con el id ' + id
            });
        }

        await tiposinsumos.update(body);

        res.json(tiposinsumos);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTiposinsumos = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tiposinsumos = await Tiposinsumos.findByPk(id);
    if (!tiposinsumos) {
        return res.status(404).json({
            msg: 'No existe un Tiposinsumos con el id ' + id
        });
    }

    await tiposinsumos.update({ estado: false });

    // await Tiposinsumos.destroy();


    res.json(tiposinsumos);
}