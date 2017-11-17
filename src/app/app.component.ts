import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'Mongo Mongo Mongo';
    imgUrl: string;
    pictures = [];

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.loadApiData();
    }

    loadApiData() {
        this.apiService.getPictures().subscribe((response: Response) => {
            console.log(response);
            this.pictures = [response.body];
        });
    }

    addApiData() {
        console.log('Adding ', this.imgUrl);
        this.pictures.push(this.imgUrl);

        this.apiService.submitPicture(this.imgUrl).subscribe();
    }





}
