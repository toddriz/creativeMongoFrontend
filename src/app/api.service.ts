import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient){ }

    public getApiData() {
        this.http.get('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3008/apiData').subscribe((response) => {
            return response;
        });
    }

    public getComments() {
        this.http.get('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3006/comment').subscribe((response) => {
            return response;
        });
    }

}
