"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var LocationComponent = (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
        if (!nativescript_geolocation_1.isEnabled()) {
            nativescript_geolocation_1.enableLocationRequest();
        }
    };
    LocationComponent.prototype.startMonitoring = function () {
        //TODO
    };
    LocationComponent.prototype.stopMonitoring = function () {
        //TODO
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELHFFQU9pQztBQVNqQztJQUFBO0lBZUEsQ0FBQztJQWJHLG9DQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLG9DQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDZixnREFBcUIsRUFBRSxDQUFBO1FBQzNCLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQWUsR0FBZjtRQUNJLE1BQU07SUFDVixDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNJLE1BQU07SUFDVixDQUFDO0lBZFEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsY0FBYztZQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO09BQ1csaUJBQWlCLENBZTdCO0lBQUQsd0JBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1xuICAgIGlzRW5hYmxlZCxcbiAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QsXG4gICAgZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIHdhdGNoTG9jYXRpb24sXG4gICAgZGlzdGFuY2UsXG4gICAgY2xlYXJXYXRjaFxufSBmcm9tICduYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb24nXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2NhdGlvbi1odWInLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9sb2NhdGlvbi1jb21tb24uY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKCFpc0VuYWJsZWQoKSkge1xuICAgICAgICAgICAgZW5hYmxlTG9jYXRpb25SZXF1ZXN0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXJ0TW9uaXRvcmluZygpIHtcbiAgICAgICAgLy9UT0RPXG4gICAgfVxuXG4gICAgc3RvcE1vbml0b3JpbmcoKSB7XG4gICAgICAgIC8vVE9ET1xuICAgIH1cbn0iXX0=