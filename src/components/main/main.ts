import {Component} from '../component';

export class Main extends Component {
	constructor(selector: string) {
		super(selector);

		this.template = this.createTemplate();
		this.render();
	}

	createTemplate() {
		return `
    <main>
      <section>
        <h2 class="section-title">Series List</h2>
      </section>
    </main>
    `;
	}
}
