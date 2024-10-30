const { Project, Module, Phase } = require('../models');

const DashboardController = {
  // Obtener el total de proyectos
  async getTotalProjects(req, res) {
    try {
      const totalProjects = await Project.count();
      res.status(200).json({ totalProjects });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el total de proyectos', details: error.message });
    }
  },

  // Obtener el total de módulos
  async getTotalModules(req, res) {
    try {
      const totalModules = await Module.count();
      res.status(200).json({ totalModules });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el total de módulos', details: error.message });
    }
  },

  // Obtener la cantidad de módulos en cada fase
  async getModulesByPhase(req, res) {
    try {
      const modulesByPhase = await Phase.findAll({
        include: {
          model: Module,
          as: 'modules',
          attributes: ['id'],
        },
        attributes: ['id', 'name', 'color'],
      });

      const result = modulesByPhase.map(phase => ({
        phase: phase.name,
        color: phase.color,
        totalModules: phase.modules.length,
      }));

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener módulos por fase', details: error.message });
    }
  },

  // Obtener el progreso del proyecto (porcentaje de módulos completados por proyecto)
  async getProjectProgress(req, res) {
    try {
      const projects = await Project.findAll({
        include: {
          model: Module,
          as: 'modules',
          attributes: ['status'],
        },
      });

      const result = projects.map(project => {
        const totalModules = project.modules.length;
        const completedModules = project.modules.filter(module => module.status === 'Completado').length;
        const progress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
        return {
          projectId: project.id,
          projectName: project.name,
          progress: progress.toFixed(2), // Redondeado a 2 decimales
        };
      });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el progreso del proyecto', details: error.message });
    }
  },
};

module.exports = DashboardController;
