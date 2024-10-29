const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./docs/swagger');
const projectsRouter = require('./routes/projects');
const modulesRouter = require('./routes/modules');
const phasesRouter  = require('./routes/phases');
const cors = require("cors"); 

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use('/projects', projectsRouter);
app.use('/modules', modulesRouter); 
app.use("/phases", phasesRouter);

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});
