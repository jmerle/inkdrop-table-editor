'use babel';

import { TableEditor, options, Alignment } from '@susisu/mte-kernel';
import { CodeMirrorTextEditor } from './CodeMirrorTextEditor';
import { Disposable, CompositeDisposable } from 'event-kit';

const NAMESPACE = 'table-editor';
const ACTIVE_CLASS = `${NAMESPACE}-active`;

export class Editor extends Disposable {
  constructor(cm) {
    super(() => this.destroy());

    this.cm = cm;

    this.originalTableHelpers = this.cm.getOption('tableHelpers');
    this.cm.setOption('tableHelpers', false);

    this.tableEditor = new TableEditor(new CodeMirrorTextEditor(this.cm));

    this.cursorActivityListener = () => this.update();
    this.cm.on('cursorActivity', this.cursorActivityListener);

    this.subscriptions = new CompositeDisposable();

    this.registerCommand('format-all', () => this.formatAll(), false);

    this.registerCommand('format', () => this.format());
    this.registerCommand('escape', () => this.escape());

    this.registerCommand('align-left', () => this.align(Alignment.LEFT));
    this.registerCommand('align-right', () => this.align(Alignment.RIGHT));
    this.registerCommand('align-center', () => this.align(Alignment.CENTER));
    this.registerCommand('align-none', () => this.align(Alignment.NONE));

    this.registerCommand('select-cell', () => this.selectCell());

    this.registerCommand('move-left', () => this.moveFocus(0, -1));
    this.registerCommand('move-right', () => this.moveFocus(0, 1));
    this.registerCommand('move-up', () => this.moveFocus(-1, 0));
    this.registerCommand('move-down', () => this.moveFocus(1, 0));

    this.registerCommand('next-cell', () => this.nextCell());
    this.registerCommand('previous-cell', () => this.previousCell());

    this.registerCommand('next-row', () => this.nextRow());
    this.registerCommand('insert-row', () => this.insertRow());
    this.registerCommand('delete-row', () => this.deleteRow());
    this.registerCommand('move-row-up', () => this.moveRow(-1));
    this.registerCommand('move-row-down', () => this.moveRow(1));

    this.registerCommand('insert-column', () => this.insertColumn());
    this.registerCommand('delete-column', () => this.deleteColumn());
    this.registerCommand('move-column-left', () => this.moveColumn(-1));
    this.registerCommand('move-column-right', () => this.moveColumn(1));
  }

  destroy() {
    this.cm.setOption('tableHelpers', this.originalTableHelpers);
    this.subscriptions.dispose();
    this.cm.off('cursorActivity', this.cursorActivityListener);
  }

  registerCommand(command, cb, tableOnly = true) {
    const targetElem = this.cm.display.wrapper;

    this.subscriptions.add(
      inkdrop.commands.add(targetElem, {
        [`${NAMESPACE}:${command}`]: () => {
          if (tableOnly && !targetElem.classList.contains(ACTIVE_CLASS)) {
            return;
          }

          cb();
        },
      }),
    );
  }

  update() {
    const multipleCursors = this.cm.listSelections().length > 1;
    const isInTable = this.tableEditor.cursorIsInTable(this.getOptions());

    const { classList } = this.cm.display.wrapper;

    if (!multipleCursors && isInTable) {
      classList.add(ACTIVE_CLASS);
    } else {
      classList.remove(ACTIVE_CLASS);
      this.tableEditor.resetSmartCursor();
    }
  }

  format() {
    this.tableEditor.format(this.getOptions());
  }

  formatAll() {
    this.tableEditor.formatAll(this.getOptions());
  }

  escape() {
    this.tableEditor.escape(this.getOptions());
  }

  align(alignment) {
    this.tableEditor.alignColumn(alignment, this.getOptions());
  }

  selectCell() {
    this.tableEditor.selectCell(this.getOptions());
  }

  moveFocus(rowOffset, columnOffset) {
    this.tableEditor.moveFocus(rowOffset, columnOffset, this.getOptions());
  }

  nextCell() {
    this.tableEditor.nextCell(this.getOptions());
  }

  previousCell() {
    this.tableEditor.previousCell(this.getOptions());
  }

  nextRow() {
    this.tableEditor.nextRow(this.getOptions());
  }

  insertRow() {
    this.tableEditor.insertRow(this.getOptions());
  }

  deleteRow() {
    this.tableEditor.deleteRow(this.getOptions());
  }

  moveRow(offset) {
    this.tableEditor.moveRow(offset, this.getOptions());
  }

  insertColumn() {
    this.tableEditor.insertColumn(this.getOptions());
  }

  deleteColumn() {
    this.tableEditor.deleteColumn(this.getOptions());
  }

  moveColumn(offset) {
    this.tableEditor.moveColumn(offset, this.getOptions());
  }

  getOptions() {
    return options({});
  }
}
