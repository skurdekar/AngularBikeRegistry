import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class BikeService {

    private serviceURI = '/server/api/v1/bikes/';

    constructor(private http: HttpClient) { }

    public getBikes() {
        const token = localStorage.getItem('access_token');
        console.log(token);
        return this.http.get(this.serviceURI,
            {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
    }

    public getBike(id: number) {
        const token = localStorage.getItem('access_token');
        console.log(token);
        return this.http.get(this.serviceURI + id,
            {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)});
    }

    public registerBike(bike) {
        const body = JSON.stringify(bike);
        return this.http.post(this.serviceURI, body, httpOptions);
    }
}
