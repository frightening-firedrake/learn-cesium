import * as Cesium from "cesium";
import RadarMaterialProperty from "./material/RadarMaterialProperty";

export default class RadarLight {
  constructor(viewer) {
    // 113.3191,23.109,
    // 112.5607, 37.8844,
    // 设置雷达材质
    this.radarMaterial = new RadarMaterialProperty("radarMaterial");
    this.entity = viewer.entities.add({
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(
          112.5500,
          37.8400,
          112.6000,
          37.8800
        ),
        material: this.radarMaterial,
      },
    });
  }
}
