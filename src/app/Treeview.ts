import { Component, Input } from '@angular/core';

@Component({
  selector: 'tree-view',
  template: `
    <ul>
        <li *ngFor="let node of treeData">
            <span *ngIf="node.children?.length" (click)="toggleChildren()"></span>
            <input type="checkbox" [checked]="node.checked" 
            [indeterminate]="false"
            [disabled]="false"                 
            (click)="node.check()" /> {{node.name}}
         
        
            <tree-view [treeData]="node.children"></tree-view>
                   
        </li>
    </ul>
    `,
})
export class TreeView {
  @Input() treeData: any[];
  expanded: boolean = true;
  checked: boolean = false;

  toggleChildren() {
    this.expanded = !this.expanded;
  }
  // to do
}
