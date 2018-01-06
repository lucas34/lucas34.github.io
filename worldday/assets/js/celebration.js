var now = new Date();

var month = now.getMonth();
var day = now.getDate();
var year = now.getFullYear();

function monthToName(m){
	switch (m){
		case 0:
			return 'Janvier';
		case 1:
			return 'Fevrier';
		case 2:
			return 'Mars';
		case 3:
			return 'Avril';
		case 4:
			return 'Mai';
		case 5:
			return 'Juin';
		case 6:
			return 'Juillet';
		case 7:
			return 'Aout';
		case 8:
			return 'Septembre';
		case 9:
			return 'Octobre';
		case 10:
			return 'Novembre';
		case 11:
			return 'Decembre';

	}
}

var monthName = monthToName(month);


$('#date_celebration').html(day + ' ' + monthName + ' ' + year);

var celebration = function(date, name){
	this.date = date;
	this.name = name;
}

var hashJournee = new Array();



hashJournee.push(new celebration(new Date(0, 0, 1),
			"Journée mondiale de la Paix"));
hashJournee.push(new celebration(new Date(0, 0, 4),
			"Journée mondiale du braille"));
hashJournee.push(new celebration(new Date(0, 0, 6),
			"Journée mondiale des orphelins de la guerre"));
hashJournee.push(new celebration(new Date(0, 0, 21),
			"Journée mondiale des Calins"));
hashJournee.push(new celebration(new Date(0, 0, 24),
			"Journée mondiale des communications sociales"));
hashJournee.push(new celebration(new Date(0, 0, 26),
			"Journée mondiale de la douane et sur l'éthique"));
hashJournee.push(new celebration(new Date(0, 0, 27),
		"Journée mondiale de la mémoire de l'Holocause et de la prévention des crimes contre l'humanité"));
hashJournee.push(new celebration(new Date(0, 0, 28),
			"Journée mondiale de la protection des données"));
hashJournee.push(new celebration(new Date(0, 0, 30),
			"Journée mondiale des lépreux"));
hashJournee.push(new celebration(new Date(0, 1, 2),
			"Journée mondiale des Zones Humides"));
hashJournee.push(new celebration(new Date(0, 1, 4),
			"Journée mondiale contre le cancer"));
hashJournee.push(new celebration(new Date(0, 1, 5),
			"Journée mondiale du Nutella"));
hashJournee.push(new celebration(new Date(0, 1, 6),
			"Journée mondiale contre les mutilations génitales"));
hashJournee.push(new celebration(new Date(0, 1, 8),
			"Journée mondiale sans téléphone portable"));
hashJournee.push(new celebration(new Date(0, 1, 11),
			"Journée mondiale des malades"));
hashJournee.push(new celebration(new Date(0, 1, 12),
			"Journée mondiale des enfants soldats"));
hashJournee.push(new celebration(new Date(0, 1, 13),
			"Journée mondiale de la radio"));
hashJournee.push(new celebration(new Date(0, 1, 14),
			"Journée mondiale des amoureux"));
hashJournee.push(new celebration(new Date(0, 1, 15),
			"Journée mondiale contre le cancer chez l'enfant"));
hashJournee.push(new celebration(new Date(0, 1, 16),
			"Journée mondiale du patrimoine canadien"));
hashJournee.push(new celebration(new Date(0, 1, 20),
			"Journée mondiale de la justice sociale"));
hashJournee.push(new celebration(new Date(0, 1, 21),
			"Journée mondiale de la langue maternelle"));
hashJournee.push(new celebration(new Date(0, 1, 22),
			"Journée mondiale de la pensée"));
hashJournee.push(new celebration(new Date(0, 1, 26),
			"Journée mondiale sans Facebook"));
hashJournee.push(new celebration(new Date(0, 1, 27),
			"Journée européenne des maladies rares"));
hashJournee.push(new celebration(new Date(0, 2, 1),
			"Journée mondiale de la protection civile"));
hashJournee.push(new celebration(new Date(0, 2, 2),
			"Journée Mondiale de Prière"));
