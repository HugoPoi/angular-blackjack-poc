#Installation environement de dev
## Pré-requis
 * Installer nodeJS (et npm deja compris dedans)
 * voir https://nodejs.org/download/

## Install de l'env de dev
1. `npm install -g bower grunt-cli`
1. `git clone https://github.com/samuelfr/BlackJack.git`
1. `cd BlackJack`
1. `npm install`
1. `bower install`
1. `grunt serve`

#Tutos blackjack

[Regles-du-black-jack](http://www.guide-blackjack.com/Regles-du-black-jack.html)

#After git pull

To check if someone has added a new node or bower module you will need to lauch:

`bower install`
`npm install`

then you can run de server with `grunt serve`
