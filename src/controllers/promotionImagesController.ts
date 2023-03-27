import promotionImageService from "@/services/promoImageService";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getAllPromotionImages(req: Request, res: Response) {
    try {
        const images = await promotionImageService.findManyPromotionImages();
        return res.status(httpStatus.OK).send(images);
    } catch (error) {
        return res.status(error.status).send("Não temos promoções disponíveis no momento!");
    }
}
