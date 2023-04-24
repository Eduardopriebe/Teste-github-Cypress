/// <reference types="cypress" />
import CriarTarefa from '../support/Pages/Home'


context('TodoMVC', () => {
    it.only('Adicionar uma nova tarefa', () => {
       CriarTarefa.acessarhome();
       CriarTarefa.criartarefa('Programação para o dia');
        

       // Ações
       // acessar a página home
       // criar tarefa nova

       //Elementos
       //
    });

   it.only('Adicionar uma multiplas tarefas', () => {
        CriarTarefa.acessarhome();
        CriarTarefa.multiplastarefas()

     });
     it.only('Verificar inserção contagem de list item correto', () => {
        CriarTarefa.acessarhome()
        CriarTarefa.multiplastarefas()
        CriarTarefa.listagemtarefas()
      
     });


    /*it('Completar nova tarefa', () => {
       cy.visit("https://todomvc.com/examples/angularjs/#/")

       cy.get('.new-todo').type('Programar e preencher o type do campo{enter}')
       cy.get(':nth-child(1) > .view > .toggle').click()

    });
    /*it('Verificar tarefa completed', () => {
        cy.visit("https://todomvc.com/examples/angularjs/#/")
 
        cy.get('.new-todo').type('Programar e preencher o type do campo{enter}');
        cy.get(':nth-child(1) > .view > .toggle').click()
        cy.get('.filters > :nth-child(2) > a').click()
        cy.get('ng-view.ng-scope').should('not.be.visible')
     });*/

});