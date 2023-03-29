import { prisma } from "@/config";
import { Historics } from "@prisma/client";

async function getHistorics(userId: number): Promise<Historics[]> {
    return prisma.historics.findMany({
        where: {
            userId
        },
        orderBy: {
            updatedAt: "desc"
        },
        include: {
            Products: true
        }
    });
};

async function checkIfHistoricExist(userId: number, productId: number): Promise<Historics> {
    return prisma.historics.findFirst({
        where: {
            userId,
            productId
        }
    });
};

async function postHistorics(userId: number, productId: number): Promise<Historics> {
    return prisma.historics.create({
        data: {
            userId,
            productId
        }
    });
};

async function updateHistoric(id: number): Promise<Historics> {
    return prisma.historics.update({
        where: {
            id
        },
        data: {
            updatedAt: new Date()
        }
    });
};

const historicRepositories = {
    getHistorics,
    postHistorics,
    updateHistoric,
    checkIfHistoricExist
};

export default historicRepositories;