"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var LocationComponent = (function () {
    function LocationComponent() {
        this.locationHistory = [];
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
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
            _this.locationHistory = [location].concat(_this.locationHistory);
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
        })
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELHFFQU9pQztBQVVqQztJQU5BO1FBUUksb0JBQWUsR0FBZSxFQUFFLENBQUE7SUFzQ3BDLENBQUM7SUFwQ0csb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxtREFBdUIsR0FBdkI7UUFBQSxpQkFzQkM7UUFyQkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRTlCLG9DQUFTLEVBQUU7YUFDTixJQUFJLENBQUMsVUFBQyxpQkFBMEI7WUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLGdEQUFxQixFQUFFLENBQUE7WUFDM0IsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO1FBRU4sSUFBSSxDQUFDLGVBQWUsR0FBRyx3Q0FBYSxDQUNoQyxVQUFDLFFBQVE7WUFDTCxLQUFJLENBQUMsZUFBZSxJQUFJLFFBQVEsU0FBSyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDOUQsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLEtBQUssQ0FBQyxPQUFTLENBQUMsRUFBckMsQ0FBcUMsRUFDaEQ7WUFDSSxlQUFlLEVBQUUsQ0FBQztZQUNsQixjQUFjLEVBQUUsRUFBRTtZQUNsQixpQkFBaUIsRUFBRSxJQUFJO1NBQzFCLENBQ0osQ0FBQTtJQUNMLENBQUM7SUFFRCxrREFBc0IsR0FBdEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFOUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDdkIscUNBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDcEMsQ0FBQztRQUVELElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFBO0lBQzdCLENBQUM7SUF2Q1EsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO09BQ1csaUJBQWlCLENBd0M3QjtJQUFELHdCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7QUF4Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtcbiAgICBpc0VuYWJsZWQsXG4gICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0LFxuICAgIGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICB3YXRjaExvY2F0aW9uLFxuICAgIGRpc3RhbmNlLFxuICAgIGNsZWFyV2F0Y2hcbn0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJ1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJy4vbG9jYXRpb24nXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbG9jYXRpb24taHViJyxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9sb2NhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb24tY29tbW9uLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbG9jYXRpb25Nb25pdG9yXG4gICAgbG9jYXRpb25IaXN0b3J5OiBBcnJheTxhbnk+ID0gW11cbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICB9XG5cbiAgICBzdGFydExvY2F0aW9uTW9uaXRvcmluZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25pdG9yIHN0YXJ0ZWRcIilcblxuICAgICAgICBpc0VuYWJsZWQoKVxuICAgICAgICAgICAgLnRoZW4oKGlzTG9jYXRpb25FbmFibGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNMb2NhdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubG9jYXRpb25Nb25pdG9yID0gd2F0Y2hMb2NhdGlvbihcbiAgICAgICAgICAgIChsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRpb25IaXN0b3J5ID0gW2xvY2F0aW9uLCAuLi50aGlzLmxvY2F0aW9uSGlzdG9yeV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGBFcnJvciAke2Vycm9yLm1lc3NhZ2V9YCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGVzaXJlZEFjY3VyYWN5OiAzLFxuICAgICAgICAgICAgICAgIHVwZGF0ZURpc3RhbmNlOiAxMCxcbiAgICAgICAgICAgICAgICBtaW5pbXVtVXBkYXRlVGltZTogMTAwMFxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG4gICAgc3RvcExvY2F0aW9uTW9uaXRvcmluZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNb25pdG9yIHN0b3BwZWRcIilcblxuICAgICAgICBpZiAodGhpcy5sb2NhdGlvbk1vbml0b3IpIHtcbiAgICAgICAgICAgIGNsZWFyV2F0Y2godGhpcy5sb2NhdGlvbk1vbml0b3IpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9jYXRpb25IaXN0b3J5ID0gW11cbiAgICB9XG59Il19