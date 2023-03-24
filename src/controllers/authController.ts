import { SignUpParams } from "@/protocols";
import authServices from "@/services/authServices";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function signUpPost(req: Request, res: Response) {
    const { name, email, password } = req.body as SignUpParams;

    try {
        const createdUser = await authServices.createUser(name, email, password);
        return res.status(httpStatus.CREATED).send(`Your id is ${createdUser.id}`);
    } catch (err) {
        console.log(err)
        return res.status(err.status).send("E-mail já cadastrado, tente novamente com outro!");
    }
}

export async function signInPost(req: Request, res: Response) {

}
