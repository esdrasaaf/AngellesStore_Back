import { prisma } from "@/config";
import { Categories } from "@prisma/client";

async function getCategories(): Promise<Categories[]> {
    return prisma.categories.findMany({});
};

const categoryRepository = {
    getCategories
};

export default categoryRepository;