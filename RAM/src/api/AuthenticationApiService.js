import { apiClient } from "./ApiClient";

// export const executeJwtAuthenticationService = (username, password) =>
//     apiClient.post(`/authenticate`, {
//         username,
//         password,
//     });

export const executeJwtAuthenticationClient = (username, password) => apiClient.post(`/authenticate/client`, {
    username,
    password,
})

export const executeJwtAuthenticationClearer = (username, password) => apiClient.post(`/authenticate/clearer`, {
    username,
    password,
})
