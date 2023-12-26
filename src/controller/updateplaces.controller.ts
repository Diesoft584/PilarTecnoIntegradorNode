import { NextFunction, Request, Response } from "express";
import { updatePlaces } from "../services/places.service";

export async function updatePlacesController(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
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

    const updatedPlacesData = {
      areas,
      name,
      address: { latitud, length, map },
      description,
      attention_hours,
      image,
      contact,
    };

    const updatedPlaces = await updatePlaces(id, updatedPlacesData);
    res.status(200).json(updatedPlaces);
  } catch (error) {
    next(error);
  }
}
