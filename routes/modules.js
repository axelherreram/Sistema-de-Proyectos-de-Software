const express = require('express');
const router = express.Router();
const ModuleController = require('../controllers/ModuleController');

/**
 * @swagger
 * tags:
 *   name: Modules
 *   description: API para gestionar módulos de software
 */

/**
 * @swagger
 * /modules:
 *   post:
 *     summary: Crear un nuevo módulo
 *     tags: [Modules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       201:
 *         description: Módulo creado exitosamente
 *       500:
 *         description: Error al crear el módulo
 */
router.post('/', ModuleController.create);

/**
 * @swagger
 * /modules/project/{projectId}:
 *   get:
 *     summary: Obtener todos los módulos de un proyecto específico
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del proyecto
 *     responses:
 *       200:
 *         description: Lista de módulos del proyecto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Module'
 *       404:
 *         description: No se encontraron módulos para el proyecto especificado
 *       500:
 *         description: Error al obtener los módulos
 */
router.get('/project/:projectId', ModuleController.getAllByProjectId);

/**
 * @swagger
 * /modules/{id}:
 *   get:
 *     summary: Obtener un módulo por ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del módulo
 *     responses:
 *       200:
 *         description: Módulo encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Module'
 *       404:
 *         description: Módulo no encontrado
 *       500:
 *         description: Error al obtener el módulo
 */
router.get('/:id', ModuleController.getById);

/**
 * @swagger
 * /modules/{id}:
 *   put:
 *     summary: Actualizar un módulo por ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del módulo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Module'
 *     responses:
 *       200:
 *         description: Módulo actualizado exitosamente
 *       404:
 *         description: Módulo no encontrado
 *       500:
 *         description: Error al actualizar el módulo
 */
router.put('/:id', ModuleController.update);

/**
 * @swagger
 * /modules/{id}:
 *   delete:
 *     summary: Eliminar un módulo por ID
 *     tags: [Modules]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del módulo
 *     responses:
 *       200:
 *         description: Módulo eliminado exitosamente
 *       404:
 *         description: Módulo no encontrado
 *       500:
 *         description: Error al eliminar el módulo
 */
router.delete('/:id', ModuleController.delete);

module.exports = router;
