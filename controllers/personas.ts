import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Persona from '../models/persona';


export const getPersonas = async (req: Request, res: Response) => {

    try {
        const personas = await Persona.findAll({
            where: {
                estado: 1,
            }
        });

        res.json(personas);
    } catch (error) {
        console.error(error);
    }
}

export const getPersona = async (req: Request, res: Response) => {

    const { id } = req.params;

    const persona = await Persona.findByPk(id);

    if (persona) {
        res.json(persona);
    } else {
        res.status(404).json({
            msg: `No existe información con el id ${id}`
        });
    }
}

export const getPersonaUsuario = async (req: Request, res: Response) => {

    const { id } = req.params;
    const persona = await Persona.findOne({
        where: {
            idusuario: id
        }
    });

    if (persona) {
        res.json(persona);
    } else {
        res.status(404).json({
            msg: `No existe información con el id ${id}`
        });
    }
}

export const postPersona = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const persona = Persona.build(body);

        await persona.save();

        res.json(persona);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putPersona = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const persona = await Persona.findByPk(id);
        if (!persona) {
            return res.status(404).json({
                msg: 'No existe un persona con el id ' + id
            });
        }

        await persona.update(body);

        res.json(persona);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deletePersona = async (req: Request, res: Response) => {

    const { id } = req.params;

    const persona = await Persona.findByPk(id);
    if (!persona) {
        return res.status(404).json({
            msg: 'No existe un persona con el id ' + id
        });
    }

    await persona.update({ estado: false });

    // await persona.destroy();


    res.json(persona);
}