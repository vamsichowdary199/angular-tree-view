export class TreeNode {

  expanded: boolean = true;
  checked: boolean = false;

  constructor(public name:string,
              public nodes:Array<TreeNode>,
              // public parent:TreeNode
              ) {
  }
  toggle() {
      this.expanded = !this.expanded;
  }

  containsChecked() {
      let checkedNodes: TreeNode[];
      if (this.nodes && this.nodes.length) {
          checkedNodes = this.nodes.filter(function(node) {
             return node.checked;
          });
      }
      return checkedNodes.length > 0;

  }

  containsName(name) {
      var query = name;
      let matchingNodes:TreeNode[];
      if (this.nodes && this.nodes.length) {
          matchingNodes = this.nodes.filter(node => {
              return node.name.includes(query);
          });
      }
      return matchingNodes.length > 0;
  }

  get icon() {
      if (!this.nodes.length){
          return null;
      }
      if (this.expanded) {
          return '-';
      }
      return '+';
  }


  check() {
    console.log(this.nodes.length);
                
      this.checked = this.expanded = !this.checked;
    
      /* if (this.parent) {
          this.parent.checked = this.parent.containsChecked();
      } */
      this.checkRecursive(this.checked);

  }
  checkRecursive(state:boolean) {
      this.nodes.forEach(node => {
          node.checked = node.expanded = state;
          node.checkRecursive(state);
      });
  }
}
