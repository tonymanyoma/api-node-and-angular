## Aplicación de registro de productos con nestjs + angular + mongodb atlas

# Requerimientos

1. Node js
2. Mongodb
3. Angular cli


# Ejecución
1. Clonar repositorio
2. Ejecutar npm install en la carpeta front y backend
3. Ejecutar api con el comando npm run start:dev (el servidor se ejecutará en localhost:3000)
4. Ejecutar front con el comando ng serve (el servidor se ejecutará en localhost:4200)

# Endpoints disponibles

> http://localhost:3000/product/   -> retorna todos los productos

> http://localhost:3000/product/"idproducto" -> busca un producto por id

> http://localhost:3000/product/delete?productID="idproducto" -> elimina un producto

> http://localhost:3000/product/update?productID="idproducto" -> actualiza un producto

> http://localhost:3000/product/create -> crea un producto

# Endpoint adicional 

se vinculó un api llamada gamerpower la cual provee información sobre video juegos https://rapidapi.com/digiwalls/api/gamerpower/

> http://localhost:3000/game/games   -> retorna todos los video juegos gratis para pc