hashJournee.push(new celebration(new Date(0, 2, 4),
			"Journée mondiale de lutte contre l'exploitation sexuelle"));
hashJournee.push(new celebration(new Date(0, 2, 6),
		"Journée mondiale de la radio et de la télévision en faveur des enfants"));
hashJournee.push(new celebration(new Date(0, 2, 8),
			"Journée mondiale de la Femme"));
hashJournee.push(new celebration(new Date(0, 2, 10),
			"Journée mondiale du rein"));
hashJournee.push(new celebration(new Date(0, 2, 11),
			"Journée mondiale de la plomberie"));
hashJournee.push(new celebration(new Date(0, 2, 12),
			"Journée mondiale contre la censure sur internet"));
hashJournee.push(new celebration(new Date(0, 2, 13),
			"Journée mondiale de prière pour la Birmanie"));
hashJournee.push(new celebration(new Date(0, 2, 14), "Journée de pi"));
hashJournee.push(new celebration(new Date(0, 2, 15),
			"Journée mondiale contre la brutalité policiére"));
hashJournee.push(new celebration(new Date(0, 2, 16),
			"Journée nationale du sommeil"));
hashJournee.push(new celebration(new Date(0, 2, 17),
			"Journée mondiale de la bierre"));
hashJournee.push(new celebration(new Date(0, 2, 19),
			"Journée mondiale de la courtoisie sur la route"));
hashJournee.push(new celebration(new Date(0, 2, 20),
			"Journée mondiale du bonheur"));
hashJournee.push(new celebration(new Date(0, 2, 21),
		"Journée mondiale pour l'élimination de la discrimination raciale"));
hashJournee.push(new celebration(new Date(0, 2, 22),
			"Journée mondiale de l'eau"));
hashJournee.push(new celebration(new Date(0, 2, 23),
			"Journée météorologique mondiale"));
hashJournee.push(new celebration(new Date(0, 2, 24),
			"Journée mondiale de la tuberculose"));
hashJournee.push(new celebration(new Date(0, 2, 25),
			"Journée mondiale du souvenir des victimes de l'esclavage et de la traite transatlantique"));
hashJournee.push(new celebration(new Date(0, 2, 27),
			"Journée mondiale du théatre"));
hashJournee.push(new celebration(new Date(0, 2, 29),
			"Journée mondiale de l'allaitement"));
hashJournee.push(new celebration(new Date(0, 3, 1),
			"Journée mondiale de la blague"));
hashJournee.push(new celebration(new Date(0, 3, 2),
			"Journée mondiale de sensibilisation à l'autisme"));
hashJournee.push(new celebration(new Date(0, 3, 3),
			"Journée mondiale du travail invisible"));
hashJournee.push(new celebration(new Date(0, 3, 4),
			"Journée mondiale pour la sensibilisation aux mines et l'assistance à la lutte antimines"));
hashJournee.push(new celebration(new Date(0, 3, 6),
			"Journée internationale du sport au service du développement et de la paix "));
hashJournee.push(new celebration(new Date(0, 3, 7),
			"Journée mondiale de la santé"));
hashJournee.push(new celebration(new Date(0, 3, 8),
			"Journée mondiale des Roms"));
hashJournee.push(new celebration(new Date(0, 3, 11),
			"Journée mondiale de la maladie de Parkinson"));
hashJournee.push(new celebration(new Date(0, 3, 12),
			"Journée mondiale d'action des dépenses militaires"));
hashJournee.push(new celebration(new Date(0, 3, 15),
			"Journée Mondiale de l'Art"));
hashJournee.push(new celebration(new Date(0, 3, 16),
			"Journée mondiale de la voix"));
hashJournee.push(new celebration(new Date(0, 3, 17),
			"Journée mondiale de l'hémophilie"));
hashJournee.push(new celebration(new Date(0, 3, 18),
			"Journée mondiale des monuments et des sites"));
hashJournee.push(new celebration(new Date(0, 3, 19),
			"Journée de la langue chinoise"));
hashJournee.push(new celebration(new Date(0, 3, 22),
			"Journée mondiale de la Terre"));
