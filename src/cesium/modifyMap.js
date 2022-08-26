// import * as dat from "dat.gui"
// import * as Cesium from "cesium";
// const gui=new dat.GUI();
  
// const params={
//   color:"rgb(255,0,0)"
// }
export default function modifyMap(viewer) {
  // 获取地图影像图层
  let baseLayer = viewer.imageryLayers.get(0);
  //设置2个变量，用来判断是否进行颜色的翻转和过滤
  baseLayer.invertColor = true;

  baseLayer.filterRGB = [0, 50, 100]; //[255,255,255] = > [0,50,100]
  // gui.addColor(params,"color").name("地图颜色").onChange((val)=>{
  //   // console.log(val)
  //   // const color = Cesium.Color.fromCssColorString(val);
  //   let colorstr=val.substring(4,val.length-1)
  //   let color =colorstr.split(',')
  //   // console.log(color)
  //   baseLayer.filterRGB=[color[0]-0,color[1]-0,color[2]-0]
  //   changeMapColor()
  //   viewer.scene.globe._shouldRegenerateShaders = true;
  // })

  //   更改底图着色器的代码
  const baseFragmentShader =
    viewer.scene.globe._surfaceShaderSet.baseFragmentShaderSource.sources;
  // console.log(viewer.scene.globe);
  changeMapColor()
  function changeMapColor(){
    // console.log(baseLayer.filterRGB)
  // 循环修改着色器
  for (let i = 0; i < baseFragmentShader.length; i++) {
    // console.log(baseFragmentShader[i]);
    const strS = "color = czm_saturation(color, textureSaturation);\n#endif\n";
    let strT = "color = czm_saturation(color, textureSaturation);\n#endif\n";
    if (baseLayer.invertColor) {
      strT += `
        color.r = 1.0 - color.r;
        color.g = 1.0 - color.g;
        color.b = 1.0 - color.b;
      `;
    }
    if (baseLayer.filterRGB) {
      strT += `
        color.r = color.r*${baseLayer.filterRGB[0]}.0/255.0;
        color.g = color.g*${baseLayer.filterRGB[1]}.0/255.0;
        color.b = color.b*${baseLayer.filterRGB[2]}.0/255.0;
      `;
      
      // strT += `
      //   color.rgb=mix(color.rgb,vec3(0.0,0.2,0.4),1.0) ;
      // `;
    }

    baseFragmentShader[i] = baseFragmentShader[i].replace(strS, strT);
  }
}

}
