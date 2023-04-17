import { prisma } from "@/config";
import { Purchases } from "@prisma/client";

async function createPurchase(purchaseId: string, productId: number, userId: number): Promise<Purchases> {
    return prisma.purchases.create({
        data: {
            purchaseId,
            productId,
            userId
        }
    });
};

async function deletePurchase(purchaseId: string) {
    return prisma.purchases.deleteMany({
        where: {
            purchaseId
        }
    });
};

async function findManyPurchaseProducts(userId: number): Promise<Purchases[]> {
    return prisma.purchases.findMany({
        where: {
            userId,
            isCompleted: true
        },
        include: {
            Products: true
        }
    });
};

async function confirmPurchase(purchaseId: string) {
    return prisma.purchases.updateMany({
        data: {
            isCompleted: true
        },
        where: {
            purchaseId
        }
    });
};

const purchaseRepository = {
    createPurchase,
    deletePurchase,
    confirmPurchase,
    findManyPurchaseProducts
};

export default purchaseRepository;