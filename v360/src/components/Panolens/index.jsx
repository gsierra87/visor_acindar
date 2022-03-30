// import * as PANOLENS from "panolens";
// import image_360 from "../../images/descarga.jpg";

// const panorama = new PANOLENS.ImagePanorama(image_360);
// console.log(panorama);
// const viewer = new PANOLENS.Viewer({
//   container: document.querySelector("#coucou")
// });
// console.log(viewer);
// viewer.add(panorama);
// const Pano = () => {
//   return (
//     <>
//       <p>Coucou</p>
//       <div id="coucou" htmlstyle="height:100%">
//         {}
//       </div>
//     </>
//   );
// };

// export {Pano};

import * as PANOLENS from "panolens";
import * as THREE from 'three';
import './Panolens.css';
import image_360 from "../../images/descarga.jpg";
import image_360_2 from "../../images/example-image.png";

var containerBaseWidth = 765;
var containerBaseHeight = 400;
var deltaSize = 100;

var panorama, viewer, container, infospot, panel, panel1, infospot1;

container = document.querySelector("#container");

// Estos son las tarjetas que se muestran al hacer foco sobre un punto en la pantalla.
panel = document.querySelector("#panel");
panel1 = document.querySelector("#panel1");

// panorama = new PANOLENS.ImagePanorama(
//   "https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg"
// );

var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];
var infospotPositions = [
  new THREE.Vector3(3136.06, 1216.30, -3690.14),
  new THREE.Vector3(3258.81, -295.50, 3771.13)
];

// panorama = new PANOLENS.ImagePanorama(image_360);
panorama = new PANOLENS.ImagePanorama( image_360 );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama2 = new PANOLENS.ImagePanorama( image_360_2 );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama, infospotPositions[1] );


// Este es el circulo apra marcar.
// Position: X, Y, Z
infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);
infospot.addHoverElement(panel, 150);
panorama.add(infospot);

infospot1 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot1.position.set(0, 500, -7000);
infospot1.addHoverElement(panel1, 150);
panorama.add(infospot1);

viewer = new PANOLENS.Viewer({ container: container });
viewer.container.style.width = containerBaseWidth + "px";
viewer.container.style.height = containerBaseHeight + "px";
viewer.onWindowResize( containerBaseWidth, containerBaseHeight );
// viewer.add(panorama);
viewer.add( panorama, panorama2 );

panorama.add( infospot );

// var renderer, camera, scene, box;

// renderer = new THREE.WebGLRenderer();
// renderer.setClearColor(0xffffff);
// renderer.setSize(panel.clientWidth, panel.clientHeight);
// camera = new THREE.PerspectiveCamera(
//   45,
//   panel.clientWidth / panel.clientHeight,
//   1,
//   2000
// );
// scene = new THREE.Scene();
// console.log(infospot.element);
// infospot.element.appendChild(renderer.domElement);

/* TEST 1 */

const html = "<div class='section__detalle--container-visible'>" +
        "<span class='section__detalle--titulo'>" +
            "Baranda Azul" +
        "</span>" +
        "<hr class='section__detalle--separador'></hr>" +
        "<p class='section__detalle--detalle'>" +
            "Esta baranda fue pintada por el mismisimo Migue Angel." +
        "</p>";

const html1 = "<div class='section__detalle--container-visible'>" +
        "<span class='section__detalle--titulo'>" +
            "Departamentos Monoblocks" +
        "</span>" +
        "<hr class='section__detalle--separador'></hr>" +
        "<p class='section__detalle--detalle'>" +
            "Estos departamentos poseen todos los servicios: WIFI, Cochera, Aire Acondicionado." +
        "</p>";

document.getElementById("panel").innerHTML += html;
document.getElementById("panel1").innerHTML += html1;
        
// function changeContainerSize ( width, height ) {
//   viewer.container.style.width = width + "px";
//   viewer.container.style.height = height + "px";
//   viewer.onWindowResize( width, height );
// }

// changeContainerSize(containerBaseWidth, containerBaseHeight);

/* ----------------- */

// box = new THREE.Mesh(
//   new THREE.BoxGeometry(10, 10, 10),
//   new THREE.MeshNormalMaterial()
// );
// box.position.z = -20;
// scene.add(box);

// viewer.addUpdateCallback(function () {
//   renderer.render(scene, camera);
//   box.rotation.y += 0.03;
// });

var panorama, panorama2, viewer, container, infospot;

var lookAtPositions = [
  new THREE.Vector3(4871.39, 1088.07, -118.41),
  new THREE.Vector3(1278.27, 732.65, 4769.19)
];

var infospotPositions = [
  new THREE.Vector3(3136.06, 1216.30, -3690.14),
  new THREE.Vector3(3258.81, -295.50, 3771.13)
];

container = document.querySelector( '#container' );

panorama = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg' );
panorama.addEventListener( 'enter-fade-start', function(){
  viewer.tweenControlCenter( lookAtPositions[0], 0 );
} );

panorama2 = new PANOLENS.ImagePanorama( 'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/cabin.jpg' );
panorama2.addEventListener( 'enter', function(){
  viewer.tweenControlCenter( lookAtPositions[1], 0 );
} );

panorama.link( panorama2, infospotPositions[0] );
panorama2.link( panorama, infospotPositions[1] );

infospot = new PANOLENS.Infospot( 350, PANOLENS.DataImage.Info );
infospot.position.set( 0, -2000, -5000 );

panorama.add( infospot );

viewer = new PANOLENS.Viewer( { output: 'console', container: container } );
viewer.add( panorama, panorama2 );






const Pano = () => {
  return (
    <>
     
    </>
  );
};

export {Pano};