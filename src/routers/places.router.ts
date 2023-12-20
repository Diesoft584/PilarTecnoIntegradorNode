import { Router } from "express";
import { getplacescontroller } from "../controller/getplaces.controller";
import { getplacesbyidcontroller } from "../controller/getplacesbyid.controller";
import { createplacescontroller } from "../controller/createplaces.controller";
import { validatePlacesBody } from "../middlewares/validationmiddleware";

const router = Router();
  
  router.get("/", getplacescontroller)
  
  router.get("/:name", getplacesbyidcontroller);
  
  router.post("/", validatePlacesBody, createplacescontroller );
  
  export {
        router
  }