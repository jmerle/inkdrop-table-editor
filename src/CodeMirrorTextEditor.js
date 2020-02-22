'use babel';

import { Point } from '@susisu/mte-kernel';
import { Pos } from 'codemirror';

// See https://doc.esdoc.org/github.com/susisu/mte-kernel/class/lib/text-editor.js~ITextEditor.html

export class CodeMirrorTextEditor {
  constructor(cm) {
    this.cm = cm;
  }

  /**
   * Gets the current cursor position.
   *
   * @returns {Point} A point object that represents the cursor position.
   */
  getCursorPosition() {
    const cursor = this.cm.doc.getCursor();
    return new Point(cursor.line, cursor.ch);
  }

  /**
   * Sets the cursor position to a specified one.
   *
   * @param {Point} pos - A point object which the cursor position is set to.
   * @returns {undefined}
   */
  setCursorPosition(pos) {
    this.cm.doc.setCursor(this.pointToPos(pos));
  }

  /**
   * Sets the selection range.
   * This method also expects the cursor position to be moved as the end of the selection range.
   *
   * @param {Range} range - A range object that describes a selection range.
   * @returns {undefined}
   */
  setSelectionRange(range) {
    this.cm.doc.setSelection(
      this.pointToPos(range.start),
      this.pointToPos(range.end),
    );
  }

  /**
   * Gets the last row index of the text editor.
   *
   * @returns {number} The last row index.
   */
  getLastRow() {
    return this.cm.doc.lastLine() + 1;
  }

  /**
   * Checks if the editor accepts a table at a row to be editted.
   * It should return `false` if, for example, the row is in a code block (not Markdown).
   *
   * @param {number} row - A row index in the text editor.
   * @returns {boolean} `true` if the table at the row can be editted.
   */
  acceptsTableEdit() {
    return true;
  }

  /**
   * Gets a line string at a row.
   *
   * @param {number} row - Row index, starts from `0`.
   * @returns {string} The line at the specified row.
   * The line must not contain an EOL like `"\n"` or `"\r"`.
   */
  getLine(row) {
    return this.cm.doc.getLine(row);
  }

  /**
   * Inserts a line at a specified row.
   *
   * @param {number} row - Row index, starts from `0`.
   * @param {string} line - A string to be inserted.
   * This must not contain an EOL like `"\n"` or `"\r"`.
   * @return {undefined}
   */
  insertLine(row, line) {
    if (row < this.getLastRow()) {
      this.cm.doc.replaceRange(line + '\n', new Pos(row, 0));
    } else {
      this.cm.doc.replaceRange('\n' + line, new Pos(row));
    }
  }

  /**
   * Deletes a line at a specified row.
   *
   * @param {number} row - Row index, starts from `0`.
   * @returns {undefined}
   */
  deleteLine(row) {
    this.cm.doc.replaceRange('', new Pos(row, 0), new Pos(row + 1, 0));
  }

  /**
   * Replace lines in a specified range.
   *
   * @param {number} startRow - Start row index, starts from `0`.
   * @param {number} endRow - End row index.
   * Lines from `startRow` to `endRow - 1` is replaced.
   * @param {Array<string>} lines - An array of string.
   * Each strings must not contain an EOL like `"\n"` or `"\r"`.
   * @returns {undefined}
   */
  replaceLines(startRow, endRow, lines) {
    for (let i = startRow; i < endRow; i++) {
      this.cm.doc.replaceRange(
        lines[i - startRow],
        new Pos(i, 0),
        new Pos(i, this.getLine(i).length),
      );
    }
  }

  /**
   * Batches multiple operations as a single undo/redo step.
   *
   * @param {Function} func - A callback function that executes some operations on the text editor.
   * @returns {undefined}
   */
  transact(func) {
    this.cm.operation(() => func());
  }

  /**
   * Converts a Point object into a CodeMirror Pos object.
   *
   * @param {Point} point - A point to convert.
   * @returns {Pos} The pos the point is converted to.
   */
  pointToPos(point) {
    return new Pos(point.row, point.column);
  }
}
