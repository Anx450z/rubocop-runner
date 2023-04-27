import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.runRubocop', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'ruby') {
                const filePath = editor.document.uri.fsPath;
                const rubocopCmd = `rubocop ${filePath} -a`;
                const terminal = vscode.window.createTerminal({
                    name: 'Rubocop'
                });
                terminal.sendText(rubocopCmd, true);
                terminal.show();
            }
        }),
        vscode.commands.registerCommand('extension.runRubocopAll', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'ruby') {
                const filePath = editor.document.uri.fsPath;
                const rubocopCmd = `rubocop ${filePath} -A`;
                const terminal = vscode.window.createTerminal({
                    name: 'Rubocop'
                });
                terminal.sendText(rubocopCmd, true);
                terminal.show();
            }
        })
    );
}
