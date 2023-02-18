
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import TiposPlagas from '../models/tiposplagas';


export const getTiposPlagases = async (req: Request, res: Response) => {

    const tiposPlagas = await TiposPlagas.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(tiposPlagas);
}

export const getTiposPlagas = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tiposPlagas = await TiposPlagas.findByPk(id);

    if (tiposPlagas) {
        res.json(tiposPlagas);
    } else {
        res.status(404).json({
            msg: `No existe un TiposPlagas con el id ${id}`
        });
    }


}

export const postTiposPlagas = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const tiposPlagas = TiposPlagas.build(body);

        await tiposPlagas.save();

        res.json(tiposPlagas);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTiposPlagas = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const tiposPlagas = await TiposPlagas.findByPk(id);

        if (!tiposPlagas) {
            return res.status(404).json({
                msg: 'No existe un TiposPlagas con el id ' + id
            });
        }

        await tiposPlagas.update(body);

        res.json(tiposPlagas);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTiposPlagas = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tiposPlagas = await TiposPlagas.findByPk(id);
    if (!tiposPlagas) {
        return res.status(404).json({
            msg: 'No existe un TiposPlagas con el id ' + id
        });
    }

    await tiposPlagas.update({ estado: false });

    // await TiposPlagas.destroy();


    res.json(tiposPlagas);
}