import { unauthorizedError } from "@/errors";
import authRepositories from "@/repositories/authRepository";
import { User } from "@prisma/client";
import bcrypt from "bcrypt"


async function createUser(name: string, email: string, password: string): Promise<User> {
    const user = await authRepositories.checkDuplicateEmail(email);
    if (user) throw unauthorizedError();

    const hashedPassword = await bcrypt.hash(password, 10);
    return await authRepositories.createNewUser(name, email, hashedPassword);
}

const authServices ={
    createUser
}

export default authServices;