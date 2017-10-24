import { Component } from '@angular/core'
import {
    isEnabled,
    enableLocationRequest,
    getCurrentLocation,
    watchLocation,
    distance,
    clearWatch
} from 'nativescript-geolocation'

import { LocationService } from '../shared/location/location.service'
import { Location } from '../shared/location/location'

@Component({
    selector: 'location-hub',
    moduleId: module.id,
    templateUrl: './location.component.html',
    styleUrls: ['./location-common.css'],
    providers: [LocationService]
})
export class LocationComponent {
    locationMonitor
    locationHistory: Array<any> = []

    constructor(
        private locationService: LocationService
    ) {}

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
                const {
                    latitude,
                    longitude,
                    altitude,
                    horizontalAccuracy,
                    verticalAccuracy,
                    speed,
                    direction,
                    timestamp
                } = location
                
                const currentLocation = new Location(location)
                this.locationService.sendLocation(currentLocation)
                    .subscribe(
                        (success) => this.locationHistory.unshift(location) ,
                        (error) => alert(`Não enviadado \n ${error}`)
                    )
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