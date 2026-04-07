# Sistema de Ferreteria

Sistema de gestion comercial completo para ferreterias. Incluye punto de venta, inventario, compras, caja, cuentas por cobrar/pagar, cotizaciones, devoluciones y reportes.

## Tecnologias

**Backend**
- Node.js + Express
- Sequelize ORM + MySQL 8
- JWT para autenticacion
- bcryptjs, express-validator, multer, exceljs, pdfkit

**Frontend**
- React 18 + Vite
- React Router DOM, Zustand, Axios
- Chart.js, Lucide React, react-hot-toast

## Modulos

- Dashboard con graficas y resumen del dia
- Punto de Venta (POS) con soporte de lector de codigo de barras
- Ventas, Compras y Devoluciones
- Cotizaciones
- Inventario y movimientos de stock
- Caja (apertura, cierre, egresos)
- Cuentas por Cobrar y Cuentas por Pagar con abonos
- Clientes, Proveedores, Productos y Categorias
- Reportes exportables en Excel y PDF
- Gestion de Usuarios y Roles
- Configuracion del sistema (logo, nombre, datos fiscales)
- Logs de auditoria

## Requisitos

- Node.js v18+
- MySQL 8.0+

## Instalacion

**1. Instalar dependencias**
```
1_Instalar_Dependencias.bat
```

**2. Importar base de datos**
```
2_Configurar_Base_Datos.bat
```

**3. Iniciar el sistema**
```
3_Iniciar_Sistema.bat
```

O manualmente:

```bash
# Backend
cd server
npm run dev

# Frontend
cd client
npm run dev
```

## Configuracion

Crear el archivo `server/.env`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=ferreteria_db
JWT_SECRET=tu_clave_secreta
PORT=3001
```

## Acceso

| URL | Descripcion |
|-----|-------------|
| http://localhost:5173 | Frontend |
| http://localhost:3001 | API Backend |

**Credenciales por defecto:**
- Usuario: `admin@ferreteria.com`
- Contrasena: `admin123`

## Estructura del proyecto

```
sistema-ferreteria/
├── client/               # Frontend React
│   └── src/
│       ├── pages/        # Vistas principales
│       ├── components/   # Componentes reutilizables
│       ├── store/        # Estado global (Zustand)
│       └── api/          # Cliente HTTP (Axios)
├── server/               # Backend Node.js
│   └── src/
│       ├── controllers/  # Logica de negocio
│       ├── models/       # Modelos Sequelize
│       ├── routes/       # Rutas de la API
│       ├── middlewares/  # Autenticacion JWT
│       └── config/       # Conexion a base de datos
├── ferreteria_db.sql     # Script de base de datos
└── *.bat                 # Scripts de instalacion (Windows)
```
