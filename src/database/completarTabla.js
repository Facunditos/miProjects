let {User,ProjectManajer,Project}=require("./models/index")
console.log('vamos');
function crearUsuario(){
    return User.create({
    first_name:'Pilar',
    last_name:"López",
    email:'PilarLópez@hotmail.com',
    password:'facundo0301'
    }).then(user=>console.log(user)).catch(e=>console.log(e))
}
function buscarUsuarios(){
    return User.findAll({
        attributes:[['first_name','nombre'],'id',['last_name','apellido']],
        raw:true
    }).then(users=>console.log(users)).catch(e=>console.log(e))
}

function eliminarUsuario(){
    return User.destroy({
        where:{id:1}

    }).then(user=>console.log(user)).catch(e=>console.log(e))
}

function crearprojectManajer(){
    return ProjectManajer.create({
    user_id:1
    }).then(projectManajer=>console.log(projectManajer)).catch(e=>console.log(e))
}
function buscarProjectManajer(){
    return ProjectManajer.findByPk(1,{
        include:[{association:'User'}]
    })
    .then(projectManajer=>{console.log(projectManajer.User) })
    .catch(e=>console.log(e))
}

function crearProject(){
    return Project.create({
    name:'My fourth project',
    description:"In this project we want to build a fronted",
    projectmanajer_id:1,
    status:'En proceso'
    }).then(project=>console.log(project)).catch(e=>console.log(e))
}

function buscarProject(){
    return Project.findByPk(4)
    .then(project=>{return project.setUser([2,3]) })
    .then(usuarios=>{
        console.log('---------respuesta--------')
        console.log(usuarios)
    })
    .catch(e=>console.log(e))
}

function buscarProjectByProjectManajer(){
    return ProjectManajer.findByPk(1,{ 
        include:[{association:'Project'}]
    })
    .then(ProjectManajer=>{console.log( ProjectManajer.Project)})
    .catch(e=>console.log(e))
}


//crearUsuario()
//buscarUsuarios()
//eliminarUsuario()

crearprojectManajer()
//buscarProjectManajer()

//crearProject()
//buscarProject()
//buscarProjectByProjectManajer()