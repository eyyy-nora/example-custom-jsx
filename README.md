# Custom JSX Example
Create your own JSX based DSL with plain typescript.

## Intention
This project showcases how typescript can be used to enable JSX for other
applications than rendering DOM content. JSX in typescript is very flexible,
generating structures that are, if leveraged correctly, not much different
from conventional ASTs, which are the basis of all parsing and linking
operations.

As such, it can be leveraged to create your own DSLs to abstract away builder
patterns or deeply nested function calls into a clean looking, xml like syntax.
This project aims to be a starting point for anyone who wants to leverage JSX
for their own scenarios and is purposefully bare bones.

If you want to check out an application of this concept, check out the jsx
use in the
[vreiheit-discord](https://github.com/eyyy-nora/vreiheit-bot/blob/refactor-monorepo/apps/server/src/services/managed-message/command.tsx)
repository.

## Scripts

### Install
```shell
pnpm i
```
### Run (development mode)
```shell
pnpm run dev
```
### Build
```shell
pnpm run build
```
### Start
```shell
pnpm run start
```

## Notes
This project uses typescript, with tsup as a bundler since custom jsx is more
likely to be provided as a library, rather than directly integrated into a
specific application.

It should work in any context, however and an example [babel configuration](example.babel.config.json)
has been provided, should you need it.
