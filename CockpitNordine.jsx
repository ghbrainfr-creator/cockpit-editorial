import { useState, useRef } from "react";

/* ═══════════════════════════════════════════
   CHARTE GRAPHIQUE — Système 1 Immo
   ═══════════════════════════════════════════ */
const C = {
  bg: "#15161E", bgAlt: "#181A25", card: "#1E2029", cardHover: "#252735",
  primary: "#72AAEE", primaryDark: "#4D8BD5", orange: "#E4763F",
  text: "#F0F0F0", muted: "#ABABAB", mutedDark: "#6B7280",
  border: "#2F3241", success: "#4ADE80", danger: "#EF4444", warning: "#D4A035",
};

/* ═══════════════════════════════════════════
   DATA : 12 POSTS + 4 NEWSLETTERS COMPLETS
   ═══════════════════════════════════════════ */
const POSTS = [
  {
    id: 1, semaine: 1, jour: "Mardi 25 mars",
    pilier: "Le Cerveau du Client", type: "Contrarian", hookCat: "Rupture cognitive",
    objectif: "Autorité", format: "Infographie sketchnote",
    texte: `Ton client a décidé d'acheter avant même de franchir la porte.

Et tu continues à lui réciter la fiche technique.

Je sais. C'est dur à entendre.

Mais c'est ce que dit la recherche en neurosciences depuis 20 ans.

La décision d'achat est émotionnelle.
Le cerveau ne stocke pas 15 caractéristiques techniques.
Il retient UN moment. UNE émotion. UNE projection.

Et c'est là que 90% des agents se plantent.

Ils arrivent en visite avec leur fiche.
Surface. Étage. DPE. Charges. Orientation.
Ils récitent.

Le client hoche la tête.
Et il ne rappelle jamais.

Pourquoi ?

Parce que tu n'as rien ancré dans sa mémoire émotionnelle.

Sur mes 53 ventes en 2023, j'ai repéré un pattern.
Les biens vendus au-dessus de l'estimation avaient tous un point commun :

La visite était construite autour d'un seul moment de projection.
Pas autour de 15 données techniques.

Un seul moment où le client se voit vivre là.

Le reste ? Du bruit.

La semaine prochaine dans Insight Immo, je décortique le mécanisme exact.
Tu veux recevoir la newsletter ?

Commente "INSIGHT" et je t'envoie le lien.

#immobilier #neurosciences #vente`,
    promptVisuel: `Infographie sketchnote style moderne sur fond sombre #15161E. Titre "Le cerveau d\u00e9cide AVANT la visite" en typo bold #F0F0F0. 3 blocs dans des cartes #1E2029 bord\u00e9es #2F3241 : 1) Cerveau avec fl\u00e8che "\u00c9motion \u2192 D\u00e9cision" accent #72AAEE 2) Fiche technique barr\u00e9e avec croix #E4763F 3) Moment de projection (famille dans un salon). Palette : #72AAEE bleu, #E4763F orange, texte #F0F0F0, muted #ABABAB, fond #15161E. Police Inter. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630. Mention "cr\u00e9\u00e9 par Nordine Mouaouia \u00b7 SYSTEME1-IMMO\u2122" en bas #ABABAB.`,
    visuelType: "infographie",
    visuelData: { titre: "Le cerveau décide\nAVANT la visite", stats: ["90% des agents récitent la fiche", "1 seul moment de projection suffit", "53 ventes construites sur ce principe"], conclusion: "Émotion → Projection → Décision" },
  },
  {
    id: 2, semaine: 1, jour: "Jeudi 27 mars",
    pilier: "Le Terrain Parle", type: "Framework", hookCat: "Preuve & résultats",
    objectif: "Autorité + Éducation", format: "Carrousel PDF (5 slides)",
    texte: `Un bien invendu depuis 3 ans.

Vendu en moins de 3 mois.

Même bien. Même marché. Même ville.

Ce qui a changé ?
Pas le prix.
Pas les photos.
Pas l'annonce.

La méthode de vente.

Quand j'ai repris ce dossier, la fiche technique était impeccable.
Le prix était cohérent.
Les agents avant moi avaient tout bien fait.

Sur le papier.

Mais personne ne s'était posé la vraie question :
qu'est-ce que le visiteur RESSENT quand il entre ?

J'ai changé une seule chose.

J'ai construit la visite autour de 3 éléments :

→ La tension — identifier la peur dominante de l'acheteur AVANT la visite
→ La projection — créer un moment où il se voit vivre là (pas où il écoute des chiffres)
→ La preuve — répondre à ses objections avant qu'il les formule

Tension. Projection. Preuve.

C'est tout.

Résultat : 3 offres en 2 mois. Bien vendu au prix.

Le problème n'est jamais le bien.
C'est comment tu le présentes au cerveau de ton client.

Tu as un bien qui traîne en ce moment ?
Dis-moi depuis combien de temps en commentaire.

#immobilier #vente #méthode`,
    promptVisuel: `Carrousel PDF 5 slides. Slide 1 : "Un bien invendu 3 ans. Vendu en 3 mois." fond #15161E, typo #F0F0F0. Slide 2 : "Ce qui n'a PAS changé" — prix, photos, annonce barrés. Slide 3 : TENSION. Slide 4 : PROJECTION. Slide 5 : PREUVE + résultat. Palette #72AAEE + #E4763F. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "carrousel",
    visuelData: {
      slides: [
        { titre: "Invendu 3 ans.\nVendu en 3 mois.", sousTitre: "La méthode." },
        { titre: "TENSION", desc: "Identifier la peur dominante\nde l'acheteur" },
        { titre: "PROJECTION", desc: "Créer le moment où\nil se voit vivre là" },
        { titre: "PREUVE", desc: "Répondre aux objections\navant qu'il les formule" },
        { titre: "Résultat", desc: "3 offres en 2 mois\nBien vendu au prix" },
      ],
    },
  },
  {
    id: 3, semaine: 1, jour: "Samedi 29 mars",
    pilier: "L'Humain Derrière les Chiffres", type: "Storytelling", hookCat: "Narration",
    objectif: "Connexion émotionnelle", format: "Photo authentique",
    texte: `Mon client m'a appelé un mardi.

"Nordine, grâce à cette vente, je pars en retraite l'année prochaine."

Silence.

J'ai rien dit pendant 10 secondes.
Parce que c'est ça, ce métier.

Ce client avait un bien estimé à 500K par trois confrères.
500K.

Moi, j'ai vu autre chose.
Pas un bien à vendre. Une opération à construire.

Vente à la découpe. Valorisation stratégique.
Le résultat ? Plus du double.

Ce client part en retraite.
Un autre a reconstruit cash après un divorce.
Un autre a aidé ses deux enfants à acheter leur premier appart.

+35% de rentabilité en moyenne sur ces opérations.

On peut parler de chiffres toute la journée.
Mais derrière chaque chiffre, il y a quelqu'un dont la vie change.

C'est pour ça que je me bats pour que ce métier soit mieux fait.
Parce que quand c'est bien fait, ça change des vies.
Pas juste des comptes en banque.

Quel est le moment qui t'a rendu le plus fier dans ce métier ?

Raconte-moi en commentaire. Je lis tout.

#immobilier #terrain #impact`,
    promptVisuel: `Photo portrait professionnel sur fond sombre #15161E ou ext\u00e9rieur urbain nuit. Homme debout face cam\u00e9ra, lumi\u00e8re directionnelle chaude, expression calme et d\u00e9termin\u00e9e. Terrain, pas bureau. L\u00e9g\u00e8re lueur #72AAEE en contour. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630. Mention "Nordine Mouaouia \u00b7 SYSTEME1-IMMO\u2122" en bas #ABABAB.`,
    visuelType: "citation",
    visuelData: { citation: "+35% de rentabilité.\nDerrière chaque chiffre,\nune vie qui change.", auteur: "Nordine Mouaouia" },
  },
  {
    id: 4, semaine: 2, jour: "Mardi 1er avril",
    pilier: "Le Métier Mérite Mieux", type: "Contrarian", hookCat: "Rupture cognitive",
    objectif: "Positionnement", format: "Texte sur fond uni",
    texte: `En 2025, des sociétés m'ont consulté pour construire des outils de prospection immo.

Leur point commun ?
Aucune n'avait jamais vendu un bien.

Pas un seul mandat.
Pas une seule négociation.
Pas un seul regard-client en visite.

Ils avaient des devs.
Des slides.
Des projections de croissance.

Mais zéro terrain.

Et tu sais ce qui s'est passé ?

Ils sont passés.
Et ils sont repartis.
Sans laisser d'empreinte.

Parce qu'on ne construit pas pour un métier qu'on ne connaît pas.

On n'automatise pas la confiance.
On ne code pas l'intuition terrain.
On ne met pas en algorithme 22 ans de lecture émotionnelle des clients.

50% de part de marché.
5 ans. Seul.

Ce n'est pas un outil qui fait ça.
C'est la compréhension du cerveau de tes clients.
C'est le terrain.

Tu as testé un outil de prospection qui t'a vraiment changé la donne ?

Je suis curieux. Dis-moi lequel en commentaire.

#immobilier #prospection #terrain`,
    promptVisuel: `Image minimaliste : fond #15161E, texte blanc centré typo bold Inter : "Ils n'ont jamais vendu un bien. Ils veulent te dire comment prospecter." Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "citation",
    visuelData: { citation: "Ils n'ont jamais\nvendu un bien.\nIls veulent te dire\ncomment prospecter.", auteur: "Nordine Mouaouia" },
  },
  {
    id: 5, semaine: 2, jour: "Jeudi 3 avril",
    pilier: "Le Cerveau du Client", type: "Liste/Ressource", hookCat: "Curiosité & gap cognitif",
    objectif: "Éducation + Sauvegarde", format: "Carrousel PDF (7 slides)",
    texte: `5 biais cognitifs qui te font perdre des mandats.

Le 4ème t'a déjà coûté de l'argent cette année.

Biais #1 — L'ancrage

Le premier prix que ton client entend devient sa référence.
Si c'est un prix Seloger mal calibré, t'es foutu.

Ce que je fais : je pose MON ancre en premier.
Toujours.

Biais #2 — Le FOMO (peur de rater)

Ton client hésite ?
Il attend. Il compare. Il procrastine.

Ce que je fais : "Ce bien a 3 visites cette semaine. Je vous appelle jeudi pour votre retour."
Pas de pression. Une réalité.

Biais #3 — L'aversion à la perte

Les gens détestent perdre plus qu'ils n'aiment gagner.
Ton client ne veut pas "faire une bonne affaire".
Il veut ne pas faire une MAUVAISE affaire.

Ce que je fais : je cadre la conversation autour de ce qu'il risque de perdre. Pas de ce qu'il peut gagner.

Biais #4 — L'effet de halo

Ton client te juge dans les 8 premières secondes.
Pas sur ta compétence.
Sur ton apparence, ta voix, ta poignée de main.

Ce que je fais : les 8 premières secondes sont scriptées.
Toujours.

Biais #5 — Le biais de confirmation

Ton client cherche des raisons de confirmer ce qu'il croit déjà.
Si tu le contredis trop vite, il se ferme.

Ce que je fais : je valide d'abord. Je redirige ensuite.
"Vous avez raison sur ce point. Et en même temps, voici ce que les données montrent..."

Ces 5 biais, je les utilise tous les jours.
Pas en théorie. Sur le terrain.

53 ventes solo. 50% de PDM. 5 ans.
Les sciences comportementales, ça marche.

Lequel de ces 5 biais tu reconnais le plus chez tes clients ?

Dis-moi le numéro en commentaire.

#immobilier #psychologie #vente`,
    promptVisuel: `Carrousel 7 slides. Couverture : "5 biais cognitifs" fond #72AAEE. Slides 2-6 : 1 biais/slide avec "Ce que je fais" en highlight #E4763F. Slide 7 : résultat + CTA. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "carrousel",
    visuelData: {
      slides: [
        { titre: "5 Biais Cognitifs", sousTitre: "qui te font perdre\ndes mandats" },
        { titre: "#1 Ancrage", desc: "Le 1er prix entendu\n= la référence" },
        { titre: "#2 FOMO", desc: "La peur de rater\naccélère la décision" },
        { titre: "#3 Aversion perte", desc: "Perdre fait 2,5× plus mal\nque gagner fait plaisir" },
        { titre: "#4 Effet de halo", desc: "8 secondes\npour être jugé" },
        { titre: "#5 Confirmation", desc: "Valider d'abord\nRediriger ensuite" },
        { titre: "53 ventes. 50% PDM.", sousTitre: "Ça marche." },
      ],
    },
  },
  {
    id: 6, semaine: 2, jour: "Samedi 5 avril",
    pilier: "Le Terrain Parle", type: "Transformation", hookCat: "Preuve & résultats",
    objectif: "Autorité", format: "Image chiffre-clé",
    texte: `90% des agents font moins de 15 ventes par an.

J'en fais 53. Seul.

Sachant que ça, ce n'est même pas le chiffre qui m'impressionne.

Ce qui m'impressionne, c'est le 50%.

50% de part de marché.
Dans ma ville.
Depuis 5 ans.
Sans équipe.

Et non, ce n'est pas du talent.
Le talent, c'est ce qu'on dit quand on ne veut pas comprendre le système derrière.

Voilà ce qui fait la différence :

→ Je ne vends pas des biens. Je lis des cerveaux.
Chaque client a une peur dominante. Je l'identifie AVANT la première visite.

→ Je ne fais pas de visites. Je construis des expériences.
Chaque visite est un parcours émotionnel. Pas un défilé de pièces.

→ Je ne négocie pas. Je cadre.
Le premier chiffre que j'annonce n'est jamais un hasard. C'est un ancrage stratégique.

→ Je ne relance pas. Je crée l'urgence.
Pas de la fausse urgence. De la vraie. Avec des faits.

22 ans de terrain.
500 collaborateurs formés.
5 certifications en 2 ans.

Et je continue d'apprendre.
Parce que le jour où tu crois que tu sais tout, tu commences à reculer.

Si tu fais moins de 20 ventes par an et que tu veux comprendre ce qui bloque :

Commente "MÉTHODE".
Je t'envoie un diagnostic en DM.

#immobilier #performance #méthode`,
    promptVisuel: `Fond #15161E, chiffre "53" très grand typo bold #F0F0F0, sous-titre "ventes solo en 2023", en dessous "50% de PDM. 5 ans. Seul." Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "chiffre",
    visuelData: { chiffre: "53", sousTitre: "ventes solo en 2023", detail: "50% de part de marché · 5 ans · Seul" },
  },
  {
    id: 7, semaine: 3, jour: "Mardi 8 avril",
    pilier: "Le Cerveau du Client", type: "Framework", hookCat: "Autorité & expertise",
    objectif: "Propriété intellectuelle", format: "Infographie sketchnote",
    texte: `J'ai formé 500 collaborateurs en 22 ans.

Les meilleurs n'étaient pas les plus malins.
C'étaient ceux qui avaient compris un truc que les autres ignorent.

Le Peak-End.

C'est un principe de neurosciences.
Découvert par Kahneman (le même qui a eu le Nobel).

En résumé : ton client ne se souvient pas de TOUTE la visite.

Il se souvient de deux moments.
Le pic émotionnel.
Et la fin.

C'est tout.

Le reste ? Son cerveau l'efface.

Tu peux faire une visite de 45 minutes impeccable.
Si le pic et la fin sont moyens, ton client repart avec un souvenir moyen.

Et un souvenir moyen, ça ne signe pas.

Comment j'utilise ça :

→ Je choisis LE moment fort de la visite avant d'y aller.
La terrasse avec la vue. Le salon avec la lumière du matin.
Et je construis toute la visite pour que ce moment arrive au bon timing.

→ Je scripte la fin.
Ma dernière phrase n'est jamais "Vous avez des questions ?"
C'est une phrase de projection.
"Imaginez votre premier café ici, un dimanche matin."

Le pic + la fin = le souvenir.
Le souvenir = la décision.

Sur mes 53 ventes de 2023, les biens vendus au-dessus de l'estimation avaient tous des visites construites sur ce principe. Un pic choisi. Une fin scriptée.

La prochaine newsletter Insight Immo détaille le protocole complet.

Commente "PEAK" pour recevoir le lien.

#immobilier #neurosciences #visite`,
    promptVisuel: `Infographie "PEAK-END : Les 2 seuls moments" sur fond #15161E. Courbe d'exp\u00e9rience en #72AAEE avec pic (accent #E4763F) + fin (accent #E4763F). Reste de la courbe en #2F3241. Cartes #1E2029 pour les explications. Typo Inter bold #F0F0F0. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630. Mention "Nordine Mouaouia \u00b7 SYSTEME1-IMMO\u2122" en bas #ABABAB.`,
    visuelType: "infographie",
    visuelData: { titre: "PEAK-END\nLes 2 seuls moments\nqui comptent", stats: ["Pic = moment de projection choisi", "Fin = phrase de clôture scriptée", "Le reste ? Le cerveau l'efface."], conclusion: "Pic + Fin = Souvenir = Décision" },
  },
  {
    id: 8, semaine: 3, jour: "Jeudi 10 avril",
    pilier: "Le Métier Mérite Mieux", type: "Contrarian", hookCat: "Identification & miroir",
    objectif: "Engagement + Convictions", format: "Texte sur fond uni",
    texte: `Un agent immobilier qui n'investit pas dans sa formation en 2026,

c'est un médecin qui refuse de lire les nouvelles études.

Irresponsable.

Je sais que c'est cash.
Mais je ne suis pas là pour caresser dans le sens du poil.

Le métier a changé.

Les clients sont plus informés.
Les sciences comportementales ont décodé les mécanismes de décision.
Les méthodes de visite, de négociation, de prospection ont évolué.

Et 80% des agents travaillent encore comme en 2010.

Mêmes scripts.
Mêmes relances.
Mêmes visites.

Je ne juge pas.
J'ai 22 ans de terrain.
Et en 2024-2025, j'ai passé plus de certifications qu'en 20 ans.

Sciences comportementales avec le Cabinet Système 1.
Peak End Selling.
Consultant Insight.
Copywriting.
Et d'autres.

Pourquoi ?

Parce que le métier que j'ai appris n'existe plus.
Et celui qui refuse de l'admettre, il le paiera.

Pas demain. Aujourd'hui.

Quand son client partira chez l'agent qui comprend comment fonctionne son cerveau.
Quand ses mandats partiront chez celui qui sait cadrer une estimation.
Quand ses leads iront chez celui qui sait créer de l'urgence sans mentir.

La formation, ce n'est pas un luxe.
C'est un devoir.

Quelle est la dernière formation que tu as suivie ?

Vraie question. Dis-moi en commentaire.

#immobilier #formation #évolution`,
    promptVisuel: `Fond #15161E, texte #F0F0F0 centr\u00e9, typo Inter bold : "Un agent qui ne se forme pas en 2026, c'est un m\u00e9decin qui refuse de lire les nouvelles \u00e9tudes." Tiret en #72AAEE "— Nordine Mouaouia". Lueur radiale subtile #72AAEE10 derri\u00e8re le texte. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630. SYSTEME1-IMMO\u2122 en bas #ABABAB.`,
    visuelType: "citation",
    visuelData: { citation: "Un agent qui ne se forme\npas en 2026, c'est un médecin\nqui refuse de lire\nles nouvelles études.", auteur: "Nordine Mouaouia" },
  },
  {
    id: 9, semaine: 3, jour: "Samedi 12 avril",
    pilier: "L'Humain Derrière les Chiffres", type: "Storytelling", hookCat: "Narration",
    objectif: "Connexion + Authenticité", format: "Photo symbolique",
    texte: `Burnout.

Plus d'énergie.
Plus d'envie.
Plus rien.

Quand ça t'arrive, personne ne te prévient.
Un jour tu cours. Le lendemain tu ne peux plus te lever.

J'ai traversé ça.

Après des années à 200%.
Des projets dans tous les sens.
Du fitness à l'immo, de la distribution au conseil.
Toujours plus. Toujours plus vite.

Jusqu'au mur.

Ce que personne ne te dit sur le burnout :
ce n'est pas la fin.
C'est un reset.

Brutal. Violent. Nécessaire.

Après le burnout, j'ai tout reconstruit.
Pas "malgré" le burnout.
GRÂCE au burnout.

Parce que quand tu repars de zéro, tu ne reconstruis que l'essentiel.

300K de CA par an.
6 ans consécutifs.
Après le mur.

Ce n'est pas un parcours linéaire.
C'est un parcours réel.

Et si tu traverses un moment difficile dans ce métier,
si tu sens que tu approches du mur,
sache que le mur n'est pas la fin.

C'est le début de la version de toi qui va tout changer.

Tu as vécu un moment où tu as dû tout reconstruire ?

Raconte-moi en commentaire. Je lis tout. Et je réponds.

#immobilier #burnout #reconstruction`,
    promptVisuel: `Fond #15161E. Route vide menant vers un horizon avec lueur #72AAEE, ciel dramatique sombre, nuages s'ouvrant sur lumi\u00e8re bleu\u00e9e. Atmosph\u00e8re cin\u00e9matique sombre. Overlay l\u00e9ger #15161E80 pour coh\u00e9rence charte. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630. SYSTEME1-IMMO\u2122 en bas #ABABAB.`,
    visuelType: "chiffre",
    visuelData: { chiffre: "300K", sousTitre: "de CA par an · 6 ans", detail: "Après le burnout. Parcours réel." },
  },
  {
    id: 10, semaine: 4, jour: "Mardi 15 avril",
    pilier: "Le Terrain Parle", type: "Contrarian", hookCat: "Preuve & résultats",
    objectif: "Autorité + Différenciation", format: "Image chiffre-clé",
    texte: `+4,5% au-dessus de l'estimation la plus haute.

Pas la moyenne.
La plus haute.

Lis ça deux fois.

Quand mes clients vendent avec moi, ils ne vendent pas "au prix".
Ils vendent AU-DESSUS du prix le plus optimiste.

Comment ?

Je vais te dire ce que ce n'est PAS :
→ Ce n'est pas de la chance
→ Ce n'est pas un marché facile
→ Ce n'est pas de la surenchère artificielle

C'est de la stratégie.

Chaque estimation que je fais intègre 3 dimensions que 95% des agents ignorent :

1. L'ancrage émotionnel du vendeur
Son attachement au bien biaise son prix plancher. Si tu ne le désamorces pas, tu perds le mandat OU tu surcottes.

2. Le cadrage de la première offre
Le premier prix que l'acheteur voit ancre sa perception. Si tu laisses Seloger poser l'ancre à ta place, tu as déjà perdu.

3. La vision de valorisation
Un bien, ce n'est pas 4 murs. C'est un potentiel.
Quand des confrères proposaient 500K, j'ai vu une opération à plus du double.
Pas parce que je suis meilleur.
Parce que je regarde autrement.

Les sciences comportementales, ce n'est pas de la théorie.
C'est +4,5%.

La newsletter de demain explique le mécanisme psychologique complet.

Commente "ESTIMATION" pour recevoir le lien.

#immobilier #estimation #performance`,
    promptVisuel: `Fond #15161E. Chiffre "+4,5%" tr\u00e8s grand typo bold blanche. Sous-titre "au-dessus de l'estimation la plus haute." Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "chiffre",
    visuelData: { chiffre: "+4,5%", sousTitre: "au-dessus de l'estimation", detail: "la plus haute. Pas la moyenne." },
  },
  {
    id: 11, semaine: 4, jour: "Jeudi 17 avril",
    pilier: "Le Cerveau du Client", type: "Framework", hookCat: "Autorité & expertise",
    objectif: "Propriété intellectuelle", format: "Carrousel PDF (5 slides)",
    texte: `La méthode que j'enseigne tient en 3 mots.

Tension. Projection. Preuve.

Tout le reste, c'est du bruit.

Laisse-moi t'expliquer.

TENSION

Avant chaque interaction, identifie la peur dominante de ton client.

Peur de surpayer.
Peur de se tromper.
Peur de rater.
Peur de l'engagement.

Si tu ne connais pas sa peur, tu parles dans le vide.

Une question suffit : "Qu'est-ce qui serait inacceptable pour vous dans cette transaction ?"

Écoute la réponse. C'est ta boussole.

PROJECTION

Ton client n'achète pas un bien. Il achète une vie.

Arrête de décrire. Commence à projeter.

Pas "le salon fait 35m²".
Mais "c'est ici que vos enfants ouvriront leurs cadeaux de Noël".

La projection active la mémoire émotionnelle.
La description active... rien.

PREUVE

Ton client a des objections.
Il ne te les dit pas toutes.
Mais elles sont là.

Réponds-y AVANT qu'il les pose.

"Vous vous demandez peut-être pourquoi ce prix. Voici les 3 ventes comparables du quartier ce trimestre."

Quand tu devances l'objection, tu deviens crédible.
Quand tu y réponds après, tu te justifies.

Tension. Projection. Preuve.

60 conseillers formés sur cette méthode.
Ceux qui l'appliquent doublent leur taux de transformation en moins de 3 mois.

Tu veux le protocole complet TPP ?

Commente "TPP" et je te l'envoie en DM.

#immobilier #méthode #vente`,
    promptVisuel: `Carrousel 5 slides. Slide 1 : "TENSION. PROJECTION. PREUVE." fond #15161E, accent #E4763F sur premi\u00e8re lettre. Slides 2-4 : 1 concept/slide. Slide 5 : r\u00e9sultat + CTA. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "carrousel",
    visuelData: {
      slides: [
        { titre: "T. P. P.", sousTitre: "Tension.\nProjection.\nPreuve." },
        { titre: "TENSION", desc: "Identifie la peur\ndominante" },
        { titre: "PROJECTION", desc: "Fais-le vivre là.\nPas écouter des chiffres." },
        { titre: "PREUVE", desc: "Devance les objections\navant qu'il les pose" },
        { titre: "x2", sousTitre: "Taux de transformation\nen 3 mois" },
      ],
    },
  },
  {
    id: 12, semaine: 4, jour: "Samedi 19 avril",
    pilier: "Conversion", type: "Teaser", hookCat: "Urgence & perte",
    objectif: "Anticipation Système 1 Immo", format: "Image mystère/teaser",
    texte: `22 ans de terrain.
500 collaborateurs formés.
34 000 décisions analysées.

Il manquait une chose.

Rendre tout ça accessible.

Pas à 10 personnes dans une salle de formation.
Pas à mes seuls clients.
À chaque agent et courtier qui veut faire ce métier autrement.

Pendant 2 ans, j'ai emballé tout ce que je sais dans un système.

Mes méthodes de visite.
Mes stratégies d'estimation.
Mes frameworks de négociation.
Mes analyses comportementales.
Mes process de prospection.

Tout ce qui m'a permis de faire 50% de part de marché seul.

Je n'en dis pas plus aujourd'hui.

Mais si tu es agent ou courtier,
et que tu sens que le métier mérite mieux que ce qu'on en fait,
tu veux être dans la boucle.

Commente "SYSTÈME 1".
Tu seras parmi les premiers à savoir.

#immobilier #innovation #système`,
    promptVisuel: `Fond #15161E, lumi\u00e8re qui perce au centre (porte qui s'ouvre). Texte subtil blanc "Bient\u00f4t." Pas de logo, pas de nom. Le myst\u00e8re cr\u00e9e l'anticipation. Adapter au format choisi : LinkedIn carr\u00e9 1080\u00d71080, LinkedIn/Meta portrait 1080\u00d71350 (4:5), Story/Reel 1080\u00d71920 (9:16), Meta paysage 1200\u00d7630.`,
    visuelType: "citation",
    visuelData: { citation: "22 ans de terrain.\n500 collaborateurs.\n34 000 décisions.\n\nBientôt.", auteur: "SYSTEME1-IMMO™" },
  },
];

