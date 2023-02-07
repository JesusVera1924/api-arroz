import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Task from '../models/listtask';


export const getListTasks = async (req: Request, res: Response) => {

    const task = await Task.findAll();

    res.json(task);
}

export const getListTasksUsuario = async (req: Request, res: Response) => {
    const { body } = req;

    const task = await Task.findAll({
        where: {
            referencia: body.referencia,
            estado: body.obs

        }
    });

    res.json(task);
}

export const getListTask = async (req: Request, res: Response) => {

    const { id } = req.params;

    const task = await Task.findByPk(id);

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({
            msg: `No existe un task con el id ${id}`
        });
    }


}

export const postListTask = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const task = Task.build(body);

        await task.save();

        res.json(task);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putListTask = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({
                msg: 'No existe un task con el id ' + id
            });
        }

        await task.update(body);

        res.json(task);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteListTask = async (req: Request, res: Response) => {

    const { id } = req.params;

    const task = await Task.findByPk(id);
    if (!task) {
        return res.status(404).json({
            msg: 'No existe un task con el id ' + id
        });
    }

    await task.update({ estado: false });

    // await task.destroy();

    res.json(task);
}