// RESUMÃO - https://www.youtube.com/watch?v=x2FZQsQiHl0&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=31

    // Instalações

        // 1- Express: npm install express --save
        // 2- Heandlebars: npm install --save express-handlebars
        // 3- Bodyparser: npm install body-parser --save
        // 4- Mongoose: npm install --save mongoose


    // Criar um arquivo app.js, nele teremos:

        // Carregando módulos

            const express = require('express');
            const handlebars = require('express-handlebars');
            const bodyParser = require('body-parser')
            const app = express();
        
        // Configurações
            // Body Parser
                app.use(bodyParser.urlencoded({ extended: true })
                app.use(bodyParser.json())
                
            // Handlebars
                app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
                app.set('view engine', 'handlebars')

            // Mongoose
                
            
            
        // Rotas
            
            
        // Outros

            const PORT = 8081
            app.listen(PORT, () => {
                console.log('Servidor Rodando :)')
            })
            
           
    // Criar o seguinte set de pastas 

        // 1- Rotas
        // 2- Views
            // a) layouts
                    // Arquivo "main.handlebars" (criar um HTML dentro dele e colocar {{{ body }}} )



//************************************************************************ */



// Criando um protocolo http

var http = require('http');

http.createServer().listen(8888);

//************************************************************************ */

// também podemos criar o servidor da seguinte forma

http.createServer(function(req, res) {
    res.send('Olá')
});

//************************************************************************ */

// para puxar o módulo do express

const express = require('express');
const app = express();


// Isto abaixo é uma rota

app.get('/', function(req, res) {
    res.send('Seja muito bem vindo')
})


// Caso queiramos criar um caminho dentro da nosso website

app.get("/caminho", function(req, res) {
    res.send('Seja muito bem vindo aqui também')
})


// Criando uma rota com um parametro

app.get("/ola/:nome" , function(req, res) {
    res.send('Seja muito bem vindo aqui também')
}) // o ":nome" é o parametro que passamos



app.listen(8081, function() {
    console.log('Servidor rodando') // est é uma função de callback :);
    
}) // esta função precisa ser a última do nosso código

//************************************************************************ */

// Nodemon

// Para que o servidor comece a fazer atualizações automáticas

// npm install nodemon -g (chamando globalmente)

// agora ao inves de rodarmos com node "nome do arquivo" rodamos nodemon "nome no arquivo"

//************************************************************************ */

// Agora ao inves de nosso "send" mandar um texto, estaremos mandando um arquivo HTML

app.get('/', function(req,res) {
    res.sendfile(__dirname + "nome do arquivo   ")
})

    // A princípio parece que res.render é mais fácil

// Caso queiramos colocar um html numa rota fazemos

app.get('/nomerota', function(req,res) {
    res.sendfile(__dirname + "nome do arquivo   ")
})

//************************************************************************ */

// Conectando o banco de dados ao backend

// npm install --save sequelize (o que é este sequelize? - ORM extrai toda a camada de banco de dados)

// npm install --save mysql2

const Sequelize = require('sequelize')
const sequelize = new Sequelize ('nome do banco', 'usuário', 'senha ', {
    host: 'localhost' //caso estejamos no mesmo pc
    dialect: 'mysql' // tipo de banco
})

sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso')
}).catch(function(erro) {
    console.log('Falha ao se conectar: ' + erro);
    
}) // testamos a conexão


// Criando um model dentro do sequelize

// Criando uma tabela

const Postagem = sequelize.define('postagens', {
    titulo {
        type: Sequelize.STRING
    },
    conteudo {
        type: Sequelize.TEXT
    }
})


Postagem.sync{(force: True)} // o que é isso?

// Dando um insert na tabela

Postagem.create({
    titulo: 'o titulo',
    conteudo: 'o conteudo'
})

//************************************************************************ */

// Criando handlebars: o handlebars é um criador de templates; uma coisa interessante que conseguimos fazer com ele e puxar no html uma varíavel do JS

// Para instalar: npm install --save express-handlebars

const handlebars = require('express handlebars')

// Agora precisamos configurar o handlebars

    // Config
        // Template Engine
        app.engine('handlebars', handlebars({defaultlayout: 'main'}))
        app.set('view engine', 'handlebars')

// Agora precisamos criar uma pasta chamada views no nosso projeto, dentro dela criar uma layout e dentro desta pasta um arquivo chamado main.handlebars

// Criando uma rota com a engine

app.get('/rota', function(req, res) {
    res.send('ROTA DE CADASTRO DE POSTS')
})

// Dentro desta rota criamos num arquivo html 'alguma coisa'.handlebars

<form action='/colocamos uma rota que será exibida assim que o metodo for atribuido' method="GET OU POST">
    <p>Titulo: </p>
    <input type='text' name='titulo'> 
    <p>Conteudo</p>
    <textarea name='conteudo' id='' cols></textarea>
    <buttons type='submit'>Cadastrar postagem</buttons>    
    </input>
