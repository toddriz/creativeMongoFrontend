import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient){ }

    public getPictures(){
        return this.http.get('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3011/pictures');
    }

    public submitPicture(url: string){
        const requestBody = { url };
        console.log('submit picture ', requestBody);
        return this.http.post('http://ec2-54-193-37-21.us-west-1.compute.amazonaws.com:3011/pictures', requestBody);
    }
}
