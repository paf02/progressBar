class Modal {
	constructor(defaultValues, parentEl) {
		this.modal = {
			container: $(parentEl),
			progressBar: null,
			el: {},
			default: defaultValues
		};

		this.setUpModalConfig();
		this.setUpView();
		
	}
	/* setUpModalConfig */
	/* 	Get all the elements from the html and 
			makes the sustraction of the target - reached
	 */
	setUpModalConfig() {
		this.modal.default.disclaimer = this.modal.default.target - this.modal.default.reached;
		this.modal.progressBar = this.modal.container.find('.progressbar-progress-ev');
		this.modal.el.reached = this.modal.container.find('.progressbar-val-ev');
		this.modal.el.target = this.modal.container.find('.target-val-ev');
		this.modal.el.disclaimer = this.modal.container.find('.disclaimer-val-ev');
	}

	setUpView() {
		this.modal.el.reached.html(this.modal.default.reached);
		this.modal.el.target.html(this.modal.default.target);
		this.modal.el.disclaimer.html(this.modal.default.disclaimer);
	}
}

class Progress extends Modal {
	constructor(defaultValues, parentEl, beforeAnimationInit) {
		super(defaultValues, parentEl);
		
		if (defaultValues.target >= defaultValues.reached) {
			// To make animation smoother
			setTimeout(() => {
				this.setUpReachedPosition();
			}, beforeAnimationInit);

		} else {
			//TODO
			/* Waiting for direction when the user have reached the goal*/
		}
	}


	setUpReachedPosition() {
		this.modal.progressBar.css('width',  (this.modal.default.reached*100/this.modal.default.target) + '%');
	}
}

let progress = new Progress({
	reached: 56,
	target: 125,
}, '.modal-container-ev0', 500);



