const a1 = {
    grammar: [
      { question: "Quel est le verbe auxiliaire dans la phrase 'Il est allé' ?", answers: ["avoir", "être", "faire", "aller"], correct: "être" },
      { question: "Quel pronom personnel convient : ___ est mon frère.", answers: ["Il", "Elle", "Ils", "Nous"], correct: "Il" },
      { question: "Choisissez la bonne conjugaison pour 'je (avoir)':", answers: ["a", "as", "ai", "avez"], correct: "ai" },
      { question: "Quel mot complète la phrase : 'Nous ___ à la bibliothèque.' ?", answers: ["va", "allons", "allez", "alle"], correct: "allons" },
      { question: "Choisissez le mot correct pour : 'Tu ___ là-bas.'", answers: ["es", "est", "êtes", "sommes"], correct: "es" },
      { question: "Complétez avec la forme correcte : 'Il ___ deux chiens.'", answers: ["a", "ont", "as", "avez"], correct: "a" },
      { question: "Choisissez le verbe correct : 'Elle ___ à la maison.'", answers: ["vient", "venons", "viens", "venir"], correct: "vient" },
      { question: "Quel est l'adjectif correct pour 'fille' ?", answers: ["grand", "grande", "grands", "grandes"], correct: "grande" },
      { question: "Quelle est la négation de 'Je parle' ?", answers: ["Je ne parle pas", "Je parle pas", "Je n'ai pas parle", "Je parles pas"], correct: "Je ne parle pas" },
      { question: "Complétez la phrase : 'Vous ___ prêts.'", answers: ["est", "êtes", "sont", "sommes"], correct: "êtes" }
    ],
    vocabulary: [
      { question: "Quel mot est synonyme de 'rapide' ?", answers: ["lent", "vite", "lourd", "léger"], correct: "vite" },
      { question: "Quel est l'opposé de 'grand' ?", answers: ["petit", "court", "mince", "étroit"], correct: "petit" },
      { question: "Choisissez la traduction de 'happy':", answers: ["triste", "heureux", "jeune", "beau"], correct: "heureux" },
      { question: "Quel mot décrit une personne qui aime parler ?", answers: ["silencieux", "bavard", "timide", "patient"], correct: "bavard" },
      { question: "Quel est l'équivalent de 'beautiful' ?", answers: ["joli", "beau", "laid", "sombre"], correct: "beau" },
      { question: "Quel mot convient pour dire 'a lot' en français ?", answers: ["peu", "beaucoup", "seulement", "rarement"], correct: "beaucoup" },
      { question: "Quelle est la traduction de 'to run' ?", answers: ["courir", "marcher", "dormir", "sauter"], correct: "courir" },
      { question: "Quel mot signifie 'happy' en français ?", answers: ["content", "fâché", "triste", "effrayé"], correct: "content" },
      { question: "Quel est le contraire de 'jeune' ?", answers: ["vieux", "neuf", "nouveau", "rapide"], correct: "vieux" },
      { question: "Quel mot est synonyme de 'fort' ?", answers: ["faible", "solide", "jeune", "vieux"], correct: "solide" }
    ],
    comprehension: [
      { question: "Dans le texte, qui est le personnage principal ?", answers: ["Marie", "Jean", "Paul", "Sarah"], correct: "Marie" },
      { question: "Quel est le thème principal du passage ?", answers: ["Famille", "Éducation", "Travail", "Santé"], correct: "Éducation" },
      { question: "Quelle est la première action que fait le personnage ?", answers: ["Il mange", "Il dort", "Il lit", "Il marche"], correct: "Il lit" },
      { question: "Dans quel lieu se passe l'histoire ?", answers: ["école", "maison", "bureau", "parc"], correct: "école" },
      { question: "Quel est l'objectif principal du personnage ?", answers: ["Réussir un examen", "Gagner de l'argent", "Rencontrer un ami", "Faire du sport"], correct: "Réussir un examen" },
      { question: "Qui accompagne le personnage dans l'histoire ?", answers: ["Un ami", "Sa famille", "Personne", "Un professeur"], correct: "Un professeur" },
      { question: "Quel problème rencontre le personnage ?", answers: ["Un devoir difficile", "Un manque de temps", "Une maladie", "Une dispute"], correct: "Un devoir difficile" },
      { question: "Pourquoi le personnage se rend-il à cet endroit ?", answers: ["Étudier", "Travailler", "Dormir", "Manger"], correct: "Étudier" },
      { question: "Que pense le personnage de l'école ?", answers: ["Il aime", "Il déteste", "Il est neutre", "Il est indifférent"], correct: "Il aime" },
      { question: "Quelle est la résolution de l'histoire ?", answers: ["Il réussit son examen", "Il échoue", "Il abandonne", "Il part"], correct: "Il réussit son examen" }
    ]
  };

