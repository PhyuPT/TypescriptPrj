import express from "express";
//import { getAllEmployees, addEmployee } from "../controllers/employeeController";
import { getAllEmployees, addEmployee} from "../controllers/employeeController";
const router = express.Router();

// http://localhost:8000/todos
router.route("/")
.get(getAllEmployees) // GET  http://localhost:8000/todos
.post(addEmployee)// POST  http://localhost:8000/todos

router.route("/:id")


export default router;