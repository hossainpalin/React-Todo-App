import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './components/App';
import { TaskProvider } from './contexts/TaskContext';
import './styles/sass/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </TaskProvider>
  </React.StrictMode>,
);