const a2 = {
    grammar: [
      { question: "Complétez : 'Ils ___ souvent en retard.'", answers: ["sont", "est", "êtes", "sommes"], correct: "sont" },
      { question: "Quel pronom relatif complète : 'L'homme ___ parle est mon oncle.'", answers: ["qui", "que", "dont", "où"], correct: "qui" },
      { question: "Choisissez la forme correcte pour : 'Nous ___ au parc tous les jours.'", answers: ["allons", "allez", "vas", "va"], correct: "allons" },
      { question: "Quelle est la conjugaison correcte pour 'il (finir)' ?", answers: ["finit", "finis", "finissons", "fini"], correct: "finit" },
      { question: "Quel est l'auxiliaire correct pour 'Ils ___ venus hier.'", answers: ["ont", "sont", "avoir", "fait"], correct: "sont" },
      { question: "Choisissez le mot correct : 'Elle ___ de la musique chaque jour.'", answers: ["écoute", "écoutent", "écoutes", "écouter"], correct: "écoute" },
      { question: "Complétez : 'Nous ___ du sport le lundi.'", answers: ["faisons", "faites", "faire", "fait"], correct: "faisons" },
      { question: "Quelle est la forme négative de 'Je mange' ?", answers: ["Je ne mange pas", "Je mange pas", "Ne je mange pas", "Je n'ai pas mange"], correct: "Je ne mange pas" },
      { question: "Choisissez : 'Elle ___ heureuse.'", answers: ["est", "es", "êtes", "sont"], correct: "est" },
      { question: "Quel verbe complète : 'Ils ___ un film ce soir.'", answers: ["regardent", "regarde", "regardons", "regardez"], correct: "regardent" }
    ],
    vocabulary: [
      { question: "Quel est l'opposé de 'facile' ?", answers: ["difficile", "léger", "rapide", "moyen"], correct: "difficile" },
      { question: "Quel mot signifie 'often' ?", answers: ["souvent", "rarement", "toujours", "parfois"], correct: "souvent" },
      { question: "Quelle est la traduction de 'flower' ?", answers: ["fleur", "arbre", "herbe", "plante"], correct: "fleur" },
      { question: "Quel mot décrit 'to sleep' en français ?", answers: ["dormir", "manger", "courir", "chanter"], correct: "dormir" },
      { question: "Quel mot est synonyme de 'heureux' ?", answers: ["content", "triste", "en colère", "ennuyé"], correct: "content" },
      { question: "Quel mot signifie 'to learn' ?", answers: ["apprendre", "lire", "écrire", "enseigner"], correct: "apprendre" },
      { question: "Quel est l'opposé de 'lourd' ?", answers: ["léger", "facile", "rapide", "dur"], correct: "léger" },
      { question: "Quelle est la traduction de 'house' ?", answers: ["maison", "école", "bureau", "chambre"], correct: "maison" },
      { question: "Quel est le synonyme de 'calme' ?", answers: ["tranquille", "bruyant", "en colère", "rapide"], correct: "tranquille" },
      { question: "Quelle est la traduction de 'to see' ?", answers: ["voir", "savoir", "écouter", "parler"], correct: "voir" }
    ],
    comprehension: [
      { question: "Dans quel lieu se déroule le texte ?", answers: ["Maison", "École", "Parc", "Hôpital"], correct: "École" },
      { question: "Que veut apprendre le personnage principal ?", answers: ["Le français", "La cuisine", "La peinture", "Le sport"], correct: "Le français" },
      { question: "Qui aide le personnage dans l'histoire ?", answers: ["Un ami", "Un professeur", "Un parent", "Personne"], correct: "Un professeur" },
      { question: "Quel est l'objectif principal du personnage ?", answers: ["Réussir un examen", "Gagner de l'argent", "Faire du sport", "Voyager"], correct: "Réussir un examen" },
      { question: "Où va le personnage après l'école ?", answers: ["À la maison", "Au parc", "Au café", "À la bibliothèque"], correct: "À la maison" },
      { question: "Quel sentiment le personnage éprouve-t-il ?", answers: ["La joie", "La tristesse", "La colère", "La peur"], correct: "La joie" },
      { question: "Qu'apprend le personnage dans ce texte ?", answers: ["Le français", "Les mathématiques", "La musique", "L'histoire"], correct: "Le français" },
      { question: "Pourquoi le personnage est-il motivé ?", answers: ["Pour réussir", "Pour se détendre", "Pour faire une pause", "Pour rencontrer des amis"], correct: "Pour réussir" },
      { question: "Que pense le personnage de son professeur ?", answers: ["Il l'aime bien", "Il ne l'aime pas", "Il est indifférent", "Il est en colère"], correct: "Il l'aime bien" },
      { question: "Quelle est la fin de l'histoire ?", answers: ["Il réussit", "Il échoue", "Il abandonne", "Il part"], correct: "Il réussit" }
    ]
  };
  
  const b1 = {
    grammar: [
      { question: "Complétez : 'Je veux ___ un livre.'", answers: ["acheter", "achetons", "achetés", "achète"], correct: "acheter" },
      { question: "Quel pronom remplace : 'Marie parle à son frère' ?", answers: ["lui", "leur", "les", "le"], correct: "lui" },
      { question: "Quelle conjugaison correcte pour 'nous (venir)' ?", answers: ["venons", "vient", "viennent", "viens"], correct: "venons" },
      { question: "Choisissez le pronom relatif : 'Le livre ___ je lis est intéressant.'", answers: ["que", "qui", "dont", "où"], correct: "que" },
      { question: "Complétez : 'Ils ___ terminé leur travail.'", answers: ["ont", "sont", "avez", "être"], correct: "ont" },
      { question: "Quel est le pronom pour : 'Paul et Sophie vont au cinéma' ?", answers: ["Ils", "Elles", "Il", "Elle"], correct: "Ils" },
      { question: "Complétez : 'Je ___ besoin de dormir.'", answers: ["ai", "as", "avons", "ont"], correct: "ai" },
      { question: "Quelle est la forme correcte : 'Nous ___ ensemble.'", answers: ["travaillez", "travaille", "travaillons", "travailles"], correct: "travaillons" },
      { question: "Choisissez la forme négative : 'Il sait la réponse'", answers: ["Il ne sait pas", "Il sait pas", "Il ne sait", "Il sait ne pas"], correct: "Il ne sait pas" },
      { question: "Complétez : 'Ils ___ contents.'", answers: ["sont", "est", "es", "êtes"], correct: "sont" }
    ],
    vocabulary: [
      { question: "Quel est l'opposé de 'chaud' ?", answers: ["froid", "clair", "rapide", "noir"], correct: "froid" },
      { question: "Quelle est la traduction de 'to drive' ?", answers: ["conduire", "courir", "voler", "nager"], correct: "conduire" },
      { question: "Quel est le synonyme de 'fatigué' ?", answers: ["épuisé", "content", "nerveux", "rapide"], correct: "épuisé" },
      { question: "Quel mot est synonyme de 'difficile' ?", answers: ["compliqué", "simple", "facile", "rapide"], correct: "compliqué" },
      { question: "Quelle est la traduction de 'to understand' ?", answers: ["comprendre", "penser", "voir", "écouter"], correct: "comprendre" },
      { question: "Quel est l'opposé de 'ouvrir' ?", answers: ["fermer", "lancer", "écouter", "regarder"], correct: "fermer" },
      { question: "Quel est le mot pour 'weather' en français ?", answers: ["météo", "jour", "saison", "pluie"], correct: "météo" },
      { question: "Quelle est la traduction de 'beautiful' ?", answers: ["beau", "sale", "mal", "chaud"], correct: "beau" },
      { question: "Quel mot signifie 'to sing' ?", answers: ["chanter", "écouter", "lire", "danser"], correct: "chanter" },
      { question: "Quel est l'opposé de 'rapide' ?", answers: ["lent", "clair", "facile", "beau"], correct: "lent" }
    ],
    comprehension: [
      { question: "Que cherche à faire le personnage ?", answers: ["Trouver un emploi", "Visiter un ami", "Aller à l'école", "Prendre un taxi"], correct: "Trouver un emploi" },
      { question: "Où se trouve le personnage dans l'histoire ?", answers: ["Dans un bureau", "Dans une gare", "Chez lui", "Dans un parc"], correct: "Dans un bureau" },
      { question: "Quel est le problème du personnage ?", answers: ["Il est en retard", "Il a faim", "Il a perdu un document", "Il est fatigué"], correct: "Il est en retard" },
      { question: "Quelle est l'opinion du personnage ?", answers: ["Il aime son travail", "Il déteste son travail", "Il est indifférent", "Il est triste"], correct: "Il aime son travail" },
      { question: "Quel est l'objectif du texte ?", answers: ["Expliquer un projet", "Décrire une journée", "Donner un conseil", "Raconter une histoire"], correct: "Décrire une journée" },
      { question: "Quelle est la motivation du personnage ?", answers: ["Réussir un projet", "Écrire un livre", "Rencontrer un ami", "Faire une pause"], correct: "Réussir un projet" },
      { question: "Où le personnage va-t-il après son travail ?", answers: ["Chez lui", "Au restaurant", "À l'école", "Au bureau"], correct: "Chez lui" },
      { question: "Quel sentiment éprouve le personnage ?", answers: ["La satisfaction", "La colère", "La tristesse", "La peur"], correct: "La satisfaction" },
      { question: "Pourquoi le personnage est-il motivé ?", answers: ["Pour son avenir", "Pour ses amis", "Pour sa famille", "Pour ses loisirs"], correct: "Pour son avenir" },
      { question: "Quel est l'élément principal de l'histoire ?", answers: ["Le travail", "Les vacances", "L'école", "La santé"], correct: "Le travail" }
    ]
  };
  
