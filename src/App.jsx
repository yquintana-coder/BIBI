import React from 'react';
import './App.css';

function Encabezado() {
  return (
    <header className="header-box">
      <h1>Portal del Proyecto de Grado - BIBI</h1>
      <p>Institución Educativa - Educación Media Technical</p>
    </header>
  );
}

function Presentacion() {
  return (
    <section className="card-box">
      <h2>Proyecto BIBI - Sistema de Monitoreo Ambiental Escolar</h2>
      <p><strong>Estado del Proyecto:</strong> Fase de Desarrollo y Prototipado</p>
      <p>
        El proyecto BIBI surge como respuesta a la necesidad de controlar la temperatura y la calidad
        del aire en los espacios cerrados de nuestra institución, garantizando un entorno adecuado
        para el aprendizaje.
      </p>
    </section>
  );
}

function Objetivos() {
  return (
    <section className="card-box">
      <h3>Objetivo General</h3>
      <p>
        Diseñar e implementar el prototipo BIBI para el monitoreo ambiental basado en hardware libre
        y desarrollo web para la comunidad educativa.
      </p>
    </section>
  );
}

function SolucionTecnica() {
  return (
    <section className="card-box">
      <h3>Solución Técnica</h3>
      <p>
        La propuesta de BIBI consiste en integrar sensores de temperatura y humedad que envían datos
        en tiempo real a una interfaz web realizada en React para su lectura y análisis.
      </p>
      <p><strong>Requerimientos mínimos del sistema:</strong></p>
      <ul>
        <li>Sensor DHT11 / DHT22 de temperatura y humedad</li>
        <li>Placa ESP32 o Arduino con módulo de red</li>
        <li>Servidor con Node.js y React</li>
        <li>Navegador web compatible con estándares modernos</li>
      </ul>
    </section>
  );
}

function Integrantes() {
  return (
    <section className="card-box">
      <h3>Equipo de Trabajo</h3>
      <p>Estudiante A: Yulieth Quintana - Desarrolladora Front-end y Documentadora</p>
      <p>Estudiante B: Gabriel Beltran - Técnico en Hardware y Gestión de Datos</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="main-container">
      <Encabezado />
      <main>
        <Presentacion />
        <Objetivos />
        <SolucionTecnica />
        <Integrantes />
      </main>
      <footer className="footer-box">
        <p>2026 - Proyecto de Grado Undécimo (BIBI)</p>
      </footer>
    </div>
  );
}