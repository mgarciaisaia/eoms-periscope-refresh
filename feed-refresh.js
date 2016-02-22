var refreshIframeWhenNecesary = function() {
  var feedSourceURL = './feed-source.txt';
  $.get(feedSourceURL, function(feedURL) {
    setTimeout(refreshIframeWhenNecesary, 10 * 1000);
    var iframe = document.getElementById('feed-iframe');
    if(iframe.src != feedURL.trim()) {
      console.log("Refreshing from " + iframe.src + " to " + feedURL);
      iframe.src = feedURL;
    }
  });
}

setTimeout(refreshIframeWhenNecesary, 10 * 1000);
