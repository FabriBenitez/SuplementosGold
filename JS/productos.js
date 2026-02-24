/*const productos = [
  {
    id: 1,
    nombre: "Creatina 150g Star Nutrition",
    tipo: "Creatina",
    precio: 18800,
    imagen: "../IMG/CREATINA/Creatina150g.webp",
    descripcion: "Suplemento diseñado para aumentar la fuerza y la resistencia muscular durante el entrenamiento. Ideal para deportistas que buscan mejorar su rendimiento y recuperación. Se recomienda tomar 3-5 gramos diarios, preferentemente después del entrenamiento, disuelto en agua o jugo."
  },
  {
    id: 2,
    nombre: "Creatina 300g Pote Star Nutrition",
    tipo: "Creatina",
    precio: 31999,
    imagen: "../IMG/CREATINA/Creatina300g.webp",
    descripcion: "Pensado para quienes entrenan regularmente y desean mejorar su rendimiento físico. La creatina ayuda a aumentar la fuerza y acelerar la recuperación muscular. Tomar 3-5 gramos diarios, preferentemente tras el ejercicio, mezclados con agua o jugo."
  },
  {
    id: 3,
    nombre: "Creatina 300g Doypack Star Nutrition",
    tipo: "Creatina",
    precio: 28999,
    imagen: "../IMG/CREATINA/CreatinaPack300g.webp",
    descripcion: "Creatina micronizada para una absorción rápida y eficaz, ideal para deportistas que realizan entrenamientos intensos. Favorece la fuerza y la resistencia muscular. Se recomienda consumir 3-5 gramos diarios después de entrenar, disuelta en agua o jugo."
  },
  {
    id: 4,
    nombre: "Creatina MyProtein 250g",
    tipo: "Creatina",
    precio: 25000,
    imagen: "../IMG/CREATINA/ImpactCreatineMyProtein.webp",
    descripcion: "Creatina de alta calidad europea diseñada para aumentar la fuerza, energía y acelerar la recuperación muscular. Ideal para deportistas exigentes. Tomar 3-5 gramos diarios, preferentemente tras el entrenamiento, mezclada en agua o jugo."
  },
  {
    id: 5,
    nombre: "Proteína Doypack Star Nutrition 908g Chocolate",
    tipo: "Proteina",
    precio: 34500,
    imagen: "../IMG/PROTEINA/ProteinaStarNutrion908gChocolate.webp",
    descripcion: "Proteína en polvo con delicioso sabor chocolate, diseñada para favorecer el desarrollo y la recuperación muscular tras el entrenamiento. Aporta un alto contenido de aminoácidos esenciales. Se recomienda tomar una porción de 30 gramos disuelta en agua o leche, preferentemente después del ejercicio."
  },
  {
    id: 6,
    nombre: "Proteína Doypack Star Nutrition 908g Vainilla",
    tipo: "Proteina",
    precio: 34500,
    imagen: "../IMG/PROTEINA/ProteinaStarNutrion908gVainilla.webp",
    descripcion: "Proteína con perfil completo de aminoácidos esenciales y sabor suave a vainilla. Ideal para consumir después del entrenamiento para potenciar la recuperación muscular y el crecimiento. Tomar una porción de 30 gramos disuelta en agua o leche."
  },
  {
    id: 7,
    nombre: "Proteína Xtrength 907g Chocolate",
    tipo: "Proteina",
    precio: 36000,
    imagen: "../IMG/PROTEINA/ProteinaXtrenght907gChocolate.webp",
    descripcion: "Fórmula potente diseñada para favorecer el crecimiento muscular y la recuperación. Con intenso sabor a chocolate, aporta proteínas de alta calidad para optimizar tu entrenamiento. Se recomienda tomar 30 gramos después de la actividad física, mezclado en agua o leche."
  },
  {
    id: 8,
    nombre: "Pancakes Proteicos Granger Chocolate 400g",
    tipo: "Pancakes",
    precio: 11800,
    imagen: "../IMG/PANCAKES/PancakesProteicosGrangerChocolate.webp",
    descripcion: "Preparación alta en proteínas y baja en azúcares, ideal para desayunos o snacks saludables. Fácil y rápido de preparar: mezclar con agua o leche y cocinar en sartén. Perfecto para quienes buscan controlar la ingesta de macronutrientes sin sacrificar sabor."
  },
  {
    id: 9,
    nombre: "Pancakes Proteicos Granger Vainilla 400g",
    tipo: "Pancakes",
    precio: 11800,
    imagen: "../IMG/PANCAKES/PancakesProteicosGrangerVainilla.webp",
    descripcion: "Snack proteico con sabor vainilla, ideal para dietas balanceadas y control de peso. Fácil de preparar mezclando con agua o leche y cocinando en sartén. Perfecto para un desayuno nutritivo o merienda saludable."
  },
  {
    id: 10,
    nombre: "BCAA Star Nutrition 270g",
    tipo: "Bcaa",
    precio: 25500,
    imagen: "../IMG/BCAA/Bcaa270g.webp",
    descripcion: "Aminoácidos esenciales que favorecen la recuperación muscular y reducen el catabolismo durante entrenamientos intensos. Ideal para tomar 5-10 gramos antes o durante la actividad física para mejorar resistencia y evitar fatiga."
  },
  {
    id: 11,
    nombre: "Pre Entreno Star Nutrition Blue Raz 240g",
    tipo: "Pre Entreno",
    precio: 21999,
    imagen: "../IMG/PRE-ENTRENO/PreEntrenoTntstartDynamiteblueraze240g.webp",
    descripcion: "Mejora la energía, el enfoque y la resistencia durante el entrenamiento. Formulado para maximizar tu rendimiento. Tomar una porción 20-30 minutos antes de entrenar, mezclada con agua."
  },
  {
    id: 12,
    nombre: "Pre Entreno pump v8 285g",
    tipo: "Pre Entreno",
    precio: 29000,
    imagen: "../IMG/PRE-ENTRENO/PreEntrenoúmpv8-285g.webp",
    descripcion: "Suplemento pre entrenamiento con fórmula avanzada y estimulantes para aumentar energía y resistencia. Consumir una dosis 20-30 minutos antes del ejercicio, mezclado con agua."
  },
  {
    id: 13,
    nombre: "Citrato de Magnesio 105g Natuliv - ENA",
    tipo: "Magnesio",
    precio: 14000,
    imagen: "../IMG/MAGNESIO/CitratoDeMagnesioLimonada.webp",
    descripcion: "Mineral esencial que regula las funciones musculares y nerviosas, ayudando a prevenir calambres y mejorar el bienestar general. Con sabor refrescante a limonada. Disolver una cucharadita en agua y tomar una vez al día."
  },
  {
    id: 15,
    nombre: "Cafeína 200mg Star Nutrition 30 cápsulas",
    tipo: "Cafeina",
    precio: 9500,
    imagen: "../IMG/CAFEINA/CAffeine200.webp",
    descripcion: "Cápsulas de cafeína para aumentar energía, concentración y resistencia mental. Ideal para actividades físicas o mentales intensas. Tomar una cápsula 30 minutos antes de la actividad."
  },
  {
    id: 16,
    nombre: "Colágeno 10g Star Nutrition Sport Naranja",
    tipo: "Colageno",
    precio: 20000,
    imagen: "../IMG/COLAGENO/Colageno10g.webp",
    descripcion: "Suplemento con colágeno hidrolizado que favorece la salud de articulaciones, piel y cabello. Con agradable sabor naranja. Tomar una dosis diaria disuelta en agua o jugo para mejores resultados."
  },
  /*{
    id: 17,
    nombre: "Colágeno 210g",
    tipo: "Colageno",
    precio: 20000,
    imagen: "../IMG/COLAGENO/Colageno210g.webp",
    descripcion: "Fórmula completa para fortalecer huesos, articulaciones y mejorar la elasticidad de la piel. Se recomienda tomar una dosis diaria disuelta en líquido, preferentemente por la mañana."
  },*/
