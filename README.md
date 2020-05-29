# Issue Description

This repository describes a reproducible bug in combination with `NoUISlider > v10.0.0` and `ionic 5.x`. 
As the `v10.0.0` is just fine, i assume, the issue was introduced in `v 10.1.0`, where some issues regarding "multitouch" where addressed

Note, that a combination of versions (i.e., the JS sources from `v14` and the CSS sources from `v10`) still work! However, i would like to use the latest version of this library.

# How to Install

1) clone the repository
2) run `npm install` to install all dependencies
3) run `ionic serve`
4) navigate to `localhost:8100` to see the **WORKING** example
5) now open `src/index.html` file and add comments to the **WORKING EXAMPLE** part and uncomment the **FAILING EXAMPLE**
6) save the file - the application should re-compile and reload automatically in your browser
7) notice a weird behavior with the slider
