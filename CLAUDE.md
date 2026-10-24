# CLAUDE.md · PLANNAZO — prototipo del LAB (sesión 2)

## Proyecto
- Qué es: Una web y app que te permita seleccionar tu presupuesto, tu tipo de plan y compatibilidad con perfiles afines a ti, así como la posibilidad de crear grupos para realizar planes, estableciendo así más relaciones interpersonales.
- Cliente objetivo: Universitarios de 18 a 24 años que se han mudado a Madrid para estudiar y llevan menos de un año allí, con un presupuesto de ocio ajustado.
- Problema (POV): Universitarios de 18 a 24 años que llevan menos de un año en Madrid para estudiar, con poco dinero para ocio y sin una red de amistades a la que recurrir necesitan encontrar con quién salir y qué hacer a un precio asequible, para convertir su tiempo libre del fin de semana en planes reales en lugar de quedarse en casa, porque aunque encuentran ideas de sobra en TikTok, Instagram o Google Maps, un plan solo se hace realidad si hay alguien con quien ir. Cuanto más buscan solos, más se bloquean y más tiempo pierden, porque lo que les falta es compañía y no información.
- Concepto: Plannazo — Súmate a Plannazo y descubre nuestros descuentazos — Conecta con gente nueva. Descubre nuevos planes. Obtén descuentos.
- Equipo: Paula (PO), Jairo (SM), Evelyn, Jimena
- Qué construimos: dos versiones: (1) la web, una landing en index.html en la raíz que presenta la app, con el CTA «Probar la app» que lleva a app/ y un bloque «Cómo instalarla en el móvil» (Android: Chrome → menú ⋮ → Instalar aplicación o Añadir a pantalla de inicio; iPhone: Safari → botón Compartir → Añadir a pantalla de inicio); y (2) la app instalable en app/: app/index.html con una sección por pantalla (solo una visible a la vez, navegación con botones, diseño de 375 px a pantalla completa, sin backend), app/manifest.webmanifest (name, short_name, start_url ./, display standalone, theme_color, background_color e iconos), iconos app/icon-192.png y app/icon-512.png (si no puedes generar PNG, usa app/icon.svg y avísanos), <link rel="manifest">, meta theme-color y apple-mobile-web-app-capable, y un service worker mínimo app/sw.js registrado desde app/index.html. El medidor del curso va en las dos versiones.

## Lo que ya sabemos (estaciones 0–7)
- Trabajo por hacer (JTBD): Cuando acabo de mudarme a Madrid para estudiar, tengo tiempo libre (sobre todo el fin de semana), no conozco a nadie de confianza con quien quedar y mi dinero para ocio es limitado, quiero tener un plan asequible que me guste y alguien con quien hacerlo, decidiéndolo sin perder tiempo comparando opciones, para salir en lugar de quedarme en casa solo o sola, aprovechar mis primeros meses en la ciudad y sentirme integrado en Madrid sin gastar de más.
- Dolores del cliente ([E] = evidencia, [S] = suposición):
  - [E] Falta de compañía: no conocer a nadie y no saber con quién ir (D01, D02).
  - [E] Planes que no se concretan y acaban en quedarse en casa (D01, D02).
  - [E] Tiempo perdido buscando y comparando opciones (D01).
  - [E] Presupuesto ajustado que limita lo que se atreve a probar (D01).
  - [S] Sensación de desaprovechar los fines de semana en la ciudad nueva.
- Ganancias que busca:
  - [S] Encontrar con quién ir a un plan, o conocer gente nueva en el propio plan.
  - [S] Ver opciones asequibles ya filtradas, sin tener que comparar durante mucho tiempo.
  - [E] Poder repetir lo que ya funciona: comida buena y una cerveza con amigos después de clase (D01).
  - [S] Decidir rápido con recomendaciones de personas en las que confía.
  - [S] Sentirse integrado en Madrid y no aislado durante el primer año.
- Frases reales de entrevistas y reseñas (para inspirar el tono; no las pongas como testimonios):
  - destaca por ser una herramienta útil para conocer gente con aficiones comunes, pero los usuarios señalan problemas de asistencia, perfiles poco controlados y un uso a veces enfocado en ligar.
  - una app con interfaz atractiva y mucha usabilidad, parecida a una versión de recomendaciones de lugares, restaurantes y cafés, sobre todo útil cuando estás en una ciudad nueva y buscas algo más local
- Qué ofrecemos (VPC):
  - App móvil y web gratuitas para el estudiante.
  - Buscador de planes por presupuesto y tipo de plan (comida, bares, ocio nocturno, planes gratuitos).
  - Compatibilidad con perfiles afines y creación de grupos para ir juntos a un plan.
  - Ver quién va a cada plan y hablar con esas personas antes de ir.
