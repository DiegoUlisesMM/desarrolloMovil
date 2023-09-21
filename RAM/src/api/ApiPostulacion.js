import { apiClient } from "./ApiClient";


export const apiPostularse = (edad, descripcion, location, vacante, usuario) => apiClient.post('/api/v1/auth/nueva-postulacion', {
    descripcion,
    edad,
    location,
    vacante,
    usuario
})

export const apiAceptarPostulacion = (id) => apiClient.get(`/api/v1/auth/aceptar-postulacion/${id}`)