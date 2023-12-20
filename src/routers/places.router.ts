import { Router } from "express";
import { getplacescontroller } from "../controller/getplaces.controller";
import { getplacesbynamecontroller } from "../controller/getplacesbyname.controller";
import { createplacescontroller } from "../controller/createplaces.controller";

const router = Router();
  
  router.get("/", getplacescontroller)
  
  router.get("/:name", getplacesbynamecontroller);
  
  router.post("/", createplacescontroller );
  
  export {
        router
  }