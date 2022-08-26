import * as Cesium from "cesium";
import LightSpreadMaterialProperty from "./material/LightSpreadMaterialProperty";
import gsap from "gsap";

export default class LightSpread {
  constructor(viewer) {
    // 113.3191,23.109,
    // 112.5607, 37.8844,
    // 设置雷达材质
    // this.LightSpreadMaterial = new LightSpreadMaterialProperty(
    //   "LightSpreadMaterial"
    // );
    // this.params = {
    //   minlot: 112.5000,
    //   minLat: 37.8300,
    //   maxlot: 112.5400,
    //   maxLat: 37.8600,
    // };
    // this.entity = viewer.entities.add({
    //   rectangle: {
    //     coordinates: Cesium.Rectangle.fromDegrees(
    //       this.params.minlot,
    //       this.params.minLat,
    //       this.params.maxlot,
    //       this.params.maxLat
    //       // 112.5100,
    //       // 37.8300,
    //       // 112.5400,
    //       // 37.8600,
    //     ),
    //     material: this.LightSpreadMaterial,
    //   },
    // });
    // 经纬度向外扩展
    // gsap.to(this.params, {
    //   minlot: 112.4900,
    //   minLat: 37.8200,
    //   maxlot: 112.5500,
    //   maxLat: 37.8700,
    //   duration: 1,
    //   repeat: -1,
    //   yoyo: true,
    //   ease: "linear",
    //   onUpdate: () => {
    //     this.entity.rectangle.coordinates = Cesium.Rectangle.fromDegrees(
    //       this.params.minlot,
    //       this.params.minLat,
    //       this.params.maxlot,
    //       this.params.maxLat
    //     );
    //   },
    // });
    // this.entity  = viewer.entities.add({
    //   name: "Red sphere with black outline",
    //   position: Cesium.Cartesian3.fromDegrees(112.5607, 37.8844,500),
    //   ellipsoid: {
    //     radii: new Cesium.Cartesian3(300.0, 300.0, 300.0),
    //     material: Cesium.Color.RED.withAlpha(0.5),
    //     // outline: true,
    //     // outlineColor: Cesium.Color.BLACK,
    //   },
    // });
    this.entity = viewer.entities.add({
      position : Cesium.Cartesian3.fromDegrees(112.5107, 37.9044),
      model : {
          uri : './model/shield.glb',
          scale:1000,
          heightReference:Cesium.HeightReference.CLAMP_TO_GROUND,
          color: Cesium.Color.AQUA.withAlpha(0.9),
          colorBlendMode: Cesium.ColorBlendMode.MIX,
          // silhouetteColor:Cesium.Color.DEEPPINK,    
          // silhouetteSize:2.0,
          // heightReference:RELATIVE_TO_GROUND,

      }
    })

    // //   添加模型
    // this.model = viewer.scene.primitives.add(
    //   new Cesium.Model.fromGltf({
    //     url: "./model/pyramid.glb",
    //     show: true,
    //     // 设置模型的缩放比例
    //     scale: 600,
    //     minimumPixelSize: 12,
    //     maximumScale: 20000,
    //     debugShowBoundingVolume: false,
    //     debugWireframe: false,
    //     color: Cesium.Color.YELLOW.withAlpha(0.5),
    //     // 设置颜色的混合模式
    //     colorBlendMode: Cesium.ColorBlendMode.MIX,
    //     // 设置模型的位置矩阵
    //     modelMatrix: this.modelMatrix,
    //     //显示距离
    //   distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0),

    //   })
    // );


  }
}
