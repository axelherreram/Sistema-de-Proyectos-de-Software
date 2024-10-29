const { Phase } = require("../models");

const PhaseController = {
  // Obtener todas las fases
  async getAll(req, res) {
    try {
      const phases = await Phase.findAll();
      res.status(200).json(phases);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener las fases", details: error.message });
    }
  },

  async create(req, res) {
    try {
      const phase = await Phase.create(req.body);
      res.status(201).json(phase);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({
          error: "Error al crear la fase",
          details:
            "El nombre de la fase ya existe. Por favor, elige un nombre único.",
        });
      } else {
        res.status(500).json({
          error: "Error al crear la fase",
          details: error.message,
        });
      }
    }
  },

  // Actualizar una fase por ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await Phase.update(req.body, {
        where: { id },
      });

      if (!updatedRows) {
        return res.status(404).json({ error: "Fase no encontrada" });
      }

      const updatedPhase = await Phase.findByPk(id);
      res.status(200).json(updatedPhase);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al actualizar la fase", details: error.message });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await Phase.destroy({
        where: { id },
      });

      if (!deletedRows) {
        return res.status(404).json({ error: "Fase no encontrada" });
      }

      res.status(200).json({ message: "Fase eliminada exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al eliminar la fase", details: error.message });
    }
  },
};

module.exports = PhaseController;
