// app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger');
const projectsRouter = require('./routes/projects');
const modulesRouter = require('./routes/modules');

const app = express();
const port = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use('/projects', projectsRouter);
app.use('/modules', modulesRouter); 

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
