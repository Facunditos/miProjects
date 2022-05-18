const { parse } = require("dotenv");
const {
    getAll,
    getAllAndCount,
    findByPk,
    findByPkAllAttributes,
    findByName,
    create,
    update,
    destroy,
    assignUsers

}=require("../repositories/projectsRepository");

const projectsService={
    getAllProjects:async(req,res)=>{
        try{
            let {page} = req.query;
            if (!page) page = 1;
            let projects = await getAll(page);
            let {count}=await getAllAndCount()
            if (page>1 && Math.ceil(count/3) < page)
                return res.status(403).json({
                    status:403,
                    message:"Page doesn't exist"
                });
            if (projects.rows.length==0)
                return res.status(404).json({
                status:404,
                message:'There are no projects to show '
            });
          
            const previusPage = page <= 1 ? 1 : page - 1;
            const nextPage = page < count / 3 ? parseInt(page) + 1 : page
            return res.status(200).json({
              status:200,  
              previusPage: `/projects?page=${previusPage}`,
              nextPage: `/projects?page=${nextPage}`,
              totalProjects:count,
              projects: projects.rows,
            });
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    getProjectById:async(req,res)=>{
        try {
            let {id}=req.params;
            const project=await findByPk(id); 
            if (project) {
                return res.status(200).json({
                    status:200,
                    project
                })
            } else {
                return res.status(404).json({
                    status:404,
                    message:'There is no project whit this id'
                }) 
            }
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    getProjectByName:async(req,res)=>{
        try {
            const {name}=req.query;
            const projects=await findByName(name);
            console.log(projects);
            if (projects.length>0) {
                return res.status(200).json({
                    status:200,
                    projects
                })
            } else {
                return res.status(404).json({
                    status:404,
                    message:'There are no projects whit this name'
                }) 
            }
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    postProject:async(req,res)=>{
        
        try {
            let {body}=req;
            let {firstUserAssigned_id,secondUserAssigned_id,thirdUserAssigned_id}=body
            let project=await create(body);
        
            let usersAssigned_id=[];
            if (firstUserAssigned_id>0) usersAssigned_id.push(firstUserAssigned_id);
            if (secondUserAssigned_id>0) usersAssigned_id.push(secondUserAssigned_id);
            if (thirdUserAssigned_id>0) usersAssigned_id.push(thirdUserAssigned_id);
            await assignUsers(project,usersAssigned_id);
            project=await findByPk(project.id)  
            return res.status(201).json({
                status:201,
                message:'Project created',
                project
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    updateOne:async(req,res)=>{
        try {
            let {body}=req;
            let {firstUserAssigned_id,secondUserAssigned_id,thirdUserAssigned_id}=body;
            let {id}=req.params;
            
            let project=await findByPkAllAttributes(id)
            if (project) {
                await update(body,id);
                let usersAssigned_id=[];
                if (firstUserAssigned_id>0) usersAssigned_id.push(firstUserAssigned_id);
                if (secondUserAssigned_id>0) usersAssigned_id.push(secondUserAssigned_id);
                if (thirdUserAssigned_id>0) usersAssigned_id.push(thirdUserAssigned_id);
                await assignUsers(project,usersAssigned_id);
                project=await findByPk(id)
                return res.status(200).json({
                    status:200,
                    message:'Project updated',
                    project
                })
            } else {
                return res.status(404).json({
                    status:404,
                    message:'There is no project whit this id'
                }) 
            }
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    },
    deleteOne:async(req,res)=>{
        try {
            let {id}=req.params;
            let project=await findByPkAllAttributes(id)
            await assignUsers(project,[])
            project=await destroy(id); 
            if (project) {
                return res.status(200).json({
                    status:200,
                    message:'Project deleted'
                })
            } else {
                return res.status(404).json({
                    status:404,
                    message:'There is no project whit this id'
                }) 
            }
        } catch(error) {
            console.log(error)
            return res.status(500).json({
                status:500,
                message:'Server error'
            })
            
        }
    }
};

module.exports=projectsService