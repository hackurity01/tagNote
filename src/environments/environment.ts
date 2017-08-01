// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBBcSCVsvN8PG5WLE4jgpchqJmuMD0IEv8',
    authDomain: 'tag-note.firebaseapp.com',
    databaseURL: 'https://tag-note.firebaseio.com',
    projectId: 'tag-note',
    storageBucket: 'tag-note.appspot.com',
    messagingSenderId: '508023166258'
  }
};
