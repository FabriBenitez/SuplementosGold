import { supabase } from '../config/supabase.js'

async function checkSession() {
  const { data, error } = await supabase.auth.getSession()
  console.log("Sesión actual:", data?.session)
  console.log("Error:", error)

  if (!data.session) {
    // No hay usuario logueado → volver al login
    window.location.href = "login.html"
  }
}

checkSession()
