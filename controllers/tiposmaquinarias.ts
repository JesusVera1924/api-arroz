
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import TiposMaquinarias from '../models/tiposmaquinarias';


export const getTiposMaquinariases = async (req: Request, res: Response) => {

    const tiposMaquinarias = await TiposMaquinarias.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(tiposMaquinarias);
}

export const getTiposMaquinarias = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tiposMaquinarias = await TiposMaquinarias.findByPk(id);

    if (tiposMaquinarias) {
        res.json(tiposMaquinarias);
    } else {
        res.status(404).json({
            msg: `No existe un TiposMaquinarias con el id ${id}`
        });
    }


}

export const postTiposMaquinarias = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const tiposMaquinarias = TiposMaquinarias.build(body);

        await tiposMaquinarias.save();

        res.json(tiposMaquinarias);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTiposMaquinarias = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const tiposMaquinarias = await TiposMaquinarias.findByPk(id);

        if (!tiposMaquinarias) {
            return res.status(404).json({
                msg: 'No existe un TiposMaquinarias con el id ' + id
            });
        }

        await tiposMaquinarias.update(body);

        res.json(tiposMaquinarias);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTiposMaquinarias = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tiposMaquinarias = await TiposMaquinarias.findByPk(id);
    if (!tiposMaquinarias) {
        return res.status(404).json({
            msg: 'No existe un TiposMaquinarias con el id ' + id
        });
    }

    await tiposMaquinarias.update({ estado: false });

    // await TiposMaquinarias.destroy();


    res.json(tiposMaquinarias);
}