</form>

// Para chamarmos este html

app.get('/rota', function(req, res) {
    res.render('formulario: que é o nome de um arquivo HTML :)')
})

//Para adicionarmos um metodo POST

app.post('/rota', function(req,res) {
    res.send('formulario enviado com sucesso')
})


// dentro do arquivo main.handlebars, em body precisamos colocar {{{body}}}

// Só conseguimos ir a uma rota pelo URL atraves do metodo GET

//************************************************************************ */

// Body Parser: npm install --save body-parser 

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded([extended: false]))
app.use(bodyParser.json())

// Agora que já setamos conseguimos usar esta biblioteca para pegarmos os dados do nosso formulário :)

app.post('/rota', function(req, res) {
    req.body.conteudo  // "conteudo" aqui pois é o nome do campo que usamos no HTML
    res.send('formulario enviado com sucesso')
})

//************************************************************************ */

// DUVIDA: como acessar o banco de dados pelo cmd? o cara do video usou mysql -n localhost-u root -p

// podemos tirar a conexão com o banco deste mesmo script e começar a rodar em um novo script fazendo 

const Sequelize = require('sequelize')

const sequelize = new Sequelize('nome banco', 'usuário', 'senha', {
    host: 'fdsdf'
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}

//************************************************************************ */

// Adicionando os dados do formulário ao nosso banco de dados :D

const Post = require('./onde esta a sua conexão com o banco')
app.post('/rota que vamos levar', function(req, res) {
    Post.create({
        título: req.body.titulo
        conteúdo: rec.body.conteudo
    }).then(function(){
        res.send("Post criado com sucesso")
    })
})

// No nosso caso, estamos criando uma lista de posts. Caso queiramos exibir os posts que já foram criados

app.get('/rota', function(req, res) {
    Post.all().then(function(posts) {
        res.render('formulario', {posts: posts})
    })
    
})


// Depois para jogarmos no HTML basta colocarmos em chaves duplas o nome da váriavel que criamos aqui {{posts}}

// Isso aqui é magia :O. No HTML colocamos:

{{#each posts}}
    <h1>{{título}}</h1> // "titulo" é o nome de um campos no nosso SQL
    <p>{{conteúdo}}</p>
    //<hr>
{{/each} // tem outra chave aqui

//************************************************************************ */

//Deletando postagens

{{#each posts}}
    <h1>{{título}}</h1> // "titulo" é o nome de um campos no nosso SQL
    <p>{{conteúdo}}</p>
    // <hr>
    <a href='/deletar/{{id}}'><button>Deletar</button></a>
{{/each}

app.get('/deletar/:id', function(req, res) { //esse id é do nosso banco de dados
    Post.destroy({where {'id': req.params.id}})
})

//************************************************************************ */

// Agora não iremos mais usar o sequelize pois não iremos trabalhar com o mysql; inves disso usaremos o mongodb :)

// o tutorial para instalação completo é https://www.youtube.com/watch?v=XlvR0_AECoI&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=28

// Vamos instalar o mongoose; tutorial de instalação: https://www.youtube.com/watch?v=5_LRvbmlqeg&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=29

const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('host que ele está hospedado/ nome da database', {
    useMongoClient: true
}).then().catch()

// Model - Usuários

const UserSchemma = moongose.UserSchemma({
    nome: {
        type: String,
        require: false //se o campo será obrigatório ou não
    },
    sobrenome: {
        type: String,
        require: false
    }    
})

// Agora precisa dizer qual será o nome da collection deste model (o nome da tabela )

mongoose.model('Usuários', UserSchemma);

// Inserindo dados no mongoose

const Victor = mongoose.model('Usuários')

new Victor({
    nome: "Victor",
    sobrenome: "Lima"
    
}).save().then(() => { // por que usamos a função arrow aqui? Parece que arrow function são um substitutivo para as functions
    console.log('Usuário criado com sucesso')
}).catch((err) => {
    console.log('Deu erro ')
)} 


// Para usarmos o moongose de forma externa no nosso script

    // No nosso arquivo raiz colocamos
    const Schema = moongose.Schema;

    const Categoria = new Schema({
        // informações do DDL do banco
    })
    
    moongose.model('exemplo', Categoria)

    // No arquivo que queremos puxar o moongose

        // Configurações
        const mongoose = require('mongoose')
        require('./diretorio do arquivo')
        const Categoria = moongose.model('exemplo')

        // Para linkarmos o HTML com o banco

        router.post('/caminho da rota', (req, res) => {
            const novaCategoria = {
                nome: req.body.'nome no html',
                slug: req.body.'nome no html'
            }

            new Categoria(novaCategoria).save().then().catch()
        })



// Usando arquivos CSS, HTML e JS dentro das nossas views com o bootstrap

    const path = require('path') // esta é um modulo do node para trabalhamos com diretórios 

    app.use(express.static(path.join(__dirname, "nome do diretório"))) // estamos falando aqui que todos os nossos arquivos estáticos estão no diretório apontado

    // Para habilitar o css no diretório que apontamos

    <link rel='assdadsa' href = "diretório que está no css na pasta do bootstrap"></link>
    
    // Agora para colocarmos o JS dentro do arquivo copiamos o <script> no website do bootstrap

 
// Criando middlewares (toda vez que fizemos uma requisição, o middleware será gerado)

        app.use((req, res, next) => {
            console.log('middleware falando')
            next()
        })

// Trabalhando com o express-session e com o flash. 


    // O Flash é como se fosse uma pagina tempóraria; teremos uma mensagem (no caso de erro ou acerto) e ela aparecerá temporariamente na nossa página

    // Instalação

    npm install --save express-session
    npm install --save connect-flash

    // Carregando os models

    const session = require('express-session')
    const flash = require('connect-flash')

    // Configurações

    app.use(session({ // os app.use funcionam como middlewares
        secret: 'qualquercoisa',
        resave: true,
        saveUninitialized: true
    }))

    app.use(flash())

    // Middleware

    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        next()
    })

// Agora podemos fazer a validação do nossos cadastrados de posts. La na rota de post fazemos:

    router.post('/caminho da rota', (req, res) => {

        var erros = []

        if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome = null){
            erros.push({texto: 'Nome Inválido'})
        }

        if(erros.lenght > 0){
            res.render("rota do erro", {erros: erros})
        }else{
            const novaCategoria = {
                nome: req.body.'nome no html',
                slug: req.body.'nome no html'
            }
    
            new Categoria(novaCategoria).save().then(() => {
                req.flash("sucess_msg", "Categoria criada com sucesso")
                res.redirect("rota que queremos redirecionar") // qual a diferença entre render e redirect?
            }).catch()
        }


    
    })

    // Agora colocamos na nossa rota de formulário o seguinte cod em cima de todos os div's

    {{#each erros}} // esse each nos permite acessar cada uma das mensagens do array "erros"

    <div class="alert alert-danger">{{texto}}</div> // este "texto" é o nome do texto que colocamos em caso de erro

    {{else}}

    {{/each}}

    // Em outro arquivo.handlebars, colocamos as mensagens referentes ao cadastro no banco

    {{#if success_msg}}
        <div class='alert alert-success'></div>
    {{/if}

    {{#if error_msg}}
        <div class='alert alert-danger'></div>
    {{/if}

    // Por fim, em baixo do <body> colocamos o nome do arquivo.handlebars

    {{>_arquivo}}

// Agora iremos listar todas as categorias que criamos na nossa página, como se fosse um log

    // é bem moleza :) Na nossa sessão de rotas, fazemos:

    router.get('/rota desejada', (req, res) =>{
        Categoria.find().then((categorias) => { // Aqui que a mágica acontece no moongose
            res.render('/arquivo de rota', {categorias: categorias})
        }).catch((err) => {
            req.flash("error_msg", "Houve um erro")
            res.redirect("rota que desejamos")
        })
        
    })


// Agora vamos aprender a editar a categoria


    // No nosso arquivo de rotas

    router.get('/rota da categoria/id:', (req, res) => {
        Categoria.findOne({__id:req.params.id}) // por que params ao invés de body?
        res.render('caminho do arquivo html', {categoria: categorias})
    }).catch((err) => {
        req.flash("erro_msg", "Essa categoria não existe")
        res.redirect("/rota que desejamos redirecionar o usuário")
    })

    // Dentro do html de rotas do lugar que queremos criar o botão

    <a href="/rota da categoria/{{_id}}"><button>Editar categoria</button></a>  // De onde vem esse id {{_id}} ?
    
    // Agora precisamos criar uma view (rota) para esta edição de categoria

    // (podemos usar a mesma de criação de um novo formulário)

    // Para preenchermos automaticamente o campo editado com as informações anteriores fazemos:

    {{categoria.nome}} // aqui estamos puxando o "nome" da collection "categoria"
    {{categoria.slug}}

    // Por fim, precisamos fazer a atualização do mongodb

    router.post("categorias/edit", (req, res) => {
        
        // primeiro vamos procurar a categoria desejada

        Categoria.findOne({_id: req.body.id}).then((categoria) => {

            // depois fazemos o update no banco

            categoria.nome = req.body.nome
            categoria.slug = req.body.slug

            categoria.save()

        }).catch((err) => {
            req.flash("error_msg", "nome do erro que irá aparecer")
            res.redirect("rota que iremos redirecionar")
        })

    })
