const { Project, Module, Phase } = require("../models");

const ProjectController = {
  async create(req, res) {
    try {
      const project = await Project.create(req.body);
      res.status(201).json(project);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al crear el proyecto", details: error });
    }
  },

  async getAll(req, res) {
    try {
      const projects = await Project.findAll({});
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({
        error: "Error al obtener los proyectos",
        details: error.message,
      });
    }
  },

  // Obtener un proyecto por ID
  async getById(req, res) {
    try {
      const { projectId } = req.params;
      const project = await Project.findByPk(projectId);

      if (!project) {
        return res.status(404).json({ error: "Proyecto no encontrado" });
      }

      res.status(200).json(project);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener el proyecto", details: error });
    }
  },

  // Actualizar un proyecto por ID
  async update(req, res) {
    try {
      const { id } = req.params;
      const [updatedRows] = await Project.update(req.body, {
        where: { id },
      });

      if (!updatedRows) {
        return res.status(404).json({ error: "Proyecto no encontrado" });
      }

      const updatedProject = await Project.findByPk(id, {
        include: { model: Module, as: "modules" },
      });

      res.status(200).json(updatedProject);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al actualizar el proyecto", details: error });
    }
  },

  // Eliminar un proyecto por ID
  async delete(req, res) {
    try {
      const { id } = req.params;
      const deletedRows = await Project.destroy({
        where: { id },
      });

      if (!deletedRows) {
        return res.status(404).json({ error: "Proyecto no encontrado" });
      }

      res.status(200).json({ message: "Proyecto eliminado exitosamente" });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al eliminar el proyecto", details: error });
    }
  },
};

module.exports = ProjectController;
