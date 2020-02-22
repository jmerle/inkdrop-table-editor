'use babel';

import { CompositeDisposable } from 'event-kit';
import { Editor } from './Editor';

let subscriptions = null;
let editor = null;

export function activate() {
  subscriptions = new CompositeDisposable();

  const activeEditor = inkdrop.getActiveEditor();
  if (activeEditor !== undefined) {
    editor = new Editor(activeEditor.cm);
  } else {
    subscriptions.add(
      inkdrop.onEditorLoad(e => {
        editor = new Editor(e.cm);
      }),
    );
  }

  subscriptions.add(
    inkdrop.onEditorUnload(() => {
      editor.dispose();
      editor = null;
    }),
  );
}

export function deactivate() {
  if (subscriptions !== null) {
    subscriptions.dispose();
    subscriptions = null;
  }

  if (editor !== null) {
    editor.dispose();
    editor = null;
  }
}
