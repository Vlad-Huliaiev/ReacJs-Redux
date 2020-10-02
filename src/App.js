import React from 'react';
import Create from './post/create.js';
import {Provider} from 'react-redux';
import store from "./store";

function App() {
    return (
        <Provider store = {store}>
            <div>
                <Create />
            </div>
        </Provider>
  );
}

export default App;
