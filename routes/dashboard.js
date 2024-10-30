// routes/dashboard.js
const express = require('express');
const router = express.Router();
const DashboardController = require('../controllers/DashboardController');

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: API para estadísticas del dashboard
 */

/**
 * @swagger
 * /dashboard/total-projects:
 *   get:
 *     summary: Obtener el total de proyectos
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Total de proyectos
 */
router.get('/total-projects', DashboardController.getTotalProjects);

/**
 * @swagger
 * /dashboard/total-modules:
 *   get:
 *     summary: Obtener el total de módulos
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Total de módulos
 */
router.get('/total-modules', DashboardController.getTotalModules);

/**
 * @swagger
 * /dashboard/modules-by-phase:
 *   get:
 *     summary: Obtener la cantidad de módulos por fase
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Lista de módulos agrupados por fase
 */
router.get('/modules-by-phase', DashboardController.getModulesByPhase);

/**
 * @swagger
 * /dashboard/project-progress:
 *   get:
 *     summary: Obtener el progreso de los proyectos
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Progreso de cada proyecto en porcentaje
 */
router.get('/project-progress', DashboardController.getProjectProgress);

module.exports = router;