const b2 = { 
    grammar: [
      { question: "Choisissez la bonne conjugaison : 'Il faut que tu ___ tes devoirs.'", answers: ["fasses", "fait", "fais", "fasse"], correct: "fasses" },
      { question: "Complétez : 'Bien que je ___ malade, je suis venu.'", answers: ["sois", "est", "suis", "soit"], correct: "sois" },
      { question: "Quelle est la forme correcte de : 'Je (savoir)' au subjonctif ?", answers: ["sache", "saches", "sait", "saches"], correct: "sache" },
      { question: "Choisissez le pronom relatif : 'Voici l'endroit ___ j'ai grandi.'", answers: ["où", "dont", "que", "qui"], correct: "où" },
      { question: "Quel mot complète : 'C'est le meilleur film ___ j'aie jamais vu.'", answers: ["que", "dont", "lequel", "qui"], correct: "que" },
      { question: "Choisissez la forme correcte : 'Ils sont partis sans ___ au revoir.'", answers: ["dire", "disant", "dire de", "dire à"], correct: "dire" },
      { question: "Quel pronom convient : 'Les amis avec ___ il voyage sont gentils.'", answers: ["qui", "lesquels", "ceux", "dont"], correct: "lesquels" },
      { question: "Complétez : 'Il était le seul à ___ ce document.'", answers: ["avoir vu", "voyant", "voir", "vu"], correct: "avoir vu" },
      { question: "Quelle est la forme passive de 'Ils ont terminé le travail.' ?", answers: ["Le travail a été terminé", "Le travail était terminé", "Ils ont été terminé", "Le travail est terminé"], correct: "Le travail a été terminé" },
      { question: "Complétez : 'Nous espérons ___ avant la fin de l'année.'", answers: ["partir", "partons", "partions", "parti"], correct: "partir" }
    ],
    vocabulary: [
      { question: "Quel est le synonyme de 'brillant' ?", answers: ["intelligent", "éclairé", "sombre", "ennuyeux"], correct: "intelligent" },
      { question: "Quelle est la traduction de 'to handle' ?", answers: ["gérer", "tenir", "attraper", "perdre"], correct: "gérer" },
      { question: "Quel mot signifie 'to increase' ?", answers: ["augmenter", "réduire", "trouver", "changer"], correct: "augmenter" },
      { question: "Quel est l'opposé de 'calme' ?", answers: ["bruyant", "léger", "rapide", "simple"], correct: "bruyant" },
      { question: "Quel est le synonyme de 'permettre' ?", answers: ["autoriser", "empêcher", "interdire", "éviter"], correct: "autoriser" },
      { question: "Quelle est la traduction de 'success' ?", answers: ["réussite", "échec", "départ", "fin"], correct: "réussite" },
      { question: "Quel mot est proche de 'anxiété' ?", answers: ["angoisse", "joie", "calme", "paix"], correct: "angoisse" },
      { question: "Quel est l'opposé de 'courant' ?", answers: ["rare", "fréquent", "habituel", "normal"], correct: "rare" },
      { question: "Quelle est la traduction de 'to challenge' ?", answers: ["défier", "réussir", "respecter", "éviter"], correct: "défier" },
      { question: "Quel est le synonyme de 'achever' ?", answers: ["finir", "commencer", "interrompre", "répéter"], correct: "finir" }
    ],
    comprehension: [
      { question: "Quel est l'objectif principal du texte ?", answers: ["Informer", "Divertir", "Dénoncer", "Promouvoir"], correct: "Informer" },
      { question: "Quel sentiment éprouve le narrateur dans ce passage ?", answers: ["Nostalgie", "Colère", "Excitation", "Indifférence"], correct: "Nostalgie" },
      { question: "Que fait le personnage principal pour résoudre son problème ?", answers: ["Il demande de l'aide", "Il abandonne", "Il cherche une solution", "Il ignore le problème"], correct: "Il cherche une solution" },
      { question: "Quel est le thème central de l'histoire ?", answers: ["Amitié", "Travail", "Éducation", "Voyage"], correct: "Amitié" },
      { question: "Que découvre le personnage à la fin ?", answers: ["Une vérité", "Une erreur", "Un trésor", "Un ami"], correct: "Une vérité" },
      { question: "Quel est le ton de l'auteur ?", answers: ["Sérieux", "Ludique", "Désinvolte", "Agressif"], correct: "Sérieux" },
      { question: "Quelle est la motivation du personnage ?", answers: ["Réaliser un rêve", "Aider quelqu'un", "Fuir un danger", "Prendre des vacances"], correct: "Réaliser un rêve" },
      { question: "Quel problème le personnage rencontre-t-il ?", answers: ["Un manque d'argent", "Une perte d'emploi", "Un conflit familial", "Un accident"], correct: "Un manque d'argent" },
      { question: "Que cherche à transmettre l'auteur ?", answers: ["Un message de persévérance", "Une leçon de morale", "Une critique sociale", "Un avertissement"], correct: "Un message de persévérance" },
      { question: "Comment réagit le personnage face aux difficultés ?", answers: ["Il persévère", "Il abandonne", "Il se décourage", "Il demande de l'aide"], correct: "Il persévère" }
    ]
  };

  const c1 = {
    grammar: [
      { question: "Quelle est la bonne conjugaison du verbe dans cette phrase : 'Si j'avais su, je (venir) plus tôt.'", answers: ["viendrais", "viens", "serais venu", "viendrais"], correct: "serais venu" },
      { question: "Complétez la phrase : 'Il (être) parti avant que je n'arrive.'", answers: ["était", "soit", "fût", "sera"], correct: "fût" },
      { question: "Quel est le bon ordre des mots dans cette phrase : 'Je ne savais pas que (quand) il arriverait.'", answers: ["il", "quand", "arriverait", "Je ne savais pas"], correct: "quand il arriverait" },
      { question: "Complétez la phrase : 'Bien que ce soit difficile, il (continuer) à avancer.'", answers: ["continue", "continuera", "continuait", "continuant"], correct: "continue" },
      { question: "Choisissez le bon usage du subjonctif : 'Il est nécessaire que nous (partir) avant midi.'", answers: ["partons", "partirons", "partions", "partent"], correct: "partions" },
      { question: "Quel est le bon usage de l'infinitif : 'Elle préfère (lire) que (regarder) la télévision.'", answers: ["lire, regarder", "lire, regarder", "lire, regarder", "lire, regarder"], correct: "lire, regarder" },
      { question: "Complétez la phrase : 'Je ne sais pas si tu (savoir) la réponse.'", answers: ["sais", "sait", "sauras", "savais"], correct: "sais" },
      { question: "Quel est le bon choix pour cette phrase : 'Je pense qu'il (comprendre) ce que tu veux dire.'", answers: ["comprend", "comprendra", "comprenne", "comprenait"], correct: "comprend" },
      { question: "Complétez cette phrase : 'Si nous (avoir) plus de temps, nous aurions pu terminer.'", answers: ["avons", "avions", "aurions", "avions"], correct: "avions" }
    ],
    vocabulary: [
      { question: "Quel est le synonyme de 'discrète' ?", answers: ["réservée", "bruyante", "audacieuse", "brillante"], correct: "réservée" },
      { question: "Quel est le contraire de 'vif' ?", answers: ["lente", "dormant", "éteint", "faible"], correct: "lente" },
      { question: "Quel mot est le plus proche de 'obscur' ?", answers: ["inconnu", "lumineux", "clair", "visible"], correct: "inconnu" },
      { question: "Quel est le synonyme de 'distinguer' ?", answers: ["reconnaître", "perdre", "troubler", "ignorer"], correct: "reconnaître" },
      { question: "Quelle est la traduction de 'to achieve' ?", answers: ["réaliser", "annuler", "reposer", "suspendre"], correct: "réaliser" },
      { question: "Quel est le contraire de 'généreux' ?", answers: ["égoïste", "charmant", "altruiste", "prudent"], correct: "égoïste" },
      { question: "Quel est le mot opposé à 'clair' ?", answers: ["flou", "net", "vif", "simple"], correct: "flou" },
      { question: "Quelle est la traduction de 'complex' ?", answers: ["complexe", "simple", "facile", "léger"], correct: "complexe" },
      { question: "Quel mot est proche de 'évoluer' ?", answers: ["avancer", "stagner", "dormir", "baisser"], correct: "avancer" }
    ],
    comprehension: [
      { question: "Que suggère l'auteur dans le passage ?", answers: ["Une analyse critique", "Une réflexion sur le passé", "Une proposition d'action", "Une analyse sociologique"], correct: "Une réflexion sur le passé" },
      { question: "Quel est le message central du texte ?", answers: ["L'importance de la résilience", "La critique des injustices sociales", "La nécessité d'une action rapide", "Le besoin de réconciliation"], correct: "L'importance de la résilience" },
      { question: "Quel est le point de vue de l'auteur sur les événements décrits ?", answers: ["Il est objectif", "Il est émotionnel", "Il est subjectif", "Il est ironique"], correct: "Il est émotionnel" },
      { question: "Qu'est-ce qui motive le personnage à agir ?", answers: ["Le désir de changer", "L'influence des autres", "Une nécessité urgente", "La volonté d'obtenir quelque chose"], correct: "Le désir de changer" },
      { question: "Comment le personnage réagit-il face à la situation ?", answers: ["Il prend une décision rapide", "Il attend l'aide de quelqu'un", "Il doute de ses choix", "Il s'éloigne de la situation"], correct: "Il prend une décision rapide" },
      { question: "Quel est l'enjeu principal de l'histoire ?", answers: ["Le changement social", "La quête de l'identité", "La survie face à l'adversité", "La découverte de soi"], correct: "La survie face à l'adversité" },
      { question: "Quel rôle joue l'environnement dans le récit ?", answers: ["Il accentue le dilemme du personnage", "Il crée un contraste avec les actions", "Il devient un élément de réflexion", "Il est secondaire"], correct: "Il accentue le dilemme du personnage" },
      { question: "Pourquoi le personnage semble-t-il hésiter ?", answers: ["Il a des doutes sur ses capacités", "Il craint les conséquences de ses choix", "Il manque de soutien", "Il veut changer de direction"], correct: "Il craint les conséquences de ses choix" },
      { question: "Quel est l'objectif final du personnage ?", answers: ["Trouver la paix intérieure", "Réaliser un objectif personnel", "Gagner le respect des autres", "S'échapper de la situation"], correct: "Réaliser un objectif personnel" },
      { question: "Comment l'auteur présente-t-il les relations humaines ?", answers: ["Comme une source de soutien", "Comme un obstacle majeur", "Comme une distraction", "Comme un élément secondaire"], correct: "Comme une source de soutien" }
    ]
  };

  const c2 = {
    grammar: [
      { question: "Complétez cette phrase : 'Je doute qu'il (comprendre) la portée de ses actes.'", answers: ["comprenne", "comprend", "comprendra", "comprenant"], correct: "comprenne" },
      { question: "Quelle est la bonne construction pour cette phrase : 'Bien qu'il (avoir) les qualifications nécessaires, il a échoué.'", answers: ["ait", "a", "avait", "eût"], correct: "ait" },
      { question: "Complétez la phrase avec le bon choix : 'Si j'avais su, je (faire) autrement.'", answers: ["aurais fait", "ferai", "fais", "aura fait"], correct: "aurais fait" },
      { question: "Quel est le bon usage du conditionnel dans cette phrase : 'Elle aurait réussi si elle (être) plus motivée.'", answers: ["avait été", "soit", "était", "eût été"], correct: "avait été" },
      { question: "Complétez la phrase : 'Je ne crois pas qu'il (être) capable de terminer ce projet.'", answers: ["soit", "est", "sera", "a été"], correct: "soit" },
      { question: "Complétez cette phrase : 'J'aurais dû m'en douter, mais je n'y (penser) pas.'", answers: ["ai pensé", "pensais", "pense", "penserai"], correct: "pensais" },
      { question: "Complétez la phrase suivante : 'Même si j'avais eu le temps, je ne (vouloir) pas le faire.'", answers: ["aurais voulu", "voudrais", "veux", "voulais"], correct: "aurais voulu" },
      { question: "Quelle est la construction correcte pour cette phrase : 'Nous avons l'impression qu'il (ne pas savoir) comment réagir.'", answers: ["ne sait pas", "ne savait pas", "ne sache pas", "ne sait pas"], correct: "ne sait pas" },
      { question: "Complétez la phrase suivante : 'Il est impératif que nous (finir) ce travail avant la fin de la semaine.'", answers: ["finissions", "finit", "finira", "finirons"], correct: "finissions" }
    ],
    vocabulary: [
      { question: "Quel est le synonyme de 'altruiste' ?", answers: ["généreux", "égoïste", "distingué", "insensible"], correct: "généreux" },
      { question: "Quel est le contraire de 'abondant' ?", answers: ["rare", "limité", "opulent", "plein"], correct: "rare" },
      { question: "Quel mot est synonyme de 'complexe' ?", answers: ["intriqué", "simple", "clair", "linéaire"], correct: "intriqué" },
      { question: "Quel est le synonyme de 'insensé' ?", answers: ["absurde", "raisonnable", "logique", "pragmatique"], correct: "absurde" },
      { question: "Quel mot est le plus proche de 'pragmatique' ?", answers: ["réaliste", "idéalisé", "philosophique", "utopique"], correct: "réaliste" },
      { question: "Quel est le contraire de 'vérifiable' ?", answers: ["incontestable", "douteux", "prouvable", "évident"], correct: "douteux" },
      { question: "Quel est le synonyme de 'résilient' ?", answers: ["endurant", "fragile", "incapable", "vulnérable"], correct: "endurant" },
      { question: "Quel est le mot opposé à 'légitime' ?", answers: ["illégitime", "justifié", "autorisé", "reconnu"], correct: "illégitime" },
      { question: "Quel est le synonyme de 'unanimité' ?", answers: ["consensus", "désaccord", "divergence", "désunion"], correct: "consensus" }
    ],
    comprehension: [
      { question: "Quel est l'objectif principal de l'article ?", answers: ["Analyser les causes de la crise économique", "Présenter une opinion personnelle", "Démontrer les effets des nouvelles technologies", "Discuter des conséquences sociales"], correct: "Analyser les causes de la crise économique" },
      { question: "Quel ton l'auteur adopte-t-il dans ce texte ?", answers: ["Critique", "Neutre", "Optimiste", "Ironique"], correct: "Critique" },
      { question: "Quelles sont les conclusions principales tirées par l'auteur ?", answers: ["Le besoin urgent de réformes", "Le progrès social rapide", "Le retour à un passé idéal", "L'inévitabilité des changements futurs"], correct: "Le besoin urgent de réformes" },
      { question: "Quel est le point de vue de l'auteur sur les nouvelles générations ?", answers: ["Elles sont optimistes mais ignorantes", "Elles sont responsables des problèmes actuels", "Elles sont porteuses de changements positifs", "Elles sont indifférentes aux enjeux sociétaux"], correct: "Elles sont porteuses de changements positifs" },
      { question: "Que déplore l'auteur dans son texte ?", answers: ["L'inefficacité des politiques actuelles", "Le manque d'initiatives individuelles", "Le retard technologique", "La division de la société"], correct: "L'inefficacité des politiques actuelles" },
      { question: "Pourquoi l'auteur évoque-t-il les difficultés rencontrées par certaines entreprises ?", answers: ["Pour illustrer les défis économiques", "Pour critiquer les erreurs de gestion", "Pour montrer l'importance de l'innovation", "Pour encourager un changement radical"], correct: "Pour illustrer les défis économiques" },
      { question: "Que préconise l'auteur à la fin de l'article ?", answers: ["L'adoption immédiate de nouvelles technologies", "Un retour aux méthodes traditionnelles", "L'intégration de nouvelles approches sociales", "Un renforcement des réglementations gouvernementales"], correct: "L'intégration de nouvelles approches sociales" },
      { question: "Quel est l'argument principal utilisé pour soutenir l'idée de changements nécessaires ?", answers: ["Les erreurs historiques", "Les évolutions démographiques", "Les difficultés économiques", "Les inégalités sociales"], correct: "Les évolutions démographiques" },
      { question: "Quel est le but de la conclusion ?", answers: ["Mettre en lumière les opportunités futures", "Souligner l'urgence d'agir", "Critiquer les actions passées", "Fournir des recommandations concrètes"], correct: "Souligner l'urgence d'agir" },
      { question: "Comment l'auteur caractérise-t-il les résultats des politiques actuelles ?", answers: ["Inégaux et inefficaces", "Réussis mais imparfaits", "Satisfaisants mais insuffisants", "Positifs et stables"], correct: "Inégaux et inefficaces" }
    ]
  };
  
  
// const levels = { a1, a2, b1, b2, c1, c2};

// export default levels;



//***********************************to import :

// import levels from './levels.js'; 

// console.log(levels.a1);  
// console.log(levels.b2);  