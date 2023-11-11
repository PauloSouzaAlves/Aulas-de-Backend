const { Router } = require("express");

const usersRoutes = Router();

usersRoutes("/users",(request, response) => {
    const { name, email, password } = request.body;

    response.json({name, email, password});
}); 
    
module.exports = usersRoutes;