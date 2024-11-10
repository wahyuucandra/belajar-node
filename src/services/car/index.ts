import { Car } from "@prisma/client";
import prisma from "../../config/prismaClient.config"

const findAll = async () => {
    return prisma.car.findMany({
        include: {
            blogCar: true,
            iklans: true
        },
    });
}

const findById = async (id: string) => {
    return prisma.car.findUnique({
        where: {
            id
        },
        include: {
            iklans: true,
            blogCar: true
        },
    })
}

const create = async (data: Omit<Car, "id">) => {
    return prisma.car.create({
        data,
    });
};

const update = async (id: string, data: Partial<Car>) => {
    return prisma.car.update({
        where: { id },
        data,
    });
};

const remove = async (id: string) => {
    return prisma.car.delete({
        where: { id },
    });
};

export const CarService = {
    findAll,
    findById,
    create,
    update,
    remove,
};