import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-rock-info',
    templateUrl: './rock-info.component.html',
    styleUrls: ['./rock-info.component.less']
})
export class RockInfoComponent implements OnInit {
    @Input() firstMineral: object;
    @Input() lastMineral: object;

    constructor() { }

    ngOnInit() { }

    name() {
        return this.firstMineral['name'] + " " + this.lastMineral['name'];
    }

    sciName() {
        return (this.firstMineral['sciName']).slice(0, -1) + " " + (this.lastMineral['sciName']).substr(1);
    }

    searchUrl(mineral: object){
        return ('https://www.google.com/search?q=' + mineral['name'].split(' ').join('+'));
    }
}
