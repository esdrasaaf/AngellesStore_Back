import { prisma } from "@/config";
import { User } from "@prisma/client";
import bcrypt from 'bcrypt'

async function getUserById(userId: number): Promise<User> {
    return prisma.user.findFirst({
        where: {
            id: userId
        }
    });
};

async function putUserDataById(userId: number, userData: UserDataBody): Promise<User> {
    return prisma.user.update({
        where: {
            id: userId
        },
        data: {
            ...(userData.name && { name: userData.name }),
            ...(userData.image && { image: userData.image }),
            ...(userData.email && { email: userData.email }),
            ...(userData.password && { password: await bcrypt.hash(userData.password, 10) })
        }
    });
};

const userRepository = {
    getUserById,
    putUserDataById
};

export type UserDataBody = {
    image?: string;
    name?: string;
    email?: string;
    password?: string;
}

export default userRepository;