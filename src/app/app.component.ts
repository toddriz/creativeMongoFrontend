import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'Mongo Mongo Mongo';

    apiData = null;

    constructor(private apiService: ApiService) {}

    getApiData() {
        this.apiData = this.apiService.getComments();
    }
}