/*  {
    id: 18,
    nombre: "L-Carnitina",
    tipo: "L Carnitina",
    precio: 17500,
    imagen: "../IMG/L-Carnitine/L-carnitine.png",
    descripcion: "Ayuda a transformar la grasa en energía, mejorando el rendimiento físico y la quema de grasa. Ideal para combinar con actividad física. Tomar 1-2 dosis antes del ejercicio diario."
  },
  {
    id: 19,
    nombre: "Multivitaminico Star Nutrition",
    tipo: "Multivitaminico",
    precio: 23500,
    imagen: "../IMG/MULTIVITAMINICO/Multivitaminico_foto_nueva.png",
    descripcion: "Complejo multivitamínico que aporta vitaminas y minerales esenciales para mantener el equilibrio corporal y apoyar el metabolismo diario. Tomar una cápsula al día con agua durante las comidas."
  },
  /*{
    id: 20,
    nombre: "Beta Alanina 150g Star Nutrition",
    tipo: "Beta Alanina",
    precio: 18800,
    imagen: "../IMG/BETAALANINA/BetaAlanina300g.webp",
    descripcion: "Suplemento que mejora la resistencia muscular y retrasa la fatiga durante entrenamientos intensos. Tomar entre 3 y 6 gramos diarios, divididos en dosis antes del ejercicio para mejores resultados."
  }*/
