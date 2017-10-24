import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

import { Location } from './location'
import { Config } from '../config'

@Injectable()
export class LocationService {
    
    constructor(private http: Http) {}

    sendLocation(location: Location) {
        const {apiUrl} = Config
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(
            apiUrl + 'location.json',
            location
        ).catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(JSON.stringify(error.json()))
        return Observable.throw(error)
    }
}
