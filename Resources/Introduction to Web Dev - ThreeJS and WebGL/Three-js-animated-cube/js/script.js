// https://threejs.org/docs
// version: 0.134.0

// Creating a Scene
const scene = new THREE.Scene();

// Creating new Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Creating WebGL renderer
const renderer = new THREE.WebGLRenderer();

// Set renderer size
renderer.setSize(window.innerWidth, window.innerHeight);

// Add a renderer DOM Element i.e. <Canvase> to Body
document.body.appendChild(renderer.domElement);

// Creating a box Mesh with defined geometry and material color red
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);

// Add cube mesh to scene
scene.add(cube);

//Define an animate function
const animate = function () {
  // Increment rotation values
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Render component with defined scene and camera
  renderer.render(scene, camera);

  // Pass animate function to requestAnimationFrame() to re-render scene every frame possible
  requestAnimationFrame(animate);
};

animate();
