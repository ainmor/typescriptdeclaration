//import * as _ from 'lodash';
import * as communicatorModularUMD from 'communicatorModularUMD';
import * as communicatorModularAMD from 'communicatorModularAMD';
import * as communicatorModularCJS from 'communicatorModularCJS';

class Communicator {
  constructor() {}
  greet(message: string) {
    // return '<h1>' + _.toUpper(message) + '</h1>';
    // var foo: communicatorGlobal;
    // return communicatorGlobal(message);
    // return communicatorGlobal.greet(message);

    // let _settings = new communicatorGlobal.Settings(message);
    // communicatorGlobal.settings = _settings;
    // return communicatorGlobal.greet();
    // return communicatorModularUMD.otherFunctions.goodbye();
    //return communicatorModularUMD.greet(message);

    //return communicatorModularAMD.greet(message);
    return communicatorModularCJS.greet(message);
  }
}

var communicator = new Communicator();
document!.body.innerHTML = communicator.greet('Hello World!');
