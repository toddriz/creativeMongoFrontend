import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.less']
})
export class UserInfoComponent implements OnInit {
    @Input('firstName') firstName; 
    @Input('lastName') lastName;
    @Output() rockz = new EventEmitter<{first: string, last: string}>();

    constructor() { }

    ngOnInit() {
    } 

    doSomething(form: NgForm) {
        this.firstName = form.value['firstName'];
        this.lastName = form.value['lastName'];
        this.rockz.emit({first: this.firstName, last: this.lastName});
    }

}
