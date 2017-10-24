export class Location {
    constructor(locationObj) {
        const {
            latitude,
            longitude,
            altitude,
            horizontalAccuracy,
            verticalAccuracy,
            speed,
            direction,
            timestamp,
        } = locationObj

            this.latitude = latitude;
            this.longitude = longitude;
            this.altitude = altitude;
            this.horizontalAccuracy = horizontalAccuracy;
            this.verticalAccuracy = verticalAccuracy;
            this.speed = speed;
            this.direction = direction;
            this.timestamp = timestamp;
    }
    
    public latitude: number
    public longitude: number
    public altitude: number
    public horizontalAccuracy: number
    public verticalAccuracy: number
    public speed: number
    public direction: number
    public timestamp:string
}
