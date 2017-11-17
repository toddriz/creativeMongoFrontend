import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';


@Injectable()
export class ApiService {

    constructor(private http: HttpClient){ }

    public getApiData() {
        this.http.get('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3008/apiData').subscribe((response) => {
            return response;
        });
    }

    public addApiData(pic) {
        // this.http.post('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3008/apiData/' + pic).subscribe((response) => {
        //     return response;
        // });
    }

    public getComments() {
        return this.http.get('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3006/comment');
    }

}
