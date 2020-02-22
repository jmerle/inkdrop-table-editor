# Table Editor plugin for Inkdrop

[![Build Status](https://dev.azure.com/jmerle/inkdrop-table-editor/_apis/build/status/Build?branchName=master)](https://dev.azure.com/jmerle/inkdrop-table-editor/_build/latest?definitionId=21&branchName=master)
[![Latest release](https://img.shields.io/github/v/release/jmerle/inkdrop-table-editor)](https://my.inkdrop.app/plugins/table-editor)
[![License](https://img.shields.io/github/license/jmerle/inkdrop-table-editor)](https://github.com/jmerle/inkdrop-table-editor/blob/master/LICENSE)

This plugin greatly improves table editing in Inkdrop. It is built using [susisu/mte-kernel](https://github.com/susisu/mte-kernel) which is the text editor indepent part of [susisu/atom-markdown-table-editor](https://github.com/susisu/atom-markdown-table-editor) which this plugin is based on. Visit [mte-kernel's demo](https://susisu.github.io/mte-demo/) to play around with the table editing capabilities this plugin adds to Inkdrop.

## Install

```
ipm install table-editor
```

## Usage

The following commands are available (replace <kbd>Ctrl</kbd> with <kbd>Cmd</kbd> on macOS):

| Command                          | Description                   | Default keybinding                                                     |
| -------------------------------- | ----------------------------- | ---------------------------------------------------------------------- |
| `table-editor:format`            | Format the current table      |                                                                        |
| `table-editor:format-all`        | Format all tables             |                                                                        |
| `table-editor:escape`            | Exit the table                | <kbd>Ctrl</kbd> + <kbd>Enter</kbd>                                     |
| `table-editor:align-left`        | Left-align the column         | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Left</kbd>                     |
| `table-editor:align-right`       | Right-align the column        | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Right</kbd>                    |
| `table-editor:align-center`      | Center-align the column       | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Up</kbd>                       |
| `table-editor:align-none`        | Unset alignment of the column | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Down</kbd>                     |
| `table-editor:select-cell`       | Select the cell content       |                                                                        |
| `table-editor:move-left`         | Move a cell to the left       | <kbd>Ctrl</kbd> + <kbd>Left</kbd>                                      |
| `table-editor:move-right`        | Move a cell to the right      | <kbd>Ctrl</kbd> + <kbd>Right</kbd>                                     |
| `table-editor:move-up`           | Move a cell up                | <kbd>Ctrl</kbd> + <kbd>Up</kbd>                                        |
| `table-editor:move-down`         | Move a cell down              | <kbd>Ctrl</kbd> + <kbd>Down</kbd>                                      |
| `table-editor:next-cell`         | Move to the next cell         | <kbd>Tab</kbd>                                                         |
| `table-editor:previous-cell`     | Move to the previous cell     | <kbd>Shift</kbd> + <kbd>Tab</kbd>                                      |
| `table-editor:next-row`          | Move to the next row          | <kbd>Enter</kbd>                                                       |
| `table-editor:insert-row`        | Insert an empty row           |                                                                        |
| `table-editor:delete-row`        | Delete the row                |                                                                        |
| `table-editor:move-row-up`       | Move the row up               | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Up</kbd>    |
| `table-editor:move-row-down`     | Move the row down             | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Down</kbd>  |
| `table-editor:insert-column`     | Insert an empty column        |                                                                        |
| `table-editor:delete-column`     | Delete the column             |                                                                        |
| `table-editor:move-column-left`  | Move the column left          | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Left</kbd>  |
| `table-editor:move-column-right` | Move the column right         | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>Right</kbd> |

You can customize the keybindings by opening your `keymap.cson` file and adding keybindings as described [here](https://docs.inkdrop.app/manual/customizing-keybindings). The `table-editor:format-all` command should be bound to the `.CodeMirror textarea` selector, while all other commands should be bound to the `.CodeMirror.table-editor-active textarea` selector. See [keymaps/table-editor.json](./keymaps/table-editor.json) for this plugin's default keymap file in JSON format.

Most commands are also available through the context menu opened by right-clicking inside the editor and through the application menu (Plugins > Table Editor).

## Changelog

See the [GitHub releases](https://github.com/jmerle/inkdrop-table-editor/releases) for an overview of what changed in each update.

## Contributing

All contributions are welcome. Please read the [Contributing Guide](https://github.com/jmerle/inkdrop-table-editor/blob/master/CONTRIBUTING.md) first as it contains information regarding the tools used by the project and instructions on how to set up a development environment.
