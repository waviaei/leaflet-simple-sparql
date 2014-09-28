var endpoint = "http://db.lodosaka.jp/sparql";
var query = (function () {/*
PREFIX schema:<http://schema.org/>
PREFIX geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX lodosaka:<http://lodosaka.hozo.jp/>
SELECT DISTINCT * WHERE{
?uri lodosaka:category_1 ?toilet;
schema:name ?name;
geo:lat ?lat;
geo:long ?long.
FILTER (regex(str(?toilet), "公衆トイレ"))
}
limit 1000
*/}).toString().match(/\n([\s\S]*)\n/)[1];

var maxZoom = 19;
var baseUrl = "http://j.tile.openstreetmap.jp/{z}/{x}/{y}.png";
var baseAttribution = 'Map data &copy; OpenStreetMap contributors, Tiles Courtesy of OpenStreetMap Japan';
var subdomains = '1234';
var clusterOptions = {showCoverageOnHover: false, maxClusterRadius: 50};
var labelColumn = "title";
var labelLatitude = "lat";
var labelLongitude = "long";
var opacity = 1.0;
