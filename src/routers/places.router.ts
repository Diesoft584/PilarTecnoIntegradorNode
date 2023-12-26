import { Router } from "express";
import { getplacescontroller } from "../controller/getplaces.controller";
import { getplacesbyidcontroller } from "../controller/getplacesbyid.controller";
import { createplacescontroller } from "../controller/createplaces.controller";
import { validatePlacesBody } from "../middlewares/validationmiddleware";
import { updatePlacesController } from "../controller/updateplaces.controller";
import { validateUpdatePlacesBody} from "../middlewares/validationmiddleware";
import { deletePlacesController } from "../controller/deleteplaces.controller";

const router = Router();
  
  router.get("/", getplacescontroller)
  
  router.get("/:id", getplacesbyidcontroller);
  
  router.post("/", validatePlacesBody, createplacescontroller );

  router.patch("/:id", validateUpdatePlacesBody, updatePlacesController);

  router.delete("/:id", deletePlacesController);
  
  export {
        router
  }