hashJournee.push(new celebration(new Date(0, 3, 23),
			"Journée mondiale du livre et du droit d'auteur"));
hashJournee.push(new celebration(new Date(0, 3, 24),
			"Journée mondiale de la libraire indépendante"));
hashJournee.push(new celebration(new Date(0, 3, 25),
			"Journée mondiale du paludisme"));
hashJournee.push(new celebration(new Date(0, 3, 26),
			"Journée mondiale de la propriété intellectuelle"));
hashJournee.push(new celebration(new Date(0, 3, 27),
			"Journée mondiale du Jazz"));
hashJournee.push(new celebration(new Date(0, 3, 28),
			"Journée mondiale des accidents de travail"));
hashJournee.push(new celebration(new Date(0, 3, 29),
			"Journée mondiale de la danse"));
hashJournee.push(new celebration(new Date(0, 3, 30),
			"Journée mondiale des mobilités et de l'accessibilité"));
hashJournee.push(new celebration(new Date(0, 4, 1),
			"Journée mondiale de revendication des travailleurs"));
hashJournee.push(new celebration(new Date(0, 4, 3),
			"Journée mondiale de la liberté de la presse"));
hashJournee.push(new celebration(new Date(0, 4, 4),
			"Journée mondiale des pompiers"));
hashJournee.push(new celebration(new Date(0, 4, 5),
			"Journée mondiale de l'hygiéne des mains"));
hashJournee.push(new celebration(new Date(0, 4, 6),
			"Journée mondiale sans régime"));
hashJournee.push(new celebration(new Date(0, 4, 7),
			"Journée mondiale des orphelins du SIDA"));
hashJournee.push(new celebration(new Date(0, 4, 8),
			"Journées du souvenir et de la réconciliation en l'honneur des morts de la Seconde Guerre mondiale"));
hashJournee.push(new celebration(new Date(0, 4, 9),
			"Journée de l'Europe"));
hashJournee.push(new celebration(new Date(0, 4, 10),
			"Journée mondiale du lupus"));
hashJournee.push(new celebration(new Date(0, 4, 11),
			"Journée des espéces menacées"));
hashJournee.push(new celebration(new Date(0, 4, 12),
			"Journée mondiale de la fibromyalgie"));
hashJournee.push(new celebration(new Date(0, 4, 13),
			"Journée mondiale de l'ingénierie pour l'avenir"));
hashJournee.push(new celebration(new Date(0, 4, 14),
			"Journée Mondiale contre l'hypertension"));
hashJournee.push(new celebration(new Date(0, 4, 15),
			"Journée mondiale des familles"));
hashJournee.push(new celebration(new Date(0, 4, 17),
			"Journée mondiale des télécommunications et de la société de l'information"));
hashJournee.push(new celebration(new Date(0, 4, 18),
			"Journée mondiale des musées"));
hashJournee.push(new celebration(new Date(0, 4, 19),
			"Journée Mondiale de la santé bucco-dentaire"));
hashJournee.push(new celebration(new Date(0, 4, 20),
			"Journée européenne de la Mer"));
hashJournee.push(new celebration(new Date(0, 4, 21),
			"Journée mondiale de la diversité culturelle pour le dialogue et le développement"));
hashJournee.push(new celebration(new Date(0, 4, 22),
			"Journée mondiale de la biodiversité"));
hashJournee.push(new celebration(new Date(0, 4, 23),
			"Journée mondiale pour l’élimination de la fistule obstétricale"));
hashJournee.push(new celebration(new Date(0, 4, 25),
			"Journée mondiale de la serviette"));
hashJournee.push(new celebration(new Date(0, 4, 28),
			"Journée mondiale d'action pour la santé des femmes"));
hashJournee.push(new celebration(new Date(0, 4, 29),
			"Journée mondiale des soldats de la paix"));
hashJournee.push(new celebration(new Date(0, 4, 30),
			"Journée mondiale de la sclérose en plaques"));
hashJournee.push(new celebration(new Date(0, 4, 31),
			"Journée mondiale sans tabac"));
hashJournee.push(new celebration(new Date(0, 5, 1),
			"Journée mondiale des parents"));
