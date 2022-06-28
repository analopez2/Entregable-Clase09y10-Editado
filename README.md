# Iniciar el servidor:

npm start

## Vistas:

"/" Formulario de carga de productos

"/productos" Tabla con

### Get Productos:

#### Request:

```bash
GET /productos
```

#### Response:

Array de productos

```javascript
[
  {
    title: String,
    price: Number,
    thumbnail: String,
    id: Number,
  },
];
```

### Crear Producto:

#### Request:

```bash
POST /productos
```

Body:

```javascript
{
    "title": String,
    "price": Number,
    "thumbnail": String,
}
```

#### Response:

```javascript
{
    "title": String,
    "price": Number,
    "thumbnail": String,
    "id": Number,
}
```
