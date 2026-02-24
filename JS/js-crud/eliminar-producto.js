// js-crud/eliminar.js
import { supabase } from "../config/supabase.js";

const selectProductos = document.getElementById("select-productos");
const formEliminar = document.getElementById("form-eliminar");
const preview = document.getElementById("preview");

// 🔹 Cargar productos en el <select>
async function cargarProductos() {
  const { data, error } = await supabase
    .from("productos")
    .select("id, nombre, precio, stock");

  if (error) {
    console.error("Error al cargar productos:", error.message);
    return;
  }

  // Limpiar opciones
  selectProductos.innerHTML = "";

  data.forEach((producto) => {
    const option = document.createElement("option");
    option.value = producto.id;
    option.textContent = `${producto.nombre} |💲${producto.precio}`;
    selectProductos.appendChild(option);
  });

  // Si no hay productos
  if (data.length === 0) {
    const option = document.createElement("option");
    option.textContent = "No hay productos registrados";
    option.disabled = true;
    selectProductos.appendChild(option);
  }
}

// 🔹 Mostrar preview de imagen al seleccionar producto
selectProductos.addEventListener("change", async () => {
  const id = selectProductos.value;

  if (!id) {
    preview.innerHTML = "";
    return;
  }

  const { data: producto, error } = await supabase
    .from("productos")
    .select("imagen_url")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error al obtener imagen:", error.message);
    preview.innerHTML = "";
    return;
  }

  if (producto?.imagen_url) {
    preview.innerHTML = `<img src="${producto.imagen_url}" alt="Imagen del producto" width="200" style="margin-top:10px;border:1px solid #ccc;border-radius:8px;" />`;
  } else {
    preview.innerHTML = "<p>📷 Este producto no tiene imagen asociada</p>";
  }
});

// 🔹 Eliminar producto seleccionado
formEliminar.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = selectProductos.value;

  if (!id) return;

  // ⚠️ Confirmación antes de eliminar
  const confirmar = confirm("¿Seguro que deseas eliminar este producto?");
  if (!confirmar) return; // si cancela, no hace nada

  try {
    // 1. Obtener producto
    const { data: producto, error: selectError } = await supabase
      .from("productos")
      .select("imagen_url")
      .eq("id", id)
      .single();

    if (selectError) throw selectError;

    // 2. Eliminar de la tabla
    const { error: deleteError } = await supabase
      .from("productos")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    // 3. Eliminar imagen del bucket si existe
    if (producto?.imagen_url) {
      const fileName = producto.imagen_url.split("/").pop();

      const { error: storageError } = await supabase.storage
        .from("productos_url") // 👈 asegúrate que el bucket se llame así
        .remove([fileName]);

      if (storageError) {
        console.warn("⚠️ No se pudo eliminar la imagen del bucket:", storageError.message);
      }
    }

    alert("✅ Producto eliminado correctamente");
    await cargarProductos(); // refrescar lista
    preview.innerHTML = ""; // limpiar preview
  } catch (err) {
    console.error("Error al eliminar producto:", err.message);
    alert("❌ Error al eliminar producto. Revisá la consola.");
  }
});

// 🔹 Cargar productos al inicio
cargarProductos();
