import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div (click)="toggleContent()" class="well pointable">
    <h4>
    <ng-content select="[well-title]"></ng-content>
    </h4>
    <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
    `, 
    styles: [``]
})
export class CollapsibleWellComponent implements OnInit {
    constructor() { }
    visible: boolean = true;

    ngOnInit(): void { }

    toggleContent() {
        this.visible = !this.visible;
    }
}
