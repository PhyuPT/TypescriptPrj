import { type Request, type Response, type NextFunction } from "express";

export type ExpressFunction = (
  req: Request,
  res: Response,
  next: NextFunction,
  val?: string
) => void | Promise<void>;
/*
// Define the route handler function with parameters
export const myRouteHandler: ExpressFunction = async (
  req,
  res,
  next,
  param1,
  param2
) => {
  try {
    // Access the parameters passed in the request
    const { id } = req.params;
    const { queryParam } = req.query;
    
    // Your logic here using the parameters
    
    // Send a response
    res.status(200).json({ id, queryParam });
  } catch (err) {
    // Handle errors
    next(err);
  }
};
*/