const plans = [
  {
    id: "personalizado",
    label: "Plan Personalizado",
    name: "A medida",
    price: "Desde tu presupuesto",
    subtitle: "Una pagina ajustada a lo que quieres hacer",
    summary: "Ideal si quieres una propuesta adaptada a tu idea y a tu presupuesto.",
    description: "Este plan no tiene precio fijo porque se arma segun tu idea, el tipo de pagina que necesitas y el presupuesto que quieras manejar. Se pueden ajustar secciones, detalles visuales, botones, imagenes y funciones para que la propuesta tenga sentido para tu marca.",
    features: ["Cotizacion segun tu presupuesto", "Detalles personalizados para tu marca", "Secciones ajustadas a tu idea", "Recomendacion del plan mas conveniente", "Cotizacion directa por WhatsApp"],
    beforeLabel: "Idea",
    afterLabel: "Personalizado",
    color: "linear-gradient(135deg, #47324f 0%, #8d668e 48%, #c69bc7 100%)"
  },
  {
    id: "relax",
    label: "Plan Relax",
    name: "Basic",
    price: "$699.00 MXN",
    subtitle: "Una pagina sencilla para empezar",
    summary: "Entrada profesional para dejar de depender solo de redes sociales.",
    description: "Este paquete funciona para negocios que necesitan verse confiables rapido. Es una pagina pequena pero profesional para explicar que vendes, mostrar contacto y mandar clientes directo a WhatsApp.",
    features: ["1 seccion principal tipo landing", "Texto de presentacion del negocio", "Boton directo a WhatsApp", "Links a redes sociales", "Diseno responsive para celular"],
    beforeLabel: "Sin pagina",
    afterLabel: "Plan Relax",
    color: "linear-gradient(135deg, #314b43 0%, #6f9a8a 50%, #a8cdbf 100%)"
  },
  {
    id: "medium",
    label: "Plan Medium",
    name: "Emprendedor",
    price: "$1,699.00 MXN",
    subtitle: "Mas espacio para mostrar tu negocio",
    summary: "El punto medio para negocios que quieren verse serios sin hacer una web grande.",
    description: "Este plan mejora la estructura inicial porque permite ordenar servicios, fotos e informacion de contacto. Es suficiente para que una marca pequena se vea mas seria y facil de entender.",
    features: ["Hasta 4 secciones", "Galeria o productos destacados", "Botones de WhatsApp e Instagram", "Datos de contacto claros", "Publicacion basica incluida"],
    beforeLabel: "Relax",
    afterLabel: "Medium",
    color: "linear-gradient(135deg, #426b78 0%, #7fa6b0 48%, #b6ccd5 100%)"
  },
  {
    id: "fantastic",
    label: "Plan Fantastic",
    name: "Negocio",
    price: "$3,199.00 MXN",
    subtitle: "Para vender con una pagina mas completa",
    summary: "Para negocios que necesitan explicar mejor y recibir prospectos.",
    description: "Aqui la pagina se vuelve una herramienta mas completa: puedes mostrar paquetes, servicios, preguntas frecuentes, formulario de contacto y secciones pensadas para generar confianza.",
    features: ["Hasta 6 secciones", "Catalogo corto o paquetes", "Formulario de contacto", "Ajustes basicos de SEO", "Estructura pensada para vender"],
    beforeLabel: "Medium",
    afterLabel: "Fantastic",
    color: "linear-gradient(135deg, #766c94 0%, #b17f9d 50%, #d6aeb4 100%)"
  },
  {
    id: "so-crazy",
    label: "Plan So Crazy",
    name: "Pro",
    price: "$4,999.00 MXN",
    subtitle: "Ideal para algo mas grande",
    summary: "Una experiencia pro con dominio, mas secciones y funciones para crecer.",
    description: "Este paquete incluye una pagina web muy completa, con secciones para productos o servicios, enlaces a redes sociales, dominio personalizado, filtros y dos semanas de cambios incluidos.",
    features: ["Hasta 8 secciones", "Dominio personalizado", "Animaciones suaves", "Formularios conectados a correo", "Seccion con filtros para productos o servicios", "2 semanas de cambios incluidos"],
    beforeLabel: "Fantastic",
    afterLabel: "So Crazy",
    color: "linear-gradient(135deg, #3b355d 0%, #7a608d 48%, #c28aa2 100%)"
  },
  {
    id: "launch",
    label: "Plan Launch",
    name: "Lanzamiento",
    price: "$1,299.00 MXN",
    subtitle: "Para lanzar una idea rapido",
    summary: "Una landing sencilla para presentar una oferta, evento o servicio puntual.",
    description: "Este plan sirve cuando el cliente no necesita una pagina grande, sino un lugar atractivo para mandar trafico de anuncios, historias o mensajes.",
    features: ["Landing de una pantalla", "Estructura de oferta clara", "Beneficios principales", "Boton principal a WhatsApp", "Version optimizada para celular"],
    beforeLabel: "Idea",
    afterLabel: "Launch",
    color: "linear-gradient(135deg, #426b78 0%, #7fa6b0 48%, #b6ccd5 100%)"
  },
  {
    id: "menu",
    label: "Plan Menu",
    name: "Restaurante",
    price: "$1,899.00 MXN",
    subtitle: "Menu digital para comidas o bebidas",
    summary: "Para dejar de mandar imagenes pesadas del menu por chat.",
    description: "Un plan enfocado en mostrar menu, precios, fotos, ubicacion y contacto directo para pedidos o reservas. Hace que el negocio se vea mas limpio y mas facil de comprar.",
    features: ["Menu por categorias", "Fotos o espacios para productos", "Precios visibles", "Ubicacion y horarios", "Boton para pedidos o reservas"],
    beforeLabel: "Menu simple",
    afterLabel: "Menu web",
    color: "linear-gradient(135deg, #766c94 0%, #b17f9d 50%, #d6aeb4 100%)"
  },
  {
    id: "catalogo",
    label: "Plan Catalogo",
    name: "Productos",
    price: "$2,599.00 MXN",
    subtitle: "Muestra productos sin tienda completa",
    summary: "Productos ordenados sin necesitar una tienda completa.",
    description: "Perfecto si vendes productos pero todavia no necesitas pagos en linea. El sitio muestra categorias, detalles y botones para pedir informacion o cotizar.",
    features: ["Catalogo visual", "Categorias de productos", "Detalle por producto o servicio", "Botones para cotizar", "Seccion de contacto"],
    beforeLabel: "Productos sueltos",
    afterLabel: "Catalogo",
    color: "linear-gradient(135deg, #314b43 0%, #6f9a8a 50%, #a8cdbf 100%)"
  },
  {
    id: "reservas",
    label: "Plan Reservas",
    name: "Citas",
    price: "$3,799.00 MXN",
    subtitle: "Para servicios que trabajan con agenda",
    summary: "Reduce preguntas repetidas y ayuda a que el cliente llegue decidido.",
    description: "Este plan organiza servicios, horarios, preguntas frecuentes y botones para que tus clientes pidan cita o te contacten con menos vueltas.",
    features: ["Servicios por categoria", "Horarios visibles", "Boton para agendar", "Seccion de preguntas frecuentes", "Contacto rapido"],
    beforeLabel: "Contacto basico",
    afterLabel: "Reservas",
    color: "linear-gradient(135deg, #426b78 0%, #7fa6b0 48%, #b6ccd5 100%)"
  },
  {
    id: "landing",
    label: "Plan Landing",
    name: "Campana",
    price: "$1,899.00 MXN",
    subtitle: "Para promocionar una oferta",
    summary: "Una pagina corta para anuncios, promociones o captacion de clientes.",
    description: "Este plan se enfoca en vender una sola idea con texto claro, beneficios, prueba social, preguntas frecuentes y botones directos de contacto.",
    features: ["Seccion principal con propuesta clara", "Beneficios de la oferta", "Preguntas frecuentes", "Bloque de confianza o prueba social", "Botones de contacto estrategicos"],
    beforeLabel: "Anuncio",
    afterLabel: "Landing",
    color: "linear-gradient(135deg, #75603d 0%, #b48a57 48%, #d7b778 100%)"
  },
  {
    id: "portafolio",
    label: "Plan Portafolio",
    name: "Creativo",
    price: "$3,199.00 MXN",
    subtitle: "Muestra trabajos y proyectos",
    summary: "Una vitrina profesional para mostrar proyectos y vender por calidad visual.",
    description: "Una pagina pensada para mostrar proyectos, explicar servicios y hacer que las personas te contacten despues de ver tu trabajo, sin mandar carpetas o muchas fotos por chat.",
    features: ["Galeria de proyectos", "Seccion sobre la persona o marca", "Servicios ofrecidos", "Proceso de trabajo", "Contacto directo"],
    beforeLabel: "Fotos sueltas",
    afterLabel: "Portafolio",
    color: "linear-gradient(135deg, #766c94 0%, #b17f9d 50%, #d6aeb4 100%)"
  },
  {
    id: "eventos",
    label: "Plan Eventos",
    name: "Invitacion",
    price: "$2,499.00 MXN",
    subtitle: "Una pagina para eventos especiales",
    summary: "Una invitacion mas elegante, facil de compartir y con toda la info.",
    description: "Incluye informacion del evento, fecha, ubicacion, galeria, confirmacion y botones para compartir facilmente.",
    features: ["Fecha, lugar y horario", "Mapa o ubicacion", "Galeria o imagen principal", "Confirmacion de asistencia", "Botones para compartir"],
    beforeLabel: "Invitacion",
    afterLabel: "Evento web",
    color: "linear-gradient(135deg, #314b43 0%, #6f9a8a 50%, #a8cdbf 100%)"
  },
  {
    id: "tienda",
    label: "Plan Tienda",
    name: "Online",
    price: "$7,999.00 MXN",
    subtitle: "Base para vender productos",
    summary: "Base tipo tienda para mostrar productos con mas detalle.",
    description: "Este plan es para marcas que quieren una estructura mas cercana a tienda en linea, ordenar productos y vender con mas confianza por contacto o cotizacion.",
    features: ["Productos destacados", "Categorias", "Detalle por producto", "Contacto para compra o cotizacion", "Estructura preparada para crecer"],
    beforeLabel: "Catalogo",
    afterLabel: "Tienda",
    color: "linear-gradient(135deg, #426b78 0%, #7fa6b0 48%, #b6ccd5 100%)"
  },
  {
    id: "premium",
    label: "Plan Premium",
    name: "Marca",
    price: "$9,999.00 MXN",
    subtitle: "Para una presencia mas cuidada",
    summary: "Para marcas que quieren verse mas premium y cobrar mejor.",
    description: "Un plan para marcas que quieren una pagina con mas intencion visual, estructura amplia, microinteracciones y una presentacion mas fuerte.",
    features: ["Direccion visual mas completa", "Hasta 10 secciones", "Microinteracciones", "Optimizacion de contenido", "Diseno mas detallado por seccion", "Revision final de experiencia completa"],
    beforeLabel: "Pro",
    afterLabel: "Premium",
    color: "linear-gradient(135deg, #766c94 0%, #b17f9d 50%, #d6aeb4 100%)"
  },
  {
    id: "mantenimiento",
    label: "Plan Mantenimiento",
    name: "Mensual",
    price: "$1,299.00 MXN / mes",
    subtitle: "Cambios y cuidado cada mes",
    summary: "Soporte mensual para mantener la pagina actualizada.",
    description: "Este plan se ofrece despues de entregar una pagina. Sirve para hacer cambios de textos, imagenes, ajustes pequenos y mantener el sitio presentable mes a mes.",
    features: ["Cambios de texto e imagenes", "Revision visual mensual", "Ajustes pequenos", "Soporte por WhatsApp", "Reporte simple de cambios realizados"],
    beforeLabel: "Pagina quieta",
    afterLabel: "Actualizada",
    color: "linear-gradient(135deg, #75603d 0%, #b48a57 48%, #d7b778 100%)"
  }
];

