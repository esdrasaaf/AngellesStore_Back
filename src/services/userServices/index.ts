import { notFoundError, unauthorizedError, badRequestError } from "@/errors";
import authRepositories from "@/repositories/authRepository";
import userRepository, { UserDataBody } from "@/repositories/userRepository";
import { User } from "@prisma/client";

async function findUserData(userId: number): Promise<User> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const user = await userRepository.getUserById(userId);
    if (!user) throw notFoundError();

    return user
}

async function updateUserData(userId: number, userData: UserDataBody): Promise<User> {
    const session = await authRepositories.findSessionByUserId(userId);
    if (!session) throw unauthorizedError();

    const user = await userRepository.getUserById(userId);
    if (!user) throw notFoundError();
    
    console.log(userData)
    return await userRepository.putUserDataById(userId, userData);
}

const userServices = {
    findUserData,
    updateUserData
}

export default userServices;