const NEWSLETTERS = [
  {
    id: 1, semaine: 1, jour: "Mercredi 26 mars",
    sujet: "Votre client a décidé avant d'entrer dans le bien.",
    concept: "Mémoire émotionnelle et décision d'achat",
    refs: "Hamann 2001, McGaugh 2004, Lerner et al. 2015",
    texte: `Objet : Votre client a décidé avant d'entrer dans le bien.

L'ENJEU DE CE NUMÉRO

Vos prospects ne décident pas pendant la visite. Ils décident avant. La recherche en neurosciences le confirme depuis deux décennies : la mémoire émotionnelle filtre, sélectionne et oriente la décision bien avant que la rationalité n'intervienne. Comment structurer vos visites pour activer ce levier ?

CE QUE DIT LA SCIENCE

Hamann (2001) et McGaugh (2004) ont démontré que les événements à forte charge émotionnelle sont stockés de manière préférentielle par l'amygdale. L'information technique (surface, DPE, charges) est traitée par le cortex préfrontal — un système plus lent, plus exigeant, et surtout plus facilement saturé. Lerner et al. (2015) confirment : les émotions incidentes influencent le jugement et la prise de décision, même lorsque le sujet n'en a pas conscience.

En clair : si votre visite est un défilé de données techniques, le cerveau de votre prospect se sature. Il repart avec un souvenir neutre. Et un souvenir neutre ne génère pas d'offre.

CE QUE J'OBSERVE SUR LE TERRAIN

J'ai constaté ce phénomène sur un cas précis : un bien invendu depuis 2 ans, avec des visites régulières mais aucune offre. En changeant uniquement la structure de la visite — en intégrant des balises immersives qui créent un moment de projection forte — le bien a été vendu en 6 semaines. Même prix. Même marché.

APPLICATION TERRAIN

Prospection : Identifiez la charge émotionnelle dominante du prospect dès le premier contact ("Qu'est-ce qui serait inacceptable pour vous ?").

Qualification : Classez les motivations par intensité émotionnelle, pas par critères rationnels.

Visite : Construisez le parcours autour d'un seul moment de projection (le salon le matin, la terrasse au coucher du soleil). Le reste est du contexte.

Relance : Dans votre message de suivi, ne récapitulez pas les caractéristiques. Rappelez le moment de projection vécu.

POUR LES COURTIERS

En courtage, même mécanique. Votre client ne choisit pas un taux. Il choisit l'absence de risque. La question "Quel scénario serait inacceptable pour vous ?" active la tension émotionnelle qui accélère la décision de signer.

ASTUCE DE LA SEMAINE

Avant chaque visite, identifiez LE moment du bien (lumière, vue, volume) et arrivez 15 minutes en avance pour préparer ce moment (ouvrir les volets, allumer une lumière d'ambiance, positionner un point de vue).

PROMPT PRÊT À COPIER-COLLER

"Tu es expert en psychologie de la vente immobilière. À partir de cette fiche bien [coller la fiche], identifie le moment émotionnel le plus fort pour un acheteur potentiel. Propose un parcours de visite en 5 étapes qui culmine sur ce moment. Inclus la phrase d'ouverture et la phrase de clôture."

Vous voulez un diagnostic de vos visites actuelles ?
Répondez "DIAGNOSTIC" — je vous propose un audit Smart Agency de 60 min.

Nordine Mouaouia
Consultant Système 1 · Expert neurosciences × immobilier

Références : Hamann (2001) Cognitive and neural mechanisms of emotional memory. Trends in Cognitive Sciences. McGaugh (2004) The amygdala modulates the consolidation of memories. Annual Review of Neuroscience. Lerner et al. (2015) Emotion and Decision Making. Annual Review of Psychology.`,
  },
  {
    id: 2, semaine: 2, jour: "Mercredi 2 avril",
    sujet: "Le biais d'ancrage vous coûte des mandats.",
    concept: "Biais d'ancrage appliqué à l'estimation",
    refs: "Tversky & Kahneman 1974",
    texte: `Objet : Le biais d'ancrage vous coûte des mandats.

L'ENJEU DE CE NUMÉRO

Le premier chiffre que votre client entend ancre l'ensemble de la négociation. Si vous ne contrôlez pas cette ancre, quelqu'un d'autre le fait à votre place — et ce quelqu'un, c'est souvent Seloger, un voisin, ou un confrère moins rigoureux.

CE QUE DIT LA SCIENCE

Tversky & Kahneman (1974) ont identifié le biais d'ancrage : lorsqu'un individu doit estimer une valeur incertaine, il s'ajuste à partir d'une valeur initiale — l'ancre — même si celle-ci est arbitraire. Les ajustements sont systématiquement insuffisants. Appliqué à l'immobilier : le premier prix que votre vendeur ou acheteur entend devient le centre de gravité de toute la transaction.

CE QUE J'OBSERVE SUR LE TERRAIN

Mes clients gagnent en moyenne +4,5% au-dessus de l'estimation la plus haute. Ce résultat n'est pas le fruit du hasard. Il vient d'une discipline systématique : je pose toujours mon ancre en premier. Avant que le vendeur ne consulte un site, avant qu'un confrère ne donne un chiffre de complaisance. Mon estimation arrive première, étayée par 3 ventes comparables du trimestre dans le quartier.

APPLICATION TERRAIN

Estimation : Présentez toujours votre analyse avant que le vendeur ne vous donne "son prix". Inversez l'ordre habituel du R1.

Négociation : Cadrez la première offre vous-même. Ne laissez pas l'acheteur poser l'ancre.

Présentation d'offres : Si vous présentez plusieurs offres, commencez par la médiane, pas par la plus basse. L'ancre médiane tire les suivantes vers le haut.

POUR LES COURTIERS

Le premier taux que vous présentez devient le point de référence. Si vous commencez par la meilleure offre, tout le reste paraît cher. L'ordre de présentation change la perception. Commencez par le taux médian — le meilleur arrive en "bonne surprise".

ASTUCE DE LA SEMAINE

En R1, avant de demander au vendeur "Vous avez une idée du prix ?", dites : "J'ai analysé 12 transactions dans votre quartier ce trimestre. Voici ce que le marché indique." Vous posez l'ancre. Vous contrôlez la suite.

PROMPT PRÊT À COPIER-COLLER

"Tu es analyste en immobilier résidentiel. À partir de ces données [coller 5-10 ventes comparables], construis une argumentation d'estimation en 3 niveaux : prix plancher, prix marché, prix optimisé. Pour chaque niveau, donne 2 ventes comparables à l'appui. L'objectif est de poser une ancre haute crédible."

Répondez "ANCRAGE" pour recevoir mon template d'estimation comportementale.

Nordine Mouaouia
Consultant Système 1 · Expert neurosciences × immobilier

Références : Tversky, A. & Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. Science.`,
  },
  {
    id: 3, semaine: 3, jour: "Mercredi 9 avril",
    sujet: "Votre client ne se souvient que de deux moments.",
    concept: "Peak-End Rule appliquée à la visite",
    refs: "Kahneman 1999",
    texte: `Objet : Votre client ne se souvient que de deux moments. Lesquels choisissez-vous ?

L'ENJEU DE CE NUMÉRO

Vos visites durent 30 à 45 minutes. Votre client n'en retiendra que deux instants : le pic émotionnel et la fin. Si vous n'avez pas choisi ces deux moments, votre prospect repart avec un souvenir moyen. Et un souvenir moyen ne génère pas d'offre.

CE QUE DIT LA SCIENCE

La Peak-End Rule (Kahneman, 1999) établit que l'évaluation rétrospective d'une expérience est dominée par deux points : le moment le plus intense (le pic) et le moment final. La durée de l'expérience n'a quasiment aucun impact sur le souvenir global — c'est la "duration neglect".

Concrètement : une visite de 45 minutes parfaitement menée mais sans pic émotionnel et avec une fin banale sera moins bien notée qu'une visite de 20 minutes avec un moment fort et une clôture percutante.

CE QUE J'OBSERVE SUR LE TERRAIN

J'ai structuré mes visites immersives avec balises sur exactement ce principe. Le pic est choisi AVANT la visite : c'est le moment du bien (la vue de la terrasse, la lumière du séjour à 10h, le volume de la pièce de vie). Toute la visite est construite pour y mener. La fin est scriptée : jamais "Vous avez des questions ?". Toujours une phrase de projection : "Imaginez votre premier dimanche matin ici."

Sur mes 53 ventes de 2023, les biens vendus au-dessus de l'estimation avaient tous des visites construites sur ce principe.

APPLICATION TERRAIN

Préparation : Visitez le bien seul. Identifiez LE moment (lumière, vue, sensation). Notez l'heure optimale.

Parcours : Construisez la visite en crescendo vers le pic. Les pièces secondaires en premier. Le moment fort au 2/3 du parcours.

Clôture : Préparez votre phrase finale. Elle doit projeter, pas questionner. "C'est ici que vos enfants ouvriront leurs cadeaux de Noël."

POUR LES COURTIERS

En rendez-vous courtage : le pic, c'est le moment où vous montrez au client qu'il peut accéder à un bien qu'il croyait hors budget. La fin, c'est la phrase de clôture qui projette. Le reste ? Il l'oubliera.

ASTUCE DE LA SEMAINE

Filmez votre prochaine visite (avec accord du propriétaire). Identifiez à quel moment le prospect change d'expression, de posture, de ton de voix. C'est votre pic naturel. Construisez autour.

PROMPT PRÊT À COPIER-COLLER

"Tu es coach en vente immobilière spécialisé en neurosciences. À partir de cette description de bien [coller la fiche], identifie le pic émotionnel potentiel (le moment le plus impactant pour un acheteur). Propose : 1) le parcours de visite optimal en 6 étapes, 2) la phrase de clôture de type projection, 3) le timing idéal de visite."

Répondez "PEAK-END" pour recevoir mon protocole complet de visite comportementale.

Nordine Mouaouia
Consultant Système 1 · Expert neurosciences × immobilier

Références : Kahneman, D. (1999). Objective happiness. In Well-being: Foundations of hedonic psychology. Russell Sage Foundation.`,
  },
  {
    id: 4, semaine: 4, jour: "Mercredi 16 avril",
    sujet: "+4,5% au-dessus de l'estimation haute. La science derrière le chiffre.",
    concept: "Effet de cadrage + Aversion à la perte",
    refs: "Tversky & Kahneman 1981, Kahneman & Tversky 1979",
    texte: `Objet : +4,5% au-dessus de l'estimation haute. La science derrière le chiffre.

L'ENJEU DE CE NUMÉRO

Comment certains agents vendent systématiquement au-dessus du marché alors que d'autres peinent à atteindre le prix affiché ? La réponse n'est pas dans le talent commercial. Elle est dans la maîtrise de deux mécanismes cognitifs : l'effet de cadrage et l'aversion à la perte.

CE QUE DIT LA SCIENCE

L'effet de cadrage (Tversky & Kahneman, 1981) démontre que la façon dont une information est présentée modifie radicalement la décision, même si les données objectives sont identiques. "Ce bien a perdu 5% en 1 an" et "Ce bien a conservé 95% de sa valeur en 1 an" décrivent la même réalité — mais produisent des réactions opposées.

L'aversion à la perte (Kahneman & Tversky, 1979) établit que la douleur d'une perte est ressentie 2,5 fois plus intensément que le plaisir d'un gain équivalent. Votre client ne veut pas "faire une bonne affaire" — il veut éviter de faire une mauvaise affaire.

CE QUE J'OBSERVE SUR LE TERRAIN

Quand des confrères proposaient 500K€, j'ai fait monter à plus du double. Pas en vendant mieux. En voyant ce que les autres ne voyaient pas : une opération de promotion immobilière là où tout le monde voyait une vente classique. Le cadrage change tout : "un bien à 500K" vs "un terrain constructible avec COS favorable et un bâti existant valorisable en découpe". Même adresse. Vision différente.

APPLICATION TERRAIN

Estimation : Ne présentez pas un prix. Présentez un cadrage : "Voici 3 scénarios de valorisation, du conservateur à l'optimisé."

Visite acheteur : Cadrez les charges comme un rapport qualité/prix quotidien (250€/mois = 8€/jour pour gardien + parking + ascenseur).

Négociation : Cadrez l'offre autour de la perte potentielle : "Si vous ne positionnez pas cette offre d'ici vendredi, le bien part avec le visiteur de demain."

POUR LES COURTIERS

L'effet de cadrage en courtage : présenter une mensualité de 1 200€/mois vs "40€/jour pour votre futur chez-vous" change la décision. Même chiffre. Perception différente.

ASTUCE DE LA SEMAINE

Pour chaque bien, préparez 3 cadrages différents du même prix. Testez-les sur 3 prospects. Identifiez lequel génère le plus de réactions positives. Ce cadrage gagnant devient votre standard.

PROMPT PRÊT À COPIER-COLLER

"Tu es consultant en stratégie de pricing immobilier. À partir de ces données bien [coller fiche + comparables], propose 3 cadrages différents du même prix : 1) cadrage investissement (rendement, plus-value), 2) cadrage émotionnel (style de vie, quotidien), 3) cadrage comparatif (vs location, vs alternatives). Pour chaque cadrage, rédige le pitch en 3 phrases."

Répondez "CADRAGE" pour recevoir mon template de présentation d'estimation en 3 scénarios.

Nordine Mouaouia
Consultant Système 1 · Expert neurosciences × immobilier

Références : Tversky, A. & Kahneman, D. (1981). The Framing of Decisions and the Psychology of Choice. Science. Kahneman, D. & Tversky, A. (1979). Prospect Theory. Econometrica.`,
  },
];

