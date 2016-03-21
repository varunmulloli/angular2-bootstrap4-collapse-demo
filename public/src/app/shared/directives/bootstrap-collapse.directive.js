import {Directive, ElementRef} from 'angular2/core';

class BootstrapCollapse { 

	static get annotations() {
		return [
			new Directive ({
				selector: "[bsCollapse]",
				host: {
					'(click)': 'onClick()',
				},
				inputs: ['bsCollapse'],
			})
		];
	}
	
	static get parameters() {
	    return [[ElementRef]];
	}
	
	constructor(el) {
		this.el = el;
	}
	
	ngOnInit() {
	    this.collapsedIconClass = this.bsCollapse.collapsed;
		this.expandedIconClass = this.bsCollapse.expanded;
		
		this._setIcon('false');
	}

	onClick() {
		this._setIcon('true');
	}
	
	_setIcon(onclick) {
		if(this.el.nativeElement.getAttribute('aria-expanded') === onclick)
			this.el.nativeElement.querySelector("[bsCollapseIcon]").className = this.collapsedIconClass || '';
		else
			this.el.nativeElement.querySelector("[bsCollapseIcon]").className = this.expandedIconClass || '';
	}
}

export {BootstrapCollapse};