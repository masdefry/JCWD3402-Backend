import * as Yup from "yup";

export const registerEmployeeValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  employmentStatus: Yup.string().required("Employment status is required"),
  departmentId: Yup.string().required("Department is required"),
  positionId: Yup.string().required("Position is required"),
  workShiftId: Yup.string().required("Work shift is required"),
});