
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    //Google Street view Image API key
    //AIzaSyCYHVBd6Ez8E2wUJVxwt0-dPy7ZkChlBjY

    //NYT API key
    //d094f328f3104e198c8ea916f81dee0f 

    //1. YOUR CODE FOR Google Street View GOES HERE!
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;
    $greeting.text('So, you want to live at '+ address + '?');
    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    $('body').append('<img class="bgimg" src="' +
    'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address +' ">')

    //2. YOUR CODE FOR NYTimes AJAX request GOES HERE!
    //request
    //var NYTUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sanfrancisco, ca&sort=newest&api-key:d094f328f3104e198c8ea916f81dee0f';


    var nytimesUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        nytimesUrl += '?' + $.param({
        'q': cityStr,
        'sort': "newest",
        'api-key': "d094f328f3104e198c8ea916f81dee0f"
        });
    $.ajax({
        url: nytimesUrl,
        method:'GET',
    }).done(function(data){
            $nytHeaderElem.text('New York Times articles about ' + cityStr);
            articles = data.response.docs;
            for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
            
                $nytElem.append('<li class = "article">' + '<a href = "'+article.web_url+'">' + article.headline.main + '</a>' + 
                '<p>' + article.snippet + '</p>' + '</li>');
            };

    })
    
    //3. Wikipedia AJAX request GOES HERE
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+cityStr+
    '&format=json&callback=wikiCallback';
    //error handling with JSON P
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wikipedia resources");
    }, 8000);

    $.ajax({
        url:wikiUrl,
        dataType: "jsonp",
        //jsonp: "callback",
        success: function(response){
            var articleList = response[1];
            for(var i=0; i<articleList.length; i++){
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/'+articleStr;
                $wikiElem.append('<li><a href="'+url+'">'+articleStr+ '</a></li>');
                    
            };
            clearTimeout(wikiRequestTimeout);
        }
    })

    return false;
};

$('#form-container').submit(loadData);
