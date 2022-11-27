import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "redux/reducers";
import rootSaga from "redux/saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export default function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleware))
  );

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  return store;
}
