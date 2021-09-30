import React from 'react';
import { Provider } from 'react-redux';
import AppStack from './Navgation';
import store from './Redux/Createstore';

class App extends React.Component {
    render() {
       return (
         <Provider store={store}>
            <AppStack/>
         </Provider>
       )
    }

}

export default App;