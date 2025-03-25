import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';
import store from './store/store'
import Router from './routes/route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Provider store={store}>
      <Toaster position='top right' />
      <RouterProvider router={Router} />
    </Provider>
  );
}

export default App;
