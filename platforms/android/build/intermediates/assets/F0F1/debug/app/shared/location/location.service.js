"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
    }
    LocationService.prototype.sendLocation = function (location) {
        var apiUrl = config_1.Config.apiUrl;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(apiUrl + 'location.json', location).catch(this.handleError);
    };
    LocationService.prototype.handleError = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    LocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsc0NBQXVEO0FBQ3ZELDhCQUFvQztBQUNwQyxnQ0FBNkI7QUFDN0IsaUNBQThCO0FBRzlCLG9DQUFrQztBQUdsQztJQUVJLHlCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFHLENBQUM7SUFFbEMsc0NBQVksR0FBWixVQUFhLFFBQWtCO1FBQ3BCLElBQUEsK0JBQU0sQ0FBVTtRQUN2QixJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFBO1FBQzdCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUE7UUFFbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNqQixNQUFNLEdBQUcsZUFBZSxFQUN4QixRQUFRLENBQ1gsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksS0FBZTtRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN6QyxNQUFNLENBQUMsZUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBbEJRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FHaUIsV0FBSTtPQUZyQixlQUFlLENBbUIzQjtJQUFELHNCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCdcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4J1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9kbydcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJ1xuXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJy4vbG9jYXRpb24nXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhdGlvblNlcnZpY2Uge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICAgIHNlbmRMb2NhdGlvbihsb2NhdGlvbjogTG9jYXRpb24pIHtcbiAgICAgICAgY29uc3Qge2FwaVVybH0gPSBDb25maWdcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKClcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJylcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICAgICAgICBhcGlVcmwgKyAnbG9jYXRpb24uanNvbicsXG4gICAgICAgICAgICBsb2NhdGlvblxuICAgICAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xuICAgIH1cblxuICAgIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKVxuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcilcbiAgICB9XG59XG4iXX0=