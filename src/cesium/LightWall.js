import * as Cesium from "cesium";
import LightWallMaterialProperty from "./material/LightWallMaterialProperty";
import gsap from "gsap";

export default class LightWall {
  constructor(viewer) {
    // 113.3191,23.109,
    // 112.5607, 37.8844,
    // 设置雷达材质
    this.LightWallMaterial = new LightWallMaterialProperty("LightWallMaterial");
    this.entity = viewer.entities.add({
      name: "lightWall",
      // position: Cesium.Cartesian3.fromDegrees(113.3081, 23.101, 200),
      position: Cesium.Cartesian3.fromDegrees(112.5435, 37.9335, 950),
      wall: {
        positions: Cesium.Cartesian3.fromDegreesArrayHeights([
          // 113.3051, 23.099, 200.0, 113.3101, 23.099, 200.0, 113.3101, 23.104,
          // 200.0, 113.3051, 23.104, 200.0, 113.3051, 23.099, 200.0,
          112.5370, 37.9270, 0,
          112.55, 37.9270, 0,
          112.55, 37.94, 0,
          112.5370, 37.94, 0,
          112.5370, 37.9270, 0,
        ]),
        minimumHeights:[1100,1100,1100,1100,1100],//剪掉地皮为高度
        maximumHeights:[800,800,800,800,800],//距离地皮位置
        material: this.LightWallMaterial,
        // outline: true,
      },
      label: {
        text: "大概是太钢",
        font: "16px sans-serif",
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        // outlineWidth: 2,
        // verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        // pixelOffset: new Cesium.Cartesian2(0, -20),
        fillColor: Cesium.Color.WHITE,
        distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0),

        outlineColor: Cesium.Color.BLACK,
      },
    });
  }
}