/*  {
    id: 21,
    nombre: "Creatina Microionizada ENA",
    tipo: "Creatina",
    precio: 29500,
    imagen: "../IMG/CREATINA/Creatina_Micronizada_ENA-removebg-preview.png",
    descripcion: "Creatina de alta calidad europea diseñada para aumentar la fuerza, energía y acelerar la recuperación muscular. Ideal para deportistas exigentes. Tomar 3-5 gramos diarios, preferentemente tras el entrenamiento, mezclada en agua o jugo."
  },
  {
    id: 22,
    nombre: "Proteína Doypack Star Nutrition Banana",
    tipo: "Proteina",
    precio: 34500,
    imagen: "../IMG/PROTEINA/Whey_Protein_banana_DOYPACK.png",
    descripcion: "Proteína en polvo con delicioso sabor a banana, diseñada para favorecer el desarrollo y la recuperación muscular tras el entrenamiento. Aporta un alto contenido de aminoácidos esenciales. Se recomienda tomar una porción de 30 gramos disuelta en agua o leche, preferentemente después del ejercicio."
  },
  {
    id: 23,
    nombre: "Proteína Doypack Star Nutrition Frutilla",
    tipo: "Proteina",
    precio: 34500,
    imagen: "../IMG/PROTEINA/Whey_protein_frutilla_doypack.png",
    descripcion: "Proteína en polvo con delicioso sabor a frutilla, diseñada para favorecer el desarrollo y la recuperación muscular tras el entrenamiento. Aporta un alto contenido de aminoácidos esenciales. Se recomienda tomar una porción de 30 gramos disuelta en agua o leche, preferentemente después del ejercicio."
  },
  {
    id: 24,
    nombre: "Proteína Doypack Star Nutrition Cookies Cream",
    tipo: "Proteina",
    precio: 34500,
    imagen: "../IMG/PROTEINA/Proteina_Doypack_Cookies_Cream.png",
    descripcion: "Proteína en polvo con delicioso sabor a Cookies Cream, diseñada para favorecer el desarrollo y la recuperación muscular tras el entrenamiento. Aporta un alto contenido de aminoácidos esenciales. Se recomienda tomar una porción de 30 gramos disuelta en agua o leche, preferentemente después del ejercicio."
  },
  {
    id: 25,
    nombre: "Omega 3 Star Nutrition 60 cápsulas",
    tipo: "Omega3",
    precio: 34000,
    imagen: "../IMG/OMEGA3/Omega3.png",
    descripcion: "Suplemento de Omega 3 de alta pureza, formulado para favorecer la salud cardiovascular, cerebral y articular. Aporta ácidos grasos esenciales EPA y DHA que contribuyen al buen funcionamiento del organismo. Se recomienda consumir 1 a 2 cápsulas diarias junto con las comidas."
  },
];
*/