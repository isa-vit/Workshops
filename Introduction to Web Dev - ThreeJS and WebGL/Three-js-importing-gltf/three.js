// import * as THREE from "./three.js-master/build/three.module.js";
// import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js";
// import { OrbitControls } from "./three.js-master/examples/jsm/controls/OrbitControls.js";

//importing three from Web
import * as THREE from "https://cdn.skypack.dev/three@0.134.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.134.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.134.0/examples/jsm/controls/OrbitControls.js";

const canvasElm = document.getElementById("webgl");
const scene = new THREE.Scene();

// Defining GLTF loader
const gltf = new GLTFLoader();

// Load .gltf file and add it to scene
gltf.load(
  "models/abstractCube.gltf",
  (gltf) => {
    const root = gltf.scene;

    scene.add(root);
  },
  (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  (error) => {
    console.log(error);
  }
);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  1000
);
camera.position.set(0, 1, 5);

scene.add(camera);

// Lighting
const directionalLight = new THREE.DirectionalLight("white", 500);
directionalLight.position.set(50, 50, 0);

scene.add(directionalLight);

// Lighting
const directionalLight1 = new THREE.DirectionalLight("white", 500);
directionalLight1.position.set(10, -50, 0);

scene.add(directionalLight1);

// Controls
const controls = new OrbitControls(camera, canvasElm);
controls.target.set(0, 0, 0);
controls.update();

const renderer = new THREE.WebGLRenderer({
  canvas: canvasElm,
});

// Plane
var plane;
var groundMaterial = new THREE.MeshPhongMaterial({
  color: 0x6c6c6c,
});
plane = new THREE.Mesh(new THREE.PlaneGeometry(500, 500), groundMaterial);
plane.rotation.x = -Math.PI / 2;
plane.receiveShadow = true;

scene.add(plane);

//Renderer
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);

function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}

animate();

// console.log(scene);
