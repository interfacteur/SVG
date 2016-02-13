/* cf. jeu-milieux.js (http://www.langhade.net/ludwik/jeux/jeu-milieux1.html)
et http://www.equatorium.net/e1/ex-contours-libres.html
	février-mars 2015

A retester	*/


if (webkit) {
	$("<div>", { class: "cache" }).appendTo($("body"))
	.load("filtres/filtres.svg");
}