onmessage = function(e){
    let persons = e.data.persons;
    let htmlTable = "";
    for(let i = 0; i < persons.length; i++){
        let id = persons[i].id;
        let Name = persons[i].Name;
        let numbers = persons[i].numbers;
        let htmlName = `<tr><td rowspan = "${numbers.length}">${Name}  
        <button id = "del_person" name = "${id}">Del</button>
        <button id  = "edit_person" name = "${id}">Edit name</button></td><td>${numbers[0]} 
        <button id = "edit_number" name = "${id}${0}">Edit</button></td></tr>`;
        let htmlNumbers = "";
       
        for(let j = 1; j < numbers.length; j++){
            htmlNumbers += `<tr><td>${numbers[j]} <button id = "edit_number" name = "${id}${j}">Edit</button></td></tr>`;
        };
    
        htmlTable += htmlName + htmlNumbers;
    };
    postMessage(htmlTable);
}