const grid = document.querySelector("#plansGrid");
const compareCard = document.querySelector(".compare-card");
const compareRange = document.querySelector("#compareRange");
const beforeMock = document.querySelector("#beforeMock");
const afterMock = document.querySelector("#afterMock");
const beforeLabel = document.querySelector("#beforeLabel");
const afterLabel = document.querySelector("#afterLabel");
const detailPrice = document.querySelector("#detailPrice");
const detailTitle = document.querySelector("#detailTitle");
const detailSubtitle = document.querySelector("#detailSubtitle");
const detailText = document.querySelector("#detailText");
const detailList = document.querySelector("#detailList");
const whatsappLink = document.querySelector("#whatsappLink");
const phoneNumber = "526691552885";

const compareIdeas = {
  personalizado: {
    beforeTitle: "Idea sin cotizar",
    beforeItems: ["No sabes que plan elegir", "Presupuesto sin ordenar", "Funciones sin definir"],
    afterTitle: "Plan a la medida",
    afterItems: ["Propuesta segun presupuesto", "Secciones ajustadas", "Detalles personalizados"],
    cta: "Cotizar mi idea"
  },
  relax: {
    beforeTitle: "Solo redes sociales",
    beforeItems: ["Info perdida en posts", "Clientes preguntan lo mismo", "No hay lugar fijo para contacto"],
    afterTitle: "Pagina clara de entrada",
    afterItems: ["Presentacion profesional", "Boton directo a WhatsApp", "Links y datos en un solo lugar"],
    cta: "Cliente listo para escribir"
  },
  medium: {
    beforeTitle: "Pagina muy basica",
    beforeItems: ["Una sola seccion", "Pocas fotos", "Servicios sin orden"],
    afterTitle: "Servicios organizados",
    afterItems: ["Hasta 4 secciones", "Galeria destacada", "Contacto visible en toda la pagina"],
    cta: "Ver servicios"
  },
  fantastic: {
    beforeTitle: "Informacion dispersa",
    beforeItems: ["Sin catalogo", "Sin formulario", "Poca confianza visual"],
    afterTitle: "Pagina lista para vender",
    afterItems: ["Catalogo corto", "Formulario de contacto", "Secciones para explicar beneficios"],
    cta: "Solicitar propuesta"
  },
  "so-crazy": {
    beforeTitle: "Web completa pero limitada",
    beforeItems: ["Sin filtros", "Sin dominio propio", "Pocas acciones para vender"],
    afterTitle: "Experiencia pro",
    afterItems: ["Dominio personalizado", "Filtros para productos", "Formularios conectados a correo"],
    cta: "Quiero esta pagina"
  },
  launch: {
    beforeTitle: "Idea sin aterrizar",
    beforeItems: ["Solo mensaje por redes", "Oferta poco clara", "Sin link para compartir"],
    afterTitle: "Lanzamiento rapido",
    afterItems: ["Oferta en una pantalla", "Beneficios claros", "Boton directo de contacto"],
    cta: "Lanzar idea"
  },
  menu: {
    beforeTitle: "Menu en imagen",
    beforeItems: ["Dificil de leer", "Precios se pierden", "Clientes piden fotos"],
    afterTitle: "Menu digital limpio",
    afterItems: ["Categorias ordenadas", "Fotos por producto", "Pedidos por WhatsApp"],
    cta: "Pedir ahora"
  },
  catalogo: {
    beforeTitle: "Productos sin orden",
    beforeItems: ["Fotos sueltas", "Preguntas repetidas", "Sin categorias"],
    afterTitle: "Catalogo visual",
    afterItems: ["Categorias claras", "Detalle por producto", "Botones para cotizar"],
    cta: "Ver catalogo"
  },
  reservas: {
    beforeTitle: "Citas por mensajes",
    beforeItems: ["Horarios confusos", "Servicios mezclados", "Mucho ida y vuelta"],
    afterTitle: "Agenda mas clara",
    afterItems: ["Servicios por categoria", "Horarios visibles", "Boton para agendar"],
    cta: "Agendar cita"
  },
  landing: {
    beforeTitle: "Anuncio sin destino",
    beforeItems: ["El cliente no sabe que hacer", "Beneficios poco visibles", "Sin preguntas frecuentes"],
    afterTitle: "Landing de campana",
    afterItems: ["Oferta directa", "Beneficios y prueba social", "CTA enfocado en venta"],
    cta: "Pedir informacion"
  },
  portafolio: {
    beforeTitle: "Trabajos en carpetas",
    beforeItems: ["Proyectos sin contexto", "Bio poco visible", "Contacto separado"],
    afterTitle: "Portafolio profesional",
    afterItems: ["Galeria curada", "Historia y servicios", "Contacto despues de ver trabajos"],
    cta: "Ver proyectos"
  },
  eventos: {
    beforeTitle: "Invitacion normal",
    beforeItems: ["Datos en muchas imagenes", "Ubicacion manual", "Confirmaciones desordenadas"],
    afterTitle: "Evento web",
    afterItems: ["Fecha y mapa", "Galeria visual", "Confirmacion de asistencia"],
    cta: "Confirmar asistencia"
  },
  tienda: {
    beforeTitle: "Catalogo limitado",
    beforeItems: ["Pocos detalles", "Sin categorias fuertes", "Compra por mensaje confusa"],
    afterTitle: "Base de tienda",
    afterItems: ["Productos destacados", "Categorias y detalles", "Contacto para compra"],
    cta: "Comprar / cotizar"
  },
  premium: {
    beforeTitle: "Pagina correcta",
    beforeItems: ["Se ve bien, pero simple", "Pocas interacciones", "Marca sin mucha fuerza"],
    afterTitle: "Marca premium",
    afterItems: ["Direccion visual cuidada", "Hasta 10 secciones", "Microinteracciones"],
    cta: "Elevar mi marca"
  },
  mantenimiento: {
    beforeTitle: "Pagina abandonada",
    beforeItems: ["Textos viejos", "Fotos desactualizadas", "Detalles sin revisar"],
    afterTitle: "Pagina al dia",
    afterItems: ["Cambios mensuales", "Revision visual", "Soporte por WhatsApp"],
    cta: "Mantener actualizada"
  }
};

