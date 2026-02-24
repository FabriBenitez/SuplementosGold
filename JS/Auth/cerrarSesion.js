import { supabase } from "../config/supabase.js";

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      // Cierra sesión en Supabase
      await supabase.auth.signOut();
      // Redirige al login
      window.location.href = "../../HTML/ADMIN/Login.html"; 
    });
  }
});
