# Ecommerce AngellesStore Back-end

<details open="open">
  <summary><h2 style="display: inline-block">📜 Sumário</h2></summary>

- [Sobre o projeto](#sobre-o-projeto)
- [Usando](#usando)

</details>

<a name="sobre-o-projeto"></a>

## 📋 Sobre o projeto
### Tecnologias e Ferramentas

<img align="left" alt="Prisma" width="26px" src="https://img.icons8.com/ios/1x/prisma-orm.png">
<img align="left" alt="NodeJS" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img align="left" alt="TypeScript" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
<img align="left" alt="PostgreSQL" width="26px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />

<br>

### Idealização do projeto
- Esse projeto foi idealizado a partir de um sonho antigo da minha mãe, Anathusia Antero. Ela almejava ter uma marca de roupas infantis, empreender e criar seu próprio comércio. Então, utilizando meus conhecimentos em programação, desenvolvi um ecommerce focado em roupas infantis, para dar o que seria o ponta pé inicial para a concretização deste objetivo. Vale salientar que o site NÃO está totalmente completo! Mas, já está bem completo e com bastante funcionalidades. 

### Link do front-end desse projeto
- https://github.com/esdrasaaf/AngellesStore_Front
- **É importante lembrar que para o usuário interagir com a interface do site, deve-se rodar o front-end em conjunto com o back-end :)**
<a name="usando"></a>

## 🏁 Usando

É importante lembrar que é o postgres precisa estar instalado na sua máquina, tendo em vista que eu utilizei ele como banco de dados e a seed está configurada para ele.


Clone o repositorio

```bash
$ git clone https://github.com/esdrasaaf/AngellesStore_Back.git

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ npm start
```

Lembre-se de olhar o arquivo **.env**.

<a name="contribuindo"></a>

## 🏁 Rotas

1. **Rotas de autenticação: "/auth"**

    Route: ```POST "/sign-in"```
    
    Descrição: Essa rota serve para que o usuário logue no site com a sua conta.

    Entrada:
    ```bash
        {
            email: string,
            password: string,
        }
    ```
    
    <br>
    
    Route ```POST "/sign-up"``` 

    Descrição: Essa rota serve para que o usuário cadastre-se no site. 
    
    Entrada:
    ```bash
        {
            name: string,
            email: string,
            password: string,
            image: string (image url) 
        }
    ```

   <br>

2. **Rotas para avaliação de produtos: "/avaliations"**
    
    Route: ```GET "/product/:productId"```
    
    Descrição: Essa rota serve para buscar as avaliações de um determinado produto.
    
    <br>

    Route: ```GET "/user"```
    
    Descrição: Essa rota serve para buscar todas as avaliações de um usuário.
    
    <br>

    Route: ```POST "/"```
    
    Descrição: Essa rota serve para que o usuário poste suas avaliações no site.

    Entrada:
    ```bash
        {
            productId: number,
            avaliation: string,
            rating: number,
        }
    ```
    
    <br>


    Route: ```PUT "/"```
    
    Descrição: Essa rota serve para que o usuário edite suas avaliações no site.

    Entrada:
    ```bash
        {
            avaliationId: number,
            avaliation: string,
            rating: number,
        }
    ```
    
    <br>

    Route: ```DELETE "/:avaliationId"```
    
    Descrição: Essa rota serve para que o usuário delete suas avaliações no site.

    <br>
    
3. **Rotas para marcas: "/brands"**
   
    Route: ```GET "/"```
    
    Descrição: Essa rota serve buscar todas as marcas de roupas disponíveis.

    <br>

4. **Rotas para categorias: "/categories"**
   
    Route: ```GET "/"```
    
    Descrição: Essa rota serve buscar todas as categorias de roupas disponíveis.

    <br>

5. **Rotas para cores: "/colors"**
   
    Route: ```GET "/"```
    
    Descrição: Essa rota serve buscar todas as cores de roupas disponíveis.

    <br>

6. **Rotas para imagens promocionais: "/promos"**
   
    Route: ```GET "/"```
    
    Descrição: Essa rota serve buscar todas as imagens promocionais do site.

    <br>
    
7. **Rotas para histórico: "/browsingHistory"**

    Route: ```GET "/"```
    
    Descrição: Essa rota serve para buscar o histórico de navegação do usuário.

    <br>

    Route: ```POST "/"```
    
    Descrição: Essa rota serve para construir o histórico de navegação do usuário.

    Entrada:
    ```bash
        {
            productId: number,
        }
    ```
    <br>

    Route: ```DELETE "/:historicId"```
    
    Descrição: Essa rota serve para deletar o histórico de navegação desejado.

    <br>
    
8. **Rotas para carrinho: "/cart"**

    Route: ```GET "/"```
    
    Descrição: Essa rota serve para buscar a lista de compras do carrinho.

    <br>

    Route: ```POST "/"```
    
    Descrição: Essa rota serve para adicionar produtos no carrinho.

    Entrada:
    ```bash
        {
            "productId": number,
        }
    ```
    <br>

    Route: ```DELETE "/:cartId"```
    
    Descrição: Essa rota serve para deletar algum produto do carrinho.
   
    <br>

    Route: ```DELETE "/clear/all"```
    
    Descrição: Essa rota serve para esvaziar o carrinho.

    <br>

9. **Rotas para pagamentos: "/payment"**

    Route: ```GET "/"```
    
    Descrição: Essa rota serve para buscar a lista de produtos que o usuário já comprou.

    <br>

    Route: ```POST "/"```
    
    Descrição: Essa rota serve para criar uma sessão de pagamento.

    Entrada:
    ```bash
        {
            productsArray: [
                id: number;
                image: string;
                name: string;
                price: number;
                categoryId: number;
                colorId: number;
                brandId: number;
                description: string;
                numberOfSales: number;
                updatedAt: Date;
                createdAt: Date;
            ],
        }
    ```
    <br>

    Route: ```PUT "/confirm/:purchaseId"```
    
    Descrição: Essa rota serve para confirmar o pagamento do produto.
   
    <br>

    Route: ```PUT "/numberofsales/:purchaseId"```
    
    Descrição: Essa rota serve para atualizar o números de vezes que um produto foi vendido.
   
    <br>

    Route: ```DELETE "/cancel/:purchaseId"```
    
    Descrição: Essa rota serve para cancelar o pagamento e finalizar a sessão criada.

   <br>

10. **Rotas de produtos: "/products"**
    
    Route: ```POST "/"```
    
    Descrição: Essa rota serve para buscar todos os produtos do banco de dados.

    <br>

    Route: ```GET "/review/:productId"```
    
    Descrição: Essa rota serve para buscar as informações de um produto em específico.

    <br>

    Route: ```GET "/search/:productName"```
    
    Descrição: Essa rota serve para buscar o produto de acordo com o nome escrito na barra de pesquisa.

    <br>
    
    Route: ```GET "/categories/:categoryId"```
    
    Descrição: Essa rota serve para buscar os produtos que atendem ao filtro de uma determinada categorias.

    <br>
    
    Route: ```GET "/colors/:colorId"```
    
    Descrição: Essa rota serve para buscar os produtos que atendem ao filtro de uma determinada cor.

    <br>
    
    Route: ```GET "/brands/:brandId"```
    
    Descrição: Essa rota serve para buscar os produtos que atendem ao filtro de uma determinada marca.

    <br>

    Route: ```GET "/releases"```
    
    Descrição: Essa rota serve para buscar os produtos mais recentes do site.

    <br>
    
    Route: ```GET "/bestsellers"```
    
    Descrição: Essa rota serve para buscar os produtos mais vendidos do site.

    <br>

11. **Rotas de produtos favoritos: "/saves"**
    
    Route: ```GET "/"```
    
    Descrição: Essa rota serve para buscar todos os produtos favoritados do usuário.

    <br>

    Route: ```POST "/"```
    
    Descrição: Essa rota serve favoritar um produto.

    Entrada:
    ```bash
        {
            productId: number,
        }
    ```

    <br>

12. **Rotas do usuário: "/user"**
    
    Route: ```GET "/"```
    
    Descrição: Essa rota serve para buscar todos os dados do usuário logado.

    <br>

    Route: ```PUT "/"```
    
    Descrição: Essa rota serve alterar os dados do usuário logado, vale salientar que os dados podem não estar presentes no body da requisição.

    Entrada:
    ```bash
        {
                image?: string;
                name?: string;
                email?: string;
                password?: string;
        }
    ```

    <br>

    Route: ```DELETE "/"```
    
    Descrição: Essa rota serve deslogar um usuário.

    <br>
