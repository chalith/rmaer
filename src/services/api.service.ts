import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    private url = 'http://localhost:5069/';
    private jwt;

    constructor(private http: HttpClient) {
        this.jwt = localStorage.getItem('jwt');
    }

    get(method: string, params: any) {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        if (this.jwt)
            headers.set('Authorization', 'Bearer ' + this.jwt);
        return this.http.get(this.url + method, { headers: headers, params: params });
    }

    post(method: string, params: any, data: any) {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        if (this.jwt)
            headers.set('Authorization', 'Bearer ' + this.jwt);
        return this.http.post(this.url + method, data, { headers: headers, params: params });
    }

    put(method: string, params: any, data: any) {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        if (this.jwt)
            headers.set('Authorization', 'Bearer ' + this.jwt);
        return this.http.put(this.url + method, data, { headers: headers, params: params });
    }

    delete(method: string, params: any) {
        let headers = new HttpHeaders()
            .set('Content-Type', 'application/json');
        if (this.jwt)
            headers.set('Authorization', 'Bearer ' + this.jwt);
        return this.http.delete(this.url + method, { headers: headers, params: params });
    }
}