var settings = {
  feedSource: './feed-source.txt',
  refreshTime: 10,
  iframeId: 'feed-iframe'
}

var refreshIframeWhenNecesary = function(settings) {
  return function() {
    var feedSourceURL = settings.feedSource;
    $.get(feedSourceURL, function(feedURL) {
      setTimeout(refreshIframeWhenNecesary, settings.refreshTime * 1000);
      var iframe = document.getElementById('feed-iframe');
      if(iframe.src != feedURL.trim()) {
        console.log("Refreshing from " + iframe.src + " to " + feedURL);
        iframe.src = feedURL;
      }
    });
  }
}(settings);

setTimeout(refreshIframeWhenNecesary, settings.refreshTime * 1000);