hashJournee.push(new celebration(new Date(0, 5, 4),
		"Journée mondiale des enfants victimes innocentes de l'agression"));
hashJournee.push(new celebration(new Date(0, 5, 5),
			"Journée mondiale de l'environnement"));
hashJournee.push(new celebration(new Date(0, 5, 7),
			"Journée mondiale de sécurité routiére aux passages à niveau"));
hashJournee.push(new celebration(new Date(0, 5, 8),
			"Journée mondiale de l'Océan"));
hashJournee.push(new celebration(new Date(0, 5, 11),
			"Journée mondiale du tricot"));
hashJournee.push(new celebration(new Date(0, 5, 12),
			"Journée mondiale contre le travail des enfants"));
hashJournee.push(new celebration(new Date(0, 5, 14),
			"Journée mondiale du donneur de sang"));
hashJournee.push(new celebration(new Date(0, 5, 15),
		"Journée mondiale de sensibilisation à la maltraitance des personnes âgées"));
hashJournee.push(new celebration(new Date(0, 5, 16),
			"Journée de l'enfant africain"));
hashJournee.push(new celebration(new Date(0, 5, 17),
		"Journée mondiale de la lutte contre la désertification et la sécheresse"));
hashJournee.push(new celebration(new Date(0, 5, 18),
			"Journée mondiale de la morue"));
hashJournee.push(new celebration(new Date(0, 5, 19),
			"Journée mondiale de lutte contre la drépanocytose"));
hashJournee.push(new celebration(new Date(0, 5, 20),
			"Journée mondiale des réfugiés"));
hashJournee.push(new celebration(new Date(0, 5, 21),
			"Féte de la musique"));
hashJournee.push(new celebration(new Date(0, 5, 23),
			"Journée mondiale de la fonction publique"));
hashJournee.push(new celebration(new Date(0, 5, 26),
			"Journée mondiale contre la torture"));
hashJournee.push(new celebration(new Date(0, 5, 28),
		"Journée privilégiée pour la Marche des fiertés lesbiennes, gay, bis et trans (Gay Pride)"));
hashJournee.push(new celebration(new Date(0, 6, 7),
			"Journée mondiale de l'amour de soi"));
hashJournee.push(new celebration(new Date(0, 6, 11),
			"Journée mondiale de la population"));
hashJournee.push(new celebration(new Date(0, 6, 18),
			"Journée internationale Nelson Mandela"));
hashJournee.push(new celebration(new Date(0, 6, 20),
			"Journée africaine de l'écologie"));
hashJournee.push(new celebration(new Date(0, 6, 29),
		"Journée mondiale pour la diversité socio-culturelle et pour la lutte contre la discrimination"));
hashJournee.push(new celebration(new Date(0, 6, 30),
			"Journée mondiale de l'amitié"));
hashJournee.push(new celebration(new Date(0, 7, 9),
			"Journée mondiale des populations autochtones"));
hashJournee.push(new celebration(new Date(0, 7, 12),
			"Journée mondiale de la jeunesse"));
hashJournee.push(new celebration(new Date(0, 7, 13),
			"Journée mondiale des gauchers"));
hashJournee.push(new celebration(new Date(0, 7, 19),
			"Journée mondiale de l'aide humanitaire"));
hashJournee.push(new celebration(new Date(0, 7, 23),
		"Journée mondiale du souvenir de la traite négriére et de son abolition"));
hashJournee.push(new celebration(new Date(0, 7, 29),
			"Journée internationale contre les essais nucléaires"));
hashJournee.push(new celebration(new Date(0, 7, 30),
			"Journée mondiale des victimes de disparition forcée"));
hashJournee.push(new celebration(new Date(0, 8, 5),
			"Journée internationale de la charité"));
hashJournee.push(new celebration(new Date(0, 8, 8),
			"Journée mondiale de l'alphabétisation"));
hashJournee.push(new celebration(new Date(0, 8, 10),
			"Journée mondiale de prévention du suicide"));
hashJournee.push(new celebration(new Date(0, 8, 11),
			"Journée mondiale du lait concentré sucré en berlingot"));
