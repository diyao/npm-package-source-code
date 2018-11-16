const ISIOS = Symbol('Context#isIos');

module.exports = {
    get isIos() {
        if (!this[ISIOS]) {
            const iosReg = /iphone|ipad|ipod/i;
            this[ISIOS] = iosReg.test(this.get('user-agent'));
        }
        return this[ISIOS];
    },
};