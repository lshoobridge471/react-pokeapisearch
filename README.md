# pokeapi-search

Sitio basado en React, para consultar datos de la API PokeAPI.
Se conecta a un proxy armado en NodeJS que hace de intermediario, ya que la API no tiene WS de busqueda de Pokemons.

- API original: https://pokeapi.co/api/v2/
- Proyecto proxy a instalar: https://github.com/lshoobridge471/nodejs-pokeapi-proxy

Creado por Lucas Shoobridge.

## Pasos a seguir para iniciar:
- Instalar NodeJS (preferentemente v14.15.1).
- Instalar dependencias con el comando: npm ig
- Clonar el proyecto del proxy, e iniciarlo con el puerto 8000 (para no tener que cambiar el puerto en los files, de lo contrario, se puede cambiar en el archivo src/index.tsx).
- Para ejecutar el sitio: ```npm run start```

El sitio realiza las busquedas de Pokemons enviando requests al proxy que deberia estar alojado en: ```http://localhost:8000```

## Datos relevantes:

Es un simple sitio buscador de Pokemons.
Se busca conectar a la API creada bajo PROXY con NodeJS porque la API de PokeAPI no tiene buscador, por lo tanto se desarrollo un endpoint buscador en el proxy.