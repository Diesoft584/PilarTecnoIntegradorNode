import { NextFunction,Request, Response} from "express";
import { Iplaces } from "../Interfaces/Iplaces";
import { createplaces } from "../services/places.service";

export async function createplacescontroller(req: Request, res: Response, next: NextFunction) {
  try {
    const {
      areas,
      name,
      address,
      description,
      attention_hours,
      image,
      contact,
    } = req.body;

    if (!areas || !name || !address || !description || !attention_hours || !contact) {
      return res.status(400).json({
        error: "BAD_REQUEST",
        message: "Missing required fields in the request",
      });
    }

    const { latitud, length, map } = address || {};

    const placesData: Iplaces = {
      areas,
      name,
      address: { latitud, length, map }, 
      description,
      attention_hours,
      image,
      contact,
    };

    const response = await createplaces(placesData);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
}