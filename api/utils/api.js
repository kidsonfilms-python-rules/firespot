const fetch = require('node-fetch')

async function getFires(county) {
    if (county == "SACRAMENTO") {
        const data = await fetch('https://services5.arcgis.com/54falWtcpty3V47Z/arcgis/rest/services/GetNFIRSRespondReport/FeatureServer/0/query?where=1%3D1&outFields=Date,Incident_Reference,Responding_Station,Incident_Description,Incident_Type,Address,Property_Use,Longitude,Latitude,Land_Use_Code&outSR=4326&f=json')
        return data.json()
    }
}

module.exports =  getFires