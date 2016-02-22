# eoms-periscope-refresh

Proof of concept for automatically updating the URL shown in an iframe.

<>'d with ♥ for the live chat in [Exile On Main Street site](http://eoms.org/).

## How to test

Run any HTTP server to serve this directory (ie, `python -m SimpleHTTPServer`) and visit `index.html`. You'll see the `iframe` change after 10 seconds.

You can change `feed-source.txt` to contain any other URL and the page will update automatically.

## Try it live!

Go to https://mgarciaisaia.github.io/eoms-periscope-refresh to check it live

### TODOs
- [ ] Remove jQuery dependency - make AJAX request on vanilla JS
- [ ] ???
- [ ] Profit!
