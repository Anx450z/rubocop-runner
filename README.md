# Rubocop Runner

This is a VS Code extension that provides options to run Rubocop commands on Ruby files. The extension adds two commands to the command palette:

- Run Rubocop: Runs the rubocop <path> -a command on the currently open Ruby file.
- Run Rubocop (all cops): Runs the rubocop <path> -A command on the currently open Ruby file.

## Requirements

Ruby must be installed on your system and the rubocop gem must be installed globally.

## Usage

To use this extension, open a Ruby file in VS Code and right-click on the editor to bring up the context menu. You should see two new options: Run Rubocop and Run Rubocop (all cops). Click on either of these options to run the corresponding Rubocop command on the current file.

The Rubocop command will be executed in a new VS Code terminal named Rubocop, and the output will be displayed in the terminal.

## Issues

If you encounter any issues with this extension, please report them on the GitHub repository.
`https://github.com/Anx450z/rubocop-runner`

## Credits

This extension was created by Your Ankur Singh Chauhan
