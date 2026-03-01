// js-crud/modificar.js
import { supabase } from "../config/supabase.js";
import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";

const selectProductos = document.getElementById("select-productos");
const formModificar = document.getElementById("form-modificar");

const nombreInput = document.getElementById("nombre");
const descripcionInput = document.getElementById("descripcion");
const precioInput = document.getElementById("precio");
/*const stockInput = document.getElementById("stock");*/
const tipoInput = document.getElementById("tipo");
const imagenInput = document.getElementById("imagen");
const preview = document.getElementById("preview");

// Cargar lista de productos
async function cargarProductos() {
  const { data, error } = await supabase.from("productos").select("id, nombre");

  if (error) {
    console.error("Error al cargar productos:", error.message);
    return;
  }

  selectProductos.innerHTML = "<option value=''>Selecciona un producto</option>";

  data.forEach((producto) => {
    const option = document.createElement("option");
    option.value = producto.id;
    option.textContent = producto.nombre;
    selectProductos.appendChild(option);
  });
}

// Cargar datos del producto seleccionado
selectProductos.addEventListener("change", async () => {
  const id = selectProductos.value;

  if (!id) {
    formModificar.reset();
    preview.innerHTML = "";
    return;
  }

  const { data: producto, error } = await supabase
    .from("productos")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error al obtener producto:", error.message);
    return;
  }

  // Llenar formulario
  nombreInput.value = producto.nombre;
  descripcionInput.value = producto.descripcion;
  precioInput.value = producto.precio;
  /*  stockInput.value = producto.stock;*/
  tipoInput.value = producto.tipo;

  // Preview de imagen
  if (producto.imagen_url) {
    preview.innerHTML = `<img src="${producto.imagen_url}" alt="Imagen" width="150" style="margin-top:10px;border:1px solid #ccc;border-radius:8px;" />`;
  } else {
    preview.innerHTML = "<p>Este producto no tiene imagen asociada</p>";
  }
});

// Guardar cambios con confirmacion
formModificar.addEventListener("submit", async (e) => {
  e.preventDefault();

  const id = selectProductos.value;
  if (!id) {
    await Swal.fire({
      icon: "warning",
      title: "Seleccion requerida",
      text: "Selecciona un producto primero.",
      confirmButtonText: "Aceptar",
    });
    return;
  }

  const { isConfirmed } = await Swal.fire({
    icon: "question",
    title: "Confirmar modificacion",
    text: "Seguro que deseas modificar este producto?",
    showCancelButton: true,
    confirmButtonText: "Si, modificar",
    cancelButtonText: "Cancelar",
  });

  if (!isConfirmed) return;

  try {
    let imagen_url = null;

    // Si se cargo una nueva imagen -> subir al bucket
    if (imagenInput.files.length > 0) {
      const file = imagenInput.files[0];
      const fileName = `${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("productos_url")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Obtener URL publica
      const { data: publicUrl } = supabase.storage
        .from("productos_url")
        .getPublicUrl(fileName);

      imagen_url = publicUrl.publicUrl;
    }

    // Actualizar producto
    const { error: updateError } = await supabase
      .from("productos")
      .update({
        nombre: nombreInput.value,
        descripcion: descripcionInput.value,
        precio: parseFloat(precioInput.value),
        /*      stock: parseInt(stockInput.value),*/
        tipo: tipoInput.value,
        ...(imagen_url && { imagen_url }),
      })
      .eq("id", id);

    if (updateError) throw updateError;

    await Swal.fire({
      icon: "success",
      title: "Producto modificado",
      text: "Los cambios se guardaron correctamente.",
      confirmButtonText: "Aceptar",
    });

    await cargarProductos();
  } catch (err) {
    console.error("Error al modificar producto:", err.message);
    await Swal.fire({
      icon: "error",
      title: "No se pudo modificar el producto",
      text: "Revisa la consola para ver el detalle del error.",
      confirmButtonText: "Aceptar",
    });
  }
});

// Cargar productos al inicio
cargarProductos();
