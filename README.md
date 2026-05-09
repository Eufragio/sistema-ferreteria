# Sistema de Ferreteria

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?logo=mysql&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue)
![Last Commit](https://img.shields.io/github/last-commit/Eufragio/sistema-ferreteria)

Sistema de gestion comercial completo para ferreterias — punto de venta, inventario, compras, cuentas, cotizaciones, devoluciones y reportes.

## Stack

| Capa | Tecnologia |
|------|-----------|
| Frontend | React 18 + Vite + Zustand |
| Backend | Node.js + Express + Sequelize |
| Base de datos | MySQL 8.0 |
| Autenticacion | JWT + bcryptjs |
| Reportes | ExcelJS + PDFKit |

## Modulos

- **Dashboard** — Graficas y resumen del dia
- **POS** — Punto de venta con soporte de lector de codigo de barras
- **Ventas / Compras / Devoluciones** — Flujos completos con stock automatico
- **Cotizaciones** — Generacion y seguimiento
- **Inventario** — Movimientos de stock con historial
- **Caja** — Apertura, cierre y egresos
- **Cuentas por Cobrar / Pagar** — Con registro de abonos
- **Clientes / Proveedores / Productos** — ABM completo
- **Reportes** — Exportacion a Excel y PDF
- **Usuarios y Roles** — Gestion de permisos
- **Configuracion** — Logo, nombre del negocio, datos fiscales
- **Auditoria** — Logs de actividad

## Instalacion

### Opcion A — Docker (recomendado)

Requiere [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
git clone https://github.com/Eufragio/sistema-ferreteria.git
cd sistema-ferreteria
cp .env.example .env
docker compose up --build
```

Editá `.env` antes de levantar. La base de datos se inicializa automaticamente.

Abrí `http://localhost`.

### Opcion B — Manual (Windows)

**Requisitos:** Node.js v18+ · MySQL 8.0+

```bash
git clone https://github.com/Eufragio/sistema-ferreteria.git
cd sistema-ferreteria
```

Crea el archivo `server/.env` (ver `.env.example`), luego:

```
1_Instalar_Dependencias.bat
2_Configurar_Base_Datos.bat
3_Iniciar_Sistema.bat
```

O manualmente:

```bash
cd server && npm run dev
cd client && npm run dev
```

**Acceso:**

| URL | Descripcion |
|-----|-------------|
| http://localhost:5173 | Frontend |
| http://localhost:3001 | API |

**Credenciales por defecto:** `admin@ferreteria.com` / `admin123`

> Cambia la contrasena del admin despues del primer login.

## Estructura del Proyecto

```
sistema-ferreteria/
├── docker-compose.yml
├── ferreteria_db.sql       # Schema de base de datos
├── datos_base.sql          # Datos iniciales
├── client/                 # Frontend React
│   ├── Dockerfile
│   ├── nginx.conf
│   └── src/
│       ├── pages/          # Vistas principales
│       ├── components/     # Componentes reutilizables
│       ├── store/          # Estado global (Zustand)
│       └── api/            # Cliente HTTP (Axios)
└── server/                 # Backend Node.js
    ├── Dockerfile
    └── src/
        ├── controllers/    # Logica de negocio
        ├── models/         # Modelos Sequelize
        ├── routes/         # Rutas de la API
        ├── middlewares/    # Autenticacion JWT
        └── config/         # Conexion a base de datos
```

## Licencia

MIT
