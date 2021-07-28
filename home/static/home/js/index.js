const USERNAME = document.body.getAttribute("data-username");

let MAP = {};
let GEOCODER = {};
let STORE = "";

MAP = addMap();

geocoder = addGeocoder(MAP, (data) => {
    Promise.all([
        displayNearbyStores(MAP, data.result.center[1], data.result.center[0]),
        displayNearbyWishlists(data.result.center[1], data.result.center[0]),
        displayMyRequests(data.result.center[1], data.result.center[0]),
        displayMyTrips(data.result.center[1], data.result.center[0])
    ]).then(([storesGeoJson]) => {
        setStoreNavigation(MAP, storesGeoJson);
    });
  
});
