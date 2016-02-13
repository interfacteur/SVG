/* cf. jeu-milieux.js (http://www.langhade.net/ludwik/jeux/jeu-milieux1.html)
	février-mars 2015

A retester	*/


if (webkit) {
	$("<div>", { class: "cache" }).appendTo($("body"))
	.load("filtres/filtres.svg");
}