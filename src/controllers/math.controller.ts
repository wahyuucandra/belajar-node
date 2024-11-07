import { Request, Response } from "express";
import { formatResponse } from "../utils/formatResponse";
import { sMathOperation } from "../services/math.services";
import { deleteHistory, getAllHistory, logHistory } from "../utils/history";

const operations = [
    { id: '1', name: 'add', expression: '+' },
    { id: '2', name: 'substract', expression: '-' },
    { id: '3', name: 'multiply', expression: '*' },
    { id: '4', name: 'divide', expression: '/' },
]

export const getAllOperation = (req: Request, res: Response) => {

    if (operations.length > 0) {
        res.status(200).json(formatResponse(200, "success", operations));
    } else {
        res.status(404).json(formatResponse(200, "operation not found", operations));
    }
}

export const getMathWithQuery = (req: Request, res: Response) => {
    const { valueA, valueB, operation } = req.query

    if (!valueA || !operation || !valueB) {
        res.status(400).json(formatResponse(400, "Invalid value or operation", null));
    }

    const numA = Number(valueA)
    const numB = Number(valueB)

    try {
        const result = sMathOperation(numA, numB, operation as string)

        if (result !== null) {
            const data = logHistory(operation as string, numA, numB, result)
            res.status(200).json(formatResponse(200, "success", data))
        } else {
            res.status(400).json(formatResponse(400, "Dividen by zero is not allowed", null))
        }
    } catch (err: any) {
        res.status(500).json(formatResponse(500, err.message, null))
    }
}

export const getMathWithParams = (req: Request, res: Response) => {
    const { valueA, operation, valueB } = req.params

    if (!valueA || !operation || !valueB) {
        res.status(400).json(formatResponse(400, "Invalid value or operation", null));
    }

    const numA = Number(valueA)
    const numB = Number(valueB)

    CMathOperations(req, res, numA, numB, operation)
}

export const postMathWithBody = (req: Request, res: Response) => {
    const { valueA, operation, valueB } = req.body

    if (!valueA || !operation || !valueB) {
        res.status(400).json(formatResponse(400, "Invalid value or operation", null));
    }

    const numA = Number(valueA)
    const numB = Number(valueB)

    CMathOperations(req, res, numA, numB, operation)
}

export const getAllHistories = (req: Request, res: Response) => {
    try {
        const result = getAllHistory()
        if(result.length > 0)
            res.status(200).json(formatResponse(200, "success", result))
        else
            res.status(200).json(formatResponse(200, "history not found", result))

    } catch (err: any) {
        res.status(500).json(formatResponse(500, err.message, null))
    }
}

export const deleteHistoryByIndex = (req: Request, res: Response) => {
    const { id } = req.params

    const historyIndex = Number(id)

    if (historyIndex === -1) {
        res.status(404).json(formatResponse(404, "history not found", null))
    }
    else {
        const result = deleteHistory(historyIndex)
        res.json(formatResponse(200, "Success", result));
    }
}

const CMathOperations = (
    req: Request,
    res: Response,
    numA: number,
    numB: number,
    operation: string
) => {
    try {
        const result = sMathOperation(numA, numB, operation)

        if (result !== null) {
            const data = logHistory(operation, numA, numB, result)
            res.status(200).json(formatResponse(200, "success", data))
        } else {
            res.status(400).json(formatResponse(400, "Dividen by zero is not allowed", null))
        }
    } catch (err: any) {
        res.status(500).json(formatResponse(500, err.message, null))
    }
}