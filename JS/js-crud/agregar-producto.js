// js-crud/agregar.js
import { supabase } from "../config/supabase.js";

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

    // 1. Subir imagen al bucket (si se seleccionó)
    if (imagen) {
      const fileName = `${Date.now()}-${imagen.name}`;
      const { data, error } = await supabase.storage
        .from("productos_url")
        .upload(fileName, imagen, {
          cacheControl: "3600",
          upsert: false,
        });

      if (error) throw error;

      // Construir URL pública
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

    alert("✅ Producto agregado correctamente");
    form.reset();
  } catch (err) {
    console.error("Error al agregar producto:", err.message);
    alert("❌ Error al agregar producto. Revisa la consola.");
  }
});

// Ejemplo: Obtener todos los datos de una tabla llamada 'countries'
async function getCountries() {
  const { data, error } = await supabase
    .from('administrador')
    .select('*');

  if (error) {
    console.error('Error al obtener datos:', error);
    return;
  }

  console.log('Datos de la tabla countries:', data);
}

getCountries();