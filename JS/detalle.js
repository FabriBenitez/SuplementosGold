import { supabase } from "../JS/config/supabase.js";

function crearLinkWhatsApp(producto) {
  const baseUrl = "https://wa.me/5492224529603";
  const nombre = producto?.nombre || "";
  const precio = producto?.precio ?? "";
  const mensaje = `Hola! Estoy interesado en este producto:
  \n ${nombre}\nPrecio: $ ${precio}`;
  return `${baseUrl}?text=${encodeURIComponent(mensaje)}`;
}

// Esperar a que el DOM este completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("detalle-producto");

  // Validar que el contenedor exista
  if (!contenedor) {
    console.error("ERROR: No existe el elemento #detalle-producto en el HTML");
    return;
  }

  // Obtener el parametro id de la URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
  } else {
    obtenerProducto(id, contenedor);
  }
});

// Consultar producto especifico
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
  const whatsappLink = crearLinkWhatsApp(p);

  contenedor.innerHTML = `
    <div class="detalle-card">
      <img src="${p.imagen_url || "../img/placeholder.png"}" alt="${p.nombre}" class="detalle-img" />
      <div class="detalle-info">
        <h1>${p.nombre}</h1>
        <p class="detalle-tipo">${p.tipo}</p>
        <p class="detalle-descripcion">${p.descripcion || "Sin descripcion disponible."}</p>
        <p class="detalle-precio">$ ${p.precio}</p>

        <a href="${whatsappLink}" target="_blank" class="boton-wpp">
         Consultar por WhatsApp
        </a>
      </div>
    </div>
  `;
}
