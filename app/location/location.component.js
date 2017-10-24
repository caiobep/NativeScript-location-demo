"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var location_service_1 = require("../shared/location/location.service");
var location_1 = require("../shared/location/location");
var LocationComponent = (function () {
    function LocationComponent(locationService) {
        this.locationService = locationService;
        this.locationHistory = [];
    }
    LocationComponent.prototype.startLocationMonitoring = function () {
        var _this = this;
        console.log("Monitor started");
        nativescript_geolocation_1.isEnabled()
            .then(function (isLocationEnabled) {
            if (!isLocationEnabled) {
                nativescript_geolocation_1.enableLocationRequest();
            }
        });
        this.locationMonitor = nativescript_geolocation_1.watchLocation(function (location) {
            var latitude = location.latitude, longitude = location.longitude, altitude = location.altitude, horizontalAccuracy = location.horizontalAccuracy, verticalAccuracy = location.verticalAccuracy, speed = location.speed, direction = location.direction, timestamp = location.timestamp;
            var currentLocation = new location_1.Location(location);
            _this.locationService.sendLocation(currentLocation)
                .subscribe(function (success) { return _this.locationHistory.unshift(location); }, function (error) { return alert("N\u00E3o enviadado \n " + error); });
        }, function (error) { return console.log("Error " + error.message); }, {
            desiredAccuracy: 3,
            updateDistance: 10,
            minimumUpdateTime: 1000
        });
    };
    LocationComponent.prototype.stopLocationMonitoring = function () {
        console.log("Monitor stopped");
        if (this.locationMonitor) {
            nativescript_geolocation_1.clearWatch(this.locationMonitor);
        }
        this.locationHistory = [];
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'location-hub',
            moduleId: module.id,
            templateUrl: './location.component.html',
            styleUrls: ['./location-common.css'],
            providers: [location_service_1.LocationService]
        }),
        __metadata("design:paramtypes", [location_service_1.LocationService])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHFFQU9pQztBQUVqQyx3RUFBcUU7QUFDckUsd0RBQXNEO0FBU3REO0lBSUksMkJBQ1ksZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSDVDLG9CQUFlLEdBQWUsRUFBRSxDQUFBO0lBSTdCLENBQUM7SUFFSixtREFBdUIsR0FBdkI7UUFBQSxpQkFzQ0M7UUFyQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRTlCLG9DQUFTLEVBQUU7YUFDTixJQUFJLENBQUMsVUFBQyxpQkFBMEI7WUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLGdEQUFxQixFQUFFLENBQUE7WUFDM0IsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO1FBRU4sSUFBSSxDQUFDLGVBQWUsR0FBRyx3Q0FBYSxDQUNoQyxVQUFDLFFBQVE7WUFFRCxJQUFBLDRCQUFRLEVBQ1IsOEJBQVMsRUFDVCw0QkFBUSxFQUNSLGdEQUFrQixFQUNsQiw0Q0FBZ0IsRUFDaEIsc0JBQUssRUFDTCw4QkFBUyxFQUNULDhCQUFTLENBQ0Q7WUFFWixJQUFNLGVBQWUsR0FBRyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDOUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDO2lCQUM3QyxTQUFTLENBQ04sVUFBQyxPQUFPLElBQUssT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBdEMsQ0FBc0MsRUFDbkQsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsMkJBQW9CLEtBQU8sQ0FBQyxFQUFsQyxDQUFrQyxDQUNoRCxDQUFBO1FBQ1QsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLEtBQUssQ0FBQyxPQUFTLENBQUMsRUFBckMsQ0FBcUMsRUFDaEQ7WUFDSSxlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsRUFBRTtZQUNsQixpQkFBaUIsRUFBRSxJQUFJO1NBQzFCLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxrREFBc0IsR0FBdEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdkIscUNBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDcEMsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFBO0lBQzdCLENBQUM7SUF4RFEsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBZSxDQUFDO1NBQy9CLENBQUM7eUNBTStCLGtDQUFlO09BTG5DLGlCQUFpQixDQXlEN0I7SUFBRCx3QkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICAgIGlzRW5hYmxlZCxcbiAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QsXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIHdhdGNoTG9jYXRpb24sXG4gICAgZGlzdGFuY2UsXG4gICAgY2xlYXJXYXRjaFxufSBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nXG5cbmltcG9ydCB7IExvY2F0aW9uU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9sb2NhdGlvbi9sb2NhdGlvbi5zZXJ2aWNlJ1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9zaGFyZWQvbG9jYXRpb24vbG9jYXRpb24nXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9jYXRpb24taHViJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb24tY29tbW9uLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0xvY2F0aW9uU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Db21wb25lbnQge1xuICAgIGxvY2F0aW9uTW9uaXRvclxuICAgIGxvY2F0aW9uSGlzdG9yeTogQXJyYXk8YW55PiA9IFtdXG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBsb2NhdGlvblNlcnZpY2U6IExvY2F0aW9uU2VydmljZVxuICAgICkge31cblxuICAgIHN0YXJ0TG9jYXRpb25Nb25pdG9yaW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk1vbml0b3Igc3RhcnRlZFwiKVxuXG4gICAgICAgIGlzRW5hYmxlZCgpXG4gICAgICAgICAgICAudGhlbigoaXNMb2NhdGlvbkVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0xvY2F0aW9uRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5sb2NhdGlvbk1vbml0b3IgPSB3YXRjaExvY2F0aW9uKFxuICAgICAgICAgICAgKGxvY2F0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICAgICAgICAgICAgICBhbHRpdHVkZSxcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbEFjY3VyYWN5LFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbEFjY3VyYWN5LFxuICAgICAgICAgICAgICAgICAgICBzcGVlZCxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICB9ID0gbG9jYXRpb25cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBuZXcgTG9jYXRpb24obG9jYXRpb24pXG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvblNlcnZpY2Uuc2VuZExvY2F0aW9uKGN1cnJlbnRMb2NhdGlvbilcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChzdWNjZXNzKSA9PiB0aGlzLmxvY2F0aW9uSGlzdG9yeS51bnNoaWZ0KGxvY2F0aW9uKSAsXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IGFsZXJ0KGBOw6NvIGVudmlhZGFkbyBcXG4gJHtlcnJvcn1gKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJvci5tZXNzYWdlfWApLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlc2lyZWRBY2N1cmFjeTogMyxcbiAgICAgICAgICAgICAgICB1cGRhdGVEaXN0YW5jZTogMTAsXG4gICAgICAgICAgICAgICAgbWluaW11bVVwZGF0ZVRpbWU6IDEwMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHN0b3BMb2NhdGlvbk1vbml0b3JpbmcoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTW9uaXRvciBzdG9wcGVkXCIpXG5cbiAgICAgICAgaWYgKHRoaXMubG9jYXRpb25Nb25pdG9yKSB7XG4gICAgICAgICAgICBjbGVhcldhdGNoKHRoaXMubG9jYXRpb25Nb25pdG9yKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmxvY2F0aW9uSGlzdG9yeSA9IFtdXG4gICAgfVxufSJdfQ==