Feature: Login no VodQA

  Scenario: Login com sucesso
    Given o usuario esta na tela de login
    When que faca login com username "admin" e senha "admin"
    Then devera visualizar header da tela "Samples List"