hashJournee.push(new celebration(new Date(0, 8, 12),
		"Journée mondiale des Nations Unies pour la coopération Sud-Sud"));
hashJournee.push(new celebration(new Date(0, 8, 15),
			"Journée mondiale de la démocratie"));
hashJournee.push(new celebration(new Date(0, 8, 16),
			"Journée mondiale de la protection de la couche d'ozone"));
hashJournee.push(new celebration(new Date(0, 8, 19),
			"Journée mondiale du parler pirate"));
hashJournee.push(new celebration(new Date(0, 8, 20),
			"Journée mondiale de la liberté"));
hashJournee.push(new celebration(new Date(0, 8, 21),
			"Journée mondiale de la paix"));
hashJournee.push(new celebration(new Date(0, 8, 22),
			"Journée mondiale sans voitures"));
hashJournee.push(new celebration(new Date(0, 8, 23),
			"Journée de la bisexualité"));
hashJournee.push(new celebration(new Date(0, 8, 24),
			"Journée mondiale contre les brevets logiciels"));
hashJournee.push(new celebration(new Date(0, 8, 26),
			"Journée mondiale du coeur"));
hashJournee.push(new celebration(new Date(0, 8, 27),
			"Journée mondiale du tourisme"));
hashJournee.push(new celebration(new Date(0, 8, 28),
			"Journée mondiale de la rage"));
hashJournee.push(new celebration(new Date(0, 8, 30),
			"Journée mondiale de la traduction"));
hashJournee.push(new celebration(new Date(0, 9, 1),
			"Journée mondiale pour les personnes âgées"));
hashJournee.push(new celebration(new Date(0, 9, 2),
			"Journée mondiale de la non-violence"));
hashJournee.push(new celebration(new Date(0, 9, 3),
			"Journée mondiale des ninjas"));
hashJournee.push(new celebration(new Date(0, 9, 4),
			"Journée mondiale des animaux"));
hashJournee.push(new celebration(new Date(0, 9, 5),
			"Journée mondiale des enseignants"));
hashJournee.push(new celebration(new Date(0, 9, 5),
			"Journée mondiale de l'habitat"));
hashJournee.push(new celebration(new Date(0, 9, 9),
			"Journée mondiale de la poste"));
hashJournee.push(new celebration(new Date(0, 9, 10),
			"Journée mondiale de la santé mentale"));
hashJournee.push(new celebration(new Date(0, 9, 11),
			"Journée mondiale du coming-out"));
hashJournee.push(new celebration(new Date(0, 9, 12),
			"Journée mondiale de lutte contre la douleur"));
hashJournee.push(new celebration(new Date(0, 9, 13),
			"Journée internationale de la prévention des catastrophes"));
hashJournee.push(new celebration(new Date(0, 9, 14),
			"Journée mondiale de la normalisation"));
hashJournee.push(new celebration(new Date(0, 9, 15),
			"Journée mondiale du lavage des mains"));
hashJournee.push(new celebration(new Date(0, 9, 16),
			"Journée mondiale de l'alimentation"));
hashJournee.push(new celebration(new Date(0, 9, 17),
			"Journée mondiale pour l'élimination de la pauvreté"));
hashJournee.push(new celebration(new Date(0, 9, 18),
			"Journée mondiale de la ménopause"));
hashJournee.push(new celebration(new Date(0, 9, 20),
			"Journée mondiale de la statistique"));
hashJournee.push(new celebration(new Date(0, 9, 22),
			"Journée mondiale du bégaiement"));
hashJournee.push(new celebration(new Date(0, 9, 24),
			"Journée mondiale d’information sur le développement"));
hashJournee.push(new celebration(new Date(0, 9, 25),
			"Journée européenne de la justice"));
hashJournee.push(new celebration(new Date(0, 9, 27),
			"Journée mondiale du patrimoine audiovisuel"));
hashJournee.push(new celebration(new Date(0, 9, 28),
			"Journée mondiale du cinéma d'animation"));
hashJournee.push(new celebration(new Date(0, 9, 29),
			"Journée mondiale du psoriasis"));
