import wescheme from '../src/languages/wescheme';
import CodeMirrorBlocks from '../src/CodeMirrorBlocks';
import './example-page.less';
import bigExampleCode from './ast-test.rkt';


const smallExampleCode = `(and foo)`;

const useBigCode = false;
const exampleCode = useBigCode ? bigExampleCode : smallExampleCode;

// grab the DOM Node to host the editor, and use it to instantiate
const container = document.getElementById('cmb-editor');
const editor = new CodeMirrorBlocks(container, {collapseAll: false, value: exampleCode}, wescheme);

// for debugging purposes
window.editor = editor