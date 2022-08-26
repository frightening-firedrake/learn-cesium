import * as Cesium from "cesium";
import * as turf from "@turf/turf";
import PolylineTrailMaterialProperty from "./material/PolylineTrailMaterialProperty";

export default class RectFlyLight {
  constructor(viewer) {
    // 设置矩形区域112.5545, 37.8844,
    this.bbox = [112.4545, 37.7844,112.6545, 37.9844];
    // 创建随机点
    let points = turf.randomPoint(300, {
      bbox: this.bbox,
    });
    // console.log(points);
    // 通过生成的随机点生成线
    let features = points.features;
    features.forEach((item) => {
      // 获取点的经纬度
      let point = item.geometry.coordinates;
      // 根据点设置起始位置
      let start = Cesium.Cartesian3.fromDegrees(point[0], point[1], 800);
      // 根据点设置结束位置
      let end = Cesium.Cartesian3.fromDegrees(
        point[0],
        point[1],
        900 + Math.random() * 3000
      );
      //   创建自定义线材质
      let polylineTrailMaterialProperty = new PolylineTrailMaterialProperty(new Cesium.Color());
      //   创建线
      let flyLine = viewer.entities.add({
        polyline: {
          positions: [start, end],
          width: 2,
          material: polylineTrailMaterialProperty,
        },
      });
    });
  }
}
