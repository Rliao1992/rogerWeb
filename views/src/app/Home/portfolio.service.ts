import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class portfolio {
    constructor(
        public id: number,
        public description: string,
        public thumbnail: string,
        public title: string,
        public url: string,
        public github: string,
        public concept: string,
        public skillset: string[],
    ) { }
}

@Injectable()
export class PortfolioService {
    public Url = "/data/portfolios.json";
    //private portfolio: portfolio;
    constructor(private http: Http) {

    }

    getPortfolio(): Observable<portfolio[]> {
        return this.http.get(this.Url)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.portfolios || { };
    }

    private handleError(err: Response | any) {
        let errMsg: string;
        if (err instanceof Response) {
            const body = err.json() || '';
            err = body.error || JSON.stringify(body);
            errMsg = `${err.status} - ${err.statusText || ''} ${err}`;
        } else {
            errMsg = err.message ? err.message : err.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
