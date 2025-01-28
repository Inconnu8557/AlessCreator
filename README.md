# Portfolio Personnalisable

Ce projet est un modèle de portfolio personnalisable développé avec React, TypeScript et Tailwind CSS. Il permet de présenter vos compétences, expériences, projets et de fournir un moyen de contact.

## Fonctionnalités

- **Page d'accueil** : Présentez-vous avec une image et une brève description.
- **À propos** : Décrivez vos compétences et votre passion pour le développement.
- **Expériences** : Listez vos expériences professionnelles avec des détails sur vos rôles et responsabilités.
- **Projets** : Montrez vos projets avec des descriptions, technologies utilisées, et liens vers les démos et les dépôts.
- **Contact** : Fournissez des liens vers vos réseaux sociaux et un moyen de vous contacter.

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/votre-utilisateur/portfolio-personnalisable.git
    cd portfolio-personnalisable
    ```

2. Installez les dépendances :
    ```sh
    npm install
    ```

3. Lancez le serveur de développement :
    ```sh
    npm run dev
    ```

4. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Personnalisation

### Modifier les informations personnelles

Les informations personnelles et les sections du portfolio peuvent être modifiées dans les fichiers de composants situés dans le dossier [components](http://_vscodecontentref_/0).

- **Page d'accueil** : Modifiez [Home.tsx](http://_vscodecontentref_/1).
- **À propos** : Modifiez [About.tsx](http://_vscodecontentref_/2).
- **Expériences** : Modifiez [Experiences.tsx](http://_vscodecontentref_/3).
- **Projets** : Modifiez [Projects.tsx](http://_vscodecontentref_/4).
- **Navbar et Footer** : Modifiez [Navbar.tsx](http://_vscodecontentref_/5) et [Footer.tsx](http://_vscodecontentref_/6).

### Modifier les styles

Les styles sont gérés par Tailwind CSS et peuvent être modifiés dans le fichier [index.css](http://_vscodecontentref_/7) et le fichier de configuration [tailwind.config.js](http://_vscodecontentref_/8).

## Déploiement

Pour déployer votre portfolio, vous pouvez utiliser des services comme Vercel, Netlify ou GitHub Pages.

1. Construisez le projet :
    ```sh
    npm run build
    ```

2. Déployez le contenu du dossier [dist](http://_vscodecontentref_/9) généré par la commande précédente sur votre service de déploiement préféré.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des idées d'améliorations ou des bugs à signaler, n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.