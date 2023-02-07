import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Task from '../models/task';


export const getTasks = async (req: Request, res: Response) => {
    try {
        const task = await Task.findAll();

        res.json(task);
    } catch (error) {
        console.log(error);
    }
}

export const getTask = async (req: Request, res: Response) => {

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

export const postTask = async (req: Request, res: Response) => {

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

export const putTask = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
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


export const deleteTask = async (req: Request, res: Response) => {

    const { id } = req.params;

    const task = await Task.findByPk(id);
    if (!task) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await task.update({ estado: false });

    // await finca.destroy();

    res.json(task);
}