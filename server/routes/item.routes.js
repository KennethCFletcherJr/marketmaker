import Router from "express";
//Router from express is a default function? So no braces.
import {
    createItem,
    getAllItems,
    getOneItem,
    updateOneItem,
    deleteOneItem,
} from "../controllers/item.controllers.js";

const router = Router();

//all routes with the ("/items") path.
router.route("/items")
.get(getAllItems)
.post(createItem);

//all the routes with the ("/items/:id") path.
router.route("/items/:id")
  .get(getOneItem)
  .put(updateOneItem)
  .delete(deleteOneItem);

export default router;
