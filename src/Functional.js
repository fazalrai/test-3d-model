// import React, { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { MTLLoader, OBJLoader } from "three-obj-mtl-loader";
// import OrbitControls from "three-orbitcontrols";
// // import axios from "./config/axios";
// import axios from "axios";
// import Triversal from "./triversal/Index";

// import { Button , ToggleButton} from "react-bootstrap";
// const App = () => {
//   const mountRef = useRef(null);

//   const [checked, setChecked] =React.useState(false)

//   const [models, setModels] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const url = `${process.env.REACT_APP_API_BASE_URL}/models`;
//     const token = localStorage.getItem('Token');
//     //   debugger


//     const headers = {
//       Authorization:
//         `Bearer ${token}`
//     }
//     axios
//       .get(url, { headers })
//       .then((response) => {
//         setModels(response.data);
//       });
//   }, []);

//   useEffect(() => {
//     var scene = new THREE.Scene();

//     var renderer = new THREE.WebGLRenderer({ antialias: true });
//     renderer.setSize(window.innerWidth - 250, window.innerHeight - 250);
//     renderer.setClearColor("#263238");

//     var camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 20;
//     camera.position.y = 5;

//     const controls = new OrbitControls(camera, renderer.domElement);

//     var lights = [];
//     lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
//     lights[1] = new THREE.PointLight(0xffffff, 1, 0);
//     lights[2] = new THREE.PointLight(0xffffff, 1, 0);
//     lights[0].position.set(0, 200, 0);
//     lights[1].position.set(100, 200, 100);
//     lights[2].position.set(-100, -200, -100);
//     scene.add(lights[0]);
//     scene.add(lights[1]);
//     scene.add(lights[2]);

//     const geometry = new THREE.BoxGeometry(5, 5, 5);
//     const material = new THREE.MeshBasicMaterial({
//       color: "#0F0",
//     });

//     var cube = new THREE.Mesh(geometry, material);
//     cube.position.setY(-3); //or  this
//     cube.position.setX(2); //or  this

//     // scene.add(cube);

//     // var animate2 = function (free) {
//     //     requestAnimationFrame( animate );
//     //     free.rotation.x += 0.01;
//     //     free.rotation.y += 0.01;

//     //     renderer.render( scene, camera );
//     //   };

//     var mtlLoader = new MTLLoader();
//     // mtlLoader.setBaseUrl("./assets/images/Candy");
//     if (models.length > 0) {
//       if (!mountRef.current.childNodes.length > 0) {
//         mountRef.current.appendChild(renderer.domElement);

//       }

//       // mtlLoader.load(models[index].detail.mesh_material, materials => {
//       //   materials.preload();
//       //   console.log("Material loaded");
//       //   //Load Object Now and Set Material
//       //   var objLoader = new OBJLoader();
//       //   objLoader.setMaterials(materials);
//       //   objLoader.load(models[index].detail.mesh_structure,
//       //     object => {
//       //         debugger
//       //       var freedomMesh = object;
//       //       freedomMesh.position.setX(3); //or  this
//       //       freedomMesh.scale.set(1, 1, 1);
//       //       scene.add(freedomMesh);
//       //       animate();
//       //     },
//       //     xhr => {
//       //       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//       //     },
//       //     // called when loading has errors
//       //     error => {
//       //       console.log("An error happened" + error);
//       //     }
//       //   );
//       // });

//       var objLoader = new OBJLoader();
//       objLoader.load(
//         models[index].detail.mesh_structure,
//         (object) => {
//           var freedomMesh = object;
//           freedomMesh.position.setX(3); //or  this
//           freedomMesh.scale.set(1, 1, 1);
//           scene.add(freedomMesh);
//           animate();
//         },
//         (xhr) => {
//           console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
//         },
//         // called when loading has errors
//         (error) => {
//           console.log("An error happened" + error);
//         }
//       );
//     }
//     function animate() {
//       requestAnimationFrame(animate);
//       //   cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     }

//     // return () => mountRef.current.removeChild( renderer.domElement);
//   }, [models, index]);

//   const handleNext = () => {
//     if (index < models.length-1) {
//       mountRef.current.removeChild(mountRef.current.firstChild);
//       setIndex((previous) => previous + 1);
//     }
//     else{
//         setIndex(index)
//     }
//   };

//   const handlePrevious = () => {
//     if (index > 0) {
//         mountRef.current.removeChild(mountRef.current.firstChild);
//       setIndex((previous) => previous - 1);
//     }
//     else{
//         setIndex(index)

//     }
//   };
//   return (
//     <div>
//       <div
//         ref={mountRef}
//         style={{
//           width: "600px",
//           height: "600px",
//           marginRight: "auto",
//           marginLeft: "9%",
//         }}
//       ></div>
//       <div style={{ display: "flex", justifyContent: "space-evenly" }}>
//         <Button  onClick={handlePrevious}  variant="primary">PREVIOUS</Button>

//         <ToggleButton
//           id="toggle-check"
//           type="checkbox"
//           variant="secondary"
//         //   checked={models[index].user.include()}
//           value="1"
//           onChange={(e) => setChecked(e.currentTarget.checked)}
//         >
//           Checked
//         </ToggleButton>
//         <Button onClick={handleNext} variant="primary">
//           NEXT
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default App;
