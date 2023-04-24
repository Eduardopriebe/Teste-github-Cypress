const el = require('./elements').ELEMENTS;
const listatarefas = ['Programar e preencher o type do campo','Tarefa 1','Tarefa 2','Tarefa 3']

const url_home = ''


class CriarTarefa {
    acessarhome(){
        cy.visit(el.url)

    }

}

export default new CriarTarefa();