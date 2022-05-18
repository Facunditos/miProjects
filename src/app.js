const express=require('express');
const app=express();

require("dotenv").config();
const fs=require("fs")
const path=require("path")
const swaggerUi = require('swagger-ui-express');
const ymal = require("js-yaml");

const doc = ymal.load(fs.readFileSync(path.join(__dirname,"doc/documentation.yml"), 'utf8'));

const projectsRouter=require("./routes/projects");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(doc));
app.use('/projects',projectsRouter);

const port=process.env.PORT||3030;
app.listen(port,()=>console.log(`Server is running on the port ${port}`));