import React from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter} from 'react-router-dom';
import {firebaseApp} from './firebase';
import App from './components/App';
import {Provider} from 'react-redux';
import { createStore} from 'redux' ;
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import createHistory from 'history/createBrowserHistory'
import reducer from './reducers';
import { logUser } from './actions';


const history = createHistory()
const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user =>
{

  if(user)
  {
    const {email} = user;
    store.dispatch(logUser(email))

  history.push('/app', { some: "state" });
 }
  else
  {
  history.push('/signin', { some: "state" });
}

})

ReactDOM.render(
<Provider store={store}>
<BrowserRouter >
<div>
<Route path="/"/>
<Route path="/app" component={App} />
<Route path="/signin" component={SignIn} />
<Route path="/signup" component={SignUp} />
</div>
</BrowserRouter>
</Provider>, document.getElementById('root')
)
