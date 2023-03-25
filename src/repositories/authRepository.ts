import { prisma } from "@/config";
import { Session, User } from "@prisma/client";

async function checkDuplicateEmail(email: string): Promise<User> {
    return prisma.user.findFirst({
        where: {
            email
        }
    });
};

async function createNewUser(name: string, email: string, password: string): Promise<User> {
    return prisma.user.create({
        data: {
            name,
            email,
            password,
        }
    });
};

async function createSession(userId: number, token: string): Promise<Session> {
    return prisma.session.create({
        data: {
            userId,
            token
        }
    });
};

async function findSessionByUserId(userId: number): Promise<Session> {
    return prisma.session.findFirst({
        where: {
            userId,
        }
    });
};

async function deleteSession(sessionId: number): Promise<Session> {
    return prisma.session.delete({
        where: {
            id: sessionId
        }
    });
};

const authRepositories = {
    checkDuplicateEmail,
    createNewUser,
    createSession,
    findSessionByUserId,
    deleteSession
};

export default authRepositories;