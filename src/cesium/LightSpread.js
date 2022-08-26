import * as Cesium from "cesium";
import LightSpreadMaterialProperty from "./material/LightSpreadMaterialProperty";
import gsap from "gsap";

export default class LightSpread {
  constructor(viewer) {
    // 113.3191,23.109,
    // 112.5607, 37.8844,
    // 设置雷达材质
    this.LightSpreadMaterial = new LightSpreadMaterialProperty(
      "LightSpreadMaterial"
    );
    this.params = {
      minlot: 112.5000,
      minLat: 37.8300,
      maxlot: 112.5400,
      maxLat: 37.8600,
    };
    this.entity = viewer.entities.add({
      rectangle: {
        coordinates: Cesium.Rectangle.fromDegrees(
          this.params.minlot,
          this.params.minLat,
          this.params.maxlot,
          this.params.maxLat
          // 112.5100,
          // 37.8300,
          // 112.5400,
          // 37.8600,
        ),
        material: this.LightSpreadMaterial,
      },
    });
    // 经纬度向外扩展
    gsap.to(this.params, {
      minlot: 112.4900,
      minLat: 37.8200,
      maxlot: 112.5500,
      maxLat: 37.8700,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "linear",
      onUpdate: () => {
        this.entity.rectangle.coordinates = Cesium.Rectangle.fromDegrees(
          this.params.minlot,
          this.params.minLat,
          this.params.maxlot,
          this.params.maxLat
        );
      },
    });
  }
}
