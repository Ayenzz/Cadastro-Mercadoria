const express = require("express");
const app = express();
const { randomUUID } = require("crypto");
const fs = require ("fs")

app.use(express.json());

let produtos = [];

fs.readFile("produtos.json", "utf-8", (err, data) =>{

    if (err){
        console.log(err);
    }else{
        produtos = JSON.parse(data); //Transformar de volta para objeto
    }
 
})

/** Metodos.
 *app.get = Buscar um/mais dados;
 *app.put = Altera um/mais dados, porem envia todos os outros parametros juntos;
 *app.patch = Altera um/mais dados, é usado para atualização parcial, quando você não quer mandar o payload completo;
 *app.post = Inserir um dado;
 *app.delete = Deletar um dado;
*/

/** Parametros.
 * Body => Sempre que eu quiser enviar dados para minha aplicação
 * Params => /produts/731829371289
 * Query => /produts?id=98713918&value=1673561275
 */

app.post("/produtos", (request, response) => { //Rota para cadastrar um produto.
    //Nome e Preço

    const { name, price } = request.body;

    const produto = {
        name,
        price,
        id: randomUUID(),
    }

    produtos.push(produto);

   ProducFIle();

   return response.json(produto);
   


});


app.get("/produtos", (request, response)=>{ //Rota para listar todos os produtos

    return response.json(produtos)

});


app.get("/produtos/:id", (request, response)=>{ //Rota para listar produto por ID

    const {id} = request.params;
    const produto = produtos.find(produto => produto.id === id);
    return response.json(produto);

});

app.put("/produtos/:id", (request, response)=>{ //Rota para alterar produto por ID

    const {id} = request.params;
    const { name, price } = request.body;

    const produtoIndex = produtos.findIndex(produto => produto.id === id);
    produtos[produtoIndex] = {
        ...produtos[produtoIndex],
        name,
        price
    };
    ProducFIle();
    return response.json({message: "Produto Alterado com sucesso!"})

});

app.delete("/produtos/:id", (request, response)=>{ //Rota para deletar produto por ID

    const {id} = request.params;
    const produtoIndex = produtos.findIndex(produto => produto.id === id);
   
    produtos.splice(produtoIndex, 1);
    ProducFIle();

    return response.json({message: "Produto Removido com sucesso!"})

});

function ProducFIle(){
    fs.writeFile("produtos.json", JSON.stringify(produtos), (err) =>{ //Transforma o arquivo em JSON.
        if (err){
            console.log(err);
        }else{
            console.log("Produto Inserido");
        }
    })
}


app.listen(4002, () => console.log("Servidor rodando na porta 4002"));