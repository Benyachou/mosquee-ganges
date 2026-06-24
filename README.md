# Site vitrine — Centre Socioculturel de Ganges (ASCG)

Site web statique (HTML/CSS) pour présenter l'**Association Socioculturelle du Canton
de Ganges (ASCG)** et le projet de construction de son futur **centre socioculturel**.

> Note : pour les démarches administratives, le projet est présenté comme un **centre
> socioculturel** (et non une mosquée), conformément aux statuts de l'association.
> Le bâtiment inclut notamment un espace de prière parmi ses activités.

## Structure

```
mosquee-ganges/
├── index.html          → toute la page
├── styles.css          → le style
└── assets/             → images des plans (extraites du PDF de l'architecte)
    ├── perspective-3d.jpg
    ├── insertion-paysagere.jpg
    ├── elevation-facade.jpg
    ├── plan-rdc.png
    └── plan-etage.png
```

## Voir le site en local

Double-cliquez simplement sur `index.html`, il s'ouvre dans le navigateur.

## ⚠️ À compléter avant la mise en ligne

Cherchez `[À COMPLÉTER]` dans `index.html` et remplacez par les vraies infos restantes :

- **Présentation** : histoire de l'ASCG, année de création, chiffres.
- **Activités** : remplacez les exemples par vos vraies activités (ou supprimez les cartes).
- **Dons** : **IBAN** et lien de don en ligne (HelloAsso…). Le bénéficiaire est déjà rempli.
- **Réseaux sociaux** : liens Facebook / Instagram dans le pied de page (WhatsApp déjà branché).

Déjà renseignés : nom officiel (Association Socioculturelle du Canton de Ganges), logo,
adresse (4 Rue des Soyeux, 34190 Ganges), e-mail, téléphone, carte centrée sur l'adresse.

## Mettre en ligne gratuitement (GitHub Pages)

Comme vos autres projets :

1. Créez un dépôt GitHub, par ex. `mosquee-ganges`.
2. Envoyez ces fichiers dans le dépôt (à la racine).
3. Dans **Settings → Pages**, source = branche `main`, dossier `/ (root)`.
4. Le site sera en ligne sur `https://<votre-compte>.github.io/mosquee-ganges/`.

C'est 100 % gratuit. Un vrai nom de domaine (ex. `mosquee-ganges.fr`) pourra être
ajouté plus tard si l'association le souhaite (~10–15 €/an).

## Images

Les images viennent du PDF de l'architecte. Elles ont été rognées et optimisées pour
le web (1,8 Mo au total). Pour les remplacer, gardez les mêmes noms de fichiers dans
`assets/`.
