import { Request, Response } from 'express';
import { json } from 'sequelize/types';
import Proveedores from '../models/proveedor';


export const getProveedores = async (req: Request, res: Response) => {

    try {
        const proveedor = await Proveedores.findAll();

        res.json(proveedor);
    } catch (error) {
        console.log(error);
    }
}

export const getProveedor = async (req: Request, res: Response) => {

    const { id } = req.params;

    const proveedor = await Proveedores.findByPk(id);

    if (proveedor) {
        res.json(proveedor);
    } else {
        res.status(404).json({
            msg: `No existe un proveedor con el id ${id}`
        });
    }


}

export const postProveedor = async (req: Request, res: Response) => {

    const { body } = req;

    try {

        const proveedor = Proveedores.build(body);

        await proveedor.save();

        res.json(proveedor);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }



}

export const putProveedores = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const proveedor = await Proveedores.findByPk(id);
        if (!proveedor) {
            return res.status(404).json({
                msg: 'No existe un finca con el id ' + id
            });
        }

        await proveedor.update(body);

        res.json(proveedor);


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const deleteProveedores = async (req: Request, res: Response) => {

    const { id } = req.params;

    const proveedor = await Proveedores.findByPk(id);
    if (!proveedor) {
        return res.status(404).json({
            msg: 'No existe un finca con el id ' + id
        });
    }

    await proveedor.update({ estado: false });

    // await finca.destroy();

    res.json(proveedor);
}