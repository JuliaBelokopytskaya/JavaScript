//TASK 3*
let enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

const countEmployee = function(){
    let countEmp = [];
    for(let i = 0; i < enterprises.length; i++){
        let count = 0;
        for(let j = 0; j < enterprises[i].departments.length; j++){
            count += enterprises[i].departments[j].employees_count;
        }
        countEmp.push(count);
    }
    for(let i = 0; i < enterprises.length; i++){
        if (countEmp[i]){
            console.log(`${enterprises[i].name} (${countEmp[i]} сотрудников)`);
        }
        else{
            console.log(`${enterprises[i].name} (нет сотрудников)`);
        }
        for(let j = 0; j < enterprises[i].departments.length; j++){
            if (enterprises[i].departments[j].employees_count){
                console.log(`- ${enterprises[i].departments[j].name} (${enterprises[i].departments[j].employees_count} сотрудников)`);
            }
            else{
                console.log(`- ${enterprises[i].departments[j].name} (нет сотрудников)`);
            }
        }
    }
   return; 
} 
countEmployee();

const getEnterpriseName = function(idDepartment){
    for(let i = 0; i < enterprises.length; i++){
        for(let j = 0; j < enterprises[i].departments.length; j++){
            if(enterprises[i].departments[j].id == idDepartment){
                return enterprises[i].name;
            }
        }
    }
    return "Not found";
}
console.log(getEnterpriseName(4));

const addEnterprise = function(newName){
    //const newId = arr[arr.length - 1].departments[arr[arr.length - 1].departments.length - 1].id + 1;
    enterprises.push({id: Math.round(Math.random()*20), name:newName })
    return enterprises;
}
enterprises = addEnterprise("Предприятие 4");
console.log(enterprises);

const addDepartment = function(idCompany, newName){
    for(let i = 0; i < enterprises.length; i++){
        if(enterprises[i].id == idCompany){
           enterprises[i].departments.push({id: Math.round(Math.random()*20), name:newName, employees_count: 0})
           return enterprises;
        }
    }
    
}

enterprises = addDepartment(9, "Отдел тестирования");
console.log(enterprises[2].departments)

const editEnterprise = function(idCompany, newName){
    for(let i = 0; i < enterprises.length; i++){
        if(enterprises[i].id == idCompany){
             enterprises[i].name = newName;
             return enterprises;
        }
    }


}

enterprises = editEnterprise(1, "Предприятие 1.1");
console.log(enterprises);

const editDepartment = function(idDepartment, newName){
    for(let i = 0; i < enterprises.length; i++){
        for(let j = 0; j < enterprises[i].departments.length; j++){
            if(enterprises[i].departments[j].id == idDepartment){
                 enterprises[i].departments[j].name = newName;
                 return enterprises;
          }
        }

    }


}

enterprises = editDepartment(8, "Отдел тестирования");
console.log(enterprises[1].departments);

const deleteEnterprise = function(idCompany){
    for(let i = 0; i < enterprises.length; i++){
        if(enterprises[i].id == idCompany){
             enterprises.splice(i, 1);
             return enterprises;
        }
    }


}
enterprises = deleteEnterprise(1);
console.log(enterprises);

const deleteDepartment = function(idDepartment){
    for(let i = 0; i < enterprises.length; i++){
        for(let j = 0; j < enterprises[i].departments.length; j++){
            if(enterprises[i].departments[j].id == idDepartment && enterprises[i].departments[j].employees_count == 0){
                enterprises[i].departments.splice(j, 1);
                return enterprises;
            }
        }
    
    }

    
}
enterprises = deleteDepartment(10);
console.log(enterprises[2].departments);

const moveEmployees = function(idDepartmentStart, idDepartmentEnd){
    let count = 0;
    let index = [0, 0];
    for(let i = 0; i < enterprises.length; i++){
        for(let j = 0; j < enterprises[i].departments.length; j++){
            if(enterprises[i].departments[j].id == idDepartmentStart){
                index[0] = j;             
            }
            if(enterprises[i].departments[j].id == idDepartmentEnd){
                index[1] = j;   
            }
        }
        if (!(index[0]==index[1] && index[0]== 0)){               
            count = enterprises[i].departments[index[0]].employees_count;
            enterprises[i].departments[index[0]].employees_count = 0;
            enterprises[i].departments[index[1]].employees_count += count;
            return enterprises;
        }        
    
    }

}
enterprises = moveEmployees(2, 3);
console.log(enterprises[0].departments);
