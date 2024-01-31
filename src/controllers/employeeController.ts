import { ExpressFunction } from "../types/expressFunction";
import Emp from "../models/employeeModel";

export const getAllEmployees: ExpressFunction = async (req, res) => {
    try {
      const employees = await Emp.find();
      
        res.status(200).json({
        status: "success",
        results: employees.length,
        data: {
            employees,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };

export const addEmployee: ExpressFunction = async (req, res) => {
    try {
      const newEmployee = await Emp.create(req.body);
  
      res.status(200).json({
        status: "success",
        data: {
          employee: newEmployee,
        },
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err,
      });
    }
  };

  /* export const updateByEmployeeID: ExpressFunction = async (req, res) => {
    try {
        const { employeeID } = req.params;
        const updatedEmployee = await Emp.findOneAndUpdate(
            { employeeID: employeeID },
            req.body,
            { new: true }
        );

        if (!updatedEmployee) {
            return res.status(404).json({
                status: "fail",
                message: "Employee not found",
            });
        }

        res.status(200).json({
            status: "success",
            data: {
                employee: updatedEmployee,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

export const deleteByEmployeeID: ExpressFunction = async (req, res) => {
  try {
      const { employeeID } = req.params;
      const deletedEmployee = await Emp.findOneAndDelete({ employeeID: employeeID });

      if (!deletedEmployee) {
          return res.status(404).json({
              status: "fail",
              message: "Employee not found",
          });
      }

      res.status(200).json({
          status: "success",
          data: {
              employee: deletedEmployee,
          },
      });
  } catch (err) {
      res.status(400).json({
          status: "fail",
          message: err,
      });
  }
}; */