hashJournee.push(new celebration(new Date(0, 10, 2),
			"Journée mondiale pour le droit de mourir dans la dignité"));
hashJournee.push(new celebration(new Date(0, 10, 6),
		"Journée mondiale pour la prévention de l'exploitation de l'environnement en temps de guerre et de conflit armé"));
hashJournee.push(new celebration(new Date(0, 10, 7),
			"Journée mondiale de l'écrivain africain"));
hashJournee.push(new celebration(new Date(0, 10, 8),
			"Journée mondiale de la radiologie"));
hashJournee.push(new celebration(new Date(0, 10, 9),
		"Journée mondiale de mobilisation et la lutte contre le terrorisme et des mouvements terroristes dans le monde"));
hashJournee.push(new celebration(new Date(0, 10, 10),
		"Journée mondiale de la science au service de la paix et du développement"));
hashJournee.push(new celebration(new Date(0, 10, 12),
			"Journée mondiale de la pneumonie"));
hashJournee.push(new celebration(new Date(0, 10, 13),
			"Journée mondiale de la gentillesse"));
hashJournee.push(new celebration(new Date(0, 10, 14),
			"Journée mondiale des diabétiques"));
hashJournee.push(new celebration(new Date(0, 10, 15),
			"Journée mondiale de la philosophie"));
hashJournee.push(new celebration(new Date(0, 10, 16),
			"Journée mondiale de la tolérance"));
hashJournee.push(new celebration(new Date(0, 10, 19),
			"Journée mondiale des toilettes"));
hashJournee.push(new celebration(new Date(0, 10, 20),
			"Journée mondiale des droits de l'enfant"));
hashJournee.push(new celebration(new Date(0, 10, 21),
			"Journée mondiale de la télévision"));
hashJournee.push(new celebration(new Date(0, 10, 25),
		"Journée mondiale pour l'élimination de la violence à l'égard des femmes"));
hashJournee.push(new celebration(new Date(0, 11, 1),
			"Journée mondiale de lutte contre le SIDA"));
hashJournee.push(new celebration(new Date(0, 11, 2),
			"Journée mondiale pour l'abolition de l'esclavage"));
hashJournee.push(new celebration(new Date(0, 11, 3),
			"Journée mondiale des personnes handicapées"));
hashJournee.push(new celebration(new Date(0, 11, 5),
			"Journée mondiale des volontaires"));
hashJournee.push(new celebration(new Date(0, 11, 7),
			"Journée de l'aviation civile mondiale"));
hashJournee.push(new celebration(new Date(0, 11, 9),
			"Journée mondiale contre la corruption"));
hashJournee.push(new celebration(new Date(0, 11, 10),
		"Journée mondiale des droits de l'homme.\n Egalement : Journée mondiale pour les droits des animaux"));
hashJournee.push(new celebration(new Date(0, 11, 11),
			"Journée mondiale de la montagne"));
hashJournee.push(new celebration(new Date(0, 11, 18),
			"Journée mondiale des migrants"));
hashJournee.push(new celebration(new Date(0, 11, 20),
			"Journée mondiale de la solidarité humaine"));
hashJournee.push(new celebration(new Date(0, 11, 21),
			"Journée mondiale de l'orgasme"));


$('#journee-mondiale').html('Aucune journée mondiale.');

(function (){


	for(var i=0; i<hashJournee.length;i++){

		var d = hashJournee[i].date;

		if(d.getMonth() == month && d.getDate() == day){
			$('#journee-mondiale').html(hashJournee[i].name);
			break;
		}
	}
})();



(function (){


	var current = -1;

	for(var i=0; i<hashJournee.length;i++){
		var d = hashJournee[i].date;

		if(d.getMonth() != current){
			current = d.getMonth();
	$('#list-all').append("<h3>"+ monthToName(d.getMonth()) +"</h3>");
	

		}
		var display = d.getDate() + ' ' + monthToName(d.getMonth());
		$('#list-all').append("<p>"+display +' : '+hashJournee[i].name+"</p>");
	
		
	}
})();
