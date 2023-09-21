import { createContext, useState, useContext } from "react";
import {
    executeJwtAuthenticationClearer,
    executeJwtAuthenticationClient,
    executeJwtAuthenticationService,
} from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [id, setId] = useState(null);

    async function loginClient(username, password) {
        try {
            const response = await executeJwtAuthenticationClient(
                username,
                password
            );
            if (response.status === 200) {
                const jwtToken = "Bearer " + response.data.token;
                setIsAuthenticated(true);
                setUsername(username);
                setToken(jwtToken);
                setUserData(response.data);
                setId(response.data.id);
                apiClient.interceptors.request.use((config) => {
                    config.headers.Authorization = jwtToken;
                    return config;
                });
                return true;
            } else if (response.status === 400) {
                logout();
                console.log("400 err", username, password);
                console.log(response.data);
                return false;
            } else {
                logout();
                console.log("else err", username, password);
                console.log(response.status);
                return false;
            }
        } catch (error) {
            logout();
            console.log("catch err", username, password);
            console.log("Error en la autenticación:", error);
            return false;
        }
    }

    async function loginClearer(username, password) {
        try {
            const response = await executeJwtAuthenticationClearer(
                username,
                password
            );
            if (response.status === 200) {
                const jwtToken = "Bearer " + response.data.token;
                setIsAuthenticated(true);
                setUsername(username);
                setToken(jwtToken);
                setUserData(response.data);
                setId(response.data.id);
                apiClient.interceptors.request.use((config) => {
                    config.headers.Authorization = jwtToken;
                    return config;
                });
                return true;
            } else if (response.status === 400) {
                logout();
                console.log(response.data);
                return false;
            } else if (response.status === 403) {
                logout();
                console.log(response.data);
                return false;
            } else {
                logout();
                console.log(response.status);
                return false;
            }
        } catch (error) {
            logout();
            console.log("Error en la autenticación:", error);
            return false;
        }
    }

    // JWT AUTHENTICATION
    // async function login(username, password) {
    //     try {
    //         const response = await executeJwtAuthenticationService(username, password);

    //         setIsAuthenticated(false);

    //         if (response.status === 200) {

    //             const jwtToken = "Bearer " + response.data.token;
    //             setIsAuthenticated(true);
    //             setUsername(username);
    //             setToken(jwtToken);
    //             setUserData(response.data);
    //             console.log(response.data);
    //             apiClient.interceptors.request.use((config) => {
    //                 console.log("intercepting and adding token");
    //                 config.headers.Authorization = jwtToken;
    //                 return config;
    //             });

    //             return true;
    //         } else {
    //             logout();
    //             return false;
    //         }
    //     } catch (error) {
    //         logout()
    //         return false;
    //     }
    // }

    function logout() {
        setIsAuthenticated(false);
        setToken(null);
        setUsername(null);
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                loginClearer,
                loginClient,
                logout,
                username,
                token,
                userData,
                id,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
