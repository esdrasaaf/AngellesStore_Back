import { prisma } from "@/config";
import { PromotionsImages } from "@prisma/client";

async function getPromos(): Promise<PromotionsImages[]> {
    return prisma.promotionsImages.findMany({});
};

const promoImageRepository = {
    getPromos
};

export default promoImageRepository;