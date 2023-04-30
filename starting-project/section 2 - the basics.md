1 - installer BootStrap

- npm i --save bootstrap@3 => si on souhaite une version specifique
- Pour prioriser le style de bootstrap modifier le fichier 'angular.json' ajouter ce qui suit:
  ...
  "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"],
  ...
