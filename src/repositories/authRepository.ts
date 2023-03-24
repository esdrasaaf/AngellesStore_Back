import { prisma } from "@/config";
import { User } from "@prisma/client";

async function checkDuplicateEmail(email: string): Promise<User> {
    return prisma.user.findFirst({
        where: {
            email
        }
    })
};

async function createNewUser(name: string, email: string, password: string): Promise<User> {
    return prisma.user.create({
        data: {
            name,
            email,
            password,
        }
    })
}

const authRepositories = {
    checkDuplicateEmail,
    createNewUser
};

export default authRepositories;