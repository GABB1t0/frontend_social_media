export interface LoginAPIResponse {
    data:       Data;
    status:     number;
    statusText: string;
    headers:    LoginAPIResponseHeaders;
    config:     Config;
    request:    Request;
}

export interface Config {
    transitional:      Transitional;
    adapter:           string[];
    transformRequest:  null[];
    transformResponse: null[];
    timeout:           number;
    xsrfCookieName:    string;
    xsrfHeaderName:    string;
    maxContentLength:  number;
    maxBodyLength:     number;
    env:               Request;
    headers:           ConfigHeaders;
    baseURL:           string;
    method:            string;
    url:               string;
    data:              Request;
}

export interface Request {
}

export interface ConfigHeaders {
    Accept: string;
}

export interface Transitional {
    silentJSONParsing:   boolean;
    forcedJSONParsing:   boolean;
    clarifyTimeoutError: boolean;
}

export interface Data {
    message: string;
    token:   string;
}

export interface LoginAPIResponseHeaders {
    "cache-control": string;
    "content-type":  string;
}
