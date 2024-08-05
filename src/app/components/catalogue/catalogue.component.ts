import { Component, Input, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'wlrd-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {


  @Input() key:string = '';
  @Input() parent:string = '';
  @Input() keyspanish:string = '';
  @Input() parentspanish:string = '';
  @Input() rol:string = '';

  p:number = 1;
  filtertext:string = '';
  itemId:string = '';
  viewoptions:boolean = true;
  list:any[] = [];
  listBase:any[] = [];
  listParentRes:any[] = [];

  item:any = {
    key: this.key,
    name: "",
    description: "",
    parentId: null
  }
  idparent:string = '';
  activeselect:boolean = true;

  constructor(){}

  ngOnInit(): void {
    let x = sessionStorage.getItem('store');
    if(x != "undefined"){
      this.idparent = JSON.parse(sessionStorage.getItem('store') || '{}').value;
    }
    if(this.rol == 'admin'){
      this.activeselect = false;
    }else{
      this.activeselect = true;
    }
    this.listKey();
    this.listParent();
  }

  listKey(){
    this.list = Object.assign([],[]);
    this.listBase = Object.assign([],[]);
    // if(this.rol == 'store'){
    //   this._ss.getItemByParentId(this.key,this.idparent).subscribe((res: any) => {
    //     this.list = res;
    //     this.listBase = res;
    //   })
    // }else{
    //   this._ss.getItemByKey(this.key).subscribe((res: any) => {
    //     this.list = res;
    //     this.listBase = res;
    //   })
    // }
  }

  listParent(){
    // this._ss.getItemByKey(this.parent).subscribe((res: any) => {
    //   this.listParentRes = res;
    // })
  }

  addItem(){
    this.item = {
      key: this.key,
      name: "",
      description: "",
      parentId: this.parent==null?null:''
    }
    if(this.rol == 'store'){
      this.item.parentId = this.idparent;
    }
    this.viewoptions = true;
    $("#modallist").modal("show");
  }

  backToList(){

  }

  editItem(info:any){
    this.item = {
      key: this.key,
      name: info.label,
      description: info.description,
      parentId: info.parentId
    }
    this.itemId = info.value;
    if(this.rol == 'store'){
      this.item.parentId = this.idparent;
    }
    this.viewoptions = false;
    $("#modallist").modal("show");
  }

  removeItem(id:string){
    this.itemId = id;
    $("#modalconfirm").modal("show");
  }

  save(){
    let data = Object.assign({},this.item);
    // this._ss.saveItem(data).subscribe((res: any) => {
    //   this.listKey();
    //   $("#modallist").modal("hide");
    //   this.noty('success','Item creado con exito.');
    // })
  }

  update(){
    let data = Object.assign({},this.item);
    // this._ss.updateItem(this.itemId,data).subscribe((res: any) => {
    //   this.listKey();
    //   $("#modallist").modal("hide");
    //   this.noty('success','Item actualizado con exito.');
    // })
  }

  changeStatus(itemId:string,accion:string){
    // this._ss.updateStatusItem(itemId).subscribe((res: any) => {
    //   this.listKey();
    //   this.noty('success',`Item ${accion} con exito.`);
    // })
  }

  delete(){
    // this._ss.deleteItem(this.itemId).subscribe((res: any) => {
    //   this.listKey();
    //   $("#modalconfirm").modal("hide");
    //   this.noty('success','Item eliminado con exito.');
    // })
  }

  noty(type:string,message:string){
    // switch (type) {
    //   case 'error':
    //     this.toastr.error(message, `Error!`);
    //   break;
    //   case 'success':
    //     this.toastr.success(message, `Completado!`);
    //   break;
    //   case 'info':
    //     this.toastr.info(message, `Importante!`)
    //   break;
    //   case 'warning':
    //     this.toastr.warning(message, `Advertencia!`)
    //   break;

    //   default:
    //     break;
    // }
  }


}
