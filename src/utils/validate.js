export const checkValidCredentials = (email, password) => {

    const isEmailValid = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(password);

    if (!email && !password) return "Please enter any values."
    if (!email) return "Please enter Email ID."
    if (!password) return "Please enter password."
    if (!isEmailValid) return "Email ID is not valid"

    if (password && !isPasswordValid) return "Password must contain at least 8 characters, at least one number and both lower and uppercase letters and special characters."

    else if (!password)
        return "Please enter password."


}

export const checkFullNameValid = (fullName) => {
    const isFullNameValid = /^[a-zA-Z]+(([ ][a-zA-Z ])?[a-zA-Z]*)*$/.test(fullName)
    if (!fullName) {
        return "Please enter full name."
    }
    else if (fullName && !isFullNameValid) {
        return "Please enter valid full name."
    }
}