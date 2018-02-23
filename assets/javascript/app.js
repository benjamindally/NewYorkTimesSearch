var APIKey = "89e3ef8298d348709f256379ebdca622";
var query = "test";
var res;
var numberOfRecords;
//store response in variable res
//res.docs is array of found articles
//res.docs[i].web_url is web url
//res.docs[i].headline.main is headline
//res.docs[i].snippet is a snippet of the article

// request looks like
//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=OURAPIKEY&q=SEARCHTERM

function update(){
    $("#container").empty();
    console.log(numberOfRecords);
    var imglink = "https://www.nytimes.com/"
    for(var i = 0; i < numberOfRecords; i++){   
        var article = $("<div>");
        var headline = $("<h1>");
        var image = $("<img>");
        var snippet = $("<p>");
        var link = $("<a>");
        headline.html(res.docs[i].headline.main);
        if(res.docs[i].multimedia[0] !== undefined){
            var completeLink = imglink + res.docs[i].multimedia[0].url;
            image.attr("src", completeLink);
        }
        else{
            image.attr("alt", "[no image found!]");
        }
        snippet.html(res.docs[i].snippet);
        link.attr("href", res.docs[i].web_url);
        link.html("Read more");
        article.append(headline);
        article.append(image);
        article.append(snippet);
        article.append(link);
        $("#container").append(article);
    }
}

$(document).ready(function(){

    $("#searchBtn").on("click", function(event){
        event.preventDefault()
        query = $("#searchTerm").val()
        numberOfRecords = $("#record-number").val();
        console.log(query);
        console.log(numberOfRecords);
            $.ajax({
                url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+APIKey+"&q="+query
                    + "&fq=document_type:(\"article\")", //We want articles only
                method: "GET"
            }).then(function(response){
                //do
                res = response.response;
                console.log(res);
                update();
            })
    })

    $("#clearBtn").on("click", event=>{
        event.preventDefault();
        $("#container").empty();
    })



})