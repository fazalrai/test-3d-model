import React, { Component } from "react";
import * as THREE from "three";
import { Button, Form } from "react-bootstrap";
import { Modal} from 'react-bootstrap';


import Stats from './jsm/stats.module.js';

			import { SelectionBox } from './jsm/SelectionBox.js';
			import { SelectionHelper } from './jsm/SelectionHelper.js';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {selected: [], allSelected: [], show: false, groupname: "", count:0}
    this.updateSelected=this.updateSelected.bind(this)
    };
  
    handleSelected = () => {
      console.log("hello world")
      console.log(this.state.selected)
    }
    
    updateSelected = ()=>{

      

    }

    openDialog=()=>{
      this.setState({show: !this.state.show});
    }

    closeDialog=()=>{

      this.setState({count: 1})

      this.setState((prevState) => ({show: !prevState.show}))

      let group_name = this.state.groupname
      let currentSelected = {}

      currentSelected[group_name] = this.state.selected

      debugger

      this.setState({allSelected: [...this.state.allSelected, currentSelected]})
      // this.setState((prevState) => ({selected: [...prevState.selected, {prevState.groupname: [prevState.selected]}]))

    }

  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    const group1 = new THREE.Group();
    const group2 = new THREE.Group();

    // group.add( cubeA );
    // group.add( cubeB );
    
    if(this.state.count === 0){
    for ( let i = 0; i < 50; i ++ ) {

      var geometry = new THREE.BoxGeometry(1, 1, 1);
      var material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x00ff00 });
      var cube = new THREE.Mesh(geometry, material);
    cube.position.setY(Math.random() * 900 - 450); 
    cube.position.setX(Math.random() * 900 - 450); 
    cube.position.setZ(Math.random() * 900 - 500); 

    

      // cube.position.x = Math.random() * 900 - 450;
      // cube.position.y = Math.random() * 900 - 450;
      // cube.position.z = Math.random() * 900 - 500;

      // cube.rotation.x = Math.random() * 2 * Math.PI;
      // cube.rotation.y = Math.random() * 2 * Math.PI;
      // cube.rotation.z = Math.random() * 2 * Math.PI;

      cube.rotateX( Math.PI / 2 );


      // cube.rotation.x += 0.05;
      // cube.rotation.y += 0.01;
      // cube.rotation.z += 0.01;

      cube.scale.x = Math.random() * 2 + 10;
      cube.scale.y = Math.random() * 2 + 10;
      cube.scale.z = Math.random() * 2 + 10;
      scene.background = new THREE.Color( 0xf0f0f0 );

  
      camera.position.z = 5;

      
      cube.castShadow = true;
      cube.receiveShadow = true;

      // requestAnimationFrame(animate);

      // cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;



      // const object = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color: Math.random() * 0xffffff } ) );

      // object.position.x = Math.random() * 1600 - 800;
      // object.position.y = Math.random() * 900 - 450;
      // object.position.z = Math.random() * 900 - 500;

      // object.rotation.x = Math.random() * 2 * Math.PI;
      // object.rotation.y = Math.random() * 2 * Math.PI;
      // object.rotation.z = Math.random() * 2 * Math.PI;

      // object.scale.x = Math.random() * 2 + 1;
      // object.scale.y = Math.random() * 2 + 1;
      // object.scale.z = Math.random() * 2 + 1;

      // object.castShadow = true;
      // object.receiveShadow = true;

                
      scene.add(cube);


    }
  }
  else{
    for (let i = scene.children.length - 1; i >= 0; i--) {
      if(scene.children[i].type === "Mesh")
          scene.remove(scene.children[i]);
  }
    this.state.allSelected.forEach(obj=>scene.add(obj))

  }

    let stats = new Stats();
      this.mount.appendChild( stats.dom );


    renderer.render(scene, camera);
    renderer.setClearColor("#FFFFFF");
    renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFShadowMap;

				window.addEventListener( 'resize', onWindowResize );
        function onWindowResize() {

          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
  
          renderer.setSize( window.innerWidth, window.innerHeight );
  
        }


    var animate = function() {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
      renderer.setClearColor("#FFFFFF");

    };

    const selectionBox = new SelectionBox( camera, scene );
    const helper = new SelectionHelper( selectionBox, renderer, 'selectBox' );


    // const controls = new OrbitControls(camera, renderer.domElement);

    // controls.update();

    document.addEventListener( 'pointerdown', function ( event ) {

      console.log("pointer down is calling");

      for ( const item of selectionBox.collection ) {

        item.material.color.set( 0x000000 );
        // item.material.emissive.set( 0x000000 );
        // item.material.color.r = 220
        // item.material.color.g = 20
        // item.material.color.b = 60

      }

      selectionBox.startPoint.set(
        ( event.clientX / window.innerWidth ) * 2 - 1,
        - ( event.clientY / window.innerHeight ) * 2 + 1,
        0.5 );

    } );

   
    document.addEventListener( 'pointermove', function ( event ) {



      console.log("pointer move is calling");


      if ( helper.isDown ) {

        for ( let i = 0; i < selectionBox.collection.length; i ++ ) {
          selectionBox.collection[ i ].material.color.set( 0x000000 );


          // selectionBox.collection[ i ].material.color.r = 220
          // selectionBox.collection[ i ].material.color.g = 20
          // selectionBox.collection[ i ].material.color.b = 60

          // selectionBox.collection[ i ].material.emissive.set( 0x000000 );

        }



        selectionBox.endPoint.set(
          ( event.clientX / window.innerWidth ) * 2 - 1,
          - ( event.clientY / window.innerHeight ) * 2 + 1,
          0.5 );

        const allSelected = selectionBox.select();


        for ( let i = 0; i < allSelected.length; i ++ ) {
          allSelected[ i ].material.color.set( 0x000000 );

          // allSelected[ i ].material.color.r = 220
          // allSelected[ i ].material.color.g = 20
          // allSelected[ i ].material.color.b = 60

          // debugger

          // allSelected[ i ].material.emissive.set( 0xffffff );

        }

      }

    } );

    document.addEventListener( 'pointerup', ( event ) => {




      console.log("pointer up is calling");


      selectionBox.endPoint.set(
        ( event.clientX / window.innerWidth ) * 2 - 1,
        - ( event.clientY / window.innerHeight ) * 2 + 1,
        0.5 );

      const allSelected = selectionBox.select();

      console.log('all selected are', allSelected);

      if(event.target.type !== 'button'){
        if(allSelected.length !==0){
          this.setState({selected: allSelected})

        }

        }
    
      // updateSelected(allSelected);

      for ( let i = 0; i < allSelected.length; i ++ ) {
        allSelected[ i ].material.color.r = 220
        allSelected[ i ].material.color.g = 20
        allSelected[ i ].material.color.b = 60
        // allSelected[ i ].material.emissive.set( 0xffffff );

      }

    }
    );

    animate();
  }
  render() {
    return (
    <div>

<div className="header">
      <div>
        <h1>3D Models</h1>
      </div>
      <div className="logout">
          <Button
            className="align-button"
            variant="primary"
            size="lg"
            onClick={this.handleSelected}
          >
            Save
          </Button>

          <Button variant="primary" onClick={this.openDialog}>
            Save the list in group
      </Button>

      <Modal show={this.state.show} onHide={this.openDialog}>
        <Modal.Header closeButton>
          <Modal.Title>Enter group name</Modal.Title>
        </Modal.Header>
        <Form>
    <Form.Control type="text" value={this.state.groupname} onChange={(e)=>this.setState({groupname: e.target.value})} placeholder="Group name" />

  </Form>
        <Modal.Footer>
          <Button variant="primary" onClick={this.closeDialog}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    </div>
    <div ref={ref => (this.mount = ref)} />
    </div>

    );
  }
}

export default App