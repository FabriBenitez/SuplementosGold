// js-crud/agregar.js
import { supabase } from "../config/supabase.js";
import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm";

const form = document.getElementById("form-agregar");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Tomar valores del formulario
  const nombre = document.getElementById("nombre").value;
  const descripcion = document.getElementById("descripcion").value;
  const precio = parseFloat(document.getElementById("precio").value);
  /*const stock = parseInt(document.getElementById("stock").value);*/
  const tipo = document.getElementById("tipo").value;
  const imagen = document.getElementById("imagen").files[0];

  try {
    let imagenUrl = null;

    // 1. Subir imagen al bucket (si se selecciono)
    if (imagen) {
      const fileName = `${Date.now()}-${imagen.name}`;
      const { error } = await supabase.storage
        .from("productos_url")
        .upload(fileName, imagen, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // Construir URL publica
      const { data: publicUrl } = supabase.storage
        .from("productos_url")
        .getPublicUrl(fileName);

      imagenUrl = publicUrl.publicUrl;
    }

    // 2. Insertar producto en la tabla
    const { error: insertError } = await supabase.from("productos").insert([
      {
        nombre,
        descripcion,
        precio,
        /*stock,*/
        tipo,
        imagen_url: imagenUrl,
      },
    ]);

    if (insertError) throw insertError;

    await Swal.fire({
      icon: "success",
      title: "Producto agregado",
      text: "El producto se agrego correctamente.",
      confirmButtonText: "Aceptar",
    });

    form.reset();
  } catch (err) {
    console.error("Error al agregar producto:", err.message);
    await Swal.fire({
      icon: "error",
      title: "No se pudo agregar el producto",
      text: "Revisa la consola para ver el detalle del error.",
      confirmButtonText: "Aceptar",
    });
  }
});

// Ejemplo: Obtener todos los datos de una tabla llamada 'countries'
async function getCountries() {
  const { data, error } = await supabase.from("administrador").select("*");

  if (error) {
    console.error("Error al obtener datos:", error);
    return;
  }

  console.log("Datos de la tabla countries:", data);
}

getCountries();
