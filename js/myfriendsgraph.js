//criar grafo de relacionamento entre tecnologias (languages) com usuarios do github
//nos do grafo   {id: 1, shape: 'circularImage', label: "login", circularImage:"urlImg"},
var nodes = new vis.DataSet([
]);

//relacionamento entre os nós
var edges = new vis.DataSet([
]);

//Criar conteudo do grafo dentro do elemento
function createNetWork(element){
    var container = element;
    var data = {
        nodes: this.nodes,
        edges: this.edges
    };
    var options = {
    };
    var network = new vis.Network(container, data, options);
}