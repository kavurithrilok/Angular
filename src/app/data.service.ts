import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const key = 'AIzaSyBFcZOIYqk_s0-qilRmve1TjMCXhYxUP3c';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {}

    registerUser(data) {
        let body = JSON.stringify(data);
        console.log(data)
        var url = 'http://localhost:8080/saveUser'
        console.log(url)
        return this.http.post(url, body, httpOptions);
    }

    logInUser(data) {
        console.log("loginUser===>"+data)
        var url = 'http://localhost:8080/api/loginUser';
        return this.http.get(url, data)
    }

    getLocationDetails(place) {
        console.log(place)
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + place.details + '&key=' + key;
        return this.http.get(url)
    }


}
