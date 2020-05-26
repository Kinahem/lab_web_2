export default class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;
        document.querySelector('#add_person').addEventListener('click', (e)=>this.addPerson(e));
        document.querySelector('#sort_person').addEventListener('click', (e)=>this.sortPerson(e));
        document.querySelector('#main_table').addEventListener('click', (e)=>this.editPerson(e));
    }

    addPerson(event){
        let Name = document.querySelector("#input_name").value;
        if(Name == ""){
            this.view.sendMessage("Error. Name is empty");
            return;
        }

        let numbers = document.querySelector("#input_numbers").value;
        numbers = numbers.split('\n');
        numbers = numbers.filter(number => number.length > 0);
        if(numbers == ""){
            this.view.sendMessage("Error. Numbers is empty");
            return;
        }
        this.model.addPerson(Name, numbers);
        this.view.printPersons(this.model.persons);
        this.view.clean_all_inputs();
    }

    sortPerson(e){
        this.model.sortPerson();
        this.view.printPersons(this.model.persons);
    }

    editPerson(e){
        e = e || window.event;
        let target = e.target || e.srcElement;
        
        if(target.id == 'del_person'){
            let id = target.name;
            this.model.delPerson(id);
            this.view.printPersons(this.model.persons);
        }else if (target.id == 'edit_person'){
            let id = target.name;
            this.model.editPersonName(id, this.view.getText("Input new name"));
            this.view.printPersons(this.model.persons);
        }else if(target.id = 'edit_number'){
            this.model.editNumber(target.name[0], parseInt(target.name[1]), this.view.getText("Input new number"));
            this.view.printPersons(this.model.persons);
        }else {
            return;
        }
    }
}