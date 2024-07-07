const signupValidationSchema = {
  first_name: {
    notEmpty: true,
  },
  last_name: {
    notEmpty: true,
  },
  email: {
    notEmpty: true,
  },
  password: {
    notEmpty: true,
  },
};

const loginValidationSchema = {
  email: {
    notEmpty: true,
  },
  password: {
    notEmpty: true,
  },
};

export { signupValidationSchema, loginValidationSchema };
