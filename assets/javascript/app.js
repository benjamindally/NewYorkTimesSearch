var APIKey = "89e3ef8298d348709f256379ebdca622";
<<<<<<< HEAD
alert("hi")

=======
var query = "test";
>>>>>>> 1804a844d3b68b2e1d4e6643ee4ee852bab0023d
//store response in variable res
//res.docs is array of found articles
//res.docs[i].web_url is web url
//res.docs[i].headline.main is headline
//res.docs[i].snippet is a snippet of the article

// request looks like
//https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=OURAPIKEY&q=SEARCHTERM

$(document).ready(function(){

	$.ajax({
		url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key" + APIKey + "=&q=" + query,
		method: "GET"
	}).then(function(response){
		console.log(response);
	})



})