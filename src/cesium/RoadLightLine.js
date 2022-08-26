import * as Cesium from "cesium";
// import PolylineTrailMaterialProperty from "./material/PolylineTrailMaterialProperty";
import SpritelineMaterialProperty from "./material/SpritelineMaterialProperty";
export default class RoadLightLine {
  constructor(viewer) {
    let geoJsonPromise = Cesium.GeoJsonDataSource.load(
      "./geojson/roadline1.geojson",
      {clampToGround:true}//真贴地
    );
    geoJsonPromise.then((dataSource) => {
      // console.log(dataSource.entities.values[0].polyline)
      viewer.dataSources.add(dataSource);
      let entities = dataSource.entities.values;
      // let color = new Cesium.Color(0.7, 1.0, 0.7, 1.0);
      // let polylineTrailMaterialProperty = new PolylineTrailMaterialProperty(
      //   color
      // );
      let spritelineMaterialProperty = new SpritelineMaterialProperty();
      entities.forEach((item) => {
        let polyline = item.polyline;
        polyline.material = spritelineMaterialProperty;
        // console.log(polyline.positions._value)
        
        // polyline.heightReference = Cesium.HeightReference.CLAMP_TO_GROUND;  // 贴地
        // polyline.heightReference = Cesium.HeightReference.RELATIVE_TO_GROUND;  // 贴地
        // polyline.height = 0;  // 距地高度0米
      });
    });
  }
}
