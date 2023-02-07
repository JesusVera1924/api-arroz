import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import ListPersonal from '../models/listpersonal';


export const getListPersonals = async (req: Request, res: Response) => {

    try {
        const lispersonal = await ListPersonal.findAll();

        res.json(lispersonal);
    } catch (error) {
        console.log(error);
    }
}

export const getListPersonal = async (req: Request, res: Response) => {

    const { id } = req.params;

    const task = await ListPersonal.findByPk(id);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({
            msg: `No existe un task con el id ${id}`
        });
    }


}

export const postListPersonal = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const task = ListPersonal.build(body);

        await task.save();

        res.json(task);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putListPersonal = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const listPersonal = await ListPersonal.findByPk(id);
        if (!listPersonal) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await listPersonal.update(body);

        res.json(listPersonal);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteListPersonal = async (req: Request, res: Response) => {

    const { id } = req.params;

    const listPersonal = await ListPersonal.findByPk(id);
    if (!listPersonal) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await listPersonal.update({ estado: false });

    // await finca.destroy();

    res.json(listPersonal);
}