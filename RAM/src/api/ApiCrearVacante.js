import { apiClient } from "./ApiClient";

// export const executeJwtAuthenticationService = (username, password) =>
//     apiClient.post(`/authenticate`, {
//         username,
//         password,
//     });

export const apiCrearVacante = (descripcion, numHabitaciones, numBanios, extras, total, cliente, photo) => apiClient.post(`/api/v1/auth/nueva-vacante`, {
    descripcion,
    numHabitaciones,
    numBanios,
    extras,
    total,
    cliente,
    photo
})