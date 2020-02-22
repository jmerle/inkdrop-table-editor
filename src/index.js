'use babel';

import { CompositeDisposable } from 'event-kit';
import { Editor } from './Editor';

let subscriptions = null;
let editor = null;

export const config = {
  formatType: {
    title: 'Formatting style',
    description:
      "Cell contents are not aligned with each other when 'Weak' is selected.",
    type: 'string',
    enum: ['Normal', 'Weak'],
    default: 'Normal',
  },
  headerAlignment: {
    title: 'Header alignment',
    type: 'string',
    enum: ['Inherit from column', 'Left', 'Right', 'Center'],
    default: 'Inherit from column',
  },
};

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
    }),
  );
}

export function deactivate() {
  subscriptions.dispose();
  editor.dispose();
}
