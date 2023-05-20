import {Component} from '../component';
import './header.css';

export class Header extends Component {
	constructor(selector: string) {
		super(selector);

		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `
      <header>
        <h1 class="title">ISDI Series</h1>
      </header>
    `;
	}
}
