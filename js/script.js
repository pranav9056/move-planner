
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $('#street').val();
    var city = $('#city').val();
    var greeting = $('#greeting');
    greeting.text("So you want to live at "+street+" "+city+" ?");
    var imgSrc = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location="+street+", "+city+"&key=AIzaSyCdLFiNwR1IWcboPnskveRE-inIx3PrCMg";
    var imgData = $('.bgimg');
    if(imgData.length === 0){
      var imgTag = '<img class="bgimg" src="'+imgSrc+'">';
      $body.append(imgTag);
    }
    else {
      imgData.attr("src",imgSrc);
    }
    // NYT api
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "f55f69b6d8f748b88fefd21bbfcb6e96",
      'q': city
    });
    $.getJSON(url,function getNews(data){
      $nytHeaderElem.text("New York Times Articles About "+city);
      var newsList = $('.article-list');
      var listElem = '<li class="article">%data%</li>'
      data.response.docs.forEach(function (newsArticle){
        var link = '<a href="'+newsArticle.web_url+'">'+newsArticle.headline.main+'</a>';
        link+= '<p>'+newsArticle.snippet+'</p>';
        var story = listElem.replace("%data%",link);
        newsList.append(story);

      });
    });

    return false;
};

$('#form-container').submit(loadData);
