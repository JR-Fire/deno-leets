# Run deno test by filter

The vscode runner is buggy and hangs on slow tests (you can't stop them and have to restart vscode), so run very slow tests from terminal (where you can stop them and the deno process dies and doesn't hang vscode)

```
deno test --filter '/^best to win counts the same$/' '/Users/oggie/deno-leets/adventofcode/2024/test/dec-13.test.ts' 
```