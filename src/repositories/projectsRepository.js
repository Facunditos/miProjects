const {Project,Sequelize}=require("../database/models/index")
const {Op}=Sequelize

const projectsRepository={
    getAll:async(page)=>{
        const projects=await Project.findAndCountAll({
            include:[{
                association:'ProjectManajer',
                attributes: ['user_id']
            },{
                association:'Users',
                attributes: ['first_name','last_name']
            }],
            attributes:{exclude:['projectmanajer_id','updatedAt','deletedAt']},
            limit: 3,
            offset: (page - 1) * 3
        });
        return projects
    },
    getAllAndCount:async(page)=>{
        const projects=await Project.findAndCountAll({
        });
        return projects
    },
    findByPk:async(id)=>{
        const project=await Project.findByPk(id,{
            include:[{
                association:'ProjectManajer',
                attributes: ['user_id']
            },{
                association:'Users',
                attributes: ['first_name','last_name']
            }],
            attributes:{exclude:['projectmanajer_id','deletedAt']}
        })
        return project
    },
    findByPkAllAttributes:async(id)=>{
        const project=await Project.findByPk(id)
        return project
    },
    findByName:async(name)=>{
        const projects=await Project.findAll({
            where:{
                name:{[Op.like]:`%${name}%`}
            },
            include:[{
                association:'ProjectManajer',
                attributes: ['user_id']
            },{
                association:'Users',
                attributes: ['first_name','last_name']
            }],
            attributes:{exclude:['projectmanajer_id','updatedAt','deletedAt']}
        })
        return projects
    },
    findByNameExactly:async(name)=>{
        const project=await Project.findOne({
            where:{
                name
            }
        })
        return project
    },
    create:async(body)=>{
        const project=await Project.create({
            name:body.name,
            description:body.description,
            projectmanajer_id:body.projectmanajer_id,
            status:body.status
        })
        return project
    },
    update:async(body,id)=>{
        return await Project.update({
            name:body.name,
            description:body.description,
            projectmanajer_id:body.projectmanajer_id,
            status:body.status
        },{
            where:{
                id
            }
        },)
    },
    destroy:async(id)=>{
        return await Project.destroy({
            where:{
                id
            }
        })
    },
    assignUsers:async(project,usersAssigned_id)=>{
        return await project.setUsers(usersAssigned_id)
    }
}

module.exports=projectsRepository