const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Sistema de Proyectos de Software API',
      version: '1.0.0',
      description: 'API para gestionar proyectos, módulos y fases en un sistema de software',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
        Project: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Sistema de Inventario' },
            description: { type: 'string', example: 'Proyecto de software para gestionar inventarios' },
            startDate: { type: 'string', format: 'date', example: '2024-01-01' },
            endDate: { type: 'string', format: 'date', example: '2024-12-31' },
            status: { type: 'string', example: 'En progreso' },
          },
        },
        Module: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Autenticación' },
            description: { type: 'string', example: 'Módulo para gestionar autenticación de usuarios' },
            projectId: { type: 'integer', example: 1 },
            phaseId: { type: 'integer', example: 2 },
            startDate: { type: 'string', format: 'date', example: '2024-01-15' },
            endDate: { type: 'string', format: 'date', example: '2024-06-15' },
            status: { type: 'string', example: 'Pendiente' },
          },
        },
        Phase: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            name: { type: 'string', example: 'Análisis' },
            color: { type: 'string', example: 'lightblue' },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
