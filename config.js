var endpoint = "http://db.lodc.jp/sparql";
var query = (function () {/*
PREFIX schema:<http://schema.org/>
PREFIX geo:<http://www.w3.org/2003/01/geo/wgs84_pos#>
PREFIX lodosaka:<http://lodosaka.hozo.jp/>
SELECT *
FROM <http://lod.sfc.keio.ac.jp/challenge2013/show_status.php?id=d030>
WHERE{
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
