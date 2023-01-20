# PDIFOOD

Projeto realizado para pdi da somos educação

## DB Diagram

Um [driagrama](https://dbdiagram.io/d/63c0042c6afaa541e5d20d56) recente atualizado mostrando as relações de cada tabela do projeto.

## Auth

Um [microserviço](https://github.com/davibetoni/auth) foi criado separadamente para autenticar usuários e conseguirem fazer pedidos.

### SOLID

#### Single responsibility principle - SRP \*

Cada classe/arquivo deve ter uma única responsabilidade. Ele deve executar apenas uma tarefa dentro da aplicação.

#### Open closed principle - OCP

Uma classe deve ser aberta para extensões mas não deve ser aberta para modificações. Ao extender de uma classe ela não deve ser modificada, apenas reaproveitada.

#### Liskov substitution principle - LSP \*

Podemos substituir a implementação da funcionalidade dos métodos sem danificar a regra de negócio.

#### Interface aggregation principle - IAP

Não devem ser criadas interfaces robusta, mas divididas em interfaces menores.

#### Dependecy inversion principle \*

As classes não devem depender de implementações mas de interfaces.

#### Package by feature

A estrutuda da pasta é por funcionalidade.
