import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import store from './store/store'
import Router from './routes/route';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
