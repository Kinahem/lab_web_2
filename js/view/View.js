
export default class View {
    constructor(){
        this.htmlTable = "";
    }

    sendMessage(message){
        alert(message);
    }

    getText(message){
        return prompt(message, ' ');
    }

    printPersons(persons){
        if(window.Worker){
            this.htmlTable = `<table id = "main_table"><tr><th>Contact name</th><th>Contact's numbers</th></tr>`;
            let worker = new Worker("js/view/webWorker.js");
            let clone_persons = persons.slice(0);
            worker.postMessage({"persons": clone_persons});
                worker.onmessage = function(e){
                    this.htmlTable += e.data + "</table>";
                    worker.terminate();
                    worker = undefined;
                    document.getElementById("main_table").innerHTML = this.htmlTable;
                }.bind(this);
        }else {
            alert("Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading");
        }
    }

    clean_all_inputs(){
        document.getElementById('input_name').value = "";
        document.getElementById('input_numbers').value = "";
    }
}