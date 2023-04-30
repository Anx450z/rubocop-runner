import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    const runTerminal = (rubocopCmd: string) => {
        const terminals = vscode.window.terminals;
        let rubocopTerminal = terminals.find(
            terminal => terminal.name === 'Rubocop'
        );
        if (rubocopTerminal) {
            rubocopTerminal.sendText(rubocopCmd, true);
            rubocopTerminal.show();
        } else {
            rubocopTerminal = vscode.window.createTerminal({
                name: 'Rubocop'
            });
            rubocopTerminal.sendText(rubocopCmd, true);
            rubocopTerminal.show();
        }
    };

    context.subscriptions.push(
        vscode.commands.registerCommand('extension.runRubocop', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'ruby') {
                const filePath = editor.document.uri.fsPath;
                const rubocopCmd = `rubocop ${filePath} -a`;
                runTerminal(rubocopCmd);
            }
        }),

        vscode.commands.registerCommand('extension.runRubocopAll', () => {
            const editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'ruby') {
                const filePath = editor.document.uri.fsPath;
                const rubocopCmd = `rubocop ${filePath} -A`;
                runTerminal(rubocopCmd);
            }
        })
    );
}
