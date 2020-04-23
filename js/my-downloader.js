jQuery.support.cors = true;
       
function getURLData(url_git){
    var resposta = JSON.parse(localStorage.getItem(url_git));
    if(!resposta){
        $.ajax({
            url: url_git,
            type: "GET",
            timeout: 3000,
            async: false,
            dataType: "json", 
            success: function(data) {
                resposta = data;
                localStorage.setItem(url_git,JSON.stringify(data));
            },
            error: function(jqXHR, textStatus, ex) {
                //tenho que fazer o retorno do problema de retorno
                return {};
            }
        });
    }
    return resposta;
}   