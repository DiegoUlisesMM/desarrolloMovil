import { apiClient } from "./ApiClient";

export const apiGetTrabajador = (username, token) => apiClient.get(`/api/v1/user/${username}`, {
    headers: {
        Authorization: token,
    }
})

export const apiUpdateTrabajador = (id, updatedUserData, token) => apiClient.patch(`/api/v1/users/edit/${id}`, updatedUserData, {
    headers: {
        Authorization: token,
    }
})