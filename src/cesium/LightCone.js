import * as Cesium from "cesium";
import gsap from "gsap";

export default class LightCone {
  constructor(viewer) {
    this.params = {
      height: 1500,
      degress: 0,
    };
    //   设置模型位置矩阵
    this.modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
      // 位置旋转中心
      Cesium.Cartesian3.fromDegrees(112.5545, 37.8844, this.params.height),
      // 模型旋转情况yxz？
      new Cesium.HeadingPitchRoll(this.params.degress, 0, 0)
    );
    //   添加模型
    this.model = viewer.scene.primitives.add(
      new Cesium.Model.fromGltf({
        url: "./model/pyramid.glb",
        show: true,
        // 设置模型的缩放比例
        scale: 600,
        minimumPixelSize: 12,
        maximumScale: 20000,
        debugShowBoundingVolume: false,
        debugWireframe: false,
        color: Cesium.Color.YELLOW.withAlpha(0.5),
        // 设置颜色的混合模式
        colorBlendMode: Cesium.ColorBlendMode.MIX,
        // 设置模型的位置矩阵
        modelMatrix: this.modelMatrix,
        //显示距离
      distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0),

      })
    );
    this.animate();
    
  // // 创建一个点
  // var point = viewer.entities.add({
  //   // 定位点
  //   position: Cesium.Cartesian3.fromDegrees(112.5545, 37.8844, 900),
  //   // 点
  //   point: {
  //     pixelSize: 10,
  //     color: Cesium.Color.RED,
  //     outlineColor: Cesium.Color.WHITE,
  //     outlineWidth: 4,
  //   },
  // });
  // 添加文字标签和广告牌
  var label = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(112.5545, 37.8844, 950),
    point: {
      pixelSize: 10,
      color: Cesium.Color.RED,
      outlineColor: Cesium.Color.WHITE,
      outlineWidth: 4,
      distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0),
    },
    label: {
      text: "万达广场",
      font: "24px sans-serif",
      fillColor: Cesium.Color.WHITE,
      outlineColor: Cesium.Color.BLACK,
      outlineWidth: 4,
      // FILL填充文字，OUTLINE勾勒标签，FILL_AND_OUTLINE填充文字和勾勒标签
      style: Cesium.LabelStyle.FILL_AND_OUTLINE,
      // 设置文字的偏移量
      pixelOffset: new Cesium.Cartesian2(0, -24),
      // 设置文字的显示位置,LEFT /RIGHT /CENTER
      horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
      // 设置文字的显示位置
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      distanceDisplayCondition:new Cesium.DistanceDisplayCondition(10.0, 20000.0),

    },
    // billboard: {
    //   image: "./texture/gzt.png",
    //   width: 50,
    //   height: 50,
    //   // 设置广告牌的显示位置
    //   verticalOrigin: Cesium.VerticalOrigin.TOP,
    //   // 设置广告牌的显示位置
    //   horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    // },
  });
  }
  animate() {
    gsap.to(this.params, {
      height: 1300,
      degress: Math.PI,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
      onUpdate: () => {
        this.model.modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
          // 位置
          Cesium.Cartesian3.fromDegrees(112.5545, 37.8844, this.params.height),
          // 模型旋转情况
          new Cesium.HeadingPitchRoll(this.params.degress, 0, 0)
        );
      },
    });
  }

}
