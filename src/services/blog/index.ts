import { Blog } from "@prisma/client";
import prisma from "../../config/prismaClient.config"

const findAll = async () => {
    return prisma.blog.findMany({
        include: {
            blogCar: true
        },
    });
}

const findById = async (id: string) => {
    return prisma.blog.findUnique({
        where: {
            id
        },
        include: {
            blogCar: true
        },
    })
}

const create = async (data: Omit<Blog, "id">) => {
    return prisma.blog.create({
        data,
    });
};

const update = async (id: string, data: Partial<Blog>) => {
    return prisma.blog.update({
        where: { id },
        data,
    });
};

const remove = async (id: string) => {
    return prisma.blog.delete({
        where: { id },
    });
};

type BlogCreateData = Blog & { carIds?: string[] };

const createBlogWithCar = async (data: Omit<BlogCreateData, "id">) => {
  const { carIds, ...restData } = data;
  return prisma.blog.create({
    data: {
      ...restData,
      blogCar: {
        create: carIds
          ? carIds.map((carId) => ({
              car: { connect: { id: carId } },
            }))
          : [],
      },
    },
  });
};

export const blogService = {
    findAll,
    findById,
    create,
    update,
    remove,
    createBlogWithCar
};