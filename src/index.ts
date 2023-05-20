/* eslint-disable no-new */
import {Header} from './components/header/header';
import {Main} from './components/main/main';
import {SeriesList} from './components/series.list/series.list';
import './style.css';

new Header('#app');
new Main('#app');
new SeriesList('.main');
