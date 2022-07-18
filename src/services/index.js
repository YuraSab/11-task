import {ProductService} from "./productService";
import {httpClient} from "./httpClient";

export const services = {
    productService: new ProductService(httpClient)
};

export const useServices = () => {
    return services
};