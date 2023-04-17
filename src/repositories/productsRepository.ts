import { prisma } from "@/config";
import { Products } from "@prisma/client";

async function getProducts(): Promise<Products[]> {
    return prisma.products.findMany({
        orderBy:{
            id: 'asc'
        }
    });
};

async function getProductsById(id: number): Promise<Products> {
    return prisma.products.findFirst({
        where: { 
            id 
        },
        include: {
            Categories: true,
            Colors: true,
            Brands: true
        }
    })
};

async function getProductsByCategoryId(categoryId: number): Promise<Products[]> {
    return prisma.products.findMany({
        where: {
            categoryId
        }, 
        orderBy: {
            id: 'asc'
        }
    });
};

async function getProductsByColorId(colorId: number): Promise<Products[]> {
    return prisma.products.findMany({
        where: {
            colorId
        }, 
        orderBy: {
            id: 'asc'
        }
    });
};

async function getProductsByBrandId(brandId: number): Promise<Products[]> {
    return prisma.products.findMany({
        where: {
            brandId
        }, 
        orderBy: {
            id: 'asc'
        }
    });
};

async function getReleaseProducts(): Promise<Products[]> {
    return prisma.products.findMany({
        take: 10,
        orderBy: {
            createdAt: 'desc'
        }
    });
};

async function getBestSellersProducts(): Promise<Products[]> {
    return prisma.products.findMany({
        take: 10,
        orderBy: {
            numberOfSales: 'desc'
        }
    });
};

const productsRepositories = {
    getProducts,
    getProductsById,
    getProductsByCategoryId,
    getProductsByBrandId,
    getProductsByColorId,
    getReleaseProducts,
    getBestSellersProducts
};

export default productsRepositories;