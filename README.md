# Site vitrine — Centre Socioculturel de Ganges (ASCG)

Site web statique (HTML/CSS/JS, sans framework) pour présenter l'**Association
Socioculturelle du Canton de Ganges (ASCG)**, le projet de construction de son futur
**centre socioculturel** et la **collecte de fonds** en ligne.

> Note : pour les démarches administratives, le projet est présenté comme un **centre
> socioculturel** (et non une mosquée), conformément aux statuts de l'association.
> Le bâtiment inclut notamment un espace de prière parmi ses activités.

En ligne : https://benyachou.github.io/mosquee-ganges/

## Structure

```
mosquee-ganges/
├── index.html          → accueil (héros, collecte, piliers, carrousel, teaser activités)
├── projet.html         → le projet (galerie, plans, chronologie)
├── activites.html      → activités en onglets (enfants / adultes / solidarité)
├── dons.html           → faire un don (CotizUp, HelloAsso, virement, partage)
├── contact.html        → contact + carte OpenStreetMap
├── styles.css          → le style (direction « Pierre & Lumière »)
├── main.js             → JS partagé (nav, carrousel, onglets, compteurs, lightbox)
├── collecte.js         → ⭐ chiffres de la cagnotte — À METTRE À JOUR ICI
├── 404.html            → page « introuvable » servie par GitHub Pages
├── robots.txt          → autorise l'indexation + pointe vers le sitemap
├── sitemap.xml         → liste des pages pour les moteurs de recherche
└── assets/             → images des plans (extraites du PDF de l'architecte) + logos
```

## Mettre à jour les chiffres de la collecte

**C'est automatique.** Une GitHub Action (`.github/workflows/maj-cagnotte.yml`)
lit la page de [la cagnotte](https://www.cotizup.com/@ascg-ganges/une-pierre-pour-notre-mosquee)
toutes les 6 heures et met à jour `collecte.js` si les chiffres ont bougé
(CotizUp n'a pas d'API : le robot lit le HTML public de la page).
Pour forcer une mise à jour immédiate : onglet *Actions* du dépôt GitHub →
« MAJ cagnotte CotizUp » → *Run workflow*.
Seuls `objectif` et `url` se changent encore à la main dans `collecte.js`.

## Voir le site en local

Double-cliquez simplement sur `index.html`, il s'ouvre dans le navigateur.

## ⚠️ À compléter (optionnel — le site est livrable en l'état)

- **Dons** (`dons.html`) : le site indique « RIB envoyé sur demande par
  e-mail ou WhatsApp ». Pour afficher l'IBAN directement, remplacez ce
  paragraphe dans la carte « Virement ou sur place ».
- **Activités** (`activites.html`) : jours et horaires réels des cours
  (« Horaires à venir » s'affiche en attendant) — voir les commentaires
  `[À COMPLÉTER]` dans le fichier.
- **Réseaux sociaux** : les liens Facebook / Instagram ont été retirés des
  pieds de page (aucune page officielle trouvée). Si l'association en crée,
  rajoutez les liens à côté de WhatsApp dans le bloc `footer-social` des
  5 pages.

Déjà branchés : cagnotte CotizUp, formulaire de don HelloAsso, nom officiel, logo,
adresse (4 Rue des Soyeux, 34190 Ganges), e-mail, téléphone, carte, partage WhatsApp.

## Images

Les images viennent du PDF de l'architecte. Elles ont été rognées et optimisées pour
le web (1,8 Mo au total). Pour les remplacer, gardez les mêmes noms de fichiers dans
`assets/`.
