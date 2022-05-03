// import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// // se define una propiedad dentro del objeto global windows. Se configura la
// // extensión de desarrollo para ir debuggeando. Esto permite usar el
// // Redux dev tools.
// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
