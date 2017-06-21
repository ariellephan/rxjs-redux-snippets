# RxJS and Redux Observables Atom snippets package

Ported for Atom from https://github.com/alanvivona/rxjs-snippets-vscode with addition of [redux-observable](https://github.com/redux-observable/redux-observable) snippets.

### RxJs Snippets added:

 #### * rxjs.Observable.from.map.filter `rxomap`
 #### * rxjs.Observable.of `rxoo`
 #### * rxjs.Observable.fromEvent `rxofe`
 #### * rxjs.Observable.fromEventPattern `rxofep`
 #### * rxjs.Observable.fromCallback `rxofcall`
 #### * rxjs.Observable.fromNodeCallback `rxofnode`
 #### * rxjs.Observable.create `rxoc`
 #### * rxjs.Observable.empty `rxoem`
 #### * rxjs.Observable.fromPromise `rxofp`
 #### * rxjs.Observable.interval `rxoint`
 #### * rxjs.Observable.range `rxorange`
 #### * rxjs.Observable.timer `rxotime`
 #### * rxjs.Observable.prototype.toCallback `rxotocall`

### Redux-Observable Snippets:

#### redux-observable combined root file - `rdo-root`
```javascript
/**
 * Import all your Epics and Reducers into single file each, which then
 * exports the root Epic
 */
import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import ${1:ObjectName1}, { ${1:ObjectName1}Epic } from './${1:ObjectName1}';
import ${2:ObjectName2}, { ${2:ObjectName2}Epic } from './${2:ObjectName2}';

export const rootEpic = combineEpics(
  ${1:ObjectName1}Epic,
  ${2:ObjectName2}Epic
);

export const rootReducer = combineReducers({
  ${1:ObjectName1},
  ${2:ObjectName2}
});

```
#### redux-observable configure store - `rdo-store`
```javascript
/**
 * configureStore
 */
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './modules/root';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
  );


return store;
}

```
![RxJs Snippets Example](https://f.cloud.github.com/assets/69169/2290250/c35d867a-a017-11e3-86be-cd7c5bf3ff9b.gif)
