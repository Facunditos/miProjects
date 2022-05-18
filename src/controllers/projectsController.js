const {
    getAllProjects,
    getProjectById,
    getProjectByName,
    postProject,
    updateOne,
    deleteOne
}=require("../services/projectsService");

const projectsController={
    getProjectsList:async (req,res)=>{
        await getAllProjects(req,res)
    },
    getSingleById:async (req,res)=>{
        await getProjectById(req,res)
    },
    getSingleByName:async (req,res)=>{
        await getProjectByName(req,res)
    },
    createProject:async (req,res)=>{
        await postProject(req,res)
    },
    updateProject:async (req,res)=>{
        await updateOne(req,res)
    },
    deleteProject:async (req,res)=>{
        await deleteOne(req,res)
    }
};

module.exports=projectsController
