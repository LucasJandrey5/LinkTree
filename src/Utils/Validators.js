const ValidateUsername = (username) => {
  return username?.toString().length >= 5;
};

const ValidateEmail = (email) => {
  return email?.toString().includes("@") && email?.toString().includes(".");
};

const ValidatePassword = (password) => {
  return password?.toString().length >= 8;
};

const ConfirmPassword = (password, confirmPassword) => {
  return password?.toString() === confirmPassword?.toString();
};

export { ValidateUsername, ValidateEmail, ValidatePassword, ConfirmPassword };
