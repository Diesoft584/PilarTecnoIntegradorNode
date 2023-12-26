import { NextFunction, Request, Response} from "express";
import { getplacesbyid } from "../services/places.service";

export async function getplacesbyidcontroller(req:Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id
    const places = await getplacesbyid(id)
    if(!places){
      res.status(404).json({
        info:`Places with ID ${id} not found`
      })
    }
    res.json(places);
  } catch (error) {
    next(error)
}
  }