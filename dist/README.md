# Firebase Example

Sample ng library with a `service`.

When using a base service with no dependancies the library works as expected.

Tried to include `angularfire2` and `firebase` and running `ngl build` results in errors.

```
> firebase-example@0.0.1 prebuild /Users/mike/Documents/sketchthat-angular
> rimraf dist out-tsc


> firebase-example@0.0.1 build /Users/mike/Documents/sketchthat-angular
> node ./tasks/build

Copying `src` files into `build`
> Complete
Inlining resources
> Complete
Compiling code
> Complete
Copying typings + metadata to `dist`
> Complete
Generating bundles via rollup
The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'initializeApp' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
'app' is not exported by 'node_modules/firebase/app.js'
> Complete
Copying package files to `dist`
> Complete

> firebase-example@0.0.1 postbuild /Users/mike/Documents/sketchthat-angular
> rimraf build
```

The build is successful (With notices / warning), but when importing into a blank ng project it throws duplication errors.