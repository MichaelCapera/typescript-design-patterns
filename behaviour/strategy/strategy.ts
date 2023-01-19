/**Interface*/

interface Strategy {
    login(user: string, password: string): boolean;
}

/**Context*/

class LoginContext {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;

    }

    setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    login(user:string, password: string) : boolean {
        return this.strategy.login(user, password);
    }
}

/**Strategies*/

/** Class strategy 1 */

class loginDBStraty implements Strategy {
    login(user: string, password: string) {
        console.log('Request to data base ...');
        if(user === 'admin' && password === '12345678') {
            return true;
        }
        return false;
    }
}

/** Class strategy 2 */

class loginService implements Strategy {
    login(user: string, password: string) {
        console.log('Request to service ...');
        if(user === 'admin' && password === '12345678') {
            return true;
        }
        return false;
    }
}

/** Use strategy 1 */
const auth = new LoginContext(new loginDBStraty());
const resp = auth.login('admin', '12345678');
console.log("resp ", resp);

/** Use strategy 2 */
auth.setStrategy(new loginService());
const resp2 = auth.login('admin', '12345678');
console.log("resp2 ", resp2);
