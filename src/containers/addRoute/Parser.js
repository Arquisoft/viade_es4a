


const Parser=(name,description,geoCoordinates)=>{
    var json;
    if(geoCoordinates!=null){
        json='{ "@context":"http://schema.org",\n' +
            '"@type": "Trip",\n' +
            '"name": "'+name+'",\n' +
            '"description": "'+description+'",\n' +
            '"itinerary": {\n' +
            '    "@type": "ItemList",\n' +
            '    "numberOfItems": '+geoCoordinates.length+',\n' +
            '    "itemListOrder": "http://schema.org/ItemListOrderDescending",\n' +
            '        "itemListElement": [\n';
        for(let i=0;i<geoCoordinates.length;i++){
            json=json+  '            {\n' +
                        '                "@type": "GeoCoordinates",\n' +
                        '                "latitude":' +geoCoordinates[i][0]+',\n' +
                        '                "longitude": ' +geoCoordinates[i][1]+'\n' +
                        '            }';
            if(i<geoCoordinates.length-1){
                json+=',\n';
            }
        }
        json+='        ]\n' +
            '   }\n' +
            '}';
    }
    else{
        json='{ "@context":"http://schema.org",\n' +
            '"@type": "Trip",\n' +
            '"name": "'+name+'",\n' +
            '"description": "'+description+'",\n' +
            '"itinerary": {\n' +
            '    "@type": "ItemList",\n' +
            '    "numberOfItems": 0,\n' +
            '    "itemListOrder": "http://schema.org/ItemListOrderDescending",\n' +
            '        "itemListElement": [\n';
        json=json+'        ]\n' +
            '   }\n' +
            '}';
    }
    return json;
}
export default Parser;