
import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import TipoGraminea from '../models/tiposgraminea';


export const getTipoGramineaes = async (req: Request, res: Response) => {

    const tipoGranea = await TipoGraminea.findAll({
        where: {
            estado: 1,
        }
    });

    res.json(tipoGranea);
}

export const getTipoGraminea = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tipoGranea = await TipoGraminea.findByPk(id);

    if (tipoGranea) {
        res.json(tipoGranea);
    } else {
        res.status(404).json({
            msg: `No existe un TipoGraminea con el id ${id}`
        });
    }


}

export const postTipoGraminea = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const tipoGranea = TipoGraminea.build(body);

        await tipoGranea.save();

        res.json(TipoGraminea);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putTipoGraminea = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const tipoGranea = await TipoGraminea.findByPk(id);

        if (!tipoGranea) {
            return res.status(404).json({
                msg: 'No existe un TipoGraminea con el id ' + id
            });
        }

        await tipoGranea.update(body);

        res.json(tipoGranea);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteTipoGraminea = async (req: Request, res: Response) => {

    const { id } = req.params;

    const tipoGranea = await TipoGraminea.findByPk(id);
    if (!tipoGranea) {
        return res.status(404).json({
            msg: 'No existe un TipoGraminea con el id ' + id
        });
    }

    await tipoGranea.update({ estado: false });

    // await TipoGraminea.destroy();


    res.json(tipoGranea);
}