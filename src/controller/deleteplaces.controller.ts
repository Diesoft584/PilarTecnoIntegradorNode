import { NextFunction, Request, Response } from "express";
import { deletePlacesById } from "../services/places.service";

export async function deletePlacesController(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const deletedPlace = await deletePlacesById(id);
    if (!deletedPlace) {
      return res.status(404).json({ message: `Place with ID ${id} not found` });
    }
    res.status(200).json({ message: `Place with ID ${id} deleted successfully` });
  } catch (error) {
    next(error);
  }
}
