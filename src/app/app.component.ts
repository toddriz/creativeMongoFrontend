import { Component } from '@angular/core';

import { RockInfoComponent } from './rock-info/rock-info.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RockService } from './rock.service';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    title = 'We Will Rock You';
    firstName: string = '';
    lastName: string = '';
    firstNameMineral: object;
    lastNameMineral: object;
    firstMineral: null;
    lastMineral: null;
    apiData = null;

    constructor(private rockService: RockService, private apiService: ApiService) { }

    getApiData() {

        this.apiData = this.apiService.getComments();
    }

    isTriggered(event) {
        this.firstMineral = this.rockService.getRandomMineral(event['first']);
        this.lastMineral =  this.rockService.getRandomMineral(event['last']);
    }

}
