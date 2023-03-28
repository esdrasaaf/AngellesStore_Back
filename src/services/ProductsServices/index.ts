import { notFoundError, unauthorizedError } from "@/errors";
import authRepositories from "@/repositories/authRepository";
import productsRepositories from "@/repositories/productsRepository";
import { Products } from "@prisma/client";

async function findManyProducts(userId: number): Promise<Products[]>  {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const products = await productsRepositories.getProducts();
    if (products.length === 0) throw notFoundError();

    return products
}

async function findManyByCategoryId(userId: number, categoryId: number): Promise<Products[]>  {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const productsByCategory = await productsRepositories.getProductsByCategoryId(categoryId);
    if (productsByCategory.length === 0) throw notFoundError();

    return productsByCategory
}

async function findManyByColorId(userId: number, colorId: number): Promise<Products[]>  {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const productsByColor = await productsRepositories.getProductsByColorId(colorId);
    if (productsByColor.length === 0) throw notFoundError();

    return productsByColor
}

async function findManyByBrandId(userId: number, brandId: number): Promise<Products[]>  {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const productsByBrand = await productsRepositories.getProductsByBrandId(brandId);
    if (productsByBrand.length === 0) throw notFoundError();

    return productsByBrand
}

async function findManyReleases(userId: number): Promise<Products[]> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const releasesProducts = await productsRepositories.getReleaseProducts();
    if (releasesProducts.length === 0) throw notFoundError();

    return releasesProducts
}

async function findManyBestSellers(userId: number): Promise<Products[]> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const bestsellersProducts = await productsRepositories.getBestSellersProducts();
    if (bestsellersProducts.length === 0) throw notFoundError();

    return bestsellersProducts
}

const productsServices = {
    findManyProducts,
    findManyReleases,
    findManyBestSellers,
    findManyByCategoryId,
    findManyByColorId,
    findManyByBrandId
}

export default productsServices;