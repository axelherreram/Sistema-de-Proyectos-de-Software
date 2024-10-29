const express = require("express");
const router = express.Router();
const PhaseController = require("../controllers/PhaseController");

/**
 * @swagger
 * tags:
 *   name: Phases
 *   description: API para gestionar fases de proyectos
 */

/**
 * @swagger
 * /phases:
 *   get:
 *     summary: Obtener todas las fases
 *     tags: [Phases]
 *     responses:
 *       200:
 *         description: Lista de todas las fases
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Phase'
 *       500:
 *         description: Error al obtener las fases
 */
router.get("/", PhaseController.getAll);

/**
 * @swagger
 * /phases:
 *   post:
 *     summary: Crear una nueva fase
 *     tags: [Phases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Phase'
 *     responses:
 *       201:
 *         description: Fase creada exitosamente
 *       500:
 *         description: Error al crear la fase
 */
router.post("/", PhaseController.create);

/**
 * @swagger
 * /phases/{id}:
 *   put:
 *     summary: Actualizar una fase por ID
 *     tags: [Phases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fase
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Phase'
 *     responses:
 *       200:
 *         description: Fase actualizada exitosamente
 *       404:
 *         description: Fase no encontrada
 *       500:
 *         description: Error al actualizar la fase
 */
router.put("/:id", PhaseController.update);

/**
 * @swagger
 * /phases/{id}:
 *   delete:
 *     summary: Eliminar una fase por ID
 *     tags: [Phases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la fase
 *     responses:
 *       200:
 *         description: Fase eliminada exitosamente
 *       404:
 *         description: Fase no encontrada
 *       500:
 *         description: Error al eliminar la fase
 */
router.delete("/:id", PhaseController.delete);

module.exports = router;
