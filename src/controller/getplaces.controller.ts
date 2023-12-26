import { NextFunction, Request, Response} from "express";
import { getallplaces } from "../services/places.service";


export async function getplacescontroller(req:Request, res: Response, next: NextFunction) {
    try {
      const name =  req.query.name as string | undefined 
      const places = await getallplaces(name)
      res.status(200).json(places);
    } catch (error) {
      next(error)
  }
  }