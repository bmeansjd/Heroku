/**
 * Created by bcuser on 5/22/17.
 */

/**
 * Created by charlie on 5/7/17.
 *
 * Initialize it like this:
 *
 *   import ElfDebugEnzyme from '../ElfDebugEnzyme';
 *   const elfDebugEnzyme = new ElfDebugEnzyme(true, 'Foo.test.js');
 *
 * And then use it:
 *
 *   elfDebugEnzyme.getIndex(wrapper, 'div#addressShow', 3, false);
 */
export default class ElfDebug {
    constructor(showInit=false) {
        this.showData = showInit;
    }

    getFirst(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).first().debug();
            console.log(paragraphData);
        }
    }

    getLast(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).last().debug();
            console.log(paragraphData);
        }

    }

    getAll(wrapper, element) {
        if (this.showData) {
            const paragraphData = wrapper.find(element).debug();
            console.log(paragraphData);
        }
    }

    getIndex(wrapper, index) {
        if (this.showData) {
            var paragraphData = wrapper.find('form').childAt(index).debug();
            console.log(paragraphData);
        }
    }

}

