import { supabase } from "./config/supabase.js";

const contenedor = document.getElementById("productos-destacados");

//Renderiza exactamente 3 productos destacados
//@param {Array} productos - Lista de productos a mostrar
 
function renderizarProductosDestacados(productos) {
  if (!contenedor) {
    console.error("❌ No se encontró #productos-destacados en el HTML");
    return;
  }

  contenedor.innerHTML = "";

  if (!productos || productos.length === 0) {
    contenedor.innerHTML = "<p>No hay productos destacados disponibles</p>";
    return;
  }

  // Asegurar que solo se muestren 3 productos
  const productosLimitados = productos.slice(0, 3);

  productosLimitados.forEach((p) => {
    const card = document.createElement("div");
    card.classList.add("productos-destacados-section");

    card.innerHTML = `
      <div class="producto-info-destacado">
        <h3 class="producto-nombre-destacado">${p.nombre}</h3>
        <p class="producto-tipo-destacado">${p.tipo}</p>
        <div class="producto-img-container-destacado">
          <img src="${p.imagen_url || "./img/placeholder.png"}" alt="${p.nombre}" class="producto-img-destacado" />
        </div>
        <p class="producto-descripcion-destacado">${p.descripcion || "Sin descripción"}</p>
        <p class="producto-precio-destacado">💲 ${p.precio}</p>
      </div>
    `;

    // Redirección al hacer clic
    card.addEventListener("click", () => {
      window.location.href = `HTML/producto.html?id=${p.id}`;
    });

    contenedor.appendChild(card);
  });

  console.log(`✅ ${productosLimitados.length} productos destacados renderizados`);
}

//Obtiene los primeros 3 productos de la base de datos
async function obtenerProductosDestacados() {
  try {
    const { data, error } = await supabase
      .from("productos")
      .select("*")
      .limit(3); // ← Limita a 3 productos

    if (error) {
      console.error("Error al obtener productos:", error.message);
      contenedor.innerHTML = "<p>Error al cargar productos destacados</p>";
      return;
    }

    renderizarProductosDestacados(data);
  } catch (error) {
    console.error("Error inesperado:", error);
    contenedor.innerHTML = "<p>Error al cargar productos destacados</p>";
  }
}

// Inicializar al cargar la página
obtenerProductosDestacados();