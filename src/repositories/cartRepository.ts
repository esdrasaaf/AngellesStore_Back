import { prisma } from "@/config";
import { Cart, Products } from "@prisma/client";

async function getCartByUserId(userId: number): Promise<Cart[]> {
    return prisma.cart.findMany({
        where: {
            userId
        },
        include: {
            Products: true
        }
    });
};

async function getCartById(id: number): Promise<Cart> {
    return prisma.cart.findFirst({
        where: {
            id
        }
    });
};

async function postCartObj(userId: number, productId: number): Promise<CartWithProduct> {
    return prisma.cart.create({
        data: {
            userId,
            productId
        },
        include: {
            Products: true
        }
    });
};

async function deleteCart(id: number): Promise<CartWithProduct> {
    return prisma.cart.delete({
        where: {
            id
        },
        include: {
            Products: true
        }
    });
};

export type CartWithProduct = Cart & { Products: Products }

const cartRepository = {
    getCartByUserId,
    postCartObj,
    deleteCart,
    getCartById
};

export default cartRepository;