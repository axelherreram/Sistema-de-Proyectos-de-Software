const { Module, Project, Phase } = require("../models");

const ModuleController = {
  async create(req, res) {
    try {
      const module = await Module.create(req.body);
      res.status(201).json(module);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al crear el módulo", details: error });
    }
  },

  async getAllByProjectId(req, res) {
    try {
      const { projectId } = req.params;
      const modules = await Module.findAll({
        where: { projectId },
        include: [
            { model: Project, as: 'project' }, 
            { model: Phase, as: 'phase' }, 
          ],
      });

      if (modules.length === 0) {
        return res.status(404).json({
          message: "No se encontraron módulos para el proyecto especificado",
        });
      }

      res.status(200).json(modules);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener los módulos", details: error });
    }
  },

  // Obtener un módulo por ID
  async getById(req, res) {
    try {
      const { id } = req.params;
      const module = await Module.findByPk(id, {
        include: [
          { model: Project, as: "project" },
          { model: Phase, as: "phase" },
        ],
      });

      if (!module) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      res.status(200).json(module);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener el módulo", details: error });
    }
  },

  // Actualizar un módulo por ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await Module.update(req.body, {
        where: { id },
      });

      if (!updatedRows) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      const updatedModule = await Module.findByPk(id, {
        include: [
          { model: Project, as: "project" },
          { model: Phase, as: "phase" },
        ],
      });

      res.status(200).json(updatedModule);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al actualizar el módulo", details: error });
    }
  },

  // Eliminar un módulo por ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await Module.destroy({
        where: { id },
      });

      if (!deletedRows) {
        return res.status(404).json({ error: "Módulo no encontrado" });
      }

      res.status(200).json({ message: "Módulo eliminado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al eliminar el módulo", details: error });
    }
  },
};

module.exports = ModuleController;
