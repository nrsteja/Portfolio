// src/Planet.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Texture from "./../images/texture.jpeg";
import Background from "./../images/stars.jpg"; // Ensure this path is correct

const DarkPlanet = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Create a sphere geometry for the planet
        const geometry = new THREE.SphereGeometry(5, 32, 32);
        const texture = new THREE.TextureLoader().load(Texture); // Ensure this path is correct
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const planet = new THREE.Mesh(geometry, material);
        scene.add(planet);


        // Create a large sphere for the background stars
        const bgGeometry = new THREE.SphereGeometry(100, 64, 64);
        const bgTexture = new THREE.TextureLoader().load(Background); // Ensure this path is correct
        const bgMaterial = new THREE.MeshBasicMaterial({
            map: bgTexture,
            side: THREE.BackSide // Render the inside of the sphere
        });
        const backgroundSphere = new THREE.Mesh(bgGeometry, bgMaterial);
        scene.add(backgroundSphere);

        // Set up OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // Enable smooth damping
        controls.dampingFactor = 0.25;

        camera.position.z = 15;

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Only required if controls.enableDamping = true, or if controls.autoRotate = true

            // Rotate the background sphere
            backgroundSphere.rotation.y += 0.001;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            const { innerWidth, innerHeight } = window;
            renderer.setSize(innerWidth, innerHeight);
            camera.aspect = innerWidth / innerHeight;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef}></div>;
};

export default DarkPlanet;
