import { Iklan } from "@prisma/client";
import prisma from "../../config/prismaClient.config"

const findAll = async () => {
    return prisma.iklan.findMany({
        include: {
            car:true
        },
    });
}

const findById = async (id: string) => {
    return prisma.iklan.findUnique({
        where: {
            id
        },
        include: {
            car:true
        },
    })
}

const create = async (data: Omit<Iklan, "id">) => {
    return prisma.iklan.create({
        data,
    });
};

const update = async (id: string, data: Partial<Iklan>) => {
    return prisma.iklan.update({
        where: { id },
        data,
    });
};

const remove = async (id: string) => {
    return prisma.iklan.delete({
        where: { id },
    });
};

export const IklanService = {
    findAll,
    findById,
    create,
    update,
    remove,
};