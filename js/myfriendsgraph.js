//criar grafo de relacionamento entre tecnologias (languages) com usuarios do github
//nos do grafo   {id: 1, shape: 'circularImage', label: "login", circularImage:"urlImg"},
var nodes = new vis.DataSet([
]);

//relacionamento entre os nós
var edges = new vis.DataSet([
]);

var cont_id = 1;
var relationsKeys = [];
var relationsIds = [];
var isLoaded =  false;

//Criar conteudo do grafo dentro do elemento
function createNetWork(element){
    if(!isLoaded){ 
        var container = element;
        var data = {
            nodes: this.nodes,
            edges: this.edges
        };
        var options = {
        };
        var network = new vis.Network(container, data, options);
        isLoaded = true;
    }
}

function addToNetWork(user,relations){
    var id = createNodeUser(user);
    createNodesRelAndEdges(id,relations);
}

//cria node user de relacionamento no formato user { login:XXX, avatar_url:YYYY }
function createNodeUser(user){
    var name = user.login;
    var  avatar = user.avatar_url;
    var id = cont_id++;
    this.nodes.add({id: id, shape: 'image', label: name, image: avatar})
    return id;
}

function createNodesRel(key) {
    var id = cont_id++;
    this.nodes.add({id: id, label: key})
    return id;
}

//cria nodes de relacionamento de um determinado user utiliza os valores chave para definir o relacionamento formato do dado segue exemplo
// data: [{key1:XX,key2:YY,key3:ZZ]{key2:XX},{key23:yyy,key3:zzz},{key0:xxxx}]
function createNodesRelAndEdges(userId,allRel){
    var my_rel = []
    for(var i in allRel){
        var val = allRel[i];
        for(var j in val){
            var sub_key = j;
            var idx_rel = relationsKeys.indexOf(sub_key);
            if(idx_rel < 0){
                var rel_id = createNodesRel(sub_key);
                relationsIds.push(rel_id);
                relationsKeys.push(sub_key);
            }
            if(my_rel.indexOf(sub_key) < 0){
                my_rel.push(sub_key);
            }
            
        }
    } 
    for( var i in my_rel){
        var val = my_rel[i];
        createEdges(userId,relationsIds[relationsKeys.indexOf(val)]);
    }
              
}

function createEdges(userId,relId){
   this.edges.add( {from: userId, to: relId});
}

