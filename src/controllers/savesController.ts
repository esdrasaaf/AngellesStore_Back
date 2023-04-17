import { AuthenticatedRequest } from "@/middlewares/authenticationMiddleware";
import savedServices from "@/services/saveServices";
import { Response } from "express";
import httpStatus from "http-status";

export async function getSavedProducts(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;

    try {
        const savedProducts = await savedServices.findManySaveds(userId);
        return res.status(httpStatus.OK).send(savedProducts);
    } catch (error) {
        if (error.status === 401) return res.status(httpStatus.UNAUTHORIZED).send("Você precisa estar logado para ver os produtos salvos!");
        return res.status(httpStatus.NOT_FOUND).send("Você não salvou nenhum produto ainda!");
    }
}

export async function postSave(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    const { productId } = req.body;

    try {
        const savedProducts = await savedServices.createSavedProduct(userId, productId);
        if (savedProducts === "delete") return res.status(httpStatus.OK).send("Produto retirado da sua lista com sucesso!");
        return res.status(httpStatus.CREATED).send(`${savedProducts.Products.name} adicionado com sucesso!`);
    } catch (error) {
        if (error.status === 401) return res.status(httpStatus.UNAUTHORIZED).send("Você precisa estar logado para salvar um produto!");
        return res.status(httpStatus.FORBIDDEN).send("O produto que você quer salvar não existe!");
    }
}
