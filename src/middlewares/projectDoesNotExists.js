const {findByNameExactly}=require("../repositories/projectsRepository")

const projectDoesNotExits=async(req,res,next)=>{
    let {name}=req.body;
    if (name) {
        const project=await findByNameExactly(name);
        if (project) return res.status(400).json({
        status:400,
        message:"This project already exits"
        });
    };
    next()
}

module.exports=projectDoesNotExits