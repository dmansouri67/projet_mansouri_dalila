import { HttpHeaders, HTTP_INTERCEPTORS } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { ApiHttpInterceptor } from "../core/api-http-interceptor";

export class ServiceBase {
    apiUrl: string = environment.api;

    constructor() {

    }
}