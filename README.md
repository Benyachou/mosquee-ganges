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
└── assets/             → images des plans (extraites du PDF de l'architecte) + logos
```

## Mettre à jour les chiffres de la collecte

CotizUp n'a pas d'API publique : les montants affichés sont un instantané.
Ouvrez `collecte.js`, reportez les chiffres de
[la cagnotte](https://www.cotizup.com/@ascg-ganges/une-pierre-pour-notre-mosquee)
(collecté, donateurs, date), puis commit + push. Tout le site se met à jour.

## Voir le site en local

Double-cliquez simplement sur `index.html`, il s'ouvre dans le navigateur.

## ⚠️ À compléter

Cherchez `[À COMPLÉTER]` dans les fichiers HTML :

- **Dons** (`dons.html`) : **IBAN** du virement bancaire.
- **Activités** (`activites.html`) : jours et horaires réels des cours.
- **Réseaux sociaux** : liens Facebook / Instagram dans les pieds de page
  (WhatsApp déjà branché).

Déjà branchés : cagnotte CotizUp, formulaire de don HelloAsso, nom officiel, logo,
adresse (4 Rue des Soyeux, 34190 Ganges), e-mail, téléphone, carte, partage WhatsApp.

## Images

Les images viennent du PDF de l'architecte. Elles ont été rognées et optimisées pour
le web (1,8 Mo au total). Pour les remplacer, gardez les mêmes noms de fichiers dans
`assets/`.
