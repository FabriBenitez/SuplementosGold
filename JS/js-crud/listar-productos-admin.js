// JS/js-crud/listar-productos.js
import { supabase } from "../config/supabase.js";

const contenedor = document.querySelector(".suplementos");
const filtroSelect = document.getElementById("filtro-producto");

// Función para renderizar productos en la vista del admin
function renderProductos(productos) {
  contenedor.innerHTML = ""; // limpio antes de mostrar

  if (productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos disponibles</p>";
    return;
  }

  productos.forEach((p) => {
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
        <p class="producto-precio">$ ${p.precio}</p>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Traer productos de Supabase
async function getProductos(tipo = "") {
  let query = supabase.from("productos").select("*");

  if (tipo) query = query.eq("tipo", tipo);

  const { data, error } = await query;

  if (error) {
    console.error("Error al obtener productos:", error.message);
    contenedor.innerHTML = "<p>Error al cargar productos</p>";
    return;
  }

  renderProductos(data);
}

// Filtro por tipo
filtroSelect.addEventListener("change", (e) => {
  getProductos(e.target.value);
});

// Inicial
getProductos();
