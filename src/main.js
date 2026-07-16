import './style.css'

import { animate, inView } from 'motion'
import {
    AmbientLight,
    Clock,
    DirectionalLight,
    Group,
    MeshLambertMaterial,
    MeshBasicMaterial,
    Mesh,
    PerspectiveCamera,
    Scene,
    TorusKnotGeometry,
    WebGLRenderer,
} from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { NoiseShader } from './noise-shader.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';


const sneakerTag = document.querySelector('section.sneakers')
const loaderTag = document.querySelector('div.loader');

let currentEffect = 0;
let aimEffect = 0;
let timeoutEffect; 


animate('section.content p, section.content img', { opacity: 0 })
inView('section.content', (info) => {
    animate(info.querySelectorAll('p, img'),
        { opacity: 1 },
        { duration: 1, delay: 1 }
    )
})

const clock = new Clock();



const scene = new Scene();
const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new WebGLRenderer({ alpha: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000000, 0); // Set background color to black with full transparency
sneakerTag.appendChild( renderer.domElement );


// LIGHTING
const ambience = new AmbientLight( 0x404040, 1 );
camera.add( ambience );

const keyLight = new DirectionalLight( 0xffffff, 1 ); 
keyLight.position.set( -1, 1, 3 );
camera.add( keyLight );

const fillLight = new DirectionalLight( 0xffffff, 0.50 );
fillLight.position.set ( 1, 1, 3 );
camera.add( fillLight );

const backLight = new DirectionalLight( 0xffffff, 1 );
backLight.position.set ( -1, 3, -1)
camera.add( backLight );

scene.add(camera);

// OBJECT IMPORT
const gltfLoader = new GLTFLoader();


const loadGroup = new Group();
loadGroup.position.y = -10;
window.loadGroup = loadGroup;

const scrollGroup = new Group();
scrollGroup.add( loadGroup );
window.scrollGroup = scrollGroup;

scene.add( scrollGroup );

animate('header', { y: -100, opacity: 0 });
animate('section.new-drop', { y: -100, opacity: 0 });
 gltfLoader.load("sneaker.glb", (gltf) => {
   loadGroup.add (gltf.scene);

animate (
      'header',
    { y: [-100, 0],
     opacity: [0, 1] 
    },
    { duration: 2.5 }
)

animate(
    'section.new-drop',
    { y: [-100, 0], opacity: [0, 1] },
    { duration: 1, delay: 2 }
)
   animate(0, 1, {
  duration: 2,
  delay: 1,
  onUpdate: (t) => {
    loadGroup.position.y = -10 + 10 * t;
  }
})

animate ("div.loader", {
    y: "-100%"
}, {duration : 1, delay : 1}, )
 }, (xhr) => {
    const p = Math.round((xhr.loaded / xhr.total) * 100);
    loaderTag.querySelector("span").innerHTML = p + '%';
}, (error) => {
    console.error(error)
}
);
 





// CONTROLS
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 2;
 
controls.update();

camera.position.z = 3.5;

 //POST PROCESSING
const composer = new EffectComposer(renderer);
composer.render()

const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );

const noisePass = new ShaderPass( NoiseShader );
noisePass.uniforms.time.value = clock.getElapsedTime();
noisePass.uniforms.effect.value = currentEffect;
composer.addPass( noisePass );

const outputPass = new OutputPass();
composer.addPass( outputPass );




const render = () => { 
controls.update();

scrollGroup.rotation.set(0, window.scrollY * 0.005, 0);

currentEffect += (aimEffect - currentEffect) * 0.01;

noisePass.uniforms.time.value = clock.getElapsedTime();
noisePass.uniforms.effect.value = currentEffect;
noisePass.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight;

requestAnimationFrame(render); 
composer.render(); } 

const resize = () => {camera.aspect =  window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
noisePass.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight;


renderer.setSize(window.innerWidth, window.innerHeight);
}

    
const scroll = () => {
    clearTimeout (timeoutEffect)
    aimEffect =  1

    timeoutEffect = setTimeout (() => {
        aimEffect = 0;
    }, 200);
}
render();
window.addEventListener('resize', resize);
window.addEventListener('scroll', scroll)