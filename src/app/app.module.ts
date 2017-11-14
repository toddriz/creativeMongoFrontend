import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { RockInfoComponent } from './rock-info/rock-info.component';
import { UserInfoComponent } from './user-info/user-info.component';

import { RockService } from './rock.service';
import { TitlecasePipe } from './titlecase.pipe';
import { ApiService } from './api.service';

@NgModule({
    declarations: [
        AppComponent,
        RockInfoComponent,
        UserInfoComponent,
        TitlecasePipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        FormsModule
    ],
    providers: [RockService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }
