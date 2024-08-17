markdown
Copy code
# MoyassFitness

## Installation et Exécution

Ce guide vous explique comment configurer votre environnement pour exécuter l'application React Native MoyassFitness.

### Prérequis

Assurez-vous d'avoir les outils suivants installés sur votre machine :

1. **Node.js** (version LTS recommandée) et npm
2. **Java Development Kit (JDK) 17**
3. **Android Studio** avec le SDK Android

### Étape 1 : Installation des outils nécessaires

#### 1.1 Installer Node.js et npm

- Téléchargez et installez Node.js depuis [nodejs.org](https://nodejs.org/).
- Vérifiez l'installation en exécutant dans le terminal :
  ```bash
  node -v
  npm -v
1.2 Installer JDK 17
Téléchargez et installez JDK 17 depuis Eclipse Adoptium ou Oracle.
Configurez la variable d'environnement JAVA_HOME :
Ouvrez "Paramètres système avancés" > "Variables d'environnement".
Créez une nouvelle variable système nommée JAVA_HOME pointant vers le répertoire d'installation du JDK 17 (par exemple, C:\Program Files\Eclipse Adoptium\jdk-17.0.x-hotspot).
Ajoutez %JAVA_HOME%\bin à la variable Path.
1.3 Installer Android Studio
Téléchargez et installez Android Studio depuis developer.android.com.
Installez les composants recommandés, y compris le SDK Android et les outils de ligne de commande.
Configurez la variable d'environnement ANDROID_HOME :
Créez une variable système nommée ANDROID_HOME pointant vers le répertoire du SDK Android (par exemple, C:\Users\VotreNomUtilisateur\AppData\Local\Android\Sdk).
Ajoutez les chemins suivants à la variable Path :
bash
Copy code
%ANDROID_HOME%\platform-tools
%ANDROID_HOME%\emulator
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\build-tools
Étape 2 : Cloner le projet et installer les dépendances
Clonez ce dépôt :
bash
Copy code
git clone https://github.com/votre-nom-utilisateur/MoyassFitness.git
cd MoyassFitness
Installez les dépendances npm :
bash
Copy code
npm install
Étape 3 : Exécution du projet
Démarrer le serveur Metro
Pour démarrer le serveur Metro, utilisez la commande suivante :
bash
Copy code
npm start
Exécuter l'application sur Android
Assurez-vous qu'un émulateur Android est lancé ou qu'un appareil est connecté en mode débogage USB.
Dans une autre fenêtre de terminal, exécutez :
bash
Copy code
npx react-native run-android
Résolution des problèmes courants
Arrêter un port déjà utilisé
Si vous rencontrez l'erreur EADDRINUSE: address already in use :::8081, cela signifie que le port 8081 est déjà utilisé. Voici comment le libérer :

Trouver le processus utilisant le port 8081 :

Ouvrez un terminal ou PowerShell et tapez :
bash
Copy code
netstat -ano | findstr :8081
Notez le PID du processus affiché.
Terminer le processus :

Tuez le processus en utilisant son PID :
bash
Copy code
taskkill /PID <PID> /F
Remplacez <PID> par le numéro du PID trouvé.
Changer le port du serveur Metro
Si vous préférez utiliser un autre port, vous pouvez démarrer le serveur Metro sur un port différent :
bash
Copy code
npm start -- --port 8082
Assurez-vous de spécifier ce port lors de l'exécution de l'application :
bash
Copy code
npx react-native run-android --port 8082
Contribuer
Les contributions sont les bienvenues ! Merci de soumettre une pull request pour toute amélioration ou correction.

Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

perl
Copy code

Tu peux maintenant copier-coller ce texte directement dans ton fichier `README.md` sur GitHub, et tout sera formaté correctement en Markdown. Cela permettra aux autres développeurs de suivre les étapes pour installer, configurer et exécuter ton projet React Native sans problème.




