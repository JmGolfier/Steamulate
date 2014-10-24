Steamulate
==========

##I. What is it?

Steamulate is like the russian roulette of steam games.
It has been designed to enhance your geeky evening with your friends, with a few simple steps:

* Launch the app
* Enter all of the participants' Steam IDs
* Let the fate choose what you'll be suffering with

Basically, the app chooses a game amongst all the games all players have in common.

##II. It's working with...

* **AngularJS** (Client)
* **NodeJS** (Server)

##III. Installation

Quick and simple:

* Clone the project: `git clone https://github.com/JmGolfier/Steamulate.git`
* Go in the freshly cloned folder: `cd path/to/Steamulate`
* And install what's needed thanks to npm and bower: `npm install && bower install`
* Then it's up to you. You can play with the app using `grunt serve` or simply `grunt build` it and play everywhere!

##TODO

- Finir le serveur (il manque la récupération des noms des jeux)
- Affichage des jeux par joueurs
- Affichage des stats d'un jeu pour un joueur
- Sélection automatique d'un jeu après recoupement des jeux possédés par tout le monde

Pour info, le serveur permet de récupérer :

- Un utilisateur par son steam ID : http://localhost:8080/user/:id
- Les jeux d'un utilisateur par son steam ID : http://localhost:8080/games/:id
- Les stats d'un jeu pour un utilisateur par son steam ID et l'ID du jeu : http://localhost:8080/stats/:id/:game
