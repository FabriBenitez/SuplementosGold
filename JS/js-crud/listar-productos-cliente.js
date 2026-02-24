import { supabase } from "../config/supabase.js";

const contenedor = document.getElementById("contenedor-productos");
const selectOrdenPrecio = document.getElementById("ordenPrecio");
const selectFiltrarTipo = document.getElementById("filtrarTipo");

let productos = [];
let filtroTipo = "";
let ordenPrecio = "";

// 🔹 Renderiza los productos

function renderizarProductos(lista) {
  contenedor.innerHTML = "";

  if (!lista || lista.length === 0) {
    contenedor.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("card-producto");

    card.innerHTML = `
      <div class="producto-info">
        <h3 class="producto-nombre">${p.nombre}</h3>
        <p class="producto-tipo">${p.tipo}</p>
        <div class="producto-img-container">
          <img src="${p.imagen_url || "../img/placeholder.png"}" alt="${p.nombre}" class="producto-img" />
        </div>
        <p class="producto-descripcion">${p.descripcion || "Sin descripción"}</p>
        <p class="producto-precio"> $ ${p.precio}</p>
      </div>
    `;

    // 🔸 Nuevo: redirección al hacer clic
    card.addEventListener("click", () => {
      window.location.href = `producto.html?id=${p.id}`;
    });

    contenedor.appendChild(card);
  });
}

// 🔹 Trae los productos
async function getProductos() {
  const { data, error } = await supabase.from("productos").select("*");

  if (error) {
    console.error("Error al obtener productos:", error.message);
    contenedor.innerHTML = "<p>Error al cargar productos</p>";
    return;
  }

  productos = data;
  aplicarFiltros();
}

// 🔹 Aplica filtros
function aplicarFiltros() {
  let resultado = [...productos];

  if (filtroTipo !== "") {
    resultado = resultado.filter(p => p.tipo === filtroTipo);
  }

  if (ordenPrecio === "menor") {
    resultado.sort((a, b) => a.precio - b.precio);
  } else if (ordenPrecio === "mayor") {
    resultado.sort((a, b) => b.precio - a.precio);
  }

  renderizarProductos(resultado);
}

// 🔹 Eventos
selectOrdenPrecio.addEventListener("change", (e) => {
  ordenPrecio = e.target.value;
  aplicarFiltros();
});

selectFiltrarTipo.addEventListener("change", (e) => {
  filtroTipo = e.target.value;
  aplicarFiltros();
});

// 🔹 Inicialización
getProductos();
