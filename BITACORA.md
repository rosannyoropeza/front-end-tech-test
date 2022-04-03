# Solución de Prueba tecnica Front Ecomsur 2021 

### Index.

  - [Requerimientos mínimos](#requerimientos-mínimos)
  - [Instalar y Correr la aplicación](#instalar-y-correr-la-aplicación)
  - [Descripción de la solución](#descripción-de-la-solución)
  - [Reglas de entrega](#reglas-de-entrega)

## Requerimientos mínimos

Node 14.15.0

## Instalar y Correr la aplicación

Para instalar la API (backend) debes ingresar a la carpeta `root` de la aplicacion y correr el siguiente comando:
  
   `npm install`

y para la aplicacion de React (front), correr los siguientes comandos desde el `root`:

1. `cd front` - Para abrir la carpeta del proyecto front.
2. `npm install` - Para instalar los paquetes y sus dependencias.

Luego, puede regresa al directorio root con `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

Esto correrá ambas aplicaciones (Express y CRA) al mismo tiempo.

- CRA se encuentra en:
  `http://localhost:3000/`
 y se ve de la siguiente forma:
 ![Running app](/running-app.png)

- El servidor se encuentra en:
  `http://localhost:5000/`

- La lista de productos se encuentra:
  `http://localhost:5000/api/products`

- Puedes encontrar cada producto por su ID:
  `http://localhost:5000/api/products/1`

- Las imágenes se encuentran en:|
  `http://localhost:5000/images/{{nombre-de-la-imagen}}`

## Descripción de la solución

Se creo una carpeta views, la cual contienes las vista del proyecto de carrito de compras, y una carpeta componentes, para los componentes a usar. 

Al iniciar la aplicación, la primera vista en mostrarse es **Catálogo de Productos**, la cual contiene un componente header y una etiqueta main para contener el componente Card.

En esta vista se realiza la consulta a la API mediente el uso del *Hook useEffect*, y para la  petición se usa *fetch*, la respuesta obtenida se guarda en una variable y en el localStorage.

El componente Header, contiene el nav de la aplicación. Además del buscador y el Mini cart ![mini cart example](/minicart-example.png)

Para el buscador se crea una función que realiza un filter con el array guardado en el localStorage, lo que permite usar los datos sin realizar la petición nuevamente a la API. Este filter se pasa por props a la lista de productos del catálogo.

Mientras que el Mini cart muestra el estado de la variable ***arrProducts***, en la cual se implementa redux para comunicar los componentes Card, Header y TableProducts. El flujo es: Al darle click a una tarjeta de la vista **Catálogo de Productos** la variable del estado en el Mini Cart obtiene el tamaño del array, y por lo tanto pinta cuantos productos estan guardados en la vista **Carrito de Compras**, que a su vez rellena en una tabla los productos en el componente ***TableProducts*** desde el estado global de redux.

Cuando carga el **Catálogo de Productos** si el ountInStock del producto esta en cero el boton `Add item to cart` se bloquea. 

A nivel de Responsive Design se inicia con el breackpoint de 320px para Mobile-First, en donde se muestra 1 producto por fila. Apartir de los 716px dos productos hasta llegar a su tamaño máximo de 1075px donde se mostraran de a tres productos;
