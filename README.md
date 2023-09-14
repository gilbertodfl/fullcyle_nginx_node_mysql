# Full Cycle Developer
## Desafio : Nginx com Node.js e mysql 
 2 - Utilizando o NGINX como proxy reverso, permitir inserir e listar dados de Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:
```
Full Cycle Rocks!

- Lista de nomes cadastrada no banco de dados.

```

## PREPARANDO O AMBIENTE
    Vamos precisar de ter 3 diretórios: mysql node e nginx
    Crie as pastas: mkdir -p mysql node nginx
    Entre na pasta node e instale o node. 
```
   sudo apt update
   sudo apt install nodejs
   node -v
   sudo apt install npm

   ATENÇÃO: Se precisar recriar porque está dando erro, use: 
    rm -rf node_modules
    rm package-lock.json
    npm install
    npm start
    
    OBSERVAÇÃO: Crie o arquivo .gitignore e coloque node_modules para não subir para o git.
    echo "node_modules" > .gitignore 

```
### PASSO 01: Gere o docker-compose
```
No dockerfile basicamente vamos ter 3 imagens rodando
  app --> node ( que cria a tabela já com insert e fica na porta 3000 rodando)
  nginx --> servidor web que vai rodar na porta 8080
  mysql --> banco de dados

Tudo na rede mynet

```
### PASSO 02: Rode o docker-compose
 Tudo deverá estar funcionando e disponível na porta: 8080.
```
 docker-compose up -d --build 

 Conferindo:
 gilberto@bsb239170:~/docker/nginx_node_mysql/nginx_node-main$ docker ps
CONTAINER ID   IMAGE                 COMMAND                  CREATED          STATUS          PORTS                                       NAMES
40fd683ce690   nginx:prod            "nginx -g 'daemon of…"   20 seconds ago   Up 19 seconds   0.0.0.0:8080->80/tcp, :::8080->80/tcp       nginx
45105f19ffcd   nginx_node-main_app   "dockerize -wait tcp…"   20 seconds ago   Up 19 seconds   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp   app
97db18ed32a1   mysql:5.7             "docker-entrypoint.s…"   20 seconds ago   Up 20 seconds   3306/tcp, 33060/tcp 
 
```

### PASSO 03: Abra o browser
localhost:8080

### PASSO 04: Pare o serviço e vamos atualizr no git

docker-compose down

git init 
init add . 
git status
git push 

```


Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.