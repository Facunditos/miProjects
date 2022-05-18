const express=require('express');
const router=express.Router();

const {validateCreate,validateUpdate}=require("../middlewares/projectsValidator")

const {
    getProjectsList,
    getSingleById,
    getSingleByName,
    createProject,
    updateProject,
    deleteProject
}=require('../controllers/projectsController');



router.get('/',getProjectsList);
router.get('/:id',getSingleById);
router.get('/search/name',getSingleByName);
router.post('/',validateCreate,createProject);
router.put('/:id',validateUpdate,updateProject);
router.delete("/:id",deleteProject);

module.exports=router
