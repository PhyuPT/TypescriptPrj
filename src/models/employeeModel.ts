import { type InferSchemaType, Schema, model } from "mongoose";

const EmployeeSchema = new Schema({
    FirstName: {
      type: String,
      require: [true, "First Name"],
      trim: true,
      maxlength: [50, "First Name has a max of 10 chars"],
      minlength: [3, "First Name has a min of 3 chars"],
    },
    LastName: {
        type: String,
        require: [true, "Last Name"],
        trim: true,
        maxlength: [50, "Last Name has a max of 10 chars"],
        minlength: [3, "Last Name has a min of 3 chars"],
      },
      PayRate: {
      type: Number,
    },
  });

type Employee = InferSchemaType<typeof EmployeeSchema>;

export default model<Employee>("Employee", EmployeeSchema);






