import * as Cesium from "cesium"
export default function initViewer(){
    window.CESIUM_BASE_URL="/"
Cesium.Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmOWRhZmFmYy1lY2VjLTRlNmItOTc5Ny02MGFkMTA1NmMwY2UiLCJpZCI6MTA0NjIzLCJpYXQiOjE2NjAzODkzNTJ9.F2rXeQ5osNmvmch9yoyJjH789S5RpiUohd67Kl5wS3w"

    // 设置cesium默认视角大概对准中国
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = Cesium.Rectangle.fromDegrees(
    // 西边的经度
    89.5,
    // 南边维度
    20.4,
    // 东边经度
    110.4,
    // 北边维度
    61.2
  );

  var viewer = new Cesium.Viewer("cesiumContainer", {
    // 是否显示信息窗口模型的信息
    // infoBox: false,
    // 是否显示查询按钮
    // geocoder: false,
    // 不显示home按钮
    homeButton: false,
    // 控制查看器的显示模式
    sceneModePicker: false,
    // 是否显示图层选择
    baseLayerPicker: false,
    // 是否显示帮助按钮
    navigationHelpButton: false,
    // 是否播放动画面板显示
    animation: false,
    // 是否显示时间轴
    timeline: false,
    // 是否显示全屏按钮
    fullscreenButton: false,
    // 这难道是时钟吗？
    shouldAnimate: true,
    terrainProvider: Cesium.createWorldTerrain(
      {
        requestWaterMask : true,
        requestVertexNormals : true
      }
    ),
    // 高德矢量地图,
    // imageryProvider: new Cesium.UrlTemplateImageryProvider({
    //     url: "http://webrd02.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}",
    //     layer: "tdtVecBasicLayer",
    //     style: "default",
    //     format: "image/png",
    //     tileMatrixSetID: "GoogleMapsCompatible",
    //   }),
  });
  // 设置沙箱允许使用js
//   var iframe = document.getElementsByClassName("cesium-infoBox-iframe")[0];
//   iframe.setAttribute(
//     "sandbox",
//     "allow-same-origin allow-scripts allow-popups allow-forms"
//   );
//   iframe.setAttribute("src", "");

  // 隐藏logo
  viewer.cesiumWidget.creditContainer.style.display = "none";

  viewer.scene.globe.enableLighting = true;
  // 取消天空盒显示
  viewer.scene.skyBox.show = false;
  // 设置背景为黑色
  viewer.scene.backgroundColor = Cesium.Color.BLACK;
  // 设置抗锯齿
  viewer.scene.postProcessStages.fxaa.enabled = true;

  // 太原万达坐标
  var postion = Cesium.Cartesian3.fromDegrees(
    // 经度
    112.5607,
    // 纬度
    37.8844,
    // 高度
    4000
  );
 // 广州塔
//  var postion = Cesium.Cartesian3.fromDegrees(
//     // 经度
//     113.32,
//     // 纬度
//     23.11,
//     // 高度
//     1500
//   );
  // 创建一个点
  // var point = viewer.entities.add({
  //   // 定位点
  //   position: Cesium.Cartesian3.fromDegrees(113.3191, 23.109, 700),
  //   // 点
  //   point: {
  //     pixelSize: 10,
  //     color: Cesium.Color.RED,
  //     outlineColor: Cesium.Color.WHITE,
  //     outlineWidth: 4,
  //   },
  // });
//   // 添加文字标签和广告牌
//   var label = viewer.entities.add({
//     position: Cesium.Cartesian3.fromDegrees(112.5607, 37.8844, 50),
//     label: {
//       text: "万达广场",
//       font: "24px sans-serif",
//       fillColor: Cesium.Color.WHITE,
//       outlineColor: Cesium.Color.BLACK,
//       outlineWidth: 4,
//       // FILL填充文字，OUTLINE勾勒标签，FILL_AND_OUTLINE填充文字和勾勒标签
//       style: Cesium.LabelStyle.FILL_AND_OUTLINE,
//       // 设置文字的偏移量
//       pixelOffset: new Cesium.Cartesian2(0, -24),
//       // 设置文字的显示位置,LEFT /RIGHT /CENTER
//       horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
//       // 设置文字的显示位置
//       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
//     },
//     billboard: {
//       image: "./texture/gzt.png",
//       width: 50,
//       height: 50,
//       // 设置广告牌的显示位置
//       verticalOrigin: Cesium.VerticalOrigin.TOP,
//       // 设置广告牌的显示位置
//       horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
//     },
//   });
  viewer.camera.flyTo({
    destination: postion,
    orientation: {
    // 指定相机的朝向,偏航角
      heading: Cesium.Math.toRadians(0),
    // 指定相机的俯仰角,0度是竖直向上,-90度是向下
      pitch: Cesium.Math.toRadians(-90),
    // 指定相机的滚转角,翻滚角
      roll: 0,
    },
    duration: 2,
  });

  return viewer;
}