- Cómo aliviamos cada dolor (para los beneficios):
  - Falta de compañía: lista de quién asiste a cada plan, chat previo con esas personas y creación de grupos afines.
  - Planes que no se concretan: alertas por WhatsApp cuando se apunta gente afín o se abre un plan que encaja contigo.
  - Tiempo perdido buscando: un único sitio con planes filtrados por presupuesto y tipo, en lugar de saltar entre TikTok, Instagram y Google Maps.
  - Presupuesto ajustado: planes baratos o gratis más descuentos por nivel de club.
  - Desaprovechar los fines de semana: propuestas de plan para sábado y domingo con gente ya apuntada.
- Cómo creamos ganancias:
  - Match por gustos y grupos por plan: llegas sabiendo con quién vas y con quién puedes conectar.
  - Filtro por presupuesto y tipo de plan: ves solo opciones asequibles y ya filtradas, sin comparar durante horas.
  - Descuentos del club que mejoran según el uso (nivel bronce, nivel plata), así que cuanto más sales, menos pagas.
  - Guardar planes y repetir con el mismo grupo, para volver a lo que ya funcionó (comida y una cerveza con amigos).
- Propuesta única de valor: Conectar  Conecta con gente nueva. Descubre nuevos planes. Obtén descuentos.
- Concepto de alto nivel: «Un BlaBlaCar de planes para universitarios recién llegados a Madrid» [S]
- Solución: Ver quién va a cada plan y hablar con esas personas antes de ir [E] (D01, D02) · Grupos por afinidad y buscador de planes por presupuesto y tipo [E] (D01) · Club con niveles (bronce, plata) que da más descuento cuanto más se usa, y alertas por WhatsApp [S]
- Early adopters: Universitarios en su primer cuatrimestre en Madrid, desplazados de otras ciudades, que todavía no tienen grupo [E] (D01, D02) · Quienes ya buscan planes en TikTok, Instagram o Google Maps y acaban quedándose en casa por no tener con quién ir [E] (D01, D02) · Residentes de colegios mayores y residencias, y estudiantes Erasmus recién llegados [S]
- Alternativas que usan hoy (competencia): Búsqueda por redes sociales, peer to peer, preguntar a conocidos y reseñas de google maps.
- Ingresos y precio: App gratis para el estudiante, por su presupuesto ajustado [E] (D01) · Publicidad de locales: planes patrocinados y destacados en el buscador [S] · Anuncios segmentados por zona, tipo de plan y presupuesto [S]
- Canales: Embajadores en residencias, colegios mayores y facultades [S] · Contenido en TikTok e Instagram, donde ya buscan planes [E] (para el canal) / [S] (para la conversión) · Semanas de bienvenida de las universidades y asociaciones de estudiantes internacionales [S]
- Insight del concepto: Aunque encuentran ideas de sobra en TikTok, Instagram o Google Maps, un plan solo se hace realidad si hay alguien con quien ir. Cuanto más buscan solos, más se bloquean y más tiempo pierden, porque lo que les falta es compañía y no información.
- Razón para creer: Porque en las entrevistas, quien busca plan en TikTok, Instagram o Google Maps acaba igualmente en casa si no tiene con quién ir. La app muestra quién se apunta a cada plan, permite hablar con ellos antes y forma grupos por afinidad, para que ir sea una decisión con compañía. Los descuentos suben con el uso (nivel bronce, nivel plata), así que quien participa más paga menos.
- Precio del concepto: gratis
- Hipótesis que el prototipo tiene que permitir medir (test cards):
  - H1: Les convence esta propuesta: Conectar  Conecta con gente nueva. Descubre nuevos planes. Obtén descuentos. · mediremos: % que pagaría y % de grupos hechos en la app · acertamos si: >=50%
  - H2: Lo que usan hoy no les basta: Búsqueda por redes sociales, peer to peer, preguntar a conocidos y reseñas de google maps. · mediremos: % de gente insatisfecha con las búsquedas convencionales · acertamos si: >=35%

