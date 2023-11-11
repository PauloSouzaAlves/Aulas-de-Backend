const express = require('express'); //importo express q é node //

const app = express(); 

app.use(express.json());

//Método get//

//Route Params São Obrigatórios//



const PORT = 3333; //endereço da porta//

app.listen(PORT,() => console.log(`Server is running on Port ${PORT}`));//AQUI é onde nossa aplicacao fica escutando para quanfo escutar ela produz mensagem console.log// 


