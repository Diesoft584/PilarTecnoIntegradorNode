import { NextFunction,Request,Response } from "express";
import joi from 'joi'


export function validatePlacesBody(req: Request, res: Response, next: NextFunction){
    const {body} = req
    const schema = joi.object({
        id:joi.number().integer().required(),
        areas: joi.string(). required(),
        name: joi.string(). required(),
        address:joi.object({
            latitud: joi.number().integer().required(),
            length: joi.number().integer().required(),
            map: joi.string().required()
        }).required(),
        description:joi.string(). required(),
        attention_hours:joi.string(). required(),
        image:joi.string(). required(),
        contact:joi.object({
            contact_phone: joi.string().required(),
            contact_mail: joi.string().required(),
            contact_red_social: joi.string().required(),
            contact_page: joi.string().required(),
        }).required(),              
    
    })

    const {error, value} =  schema.validate(body)
    if(error){
        return res.status(400).json({
            message: error.details[0].message
        })
    }
      next()
}