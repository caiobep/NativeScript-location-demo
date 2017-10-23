import { Component, OnInit } from '@angular/core'
import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
    watchLocation,
    distance,
    clearWatch
} from 'nativescript-geolocation'


@Component({
    selector: 'location-hub',
    moduleId: module.id,
    templateUrl: './location.component.html',
    styleUrls: ['./location-common.css'],
})
export class LocationComponent implements OnInit {
    
    ngOnInit() {
        if (!isEnabled()) {
            enableLocationRequest()
        }
    }

    startMonitoring() {
        //TODO
    }

    stopMonitoring() {
        //TODO
    }
}