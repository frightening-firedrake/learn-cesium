import * as Cesium from "cesium";

export default class ParticleLight {
  constructor(viewer, color = Cesium.Color.WHITE) {
    // 112.5607, 37.8844,
    //  创建 box entity
    this.boxEntity = viewer.entities.add({
      name: "box",
      position: Cesium.Cartesian3.fromDegrees(112.5607, 37.8844, 800),
      box: {
        dimensions: new Cesium.Cartesian3(100.0, 100.0, 50.0),
        material: Cesium.Color.RED.withAlpha(0),
      },
    });

    var particleSystem = new Cesium.ParticleSystem({

      // 粒子纹理
      image: "./texture/smoke.png",
      // 粒子图像大小
        // imageSize: new Cesium.Cartesian2(200.0, 200.0),
      // 粒子图像大小随机
      minimumImageSize: new Cesium.Cartesian2(0, 0),
      // minimumImageSize: new Cesium.Cartesian2(10, 10),
      maximumImageSize: new Cesium.Cartesian2(30, 30),
      //   设置开始的颜色
      startColor: color,
      //   设置结束的颜色
      endColor: Cesium.Color.WHITE.withAlpha(0),
      //   开始的时候粒子的大小
      startScale: 0.1,
      //   结束的时候粒子的大小
      endScale: 2.0,
      //   速度，米/秒
      //   speed: 5.0,
      // 随机的发射速度
      minimumSpeed: 1.0,
      maximumSpeed: 10.0,
      //   设置发射器
        // emitter: new Cesium.CircleEmitter(1000),
      emitter: new Cesium.BoxEmitter(new Cesium.Cartesian3(50.0, 50.0, 10.0)),
      // emitter: new Cesium.BoxEmitter(new Cesium.Cartesian3(100.0, 100.0, 500.0)),
      // 发射率，设置每秒产生粒子数量
      emissionRate: 3.0,
      //  粒子的生命周期，秒
      lifetime: 5.0,
      //   设置粒子发射的位置
      modelMatrix: this.boxEntity.computeModelMatrix(
        viewer.clock.currentTime,
        new Cesium.Matrix4()
      ),
      // emitterModelMatrix
    });
    viewer.scene.primitives.add(particleSystem);


    // var particleSystem = scene.primitives.add(new Cesium.ParticleSystem({
    //   image : '../../SampleData/smoke.png',
    //   color: Cesium.Color.MAGENTA,
    //   emissionRate: 5.0,
    //   emitter: new Cesium.BoxEmitter(new Cesium.Cartesian3(5.0, 5.0, 5.0)),
    //   imageSize : new Cesium.Cartesian2(25.0, 25.0),
    //   modelMatrix : entity.computeModelMatrix(viewer.clock.startTime, new Cesium.Matrix4()),
    //   lifetime : 16.0
    // }));
// 没效果就去瞅瞅shouldAnimate: true,气死。。。

  }
}
