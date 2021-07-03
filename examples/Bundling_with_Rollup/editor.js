import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { javascript } from "@codemirror/lang-javascript";

import { EditorView, keymap } from "@codemirror/view";
import { defaultTabBinding } from "@codemirror/commands";

const doc = `if (true) {
    console.log("okay")
  } else {
    console.log("oh no")
}`

let tabHandling = new EditorView({
    state: EditorState.create({
        doc,
        extensions: [basicSetup, javascript(), keymap.of([defaultTabBinding])]
    }),
    parent: document.body
})
