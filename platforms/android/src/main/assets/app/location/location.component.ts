import { Component, OnInit } from '@angular/core'
import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
    watchLocation,
    distance,
    clearWatch
} from 'nativescript-geolocation'

import { Location } from './location'

@Component({
    selector: 'location-hub',
    moduleId: module.id,
    templateUrl: './location.component.html',
    styleUrls: ['./location-common.css'],
})
export class LocationComponent implements OnInit {
    locationMonitor
    locationHistory: Array<any> = []
    
    ngOnInit() {
    }

    startLocationMonitoring() {
        console.log("Monitor started")

        isEnabled()
            .then((isLocationEnabled: boolean) => {
                    if (!isLocationEnabled) {
                        enableLocationRequest()
                    }
                }
            );

        this.locationMonitor = watchLocation(
            (location) => {
                this.locationHistory = [location, ...this.locationHistory]
            },
            (error) => console.log(`Error ${error.message}`),
            {
                desiredAccuracy: 3,
                updateDistance: 10,
                minimumUpdateTime: 1000
            }
        )
    }

    stopLocationMonitoring() {
        console.log("Monitor stopped")

        if (this.locationMonitor) {
            clearWatch(this.locationMonitor)
        }
        
        this.locationHistory = []
    }
}