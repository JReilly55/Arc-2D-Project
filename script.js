require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "dojo/domReady!", "esri/widgets/Legend"], function (Map, MapView, FeatureLayer, Legend) {
        var map = new Map({
          basemap: "dark-gray-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 3,
          center: [-95.7129, 37.0902] // longitude, latitude
        });
  
   var template1 = {
        title: "Wildfire",
        content: [{
          type: "fields",
          fieldInfos: [{
            fieldName: "IncidentName",
            label: "Incident Name: ",
            visible: true,
          }, 
                       {
            fieldName: "DailyAcres",
            label: "Burned Acres: ",
            visible: true,
          }]
        }]
      };
    
 var featureLayer_1 = new FeatureLayer({
  url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/US_Drought_Intensity_v1/FeatureServer/3"
 });
  
  map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services9.arcgis.com/RHVPKKiFTONKtxq3/arcgis/rest/services/USA_Wildfires_v1/FeatureServer",
  outFields: ["*"],
        popupTemplate: template1,
});
  
map.add(featureLayer_2);
});
