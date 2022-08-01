import * as THREE from "three";
import { SelectionBox } from './jsm/SelectionBox.js';

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

const selectionBox = new SelectionBox(  );

function onPointerMove( event ) {

	// calculate pointer position in normalized device coordinates
	// (-1 to +1) for both components

	pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {

    var scene = new THREE.Scene();

    var renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth - 250, window.innerHeight - 250);
    renderer.setClearColor("#263238");

    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 20;
    camera.position.y = 5;

	// update the picking ray with the camera and pointer position
	raycaster.setFromCamera( pointer, camera );

	// calculate objects intersecting the picking ray
	const intersects = raycaster.intersectObjects( scene.children );

	for ( let i = 0; i < intersects.length; i ++ ) {

		intersects[ i ].object.material.color.set( 0xff0000 );

	}

	renderer.render( scene, camera );

}

export default render

window.addEventListener( 'pointermove', onPointerMove );

window.requestAnimationFrame(render);