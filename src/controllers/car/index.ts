import { Request, Response } from "express"
import { CarService } from "../../services/car"
import { formatResponse } from "../../utils/formatResponse"


export const getAllCar = async (req: Request, res: Response) => {
    const data = await CarService.findAll()

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const getCarById = async (req: Request, res: Response) => {
    const { id } = req.params

    const data = await CarService.findById(id)

    if (!data) {
        res.status(404).json(formatResponse(404, 'Data Not Found', null))
        return
    }

    res.status(200).json(formatResponse(200, 'success', data))
}

export const createCar = async (req: Request, res: Response) => {
    try {
        const newCar = await CarService.create(req.body);
        res.json(formatResponse(200, "Success", newCar));
    } catch (error: any) {
        res.status(500).json({ error: `Failed to create car : ${error.message}` });
    }
}

export const updateCarById = async (req: Request, res: Response) => {
    try {
        const { id } = req.body

        const data = await CarService.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newCar = await CarService.update(id, req.body);
        res.json(formatResponse(200, "Success", newCar));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to update car : ${error.message}` });
    }
}

export const deleteCarById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const data = await CarService.findById(id)

        if (!data) {
            res.status(404).json(formatResponse(404, 'Data Not Found', null))
            return
        }

        const newCar = await CarService.remove(id);
        res.json(formatResponse(200, "Success", newCar));

    } catch (error: any) {
        res.status(500).json({ error: `Failed to delete car : ${error.message}` });
    }
}