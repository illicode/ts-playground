# Setup

```
npm install
```

# Do an exercice

## Work

Open `./src/ex1/index.ts` and convert it to correct TypeScript

## Check

Check will run jest to check you did not break the code.

And will run tsc to check TypeScript syntax is correct.

```
EX=1 node check
```

It watches the `index.ts` file so you can run it once per exercice and quit with `Ctrl+C` when result is successful

# Dev workflow

When creating an exercice, you just want UnitTests to pass.

Then run the command

```
EX=x npm run dev
```

With `x` the exercise number you're working on.