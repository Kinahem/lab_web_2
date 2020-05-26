
export default class Model {
    constructor(){
        this.persons = [];
    }

    addPerson(Name, numbers){
        let id = (this.persons.length == 0 ? 1: this.persons[this.persons.length - 1].id + 1);
        let newPerson = {"id": id, "Name": Name, "numbers":numbers};
        this.persons.push(newPerson);
    }

    delPerson(id){
        const personIndex = this.persons.findIndex((person) => parseInt(person.id) === parseInt(id));
        this.persons.splice(personIndex, 1);
        this.rewriteId();
    }

    rewriteId(){
        for(let i = 0; i < this.persons.length; i++){
            this.persons[i].id = i + 1;
        }
    }

    editPersonName(id, newName){
        const personIndex = this.persons.findIndex((person) => parseInt(person.id) === parseInt(id));
        this.persons[personIndex].Name = newName;
    }

    editNumber(id, numberId, newNumber){
        const personIndex = this.persons.findIndex((person) => parseInt(person.id) === parseInt(id));
        this.persons[personIndex].numbers[numberId] = newNumber;
    }

    sortPerson(){
        this.persons.sort(function (a, b) {
            if (a.Name > b.Name) {
              return 1;
            }
            if (a.Name < b.Name) {
              return -1;
            }
            return 0;
          });
    }
}