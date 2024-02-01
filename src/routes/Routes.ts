import express from "express";
import { getAllEmployees, addEmployee } from "../controllers/employeeController";
//import { deleteEmpbyID } from "../controllers/employeeController"; 
const router = express.Router();

/**
 * @openapi
 * /api/v1/employee:
 *   post:
 *     tags:
 *       - Employee
 *     description: Create a new employee
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               FirstName:
 *                 type: string
 *               LastName:
 *                 type: string
 *               PayRate:
 *                 type: number
 *     responses:
 *       201:
 *         description: Employee created successfully
 *       400:
 *         description: Invalid data sent
 */

/**
 * @openapi
 * /api/v1/employee:
 *   get:
 *     tags:
 *       - Employee
 *     description: Get all Employee
 *     responses:
 *       200:
 *         description: successfully queued all Employee
 *       400:
 *         description: Unable to get Employee data
 */

// http://localhost:8000/employee
router.route("/")
    .get(getAllEmployees) // GET  http://localhost:8000/employee
    .post(addEmployee)// POST  http://localhost:8000/employee

router.route("/:id")

/* router.route("/:id")
    .delete(deleteEmpbyID) // DELETE  http://localhost:8000/employee
*/
export default router;