function mockTemplate(type, title, items, cta) {
  const kicker = type === "before" ? "ANTES" : "DESPUES";
  return `
    <div class="mock-window">
      <div class="mock-bar">
        <span class="mock-dot"></span>
        <span class="mock-dot"></span>
        <span class="mock-dot"></span>
        <span class="mock-url">market.com</span>
      </div>
      <div class="mock-body">
        <span class="mock-kicker">${kicker}</span>
        <h4 class="mock-title">${title}</h4>
        <ul class="mock-list">
          ${items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <span class="mock-cta">${cta}</span>
      </div>
    </div>
  `;
}

function renderCards() {
  grid.innerHTML = plans.map((plan) => `
    <button class="plan-card" type="button" data-plan="${plan.id}" style="--card-bg: ${plan.color};">
      <span>${plan.label}</span>
      <h2>${plan.name}</h2>
      <p>${plan.price}</p>
      <p class="card-summary">${plan.summary}</p>
    </button>
  `).join("");
}

function getPlanFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("plan");
}

function selectPlan(planId) {
  const plan = plans.find((item) => item.id === planId) || plans[0];
  const compare = compareIdeas[plan.id] || compareIdeas.relax;
  const message = `Hola, me intereso el paquete: ${plan.label}`;

  beforeLabel.textContent = plan.beforeLabel;
  afterLabel.textContent = plan.afterLabel;
  beforeMock.innerHTML = mockTemplate("before", compare.beforeTitle, compare.beforeItems, "Necesita mejorar");
  afterMock.innerHTML = mockTemplate("after", compare.afterTitle, compare.afterItems, compare.cta);
  detailPrice.textContent = plan.price;
  detailTitle.textContent = plan.label;
  detailSubtitle.textContent = plan.subtitle;
  detailText.textContent = plan.description;
  detailList.innerHTML = plan.features.map((feature) => `<li>${feature}</li>`).join("");
  whatsappLink.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  document.querySelectorAll(".plan-card").forEach((card) => {
    card.classList.toggle("is-active", card.dataset.plan === plan.id);
  });

  const nextUrl = new URL(window.location.href);
  nextUrl.searchParams.set("plan", plan.id);
  window.history.replaceState({}, "", nextUrl);
}

renderCards();
selectPlan(getPlanFromUrl());

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".plan-card");
  if (!card) return;
  selectPlan(card.dataset.plan);
});

compareRange.addEventListener("input", () => {
  compareCard.style.setProperty("--position", `${compareRange.value}%`);
});
