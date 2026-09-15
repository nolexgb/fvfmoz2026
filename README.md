# Visita Mozambique 2026

Fundación Vicente Ferrer · 21–27 de septiembre de 2026.

## Publicar en GitHub Pages

1. Descomprime el ZIP. Crea un repositorio, por ejemplo `visita-mozambique-2026`.
2. Sube **el contenido** del paquete a la raíz de la rama `main`. `index.html` debe quedar en la raíz, no dentro de otra carpeta. Incluye `.github/workflows/static.yml`.
3. En **Settings → Pages → Build and deployment → Source**, selecciona **GitHub Actions**.
4. En **Actions**, ejecuta el flujo «Publicar Visita Mozambique 2026» si no se ha iniciado automáticamente. Al terminar, GitHub mostrará el enlace de la web en Pages.

No requiere npm, compilación, claves de API ni conexión con Google Sheets. Usa este paquete como un proyecto nuevo para conservar el mapa de AECID.

Referencia: [GitHub Pages: flujos personalizados](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Preparar el móvil para usarlo sin internet

1. Abre la web publicada con conexión en el navegador habitual del móvil.
2. Pulsa **Guardar sin conexión** y espera a **Disponible sin conexión**. La aplicación también intenta prepararse automáticamente al abrirla.
3. Si quieres, añade la web a la pantalla de inicio desde el menú del navegador.
4. Comprueba la copia antes del viaje: activa modo avión, cierra la pestaña y vuelve a abrir la misma URL en el mismo navegador.

Se guardan agenda, datos, distancias, puntos, mapa básico, límites de países y trazados principales. Leaflet y sus estilos están incluidos localmente, sin depender de un CDN. La vista de calles y los enlaces de Google Maps requieren internet; sus mapas no se descargan. El mapa básico no ofrece navegación giro a giro.

El guardado del sitio requiere HTTPS (GitHub Pages lo proporciona) o localhost. La copia pertenece al dispositivo y navegador; puede perderse si se borran sus datos. Los archivos extraídos también permiten abrir `index.html` en un ordenador sin conexión, siempre que permanezcan juntos.

## Archivos

| Archivo | Función |
| --- | --- |
| `index.html` | Interfaz del mapa, agenda y paneles. |
| `style.css` | Diseño para ordenador y móvil, impresión y estilos locales de Leaflet. |
| `data.js` | Lugares, agenda, coordenadas, distancias y geometrías guardadas. |
| `app.js` | Interactividad, calculadora, fichas, agrupación de marcadores, GPS opcional y Leaflet incorporado. |
| `sw.js` | Guarda y verifica los archivos para usar la web sin conexión. |
| `manifest.webmanifest` | Nombre e integración con la pantalla de inicio. |
| `icon.svg` | Icono del mapa. |
| `.github/workflows/static.yml` | Publicación automática en GitHub Pages. |
| `README.md` | Estas instrucciones. |

## Itinerario

| Día | Programa |
| --- | --- |
| Lunes 21 | Llegada al aeropuerto de Maputo y traslado a Chókwè. Reserva indicada en Hotel Limpopo. Hospital Carmelo incluido como punto de referencia; sin inventar una hora de visita. |
| Martes 22 | Salida hacia Mapai y traslado a Ka Hariane Hotel. |
| Miércoles 23 | Jornada en Mpuzi, distrito de Mapai. Horario y punto de encuentro pendientes. |
| Jueves 24 | Mapai–Chicualacuala. Por la tarde, Centro de Salud de Litlatla, a 17 km según el itinerario. Regreso y pernocta por confirmar. |
| Viernes 25 | Traslado a Chókwè; origen previsto Mapai, sujeto a la pernocta del jueves. Por la tarde, grabación de entrevistas a Rosa María Calaf y Samuel Aranda. Reserva indicada en Hotel Limpopo. |
| Sábado 26 | 07:00–14:00, brigadas móviles en Aldea Machinho: atención y consulta de pacientes. Distancia indicada desde Chókwè: 66 km de ida. A las 16:00, salida hacia Maputo; punto exacto de salida por confirmar. |
| Domingo 27 | Visita de cortesía prevista a la Embajada de España en Mozambique. Hora pendiente. |

**Calendario corregido:** en septiembre de 2026, el sábado es 26 y el domingo es 27. Se conservó el orden de actividades solicitado. Todas las horas son locales de Mozambique (UTC+2).

## Distancias y alcance

Las rutas por carretera se calcularon con OSRM/OpenStreetMap el 15/09/2026 y se incluyen en `data.js`: no se consulta un servidor de rutas para calcularlas durante el uso.

| Tramo | Distancia guardada | Referencia |
| --- | ---: | --- |
| Aeropuerto de Maputo → Hotel Limpopo, Chókwè | 209,0 km | Red vial OSRM; desde Rua do Aeroporto. |
| Hotel Limpopo, Chókwè → Ka Hariane, Mapai | 238,7 km | Red vial OSRM. |
| Ka Hariane, Mapai → Chicualacuala | 84,2 km | Red vial OSRM. |
| Chicualacuala → Litlatla | 17 km | Dato del itinerario; trazado sin verificar. |
| Chókwè → Machinho | 66 km | Dato del itinerario; ubicación exacta pendiente. |
| Hotel Limpopo, Chókwè → Maputo, centro urbano | 213,1 km | Red vial OSRM; no es un hotel confirmado. |
| Hospital Carmelo → Hotel Limpopo | 0,9 km | Red vial OSRM. |
| Centro de Maputo → Embajada de España | 1,8 km | Red vial OSRM; referencia urbana. |
| Mapai → Mpuzi | Pendiente | No hay distancia de carretera verificada. |

Son distancias orientativas, sin tráfico, cortes ni información sobre el estado de las vías. Los puntos se ajustan al acceso vial disponible; la coordenada del aeropuerto queda a unos 548 m de ese acceso y Ka Hariane a unos 73 m. No se incluyen todos los accesos interiores. Los sentidos inversos son estimados sobre los mismos tramos, no rutas nuevas calculadas.

La calculadora usa tramos guardados. Si no hay un tramo directo pero existe una combinación, muestra su suma y los puntos intermedios, sin presentarla como la carretera más corta. Si no hay datos suficientes, muestra «Pendiente». Nunca sustituye carretera por distancia en línea recta.

El sábado no se muestra un total engañoso: se separan los 66 km de referencia a Machinho y el traslado Chókwè–Maputo. Si se vuelve de Machinho a Chókwè por el mismo recorrido, ese tramo de ida y vuelta sería de 132 km; dicho regreso no está confirmado en el programa.

## Ubicaciones que necesitan precisión

- **Mpuzi:** incluido en agenda y lugares; no se dibuja un pin inventado. Coordenadas, punto de actividad y kilómetros pendientes.
- **Machinho:** incluido con 66 km de referencia; no se dibuja un pin inventado. Se necesita el enlace o coordenada exacta.
- **Litlatla:** marcador aproximado sobre la aldea, tomado de OpenStreetMap; no identifica todavía el edificio del centro de salud. La línea discontinua desde Chicualacuala es esquemática, no una carretera verificada.
- **Chicualacuala:** referencia de la localidad; punto concreto de la actividad pendiente.
- **Maputo:** referencia del centro urbano para el regreso; no se ha definido alojamiento.
- El enlace proporcionado como «Mapai» corresponde a **Ka Hariane Hotel**.
- El enlace de la Embajada se ha corregido retirando el espacio intermedio y se ha verificado su destino.
- La reserva de Ka Hariane y las noches de alojamiento no se presentan como confirmadas.

## Editar la agenda

Los textos y días están al principio de `data.js`, en `window.VISIT_DATA.places` y `window.VISIT_DATA.days`. Los datos geográficos están al final. No cambies el nombre de las claves sin actualizar sus referencias.

Para añadir una ubicación, introduce `coords: [latitud, longitud]`, su enlace en `maps` y la precisión: `point` (punto verificado), `area` (referencia de localidad) o `pending` (sin coordenadas). No cambies una distancia pendiente a cero. `routes[].geometry` usa el orden GeoJSON `[longitud, latitud]`; debe provenir de un trazado real para presentarse como carretera.

Después de cualquier cambio, **cambia `VERSION` en `sw.js`** y publica todos los archivos modificados. El navegador instalará la nueva copia completa antes de retirar la anterior. Vuelve a comprobarla sin internet antes de viajar.

## Fuentes y licencias

- [Mapa AECID de referencia](https://nolexgb.github.io/aecid_mozambique2026/): se retoma la organización de panel y mapa, Leaflet, fichas y adaptación a móviles.
- Aeropuerto: https://maps.app.goo.gl/Pp3KfWa3b91kHtdT9
- Hospital Carmelo: https://maps.app.goo.gl/cwMwNpSPsp8DENb58
- Hotel Limpopo: https://maps.app.goo.gl/dCiHw1nFD4x2P2Zy7
- Ka Hariane, Mapai: https://maps.app.goo.gl/WnZbQBdDT2FmPwB97
- Chicualacuala: https://maps.app.goo.gl/bsAz7e7zNrdQwWy36
- Embajada de España: https://maps.app.goo.gl/qnEHsCs4FFSX2UuL7
- [Aldea de Litlatla, OSM](https://www.openstreetmap.org/node/6577924520).
- [Contacto de la Embajada](https://www.exteriores.gob.es/Embajadas/maputo/es/Embajada/Paginas/Horario%2C-localizaci%C3%B3n-y-contacto.aspx).
- [OSRM](https://project-osrm.org/) y [OpenStreetMap](https://www.openstreetmap.org/copyright): datos viales © colaboradores de OpenStreetMap, ODbL.
- [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/): límites de países 1:50m, dominio público, simplificados para uso local.
- [Leaflet 1.9.4](https://leafletjs.com/): licencia BSD-2-Clause incorporada íntegramente en `app.js`. Sus estilos se incluyen en `style.css`; no se usan los iconos raster predeterminados.
- [CARTO](https://carto.com/attributions): vista opcional de calles, únicamente con conexión.
- [Service Workers, MDN](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers): base del guardado de archivos locales del sitio.

La identificación de FVF se presenta como texto; no sustituye a un logotipo oficial. El paquete no utiliza datos de pacientes, claves, cuentas o servicios de pago.
