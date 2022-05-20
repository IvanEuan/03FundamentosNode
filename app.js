const { multiplication } = require('./helpers/multiplication');
const argv = require('./config/yargs');

multiplication(argv.b, argv.l, argv.t)
    .then(response => console.log(response))
    .catch(error => console.error(error));
