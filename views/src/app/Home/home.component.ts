import { Component, OnInit } from "@angular/core";
import { portfolio, PortfolioService } from "./portfolio.service";
import "jquery";
//import $ from "jquery";
declare var $: any;

@Component({
    selector: "web-header",
    providers: [PortfolioService, portfolio],
    templateUrl: "app/Home/home.html",
    styleUrls: ["app/Home/home.css"]
}) 

export class homeHeaderComponent implements OnInit{
    constructor(private portfolioService: PortfolioService) {

    }
    public title: string = "<Roger/Liao>";
    public description: string = "欢迎来到我的小站";
    public portfolios: {}[] = [{}];
    ngOnInit() {
        this.getPortfolioList();
    };
    getPortfolioList() {
        console.log(this);
        let that = this;
        this.portfolioService.getPortfolio()
            .subscribe(
            function (data) {
                return that.portfolios = data;
                },
                function (err) {
                    console.log(err);
                }
            )
    };
}
