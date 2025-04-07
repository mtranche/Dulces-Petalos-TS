# 🌸 Dulces Pétalos - Catálogo de Floristería

Aplicación web desarrollada con **React, TypeScript, Vite e i18n** para mostrar el catálogo de productos de la floristería Dulces Pétalos. 

Se puede consultar en español y en inglés.

Puede usar tanto la versión v1 de la api como la v2.

Incluye vista de listado y detalle de cada planta, con diseño responsive y accesible, siguiendo el mockup proporcionado en Figma.

---

## 🛠️ Tecnologías utilizadas
- [nodejs](https://nodejs.org)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [React Router](https://reactrouter.com/)
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/)
- [i18next para la gestión de traducciones](https://www.i18next.com/)

---

## 📎 Recursos

- Figma del diseño: Acceso al diseño [aquí](https://www.figma.com/design/3XIgWJd1qoOM5FLgHQpQzX/Dulces-P%C3%A9talos)

- [Documentación técnica PDF incluida en /doc](./docs/Dulces_petalos-technical_task.pdf)


---

## ✅ Paso previo: Instalar Node.js y npm

### 🧭 Instalación recomendada para Windows

1. Visita 👉 [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS (Long Term Support)**
3. Instálala como cualquier otra aplicación

Esto instalará **Node.js** y **npm** automáticamente.

---

### 🐧 Instalación recomendada para Ubuntu (Linux)

```bash
sudo apt update
sudo apt install nodejs npm
```

---

### 🧪 Verifica que la instalación fue correcta

Abre tu terminal y escribe:

```bash
node -v
npm -v
```

Deberías ver algo como esto

```bash
v20.x.x
10.x.x
```

---

## 🚀 Cómo clonar y arrancar el proyecto

### 1. Clonar el repositorio

```bash
git clone git@github.com:mtranche/Dulces-Petalos-TS.git
cd dulces-petalos_TS
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar el proyecto en desarrollo

```bash
npm run dev
```
Esto levantará el proyecto en http://localhost:5173 (o el puerto que indique Vite).

---

## 🧪 Cómo ejecutar los tests

El proyecto utiliza Vitest. Para ejecutar los tests:

```bash
npx vitest
```

Para abrir la UI para ver los tests visualmente:

```bash
npx vitest --ui
```

---

## 📁 Estructura del proyecto

```plaintext
DULCES-PETALOS/
│
├── public/                    → Archivos estáticos accesibles públicamente
│   
├── src/                      → Código fuente del proyecto
│   ├── adapters/             → Adaptadores del dominio  
│   │   ├── ProductAdapter.ts
│   │   └── ProductAdapter.test.ts    
│   │                
│   ├── assets/                → Recursos internos como imágenes o SVGs (no públicas)
│   │   ├── Logo.png
│   │   ├── Search.png
│   │   └── Vector.svg

│   ├── components/            → Componentes reutilizables de la UI
│   │   ├── Breadcrumb.tsx
│   │   ├── Breadcrumb.test.tsx
│   │   ├── Buttom.tsx
│   │   ├── Buttom.test.tsx
│   │   ├── Card.tsx
│   │   ├── Card.test.tsx
│   │   ├── ErrorMessage.tsx
│   │   ├── ErrorMessage.test.tsx
│   │   ├── Header.tsx
│   │   ├── Header.test.tsx
│   │   ├── Search.tsx
│   │   ├── Search.test.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── LanguageSwitcher.test.tsx
│   │   ├── Loader.tsx
│   │   ├── Loader.test.tsx
│   │   ├── ProductTag.tsx
│   │   ├── ProductTag.test.tsx
│   │   ├── Search.tsx
│   │   └── Search.test.tsx
│   │
│   ├── domain/                → Lógica relacionada con el dominio de los productos
│   │   └──Product.tsx
│   │
│   ├── hooks/                 → Hooks personalizados
│   │   ├── useFetchProductById.ts
|   |   ├── useFetchProductById.test.ts
│   │   ├── useFetchProducts.ts
|   |   ├── useFetchProducts.test.ts
│   │   ├──useFilteredProducts.ts
|   |   └── useFilteredProducts.test.ts
│   │
│   ├── locals/                → Archivos de traducción para i18next
│   │   ├── en.json
│   │   └── es.json
│   │
│   ├── pages/                 → Vistas principales del sitio
│   │   ├── ProductDetail.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductDetail.test.tsx
│   │   └── ProductList.test.tsx
│   │
│   ├── styles/                → Estilos SCSS organizados por tipo
│   │   ├── base/              → Variables, resets, tipografía (_vars.scss)
│   │   ├── components/        → Estilos de cada componente
│   │   │   ├── _breadcrumb.scss
│   │   │   ├── _button.scss
|   |   |   ├── _card.scss
│   │   │   ├── _error-message.scss
│   │   │   ├── _header.scss
│   │   │   ├── _language-switcher.scss
│   │   │   ├── _loader.scss
│   │   │   ├── _eproduct-tag.scss
│   │   │   └── _search.scss
│   │   ├── pages/             → Estilos por cada vista
│   │   │   ├── _productDetail.scss
│   │   │   └── _productList.scss
│   │   └── main.scss          → Importa todos los estilos
│   │
│   ├── types/   
│   │   └── aseets.d.ts        → archivo de tipos
│   │
│   ├── App.tsx                → Componente principal con enrutado
│   ├── App.test.tsx           → Pruebas de App
│   ├── index.tsx              → Punto de entrada de React y Vite
│   └── setupTests.ts          → Configuración de los tests con Vitest
│
├── favicon.ico                → icono del sitio
├── i18n.ts                    → configuración de i18n
├── index.html                 → HTML base para montar React
├── vite.config.ts             → Configuración de Vite
├── package.json               → Dependencias y scripts npm
├── ysconfig.hson              → Configuración de TypeScript
└── README.md                  → Documentación principal del proyecto
```

---

## ✅ Funcionalidades implementadas

- Listado de productos con buscador en tiempo real.

- Borrado de productos duplicados en el listado.

- Detalle de cada producto con imagen, descripción y ficha técnica.

- Breadcrumb para navegación.

- Responsive design (desktop y mobile).

- Accesibilidad básica con etiquetas semánticas, roles y descripciones.

- Estilos modulados con SASS y variables personalizadas.

- Soporte para traducción con **i18next** (Por ahora español/inglés).

---

## 📌 API utilizada

Todos los productos se obtienen desde las 2 API's proporcionadas.

Por defecto usamos la v2 que es más completa, pero se puede cambiar la url la v1 en el fetch.


```bash
GET https://dulces-petalos.jakala.es/api/v2/product
GET https://dulces-petalos.jakala.es/api/v2/product/:id
```
y

``` bash
GET https://dulces-petalos.jakala.es/api/v1/product
GET https://dulces-petalos.jakala.es/api/v1/product/:id
```

---

## 🧼 Scripts adicionales

| Comando          | Descripción                                 |
|------------------|---------------------------------------------|
| `npm run build`  | Genera la versión de producción             |
| `npm run preview`| Sirve la app de producción local            |
| `npm run lint`   | (Si se configura) Linting opcional          |
| `npm run test`   | Ejecuta los tests con Vitest                |

---

## 🧑‍💻 Autor
Creado por Marta Tranche Bouzón.

mtranche@gmail.com
