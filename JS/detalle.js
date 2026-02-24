import { supabase } from "../JS/config/supabase.js";

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("detalle-producto");

  // VALIDAR que el contenedor exista
  if (!contenedor) {
    console.error("❌ ERROR: No existe el elemento #detalle-producto en el HTML");
    return;
  }

  // 🔹 Obtener el parámetro id de la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
  } else {
    obtenerProducto(id, contenedor);
  }
});

// Consultar producto específico
async function obtenerProducto(id, contenedor) {
  const { data, error } = await supabase
    .from("productos")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    contenedor.innerHTML = "<p>Error al cargar el producto.</p>";
    console.error(error);
    return;
  }

  const p = data;
  contenedor.innerHTML = `
    <div class="detalle-card">
      <img src="${p.imagen_url || "../img/placeholder.png"}" alt="${p.nombre}" class="detalle-img" />
      <div class="detalle-info">
        <h1>${p.nombre}</h1>
        <p class="detalle-tipo">${p.tipo}</p>
        <p class="detalle-descripcion">${p.descripcion || "Sin descripción disponible."}</p>
        <p class="detalle-precio">$ ${p.precio}</p>

        <a href="https://wa.me/5492224529603?text=Hola! Estoy interesado en el producto Creatina%20300g%20Pote%20Star%20Nutrition" target="_blank" class="boton-wpp">
         Consultar por WhatsApp
        </a>
      </div>
    </div>
  `;
}
