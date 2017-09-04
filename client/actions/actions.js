function createRequestTypes (base){
    return {
        REQUEST: base + "_REQUEST",
        SUCCESS: base + "_SUCCESS",
        FAILURE: base + "_FAILURE",
    }
}

export const LOGIN = createRequestTypes("LOGIN");
export const LOGOUT = createRequestTypes("LOGOUT");
export const USERS = createRequestTypes("USERS");

export const login = {
    // Notify the intent to fetch recipes
    request: request => ({type: LOGIN.REQUEST, request}),
    // Send the response
    success: response => ({type: LOGIN.SUCCESS, response}),
    // Send the error
    error: error => ({type: LOGIN.FAILURE, error})
};

export const logout = {
    // Notify the intent to fetch recipes
    request: request => ({type: LOGOUT.REQUEST, request}),
    // Send the response
    success: response => ({type: LOGOUT.SUCCESS, response}),
    // Send the error
    error: error => ({type: LOGOUT.FAILURE, error})
};

export const users = {
    // Notify the intent to fetch recipes
    request: request => ({type: USERS.REQUEST, request}),
    // Send the response
    success: response => ({type: USERS.SUCCESS, response}),
    // Send the error
    error: error => ({type: USERS.FAILURE, error})
};