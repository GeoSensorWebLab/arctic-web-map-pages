# Arctic Web Map Pages

This repository contains the HTML, CSS, and JavaScript for the promotional site for Arctic Web Map.

It is built with Bootstrap 3 and PolarMap.js 1.2.1.

## Local Testing

Use `express` for Node.js:

    $ npm install http-server -g
    $ http-server public

Then a local instance should be available at http://localhost:8080/.

## Deployment

With a server running [Dokku][Dokku], add a git remote to this repository, then push the master branch.

```sh
$ git remote add dokku dokku@sarcee:arctic-web-map-pages
$ git push dokku master
```

This will deploy it as a [Static HTML][Heroku Static Buildpack] app. Next the domains need to be configured.

```sh
$ ssh dokku@sarcee domains:add arctic-web-map-pages webmap.arcticconnect.ca webmap.arcticconnect.org arctic-web-map.gswlab.ca
```

Updating the domains should take a few seconds, and work instantly if the DNS is configured.

[Dokku]: http://dokku.viewdocs.io/dokku/
[Heroku Static Buildpack]: https://github.com/heroku/heroku-buildpack-static

## License

MIT License

## Authors

James Badger <jpbadger@ucalgary.ca>
