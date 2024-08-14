# **Modelagem Banco de Dados**
<hr style="border: 0; height: 1px; background-color: #000000;">

<p align="justify">Os dados serão coletados através do formulário disponível na página web. A estrutura do banco de dados foi definida juntamente com o Product Owner (PO) do projeto, resultando, até o momento, em cinco entidades: </p>

* **user_fingerprint**: contêm um identificador numérico associado a uma chave única para identificação do dispositivo, sem identificar diretamente o usuário; 
* **occurrence**: possui uma chave única para cada ocorrência, o identificador numérico do usuário que enviou, data de envio, estado e cidade da ocorrência, data da ocorrência, faixa etária da vítima, janela temporal de ocorrência da violência, situações informadas e o diagnóstico dos tipos de violência; 
* **user_occurrences**: apresenta a identificação de todos os registros realizados, o identificador do usuário que enviou e a data da ocorrência; 
* **ViolenceSituations**: apresenta a descrição das opções de violência da entidade **occurrence** de acordo com as opções apresentadas no formulário; e
* **types_of_violence**: relaciona o campo tipo de violência da entidade **occurrence** com os tipos de violência (física, moral, psicológica, patrimonial e sexual).
* **state_list**: lista de estados e respectivos id e UFs.

### Chaves estrangeiras
| Tabela de Origem    | Coluna de Origem   | Tabela de Referência | Coluna de Referência |
|---------------------|---------------------|-----------------------|-----------------------|
| occurrence          | id_user             | user_fingerprint       | id_user               |
| user_occurrences    | id_occurrence       | occurrence             | id_occurrence         |
| user_occurrences    | id_user             | user_fingerprint       | id_user               |
| occurrence          | state_violence      | state_list             | name_state            |



## **Acesso**

<iframe width="100%" height="500px" allowtransparency="true" allowfullscreen="true" scrolling="no" title="Embedded DB Designer IFrame" frameborder="0" src='https://erd.dbdesigner.net/designer/schema/1711024646-mapa-da-violencia?embed=true'></iframe>
