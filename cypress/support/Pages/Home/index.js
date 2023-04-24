//Ações da página Home

const el = require('./elements').ELEMENTS;
const listatarefas = ['Programar e preencher o type do campo','Tarefa 1','Tarefa 2','Tarefa 3']


class CriarTarefa {
    acessarhome(){
        cy.visit(el.url)

    }
    criartarefa(tarefa){
        cy.get(el.fieldtarefas).type(listatarefas[0])
        .type('{enter}')
    }
    listagemtarefas(){
        cy.get(el.listatarefas).should('have.length',listatarefas.length)
    }
    multiplastarefas(){
        let end = listatarefas.length
        let i = 0
            for(i=0; i<end; i++){
            cy.get(el.fieldtarefas).type(listatarefas[i])
            .type('{enter}')
            };    
    }
}

export default new CriarTarefa();