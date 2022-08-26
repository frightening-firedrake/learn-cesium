<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div id="cesiumContainer"></div>
</template>
<script setup>
import * as Cesium from "cesium"
import "@/Widgets/widgets.css"
import { onMounted } from "vue";
//视角相机背景
import initViewer from "@/cesium/initViewer";
// 鼠标显示经纬
import MousePosition from "@/cesium/MousePosition";
// 罗盘视角切换
import CesiumNavigaion from "cesium-navigation-es6";
// 修改地图底样
import modifyMap from "@/cesium/modifyMap";
// 修改建筑
import modifyBuild from "@/cesium/modifyBuild";
// import modifyBuild from "@/cesium/modifyBuild1";
// 光锥
import LightCone from "@/cesium/LightCone";
// 上升线
import RectFlyLight from "@/cesium/RectFlyLight";
// 路线
import RoadLightLine from "@/cesium/RoadLightLine";
// 雷达
import RadarLight from "@/cesium/RadarLight";
// 六边形
import LightSpread from "@/cesium/LightSpread";
// 能量盾
import Shield from "@/cesium/Shield";
// 光墙
import LightWall from "@/cesium/LightWall";
// 粒子
import ParticleLight from "@/cesium/ParticleLight";

onMounted(()=>{
  const viewer = initViewer()
  // // 将经纬度转为笛卡尔坐标
  // var cartesian3 = Cesium.Cartesian3.fromDegrees(
  //   // 经度
  //   89.5,
  //   // 纬度
  //   20.4,
  //   // 高度
  //   100
  // );
  // console.log(cartesian3);

  // // 将笛卡尔坐标转为经纬度
  // var cartographic = Cesium.Cartographic.fromCartesian(cartesian3);
  // console.log(cartographic);

  // 根据鼠标位置生成经纬度值
  let mousePosition = new MousePosition(viewer);

  // 设置导航罗盘的配置
  var options = {
    // 启用罗盘
    enableCompass: true,
    // 是否启用缩放
    enableZoomControls: false,
    // 是否启用指南针外环
    enableCompassOuterRing: true,
    // 是否启用距离的图例
    // enableDistanceLegend: false,
  };
  // 初始化导航罗盘
  let navigation = new CesiumNavigaion(viewer, options);

  // 修改地图的底色
  modifyMap(viewer);
  // 修改建筑的颜色
  modifyBuild(viewer);
// 添加动态的光锥特效
  let lightCone = new LightCone(viewer);
  // 创建区域上升流光飞线
  let rectFlyLight = new RectFlyLight(viewer);
  // 创建道路飞线
  let roadLightLine = new RoadLightLine(viewer);
    // 创建雷达
  let radarLight = new RadarLight(viewer);
  // 6边形光波扩散特效
  let lightSpread = new LightSpread(viewer);
  // 能量盾
  let shield = new Shield(viewer);
// 创建光墙
  let lightWall = new LightWall(viewer);
  // particleLight,创建烟花粒子
  let particleLight = new ParticleLight(viewer, Cesium.Color.RED);
})
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
#cesiumContainer {
  width: 100vw;
  height: 100vh;
}
</style>
