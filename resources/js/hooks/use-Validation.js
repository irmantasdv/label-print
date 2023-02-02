const useValidation = () => {

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    }
    const isValidPassword = (password) => {
      const passwordRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
      return passwordRegex.test(password);
    }
    const isValidText = (text) => {
      return text.length > 1;
    }
    const invalidEmailMessage = "Enter valid email";
    const invalidPasswodMessage = "Enter valid password. At least 8 characters, both uppercase and lowercase letters,numbers, at least one special character, e.g., ! @ # ?";
    const nameIsvalid = '';
  return {
    isValidEmail,
    invalidEmailMessage,
    invalidPasswodMessage,
    isValidPassword,
    isValidText,
    nameIsvalid

  }
}

export default useValidation