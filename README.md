## App en node.js con exprees

Agustin Ascolani API Discover
Ezequiel Herbosa  API Top Rated
Francisco Salazar API Now Playing
Sebastian Gomez API Peliculas


Para el desarrollo de la aplicación, se tomaron el sevicio de la APIs que brinda la pataforma de TMDB: https://api.themoviedb.org.
Se crearon las rutas correspondientes para el uso de las APIs en archivos independientes y fueron almacenados en la carpeta "routes".
Se crearon los controladores correspondientes para manipulación de las APIs a ser usadas y estas se almacenaron en archivos independientes en la carperta "controllers".
Se realizarón pruebas para verificar el funcionamiento de la Aplicación para mostrar su funcionamiento:

        * Listado de registros en formato json.
        * Visualización de un registro en particular.
        * Listado de registros en formato json que pueda filtrarse a través de query params.

Se realizarón pruebas en Postman haciendo uso directo de la las APIs desde la plataforma de TMDB, para validar el correcto funcionamiento de la aplicación en el servidor localhost desarrollado.
La aplicación final se desplegó sobre la platforma Render.