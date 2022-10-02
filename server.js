const http = require ('http');

http
  .createServer((request, response)=> {    
    response.writeHead(200, { 'Content-Type': 'application/json' });
        
    if (request.url === '/produtos'){
        response.end(JSON.stringify({
            message: "Rota de Produto"
        }))
    }

    if (request.url === '/usuarios'){
        response.end(JSON.stringify({
            message: "Rota de usuario"
        }))
    }    

}) .listen(8080, ()=> console.log(`Servidor esta rodando na porta 8080`));