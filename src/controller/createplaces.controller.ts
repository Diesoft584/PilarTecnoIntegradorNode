import { Request, Response} from "express";
import placesData from "../data/places.json"


export async function createplacescontroller(req:Request, res:Response) {
    const {
      id,
      areas,
      name,
      address,
      description,
      attention_hours,
      image,
      contact,
    } = req.body;
    const { latitud, length, map } = address || {};
    if (
      !id ||
      !areas ||
      !name ||
      !address ||
      !latitud ||
      !length ||
      !map ||
      !description ||
      !attention_hours ||
      !image ||
      !contact ||
      !contact.phone ||
      !contact.mail ||
      !contact.red_social ||
      !contact.page
    ) {
      res.status(400).json({
        error: "BAD_REQUEST",
        MESSAGE: `THERE ARE MISIING PARAMS FOR THIS REQUEST`,
      });
    }
    res.status(200).json({
        status:"OKEY",
    });
    }