## Brief
- Objetivo: Creemos que los jóvenes de 18 a 30 años sin mucho presupuesto prefieren buscar un plan empezando por cuánto dinero tienen y cuántos son («tengo 15 € y somos 4»), en vez de por tipo de local. También creemos que son capaces de cerrar un plan completo en grupo (elegirlo, votarlo y dividir el pago) en menos de 2 minutos y sin ayuda.
- Público: Universitarios y jóvenes que empiezan a trabajar, de 18 a 30 años, en una gran ciudad (lanzamiento hiperlocal en una ciudad y sus campus). Quieren salir con amigos, pero el dinero les limita. Hoy usan Instagram, Fever o Nanait y acaban gastando más de lo previsto.
- Mensaje clave: Dinos cuánto tienes y cuántos sois: nosotros te damos el plannazo.
- Tono: Cercano, divertido y transparente, como un amigo que conoce los mejores sitios y no te cobra de más. Tuteo, frases cortas y humor sin pasarse. Nada corporativo y nada de «app de cupones». Ocio responsable: siempre hay planes sin alcohol, y cualquier comunicación sobre bares o discotecas va solo a mayores de 18.
- Colores y estilo: Los colores principales van a ser el #DDD7D7 y el #FF5757 con los botones en color #CCFF8C
- Llamada a la acción (CTA): Buscar mi plannazo
- Qué mediremos: Test de usabilidad moderado con 5 usuarios del público objetivo, con una tarea concreta: «Tenéis 15 € por cabeza y sois 4. Encontrad un plan para el sábado y repartid el pago». Mediremos:

Tasa de éxito de la tarea. Acertamos si al menos 4 de 5 la completan sin ayuda.
Tiempo hasta completarla. Objetivo: menos de 2 minutos.
Satisfacción con el cuestionario SUS (en Google Forms). Objetivo: 68 o más.
Comportamiento real en el prototipo: clics en el CTA y en qué pantalla abandonan, con Microsoft Clarity o el medidor del curso, más enlaces con UTM.

## Wireframe aprobado
Wireframe de baja fidelidad · app de 3 pantallas · formato móvil

Pantalla 1 — FEED
1. Cabecera / menú: «PLANNAZO»
2. Hero (titular + CTA): «Súmate a Plannazo y descubre nuestros descuentazos»; «Encuentras planes baratos, conoce gente y obtén descuentos»; botón «Descubre más»
3. Lista de beneficios (3): «Beneficiate con nosotros»; «Planes distintos» / «Precios asequibles» / «Gente nueva»
4. Botón «Unete al plan»
5. Precios: «Planes populares»; «Brunch - 10€» / «Tardeo en Nuevos Ministerios - 12€»
6. Pie: «Consigue tu entrada»
7. Testimonios: «Opiniones de nuestros PLANNERS»; «He hecho amigos para toda la vida» / «Salir sin dinero ya no es un problema»

Pantalla 2 — PLANES
1. Hero (titular + CTA): «PLANNAZOS»; botón «Desliza para encontrar tu plan ideal»
2. Cómo funciona (pasos): «¿Qué prefieres hoy?»; «Restaurantes» / «Ocio y cultura» / «Entretenimiento» / «Discotecas»
3. Pie (sin texto todavía)

Pantalla 3 — Conocer gente
1. Hero (titular + CTA): «Conecta con nuevos PLANNERS»
2. Texto: «¿Qué es?»; «Conoce a los PLANNERS más activos y con quién puedes encajar para hacer los PLANNES más interesantes.»
3. Formulario: «Usuarios más activos»; «Luis. 23 años, Derecho y Ade» / «Claudia. 19 años, Filosofía» / «Jairo, 23 años, Ingeniero e Influencer»; botón «Conectar»

## Reglas de trabajo
- Todo en castellano de España: los textos de la página y tus explicaciones.
- Un único archivo HTML autocontenido: HTML, CSS y JavaScript en el mismo archivo, sin frameworks ni servicios externos (sin Google Analytics, Tally, Clarity, cookies ni fuentes de terceros). Para medir usamos solo el medidor del curso que te daremos.
- Responsive y mobile-first: tiene que verse bien a 375 px de ancho sin scroll horizontal.
- Accesible: HTML semántico, contraste suficiente, texto alternativo en imágenes, labels en los formularios y navegable con teclado.
- Sin datos personales reales: nombres y fotos ficticios o marcadores. En formularios, pide solo los datos imprescindibles.
- No inventes cifras, testimonios, logos ni premios. Si hace falta un dato, deja [DATO PENDIENTE] y avísanos.
- Respeta el orden de bloques y los textos del wireframe; si propones cambios, explícalos antes de aplicarlos.
- Pide confirmación antes de borrar o sobrescribir cualquier archivo.
- Publicas tú en GitHub Pages cada vez que terminamos un paso (bloque PUBLICAR): repositorio público ed-plannazo en nuestra cuenta de GitHub (la enlazada con gh), URL https://equipo1-cmyk.github.io/ed-plannazo/. Sube los cambios (commit y push) sin pedirnos confirmación; solo avísanos si algo falla. No subas datos/, CSV de encuestas, transcripciones, .env, contraseñas ni claves, y nunca uses --force ni borres repositorios.
- Trabaja por pasos (plan → construir → revisar) y, tras cada paso, resume en 3 líneas qué has hecho y qué falta.
