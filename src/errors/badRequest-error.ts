import { ApplicationError } from "@/protocols/applicationErrors";

export function unauthorizedError(): ApplicationError {
  return {
    name: "BadRequestError",
    message: "You made a bad request",
    status: 400
  };
}