/* ═══════════════════════════════════════════
   FORMATS PLATEFORMES
   ═══════════════════════════════════════════ */
const PLATFORMS = [
  { id: "li-carre", label: "LinkedIn Carr\u00e9", ratio: "1/1", px: "1080\u00d71080", desc: "Post classique LinkedIn" },
  { id: "li-portrait", label: "LinkedIn Portrait", ratio: "4/5", px: "1080\u00d71350", desc: "Carrousel / Infographie LinkedIn" },
  { id: "meta-carre", label: "Meta Feed Carr\u00e9", ratio: "1/1", px: "1080\u00d71080", desc: "Post Facebook & Instagram" },
  { id: "meta-portrait", label: "Meta Feed 4:5", ratio: "4/5", px: "1080\u00d71350", desc: "Post Instagram (max visibilit\u00e9)" },
  { id: "meta-story", label: "Story / Reel", ratio: "9/16", px: "1080\u00d71920", desc: "Instagram & Facebook Story / Reel" },
  { id: "meta-paysage", label: "Meta Paysage", ratio: "1200/630", px: "1200\u00d7630", desc: "Lien partag\u00e9 Facebook" },
];

function FormatSelector({ current, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: C.primary, marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
        Format plateforme
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            onClick={() => onChange(p.id)}
            style={{
              padding: "6px 10px", borderRadius: 6, border: "none", cursor: "pointer",
              fontSize: 11, fontWeight: current === p.id ? 700 : 500,
              color: current === p.id ? "white" : C.muted,
              background: current === p.id ? `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})` : C.card,
              transition: "all 0.15s",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>
      <div style={{ fontSize: 11, color: C.mutedDark, marginTop: 4 }}>
        {PLATFORMS.find(p => p.id === current)?.px} \u2014 {PLATFORMS.find(p => p.id === current)?.desc}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   COMPOSANTS VISUELS G\u00c9N\u00c9RATIFS
   ═══════════════════════════════════════════ */

function VisuelChiffre({ data, ratio = "1/1" }) {
  return (
    <div style={{
      width: "100%", aspectRatio: ratio, background: C.bg,
      borderRadius: 12, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", position: "relative",
      overflow: "hidden", border: `1px solid ${C.border}`,
    }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 300, height: 300, borderRadius: "50%",
        background: `radial-gradient(circle, ${C.primary}12 0%, transparent 70%)`,
      }} />
      <div style={{ fontSize: 72, fontWeight: 900, color: C.text, letterSpacing: "-0.04em", zIndex: 1 }}>
        {data.chiffre}
      </div>
      <div style={{ fontSize: 16, color: C.muted, marginTop: 8, zIndex: 1, textAlign: "center" }}>
        {data.sousTitre}
      </div>
      <div style={{ fontSize: 13, color: C.mutedDark, marginTop: 4, zIndex: 1, textAlign: "center" }}>
        {data.detail}
      </div>
      <div style={{ position: "absolute", bottom: 12, fontSize: 10, color: C.mutedDark }}>
        Nordine Mouaouia · SYSTEME1-IMMO™
      </div>
    </div>
  );
}

function VisuelCitation({ data, ratio = "1/1" }) {
  return (
    <div style={{
      width: "100%", aspectRatio: ratio, background: C.bg,
      borderRadius: 12, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: 40,
      position: "relative", overflow: "hidden", border: `1px solid ${C.border}`,
    }}>
      <div style={{
        position: "absolute", top: -40, right: -40, width: 200, height: 200,
        background: `radial-gradient(circle, ${C.orange}10 0%, transparent 70%)`,
      }} />
      <div style={{
        fontSize: 24, fontWeight: 800, color: C.text, textAlign: "center",
        lineHeight: 1.4, whiteSpace: "pre-line", zIndex: 1, maxWidth: "90%",
      }}>
        {data.citation}
      </div>
      <div style={{
        marginTop: 20, fontSize: 13, color: C.primary, fontWeight: 600, zIndex: 1,
      }}>
        — {data.auteur}
      </div>
      <div style={{ position: "absolute", bottom: 12, fontSize: 10, color: C.mutedDark }}>
        SYSTEME1-IMMO™
      </div>
    </div>
  );
}

function VisuelInfographie({ data, ratio = "4/5" }) {
  return (
    <div style={{
      width: "100%", aspectRatio: ratio, background: C.bg,
      borderRadius: 12, padding: 28, display: "flex", flexDirection: "column",
      border: `1px solid ${C.border}`, position: "relative",
    }}>
      <div style={{
        position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
        width: 300, height: 300, borderRadius: "50%",
        background: `radial-gradient(circle, ${C.primary}10 0%, transparent 70%)`,
      }} />
      <div style={{
        background: `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
        borderRadius: 8, padding: "12px 20px",
        textAlign: "center", marginBottom: 20, zIndex: 1,
      }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: "white", whiteSpace: "pre-line", lineHeight: 1.3 }}>
          {data.titre}
        </div>
      </div>
      {data.stats.map((s, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", gap: 12, marginBottom: 10,
          padding: "10px 14px", background: C.card, borderRadius: 8,
          border: `1px solid ${i % 2 === 0 ? C.primary : C.orange}30`, zIndex: 1,
        }}>
          <div style={{
            width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
            background: i % 2 === 0 ? `${C.primary}20` : `${C.orange}20`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: i % 2 === 0 ? C.primary : C.orange,
          }}>
            {i + 1}
          </div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{s}</div>
        </div>
      ))}
      <div style={{
        marginTop: "auto", padding: "10px 16px",
        background: `linear-gradient(135deg, ${C.orange}, #c45a2a)`,
        borderRadius: 8, textAlign: "center",
        fontSize: 14, fontWeight: 700, color: "white", zIndex: 1,
      }}>
        {data.conclusion}
      </div>
      <div style={{ textAlign: "center", marginTop: 10, fontSize: 10, color: C.mutedDark, zIndex: 1 }}>
        cr\u00e9\u00e9 par Nordine Mouaouia \u00b7 SYSTEME1-IMMO\u2122
      </div>
    </div>
  );
}

function VisuelCarrousel({ data, ratio = "4/5" }) {
  const [slide, setSlide] = useState(0);
  const s = data.slides[slide];
  const isFirst = slide === 0;
  const isLast = slide === data.slides.length - 1;
  return (
    <div>
      <div style={{
        width: "100%", aspectRatio: ratio,
        background: isFirst || isLast ? C.bg : C.card,
        borderRadius: 12, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: 32,
        position: "relative", border: `1px solid ${C.border}`,
      }}>
        {isFirst && <div style={{
          position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
          width: 250, height: 250, borderRadius: "50%",
          background: `radial-gradient(circle, ${C.primary}15 0%, transparent 70%)`,
        }} />}
        <div style={{
          fontSize: isFirst || isLast ? 36 : 28, fontWeight: 900,
          color: isFirst || isLast ? C.text : C.primary,
          textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.2, zIndex: 1,
        }}>
          {s.titre}
        </div>
        {s.sousTitre && (
          <div style={{
            fontSize: 18, color: isFirst || isLast ? C.muted : C.orange,
            marginTop: 12, textAlign: "center", whiteSpace: "pre-line",
            fontWeight: 600, zIndex: 1,
          }}>
            {s.sousTitre}
          </div>
        )}
        {s.desc && (
          <div style={{
            fontSize: 16, color: C.muted, marginTop: 12,
            textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.5, zIndex: 1,
          }}>
            {s.desc}
          </div>
        )}
        <div style={{
          position: "absolute", bottom: 12, fontSize: 10, color: C.mutedDark,
        }}>
          {slide + 1}/{data.slides.length} · Nordine Mouaouia
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "center" }}>
        <button
          onClick={() => setSlide(Math.max(0, slide - 1))}
          disabled={slide === 0}
          style={{
            padding: "8px 16px", borderRadius: 8, border: `1px solid ${C.border}`,
            background: C.card, color: slide === 0 ? C.mutedDark : C.text,
            cursor: slide === 0 ? "default" : "pointer", fontSize: 13,
          }}
        >
          ← Précédent
        </button>
        <button
          onClick={() => setSlide(Math.min(data.slides.length - 1, slide + 1))}
          disabled={slide === data.slides.length - 1}
          style={{
            padding: "8px 16px", borderRadius: 8, border: "none",
            background: slide === data.slides.length - 1 ? C.border : `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
            color: "white", cursor: slide === data.slides.length - 1 ? "default" : "pointer", fontSize: 13,
          }}
        >
          Suivant →
        </button>
      </div>
    </div>
  );
}

function RenderVisuel({ post, ratio }) {
  if (post.visuelType === "chiffre") return <VisuelChiffre data={post.visuelData} ratio={ratio} />;
  if (post.visuelType === "citation") return <VisuelCitation data={post.visuelData} ratio={ratio} />;
  if (post.visuelType === "infographie") return <VisuelInfographie data={post.visuelData} ratio={ratio} />;
  if (post.visuelType === "carrousel") return <VisuelCarrousel data={post.visuelData} ratio={ratio} />;
  return null;
}

/* ═══════════════════════════════════════════
   SYSTÈME DE ROTATION MULTI-MOIS
   ═══════════════════════════════════════════ */
const PILIERS_ROTATION = [
  "Le Terrain Parle", "Le Cerveau du Client", "Le Terrain Parle",
  "L'Humain Derrière les Chiffres", "Le Cerveau du Client", "Le Terrain Parle",
  "Le Métier Mérite Mieux", "Le Cerveau du Client", "Le Terrain Parle",
  "Conversion", "L'Humain Derrière les Chiffres", "Le Cerveau du Client",
];
const TYPES_ROTATION = ["Contrarian", "Framework", "Liste / Ressource", "Transformation", "Lead Magnet / Teaser"];
const HOOKS_ROTATION = ["Rupture cognitive", "Preuve & résultats", "Curiosité & gap cognitif", "Urgence & perte", "Identification & miroir", "Narration & storytelling", "Autorité & expertise"];
const FORMATS_ROTATION = ["Infographie sketchnote", "Carrousel PDF (5 slides)", "Chiffre-clé plein écran", "Visuel citation", "Carrousel PDF (4 slides)"];
const JOURS_SEMAINE = ["Mardi", "Jeudi", "Samedi"];
const OBJECTIFS_JOUR = { Mardi: "Autorité", Jeudi: "Éducation", Samedi: "Connexion" };

function getDateForWeek(weekNum, jourIndex) {
  const base = new Date(2025, 2, 25);
  const offset = (weekNum - 1) * 7 + (jourIndex === 0 ? 0 : jourIndex === 1 ? 2 : 4);
  const d = new Date(base);
  d.setDate(d.getDate() + offset);
  const mois = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
  return `${JOURS_SEMAINE[jourIndex]} ${d.getDate()} ${mois[d.getMonth()]}`;
}
function getMoisLabel(weekNum) {
  const base = new Date(2025, 2, 25);
  const d = new Date(base);
  d.setDate(d.getDate() + (weekNum - 1) * 7);
  const mois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
  return `${mois[d.getMonth()]} ${d.getFullYear()}`;
}
function genererPlanSemaine(weekNum) {
  const globalPostIndex = (weekNum - 1) * 3;
  return JOURS_SEMAINE.map((jour, i) => {
    const idx = globalPostIndex + i;
    return {
      id: idx + 1,
      semaine: weekNum,
      jour: getDateForWeek(weekNum, i),
      pilier: PILIERS_ROTATION[idx % PILIERS_ROTATION.length],
      type: TYPES_ROTATION[idx % TYPES_ROTATION.length],
      hookCat: HOOKS_ROTATION[idx % HOOKS_ROTATION.length],
      objectif: OBJECTIFS_JOUR[jour],
      format: FORMATS_ROTATION[idx % FORMATS_ROTATION.length],
    };
  });
}
function genererBriefPost(plan) {
  return `Écris un post LinkedIn pour Nordine Mouaouia (Système 1 Immo).

PILIER : ${plan.pilier}
TYPE : ${plan.type}
HOOK : ${plan.hookCat}
OBJECTIF : ${plan.objectif}
JOUR : ${plan.jour}
FORMAT VISUEL : ${plan.format}

RÈGLES :
- Tutoiement, ton direct, phrases courtes
- Données Nordine : 53 ventes solo 2023, 50% PDM en 5 ans, 300K+ CA 6 ans, +4,5% au-dessus estimation haute
- JAMAIS de mots : IA, algorithme, digital, tech, proptech, outil, solution, révolutionner
- Neurosciences appliquées au terrain (biais cognitifs, Peak-End, ancrage, aversion à la perte)
- CTA : "Commente INSIGHT" ou lien vers Système 1 Immo
- Hashtags : #immobilier #neurosciences + 1 contextuel
- Inclure un prompt visuel pour ${plan.format}
- CHARTE VISUELLE OBLIGATOIRE : fond #15161E, cartes #1E2029, bords #2F3241, bleu #72AAEE, orange #E4763F, texte #F0F0F0, muted #ABABAB, police Inter, mention "Nordine Mouaouia \u00b7 SYSTEME1-IMMO\u2122" en bas`;
}
function genererBriefNewsletter(weekNum) {
  return `Écris la newsletter Insight Immo #${weekNum} pour Nordine Mouaouia.

SEMAINE : ${weekNum}
MOIS : ${getMoisLabel(weekNum)}

STRUCTURE (11 sections) :
1. Objet email (curiosité + bénéfice)
2. Intro terrain (observation récente de Nordine, vouvoiement)
3. Le concept (neuroscience/biais cognitif appliqué)
4. La preuve académique (référence publiée)
5. L'application terrain (étape par étape)
6. Les mots de Nordine (verbatim terrain, tutoiement)
7. Encadré courtiers (IOBSP/IAS, bridge immo→finance)
8. Le prompt de la semaine (exercice pratique)
9. Ressource recommandée (livre/étude/podcast)
10. CTA (vers site Système 1 Immo)
11. PS mystère (teaser semaine suivante)

RÈGLES :
- Vouvoiement, ton expert
- Références académiques (Kahneman, Cialdini, Thaler, Ariely…)
- JAMAIS de mots tech/IA
- Donn\u00e9es Nordine : 53 ventes solo 2023, 50% PDM en 5 ans
- INT\u00c9GRER les r\u00e9sultats de la veille mensuelle si disponibles (tendances march\u00e9, \u00e9tudes neurosciences, actualit\u00e9s r\u00e9glementaires)
- Chaque newsletter doit s'appuyer sur au moins 1 fait d'actualit\u00e9 r\u00e9cent du mois en cours`;
}

function genererBriefVeilleMensuelle(moisLabel) {
  return `VEILLE STRAT\u00c9GIQUE MENSUELLE \u2014 ${moisLabel}
Objectif : alimenter la production de 12 posts LinkedIn + 4 newsletters Insight Immo pour le mois de ${moisLabel}.

FLUX 1 \u2014 MARCH\u00c9 IMMOBILIER
Recherche les actualit\u00e9s des 30 derniers jours sur :
- Taux de cr\u00e9dit immobilier (\u00e9volution, pr\u00e9visions)
- Volume de transactions (hausse/baisse, signaux)
- Prix par zone (tendances nationales + \u00cele-de-France + grandes m\u00e9tropoles)
- R\u00e9glementation (DPE, PTZ, MaPrimeR\u00e9nov, loi de finances)
- Dispositifs primo-acc\u00e9dants
Sources : Les Echos Immo, Le Figaro Immobilier, FNAIM, Notaires de France, MeilleursAgents

FLUX 2 \u2014 NEUROSCIENCES & COMPORTEMENT
Recherche les publications r\u00e9centes sur :
- Biais cognitifs appliqu\u00e9s \u00e0 la d\u00e9cision d'achat
- Psychologie du consommateur immobilier
- Neuromarketing et vente
- \u00c9tudes comportementales (FOMO, ancrage, peak-end, aversion \u00e0 la perte)
- Home staging psychologique / visite sensorielle
Sources : Journal of Consumer Psychology, PLOS ONE, HBR, ScienceDaily, arXiv

FLUX 3 \u2014 M\u00c9TIER & TERRAIN
Recherche les tendances sur :
- \u00c9volution du m\u00e9tier d'agent immobilier
- Bonnes pratiques de prospection terrain
- Formation continue / mont\u00e9e en comp\u00e9tences
- T\u00e9moignages et cas de r\u00e9ussite terrain
- Courtage (IOBSP/IAS) : tendances financement et assurance

FORMAT DE LIVRAISON :
Pour chaque flux, livre un tableau avec :
| # | Type | Titre court | Source | Date | Ce qui se passe | Angle LinkedIn (12 mots max) |

Types : \ud83d\ude80 LANCEMENT | \ud83d\udcca \u00c9TUDE | \u26a1 DISRUPTION | \u2696 R\u00c9GLEMENTAIRE | \ud83d\udcb0 BUSINESS | \ud83e\uddea RECHERCHE

ENSUITE, propose :
1. Les 4 MEILLEURS sujets newsletter (1 par semaine, avec l'\u00e9tude/concept associ\u00e9)
2. Les 12 angles de posts class\u00e9s par pilier (Terrain 4, Cerveau 4, Humain 2, M\u00e9tier 1, Conversion 1)
3. Les dates cl\u00e9s du mois \u00e0 exploiter (salons, \u00e9v\u00e9nements, dates fiscales)

R\u00c8GLES ABSOLUES :
- Sources v\u00e9rifiables uniquement, pas de liens invent\u00e9s
- JAMAIS de mots : IA, algorithme, digital, tech, proptech, outil, solution
- Chaque angle doit \u00eatre exploitable par un agent immobilier de terrain
- Priorit\u00e9 : ce qui impacte directement le quotidien d'un agent/courtier`;
}

/* \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550
   COMPOSANT PRINCIPAL
   \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 */

function copyToClipboard(text) {
  try {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  } catch { fallbackCopy(text); }
}
function fallbackCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch {}
  document.body.removeChild(ta);
}

function CopyBtn({ text, label = "Copier le texte" }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        copyToClipboard(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      style={{
        padding: "10px 20px", borderRadius: 10, border: "none", cursor: "pointer",
        background: copied ? C.success : `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`,
        color: "white", fontWeight: 600, fontSize: 14, width: "100%",
        boxShadow: `0 0 20px ${copied ? C.success : C.primary}30`,
        transition: "all 0.2s",
      }}
    >
      {copied ? "\u2713 Copi\u00e9 !" : label}
    </button>
  );
}

export default function CockpitNordine() {
  const [view, setView] = useState("planning");
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [activeTab, setActiveTab] = useState("texte");
  const [moisOffset, setMoisOffset] = useState(0);
  const [formatPlatform, setFormatPlatform] = useState("li-carre");
  const currentPlatform = PLATFORMS.find(p => p.id === formatPlatform);
  const currentRatio = currentPlatform?.ratio || "1/1";

  const semainesActuelles = [1, 2, 3, 4].map(s => s + moisOffset * 4);
  const moisLabel = getMoisLabel(semainesActuelles[0]);
  const estMois1 = moisOffset === 0;

  const tabs = [
    { id: "planning", label: "Planning" },
    { id: "post", label: "Posts" },
    { id: "newsletter", label: "Newsletters" },
    { id: "veille", label: "Veille" },
  ];

  const themesSemaine = [
    "Le cerveau décide avant la visite",
    "Ce que ton client ne te dit pas",
    "La vente ne se joue pas dans l'argumentaire",
    "Le système qui change tout",
  ];

  const getPostsSemaine = (sem) => {
    if (estMois1) return POSTS.filter(p => p.semaine === sem);
    return genererPlanSemaine(semainesActuelles[sem - 1]);
  };
  const getNewsletterSemaine = (sem) => {
    if (estMois1) return NEWSLETTERS.filter(n => n.semaine === sem);
    return [{ id: semainesActuelles[sem - 1], semaine: semainesActuelles[sem - 1], jour: `Mercredi — S${semainesActuelles[sem - 1]}`, sujet: `Newsletter Insight Immo #${semainesActuelles[sem - 1]}`, concept: "À générer", refs: getMoisLabel(semainesActuelles[sem - 1]) }];
  };
  const allPostsMois = estMois1 ? POSTS : semainesActuelles.flatMap((_, i) => genererPlanSemaine(semainesActuelles[i]));
  const allNewslettersMois = estMois1 ? NEWSLETTERS : semainesActuelles.map((w) => ({ id: w, semaine: w, jour: `Mercredi — S${w}`, sujet: `Insight Immo #${w}`, concept: "À générer", refs: getMoisLabel(w) }));

  return (
    <div style={{
      maxWidth: 720, margin: "0 auto", padding: "28px 16px",
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      background: `linear-gradient(180deg, ${C.bg} 0%, ${C.bgAlt} 50%, ${C.bg} 100%)`,
      minHeight: "100vh", color: C.text,
    }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{
          display: "inline-block", fontSize: 10, fontWeight: 600, color: C.primary,
          textTransform: "uppercase", letterSpacing: "0.15em", padding: "5px 14px",
          background: `${C.primary}10`, borderRadius: 20, border: `1px solid ${C.primary}25`,
          marginBottom: 10,
        }}>
          SYSTEME1-IMMO\u2122 \u00b7 COCKPIT \u00c9DITORIAL
        </div>

        {/* Month navigation */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 8,
        }}>
          <button
            onClick={() => { setMoisOffset(Math.max(0, moisOffset - 1)); setSelectedPost(null); setSelectedNewsletter(null); }}
            disabled={moisOffset === 0}
            style={{
              width: 36, height: 36, borderRadius: 10, border: `1px solid ${C.border}`,
              background: C.card, color: moisOffset === 0 ? C.mutedDark : C.primary,
              cursor: moisOffset === 0 ? "default" : "pointer", fontSize: 18, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            \u2039
          </button>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: C.text }}>{moisLabel}</div>
            <div style={{ fontSize: 12, color: C.muted }}>
              S{semainesActuelles[0]}\u2013S{semainesActuelles[3]} {estMois1 ? "\u00b7 Contenus pr\u00e9-\u00e9crits" : "\u00b7 Plan \u00e0 g\u00e9n\u00e9rer"}
            </div>
          </div>
          <button
            onClick={() => { setMoisOffset(moisOffset + 1); setSelectedPost(null); setSelectedNewsletter(null); }}
            style={{
              width: 36, height: 36, borderRadius: 10, border: `1px solid ${C.border}`,
              background: C.card, color: C.primary,
              cursor: "pointer", fontSize: 18, fontWeight: 700,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            \u203a
          </button>
        </div>

        <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2, color: C.muted }}>
          {selectedPost ? `Post #${selectedPost.id}` : selectedNewsletter ? `Newsletter #${selectedNewsletter.id}` : `${estMois1 ? "12 posts \u00b7 4 newsletters" : "Plan \u00e9ditorial"}`}
        </h1>
        {(selectedPost || selectedNewsletter) && (
          <button
            onClick={() => { setSelectedPost(null); setSelectedNewsletter(null); setActiveTab("texte"); }}
            style={{
              marginTop: 8, padding: "6px 16px", borderRadius: 8,
              background: C.card, border: `1px solid ${C.border}`,
              color: C.muted, cursor: "pointer", fontSize: 13,
            }}
          >
            \u2190 Retour au planning
          </button>
        )}
      </div>

      {/* Tabs */}
      {!selectedPost && !selectedNewsletter && (
        <div style={{
          display: "flex", gap: 2, marginBottom: 24,
          background: C.card, borderRadius: 12, padding: 4,
          border: `1px solid ${C.border}`,
        }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setView(t.id)}
              style={{
                flex: 1, padding: "10px 12px", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: view === t.id ? 700 : 500,
                color: view === t.id ? "white" : C.muted,
                background: view === t.id
                  ? `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`
                  : "transparent",
                borderRadius: 10, transition: "all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {/* ═══ PLANNING ═══ */}
      {!selectedPost && !selectedNewsletter && view === "planning" && (
        <div>
          {[1, 2, 3, 4].map((localS, i) => {
            const globalS = semainesActuelles[i];
            const posts = estMois1 ? POSTS.filter(p => p.semaine === localS) : genererPlanSemaine(globalS);
            const newsletters = estMois1 ? NEWSLETTERS.filter(n => n.semaine === localS) : [{ id: globalS, semaine: globalS, jour: `Mercredi — S${globalS}`, sujet: `Insight Immo #${globalS}`, concept: "\u00c0 g\u00e9n\u00e9rer" }];
            return (
            <div key={globalS} style={{ marginBottom: 24 }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 10,
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: C.primary,
                  background: `${C.primary}15`, padding: "4px 10px",
                  borderRadius: 6, textTransform: "uppercase",
                }}>
                  S{globalS}
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>
                  {estMois1 ? `"${themesSemaine[i]}"` : getMoisLabel(globalS)}
                </div>
                {!estMois1 && (
                  <div style={{ fontSize: 10, color: C.orange, background: `${C.orange}15`, padding: "3px 8px", borderRadius: 4 }}>
                    PLAN
                  </div>
                )}
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {posts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => { setSelectedPost(p); setActiveTab("texte"); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px", borderRadius: 10, cursor: "pointer",
                      background: C.card, border: `1px solid ${estMois1 ? C.border : C.primary + "30"}`,
                      textAlign: "left", width: "100%",
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: `linear-gradient(135deg, ${C.primary}20, ${C.primaryDark}20)`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontWeight: 800, color: C.primary,
                    }}>
                      #{p.id}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                        {p.jour}
                      </div>
                      <div style={{ fontSize: 12, color: C.muted }}>
                        {p.type} \u00b7 {p.pilier}
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: estMois1 ? C.primary : C.orange }}>{estMois1 ? "\u2192" : "\u26a1"}</div>
                  </button>
                ))}
                {newsletters.map((n) => (
                  <button
                    key={`n${n.id}`}
                    onClick={() => { setSelectedNewsletter(n); setActiveTab("texte"); }}
                    style={{
                      display: "flex", alignItems: "center", gap: 12,
                      padding: "12px 16px", borderRadius: 10, cursor: "pointer",
                      background: C.card, border: `1px solid ${C.orange}30`,
                      textAlign: "left", width: "100%",
                    }}
                  >
                    <div style={{
                      width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                      background: `${C.orange}15`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 800, color: C.orange,
                    }}>
                      NL
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>
                        {n.jour} — Newsletter
                      </div>
                      <div style={{ fontSize: 12, color: C.muted }}>
                        {n.sujet}
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: C.orange }}>\u2192</div>
                  </button>
                ))}
              </div>
            </div>
            );
          })}
        </div>
      )}

      {/* ═══ LISTE POSTS ═══ */}
      {!selectedPost && !selectedNewsletter && view === "post" && (
        <div style={{ display: "grid", gap: 8 }}>
          {allPostsMois.map((p) => (
            <button
              key={p.id}
              onClick={() => { setSelectedPost(p); setActiveTab("texte"); }}
              style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "14px 16px", borderRadius: 12, cursor: "pointer",
                background: C.card, border: `1px solid ${p.texte ? C.border : C.primary + "30"}`,
                textAlign: "left", width: "100%",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: p.texte ? `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})` : `${C.primary}20`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, fontWeight: 800, color: p.texte ? "white" : C.primary,
              }}>
                {p.id}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: C.text }}>{p.jour}</div>
                <div style={{ fontSize: 13, color: C.muted }}>{p.type} \u00b7 {p.pilier}</div>
              </div>
              <div style={{ fontSize: 11, color: p.texte ? C.mutedDark : C.orange, background: p.texte ? C.bg : `${C.orange}15`, padding: "4px 8px", borderRadius: 6 }}>
                {p.texte ? p.format : "\u26a1 \u00c0 g\u00e9n\u00e9rer"}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ═══ LISTE NEWSLETTERS ═══ */}
      {!selectedPost && !selectedNewsletter && view === "newsletter" && (
        <div style={{ display: "grid", gap: 8 }}>
          {allNewslettersMois.map((n) => (
            <button
              key={n.id}
              onClick={() => { setSelectedNewsletter(n); setActiveTab("texte"); }}
              style={{
                padding: "16px", borderRadius: 12, cursor: "pointer",
                background: C.card, border: `1px solid ${C.orange}30`,
                textAlign: "left", width: "100%",
              }}
            >
              <div style={{ fontSize: 11, color: C.orange, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Insight Immo #{n.id} \u00b7 {n.jour}
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginTop: 6 }}>
                {n.sujet}
              </div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 4 }}>
                {n.concept} {n.refs ? `\u00b7 ${n.refs}` : ""}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ═══ POST DÉTAIL ═══ */}
      {selectedPost && (
        <div>
          {/* Meta */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16,
          }}>
            {[selectedPost.pilier, selectedPost.type, selectedPost.hookCat, selectedPost.objectif].map((tag, i) => (
              <span key={i} style={{
                fontSize: 11, padding: "4px 10px", borderRadius: 6,
                background: i === 0 ? `${C.primary}15` : C.card,
                color: i === 0 ? C.primary : C.muted,
                border: `1px solid ${C.border}`,
              }}>
                {tag}
              </span>
            ))}
          </div>

          {selectedPost.texte ? (
            <>
              {/* Sub-tabs — only for pre-written posts */}
              <div style={{
                display: "flex", gap: 2, marginBottom: 16,
                background: C.card, borderRadius: 10, padding: 3,
                border: `1px solid ${C.border}`,
              }}>
                {[
                  { id: "texte", label: "Post" },
                  { id: "visuel", label: "Visuel" },
                  { id: "ressource", label: "Quiz" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    style={{
                      flex: 1, padding: "8px", border: "none", cursor: "pointer",
                      fontSize: 13, fontWeight: activeTab === t.id ? 700 : 500,
                      color: activeTab === t.id ? "white" : C.muted,
                      background: activeTab === t.id
                        ? `linear-gradient(135deg, ${C.primary}, ${C.primaryDark})`
                        : "transparent",
                      borderRadius: 8,
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {activeTab === "texte" && (
                <div>
                  <div style={{
                    padding: 20, background: C.card, borderRadius: 12,
                    border: `1px solid ${C.border}`, marginBottom: 12,
                    fontSize: 14, lineHeight: 1.8, color: C.text,
                    whiteSpace: "pre-line",
                  }}>
                    {selectedPost.texte}
                  </div>
                  <CopyBtn text={selectedPost.texte} label="Copier le post LinkedIn" />
                </div>
              )}

              {activeTab === "visuel" && (
                <div>
                  <FormatSelector current={formatPlatform} onChange={setFormatPlatform} />
                  <RenderVisuel post={selectedPost} ratio={currentRatio} />
                  <div style={{
                    marginTop: 12, padding: 12, background: C.card,
                    borderRadius: 10, border: `1px solid ${C.border}`,
                    fontSize: 12, color: C.muted,
                  }}>
                    Format : <strong style={{ color: C.text }}>{currentPlatform?.px}</strong> \u2014 {selectedPost.format}
                  </div>

                  {/* Prompt visuel int\u00e9gr\u00e9 directement */}
                  <div style={{
                    marginTop: 16, fontSize: 11, fontWeight: 600, color: C.orange,
                    textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6,
                  }}>
                    Prompt visuel
                  </div>
                  <div style={{
                    padding: 14, background: C.card, borderRadius: 10,
                    border: `1px solid ${C.border}`, marginBottom: 8,
                    fontSize: 12, lineHeight: 1.7, color: C.muted,
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {selectedPost.promptVisuel}
                  </div>
                  <CopyBtn
                    text={`${selectedPost.promptVisuel}\n\nFORMAT : ${currentPlatform?.px} (${currentPlatform?.label}). Ratio ${currentRatio}.`}
                    label={`Copier le prompt \u2014 ${currentPlatform?.label}`}
                  />
                </div>
              )}

              {/* ═══ RESSOURCE INTERACTIVE (QUIZ) ═══ */}
              {activeTab === "ressource" && (
                <div>
                  <div style={{
                    padding: 20, background: `${C.orange}08`, borderRadius: 12,
                    border: `1px solid ${C.orange}30`, marginBottom: 16,
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: 36, marginBottom: 8 }}>{"\ud83c\udfae"}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 4 }}>
                      Quiz interactif
                    </div>
                    <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                      G\u00e9n\u00e8re un artifact React interactif li\u00e9 \u00e0 ce post. Le quiz teste les connaissances du lecteur avec des sc\u00e9narios terrain, des animations de feedback, et les cons\u00e9quences des mauvaises r\u00e9ponses.
                    </div>
                  </div>

                  <div style={{ fontSize: 11, fontWeight: 600, color: C.primary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
                    Brief de g\u00e9n\u00e9ration quiz
                  </div>
                  <div style={{
                    padding: 14, background: C.card, borderRadius: 10,
                    border: `1px solid ${C.border}`, marginBottom: 10,
                    fontSize: 12, lineHeight: 1.7, color: C.muted,
                    fontFamily: "'JetBrains Mono', monospace",
                    whiteSpace: "pre-line", maxHeight: 350, overflowY: "auto",
                  }}>
                    {`Cr\u00e9e un artifact React (.jsx) quiz interactif pour le post #${selectedPost.id}.

SUJET DU POST : ${selectedPost.pilier} \u2014 ${selectedPost.type}
HOOK : ${selectedPost.hookCat}
CONTENU DU POST :
${selectedPost.texte?.substring(0, 200)}...

FORMAT DU QUIZ :
- 5 questions bas\u00e9es sur des situations terrain r\u00e9elles
- 2 choix par question (A ou B)
- Animation de feedback : vert + pulse si correct, rouge + shake si mauvais
- Si mauvaise r\u00e9ponse : afficher la cons\u00e9quence terrain + co\u00fbt estim\u00e9
- Source acad\u00e9mique sous chaque r\u00e9ponse
- Score final avec verdict personnalis\u00e9
- CTA vers https://www.systeme1-immo.com

CHARTE GRAPHIQUE OBLIGATOIRE :
const C = { bg: "#15161E", card: "#1E2029", primary: "#72AAEE", primaryDark: "#4D8BD5", orange: "#E4763F", text: "#F0F0F0", muted: "#ABABAB", border: "#2F3241", success: "#4ADE80", danger: "#EF4444" }
Police : Inter
Animations CSS : @keyframes shake, fadeIn, pulse, slideUp

STRUCTURE REACT :
- import { useState } from "react"
- Composants : ProgressBar, ChoixButton, ResultatFeedback, ScoreFinal
- \u00c9tapes : intro \u2192 quiz \u2192 score
- export default function Quiz...()

DONN\u00c9ES NORDINE : 53 ventes solo 2023, 50% PDM 5 ans, +4,5% au-dessus estimation
R\u00c8GLE : JAMAIS de mots tech/IA/digital

Utilise le mod\u00e8le de quiz-cerveau-client.jsx comme r\u00e9f\u00e9rence.`}
                  </div>
                  <CopyBtn
                    text={`Cr\u00e9e un artifact React (.jsx) quiz interactif pour le post #${selectedPost.id}.\n\nSUJET DU POST : ${selectedPost.pilier} \u2014 ${selectedPost.type}\nHOOK : ${selectedPost.hookCat}\nCONTENU DU POST :\n${selectedPost.texte?.substring(0, 200)}...\n\nFORMAT DU QUIZ :\n- 5 questions bas\u00e9es sur des situations terrain r\u00e9elles\n- 2 choix par question (A ou B)\n- Animation de feedback : vert + pulse si correct, rouge + shake si mauvais\n- Si mauvaise r\u00e9ponse : afficher la cons\u00e9quence terrain + co\u00fbt estim\u00e9\n- Source acad\u00e9mique sous chaque r\u00e9ponse\n- Score final avec verdict personnalis\u00e9\n- CTA vers https://www.systeme1-immo.com\n\nCHARTE GRAPHIQUE OBLIGATOIRE :\nconst C = { bg: "#15161E", card: "#1E2029", primary: "#72AAEE", primaryDark: "#4D8BD5", orange: "#E4763F", text: "#F0F0F0", muted: "#ABABAB", border: "#2F3241", success: "#4ADE80", danger: "#EF4444" }\nPolice : Inter\nAnimations CSS : @keyframes shake, fadeIn, pulse, slideUp\n\nSTRUCTURE REACT :\n- import { useState } from "react"\n- Composants : ProgressBar, ChoixButton, ResultatFeedback, ScoreFinal\n- \u00c9tapes : intro \u2192 quiz \u2192 score\n- export default function Quiz...()\n\nDONN\u00c9ES NORDINE : 53 ventes solo 2023, 50% PDM 5 ans, +4,5% au-dessus estimation\nR\u00c8GLE : JAMAIS de mots tech/IA/digital\n\nUtilise le mod\u00e8le de quiz-cerveau-client.jsx comme r\u00e9f\u00e9rence.`}
                    label="Copier le brief quiz interactif"
                  />
                </div>
              )}
            </>
          ) : (
            /* \u2550\u2550\u2550 FUTURE POST \u2014 GENERATION BRIEF \u2550\u2550\u2550 */
            <div>
              <div style={{
                padding: 20, background: `${C.orange}08`, borderRadius: 12,
                border: `1px solid ${C.orange}30`, marginBottom: 16,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>\u26a1</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 4 }}>
                  Post \u00e0 g\u00e9n\u00e9rer
                </div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                  Copie le brief ci-dessous et colle-le dans Claude pour g\u00e9n\u00e9rer ce post.
                </div>
              </div>

              <div style={{ fontSize: 12, fontWeight: 600, color: C.primary, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Brief de g\u00e9n\u00e9ration
              </div>
              <div style={{
                padding: 16, background: C.card, borderRadius: 12,
                border: `1px solid ${C.border}`, marginBottom: 12,
                fontSize: 12, lineHeight: 1.7, color: C.muted,
                fontFamily: "'JetBrains Mono', monospace", whiteSpace: "pre-line",
              }}>
                {genererBriefPost(selectedPost)}
              </div>
              <CopyBtn text={genererBriefPost(selectedPost)} label="Copier le brief de g\u00e9n\u00e9ration" />
            </div>
          )}
        </div>
      )}

      {/* ═══ NEWSLETTER DÉTAIL ═══ */}
      {selectedNewsletter && (
        <div>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16,
          }}>
            <span style={{
              fontSize: 11, padding: "4px 10px", borderRadius: 6,
              background: `${C.orange}15`, color: C.orange, border: `1px solid ${C.orange}30`,
            }}>
              Insight Immo #{selectedNewsletter.id}
            </span>
            <span style={{
              fontSize: 11, padding: "4px 10px", borderRadius: 6,
              background: C.card, color: C.muted, border: `1px solid ${C.border}`,
            }}>
              {selectedNewsletter.concept}
            </span>
          </div>

          {selectedNewsletter.texte ? (
            <>
              <div style={{
                padding: 20, background: C.card, borderRadius: 12,
                border: `1px solid ${C.border}`, marginBottom: 12,
                fontSize: 14, lineHeight: 1.8, color: C.text,
                whiteSpace: "pre-line",
              }}>
                {selectedNewsletter.texte}
              </div>
              <CopyBtn text={selectedNewsletter.texte} label="Copier la newsletter compl\u00e8te" />
            </>
          ) : (
            <div>
              <div style={{
                padding: 20, background: `${C.orange}08`, borderRadius: 12,
                border: `1px solid ${C.orange}30`, marginBottom: 16,
                textAlign: "center",
              }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>\u26a1</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 4 }}>
                  Newsletter \u00e0 g\u00e9n\u00e9rer
                </div>
                <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                  Copie le brief ci-dessous et colle-le dans Claude.
                </div>
              </div>
              <div style={{
                padding: 16, background: C.card, borderRadius: 12,
                border: `1px solid ${C.border}`, marginBottom: 12,
                fontSize: 12, lineHeight: 1.7, color: C.muted,
                fontFamily: "'JetBrains Mono', monospace", whiteSpace: "pre-line",
              }}>
                {genererBriefNewsletter(selectedNewsletter.semaine)}
              </div>
              <CopyBtn text={genererBriefNewsletter(selectedNewsletter.semaine)} label="Copier le brief newsletter" />
            </div>
          )}
        </div>
      )}

      {/* ═══ VEILLE MENSUELLE ═══ */}
      {!selectedPost && !selectedNewsletter && view === "veille" && (
        <div>
          {/* En-t\u00eate veille */}
          <div style={{
            padding: 20, background: `linear-gradient(135deg, ${C.card}, ${C.bg})`,
            borderRadius: 12, border: `1px solid ${C.primary}30`,
            marginBottom: 20, position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: -30, right: -30, width: 150, height: 150,
              borderRadius: "50%", background: `radial-gradient(circle, ${C.primary}10 0%, transparent 70%)`,
            }} />
            <div style={{ fontSize: 11, fontWeight: 700, color: C.primary, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, zIndex: 1, position: "relative" }}>
              Veille strat\u00e9gique \u2014 {moisLabel}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: C.text, marginBottom: 6, zIndex: 1, position: "relative" }}>
              {estMois1 ? "Veille du mois en cours" : `Pr\u00e9parer la s\u00e9rie ${moisLabel}`}
            </div>
            <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.6, zIndex: 1, position: "relative" }}>
              {estMois1
                ? "Copie le brief ci-dessous et colle-le dans Claude pour obtenir ta veille triple flux. Les r\u00e9sultats alimenteront tes 12 posts et 4 newsletters."
                : `Lance la veille AVANT de g\u00e9n\u00e9rer les contenus de ${moisLabel}. Les r\u00e9sultats serviront de base pour toute la s\u00e9rie.`}
            </div>
          </div>

          {/* Cycle mensuel */}
          <div style={{ fontSize: 12, fontWeight: 600, color: C.orange, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
            Cycle de production mensuel
          </div>
          <div style={{ display: "grid", gap: 6, marginBottom: 20 }}>
            {[
              { step: "1", label: "Veille", desc: "Lancer le brief ci-dessous \u2192 obtenir les 3 flux", color: C.primary, active: true },
              { step: "2", label: "S\u00e9lection", desc: "Choisir les meilleurs angles pour les 4 semaines", color: C.primary, active: false },
              { step: "3", label: "Posts", desc: "G\u00e9n\u00e9rer les 12 posts depuis l'onglet Posts", color: C.primary, active: false },
              { step: "4", label: "Newsletters", desc: "G\u00e9n\u00e9rer les 4 newsletters depuis l'onglet Newsletters", color: C.orange, active: false },
            ].map((s) => (
              <div key={s.step} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "10px 14px", borderRadius: 8,
                background: s.active ? `${s.color}10` : C.card,
                border: `1px solid ${s.active ? s.color + "40" : C.border}`,
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: s.active ? `linear-gradient(135deg, ${s.color}, ${C.primaryDark})` : `${s.color}15`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: s.active ? "white" : s.color,
                }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: s.active ? C.text : C.muted }}>{s.label}</div>
                  <div style={{ fontSize: 11, color: C.mutedDark }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Brief de veille */}
          <div style={{ fontSize: 12, fontWeight: 600, color: C.primary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
            Brief de veille \u2014 {moisLabel}
          </div>
          <div style={{
            padding: 16, background: C.card, borderRadius: 12,
            border: `1px solid ${C.border}`, marginBottom: 10,
            fontSize: 12, lineHeight: 1.7, color: C.muted,
            fontFamily: "'JetBrains Mono', monospace",
            whiteSpace: "pre-line", maxHeight: 400, overflowY: "auto",
          }}>
            {genererBriefVeilleMensuelle(moisLabel)}
          </div>
          <CopyBtn text={genererBriefVeilleMensuelle(moisLabel)} label={`Copier le brief veille \u2014 ${moisLabel}`} />

          {/* S\u00e9parateur */}
          <div style={{ margin: "24px 0", height: 1, background: `linear-gradient(90deg, transparent, ${C.orange}30, transparent)` }} />

          {/* R\u00e9cap du mois */}
          <div style={{ fontSize: 12, fontWeight: 600, color: C.orange, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 10 }}>
            R\u00e9partition du mois \u2014 {moisLabel}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 12 }}>
            {[
              { label: "Posts Terrain", count: 4, color: C.primary },
              { label: "Posts Cerveau", count: 4, color: C.primary },
              { label: "Posts Humain", count: 2, color: C.orange },
              { label: "Post M\u00e9tier", count: 1, color: C.orange },
              { label: "Post Conversion", count: 1, color: C.success },
              { label: "Newsletters", count: 4, color: C.warning },
            ].map((item) => (
              <div key={item.label} style={{
                padding: "10px 12px", background: C.card, borderRadius: 8,
                border: `1px solid ${C.border}`,
              }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: item.color }}>{item.count}</div>
                <div style={{ fontSize: 11, color: C.muted }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Brief newsletter mensuel */}
          <div style={{ marginTop: 20, fontSize: 12, fontWeight: 600, color: C.primary, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>
            Brief g\u00e9n\u00e9ration s\u00e9rie compl\u00e8te
          </div>
          <div style={{
            padding: 16, background: C.card, borderRadius: 12,
            border: `1px solid ${C.border}`, marginBottom: 10,
            fontSize: 12, lineHeight: 1.7, color: C.muted,
            fontFamily: "'JetBrains Mono', monospace",
            whiteSpace: "pre-line", maxHeight: 300, overflowY: "auto",
          }}>
            {`G\u00e9n\u00e8re la s\u00e9rie compl\u00e8te du mois de ${moisLabel} pour Nordine Mouaouia (Syst\u00e8me 1 Immo).

\u00c0 PRODUIRE :
- 12 posts LinkedIn (3/semaine : mardi autorit\u00e9, jeudi \u00e9ducation, samedi connexion)
- 4 newsletters Insight Immo (1/semaine, mercredi)
- 12 prompts visuels (1 par post, charte #15161E/#72AAEE/#E4763F)

UTILISE les r\u00e9sultats de la veille mensuelle pour :
- Ancrer chaque post dans l'actualit\u00e9 (taux, r\u00e9glementation, march\u00e9)
- Sourcer les newsletters avec des \u00e9tudes r\u00e9centes
- Trouver des angles diff\u00e9renciants que les concurrents n'ont pas

R\u00c9PARTITION DES PILIERS :
- Le Terrain Parle (4 posts) : exp\u00e9riences terrain, cas concrets, r\u00e9sultats
- Le Cerveau du Client (4 posts) : neurosciences, biais cognitifs, psychologie
- L'Humain Derri\u00e8re les Chiffres (2 posts) : storytelling, valeurs, parcours
- Le M\u00e9tier M\u00e9rite Mieux (1 post) : \u00e9l\u00e9vation du m\u00e9tier, formation
- Conversion (1 post) : teaser, CTA, lead magnet

R\u00c8GLES :
- Tutoiement sur LinkedIn, vouvoiement en newsletter
- JAMAIS de mots : IA, algorithme, digital, tech, proptech
- Donn\u00e9es Nordine : 53 ventes solo 2023, 50% PDM 5 ans, 300K+ CA 6 ans
- Chaque post avec prompt visuel charte sombre (#15161E)
- Chaque newsletter avec 11 sections (voir template Insight Immo)`}
          </div>
          <CopyBtn text={`G\u00e9n\u00e8re la s\u00e9rie compl\u00e8te du mois de ${moisLabel} pour Nordine Mouaouia (Syst\u00e8me 1 Immo).\n\n\u00c0 PRODUIRE :\n- 12 posts LinkedIn (3/semaine : mardi autorit\u00e9, jeudi \u00e9ducation, samedi connexion)\n- 4 newsletters Insight Immo (1/semaine, mercredi)\n- 12 prompts visuels (1 par post, charte #15161E/#72AAEE/#E4763F)\n\nUTILISE les r\u00e9sultats de la veille mensuelle pour :\n- Ancrer chaque post dans l'actualit\u00e9 (taux, r\u00e9glementation, march\u00e9)\n- Sourcer les newsletters avec des \u00e9tudes r\u00e9centes\n- Trouver des angles diff\u00e9renciants que les concurrents n'ont pas\n\nR\u00c9PARTITION DES PILIERS :\n- Le Terrain Parle (4 posts)\n- Le Cerveau du Client (4 posts)\n- L'Humain Derri\u00e8re les Chiffres (2 posts)\n- Le M\u00e9tier M\u00e9rite Mieux (1 post)\n- Conversion (1 post)\n\nR\u00c8GLES :\n- Tutoiement sur LinkedIn, vouvoiement en newsletter\n- JAMAIS de mots : IA, algorithme, digital, tech, proptech\n- Donn\u00e9es Nordine : 53 ventes solo 2023, 50% PDM 5 ans, 300K+ CA 6 ans\n- Chaque post avec prompt visuel charte sombre (#15161E)\n- Chaque newsletter avec 11 sections (voir template Insight Immo)`} label={`Copier le brief s\u00e9rie compl\u00e8te \u2014 ${moisLabel}`} />
        </div>
      )}

      {/* Footer */}
      <div style={{
        marginTop: 40, height: 1,
        background: `linear-gradient(90deg, transparent, ${C.primary}25, transparent)`,
      }} />
      <div style={{ paddingTop: 12, textAlign: "center", fontSize: 11, color: C.mutedDark }}>
        SYSTEME1-IMMO™ © {new Date().getFullYear()} · Cockpit Éditorial v3
      </div>
    </div>
  );
}
