const palabras = [
  {
    palabra: "Siembra",
    descripcion: "¿Cuál es la mejor época para sembrar batatas?",
  },
  {
    palabra: "Cosecha",
    descripcion: "¿Cómo se determina que una batata está lista para cosechar?",
  },
  {
    palabra: "Nutrición",
    descripcion: "Nombra dos beneficios nutricionales de la batata.",
  },
  {
    palabra: "Cultivo",
    descripcion: "¿Qué condiciones necesita el cultivo para crecer?",
  },
  {
    palabra: "Comercialización",
    descripcion: "¿Cómo llega la batata desde el campo al consumidor?",
  },
  {
    palabra: "Rojas",
    descripcion: "¿Por qué Rojas es importante para la producción agrícola?",
  },
];

function generarPalabra() {
  const aleatorio = palabras[Math.floor(Math.random() * palabras.length)];

  document.getElementById("palabra").textContent = aleatorio.palabra;

  document.getElementById("descripcion").textContent = aleatorio.descripcion;
}
