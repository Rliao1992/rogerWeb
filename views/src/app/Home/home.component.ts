import {Component} from "@angular/core";
import "jquery";
//import $ from "jquery";
declare var $: any;

@Component({
    selector: "web-header",
    templateUrl: "app/Home/home.html",
    styleUrls: ["app/Home/home.css"]
}) 

export class homeHeaderComponent {
    title = "<Roger/Liao>";
    description = "roger's website";
    console() {
        $("body").addClass("meme");
    }
}
