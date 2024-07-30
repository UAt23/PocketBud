import {AppRegistry} from 'react-native';
import App from './src/App';
import './gesture-handler';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
