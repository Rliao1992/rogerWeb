import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { homeHeaderComponent } from './Home/home.component';
import { PortfolioService } from "./Home/portfolio.service"

@NgModule({
    declarations: [
        homeHeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
    ],
    providers: [],
    bootstrap: [
        homeHeaderComponent
    ]
})
export class AppModule { }
