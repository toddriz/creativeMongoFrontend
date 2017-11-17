import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'Mongo Mongo Mongo';

    apiData = null;
    imgUrl = '';

    constructor(private apiService: ApiService) {}

    ngOnInit() {
        this.loadApiData();
    }

    loadApiData() {
        this.apiData = [];
        this.apiService.getComments().subscribe((data) => {
            this.apiData = data;
            console.log(this.apiData);
        });
    }

    addApiData() {
        console.log('Adding ', this.imgUrl);
        this.apiData.push(this.imgUrl);
        this.imgUrl = '';

        // this.apiService.addApiData(this.imgUrl).subscribe((data) => {
        //     this.apiData.push(this.imgUrl);
        // })
    }





}
