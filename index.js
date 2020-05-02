// Adicionar o Readline sync
const readline = require('readline-sync')
    // criação de função para orquestrar tudo que acontece
function start() {
    // variavel para armazenar o conteúdo
    const content = {}
        // Propriedades para impressão no console dos resultados das funções
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
        // Função para retornar o termo de busca informado 
    function askAndReturnSearchTerm() {
        // Adicionando modulo readlinesync com um metodo que pede 
        // um input de string que será o termo de busca
        return readline.question('Type a Wikepedia search term: ')
    }
    // Função para perguntar o prefixo da pesquisa
    function askAndReturnPrefix() {
        // Variável com o array de opções 
        const prefixes = ['Who is', 'What is', 'The history of']
            // Variável Keyinslect que dá um select de opções e retorna uma chave
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose a option:')
            //Variável para transformar a resposta do keyinselect em texto
        const selectedPrefixText = prefixes[selectedPrefixIndex]
            // retorna o valor do texto e injeta na propriedade prefix
        return selectedPrefixText
    }
    // Imprimir isso no terminal            
    console.log(content)

}
start()