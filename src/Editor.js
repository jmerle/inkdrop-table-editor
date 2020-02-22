'use babel';

export class Editor {
  constructor(cm) {
    this.cm = cm;

    this.originalTableHelpers = cm.getOption('tableHelpers');
    cm.setOption('tableHelpers', false);
  }

  dispose() {
    this.cm.setOption('tableHelpers', this.originalTableHelpers);
  }
}
