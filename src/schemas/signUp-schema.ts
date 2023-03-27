import Joi from "joi";
import { SignUpParams } from "@/protocols";

export const createUserSchema = Joi.object<SignUpParams>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });
  