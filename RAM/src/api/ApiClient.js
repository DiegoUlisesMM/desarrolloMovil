import axios from "axios";

export const apiClient = axios.create({

    baseURL: "https://rentamaid.purpleflower-eb9a70f1.westus2.azurecontainerapps.io",

});
