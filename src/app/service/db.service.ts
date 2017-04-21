export class DbService {
  students:{id:number, name:string, email:string}[] = [{id:1, name:'Asaad Saad', email:'asaadSaad@mum.edu'},
                                                     {id:2, name:'Netsanet Haile', email:'netsanethaile@mum.edu'}];
                                          
  constructor() { }

  getData(){
    return this.students;
  }
  
  getStudent(id: number) : {id:number, name:string, email:string} {
    let stu: {id:number, name:string, email:string};

    for(let i=0; i<this.students.length; i++){
      if(this.students[i].id == id){
        return this.students[i];
      }
    }
  }
}
