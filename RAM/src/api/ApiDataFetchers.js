import { apiClient } from "./ApiClient";

//Buscador de vacantes disponibles para el limpiador
export const fetchJobsCleanerView = () =>
    apiClient.get(`/api/v1/auth/vacantes`);
