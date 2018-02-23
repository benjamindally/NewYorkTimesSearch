var APIKey = "89e3ef8298d348709f256379ebdca622";
var query = "test";
var res;
//store response in variable res
//res.docs is array of found articles
//res.docs[i].web_url is web url
//res.docs[i].headline.main is headline
//res.docs[i].snippet is a snippet of the article

// request looks like
//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=OURAPIKEY&q=SEARCHTERM

function update(){

}

$(document).ready(function(){

    $("#searchBtn").on("click", function(event){
        event.preventDefault()
        query = $("#searchTerm").val()
            $.ajax({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+APIKey+"&q="+query,
                method: "GET"
            }).then(function(response){
                //do
                res = response;
                update();
            })
    })



})