import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {appReducer} from "./appReducer";
import ReactComponentApp from "./ReactComponentApp"
import {createStoreWithLogger, getStateList} from "redux-helper"
import {Button} from "semantic-ui-react";
import {createStore} from 'redux';

const store = createStoreWithLogger("demoApp",appReducer,null, ["clicked1"]);

ReactDom.render(
    <div>
        <Provider store={store}>
            <ReactComponentApp/>
        </Provider>
        <Button
        onClick={() => {
            getStateList().forEach((value, key)=> {
                setTimeout(function() {
                    console.log(value, key);
                    ReactDom.render(
                        <div key={key}>
                            <Provider store={createStore(appReducer, value)}>
                                <ReactComponentApp/>
                            </Provider>
                        </div>,
                        document.getElementById('app')
                    )
                }, 500*key);

            });
        }}>Replay</Button>
    </div>,
    document.getElementById('app')
);