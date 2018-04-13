
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
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);
