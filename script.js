let TasksArray = [];
let number;



function addTask(){
    document.getElementById("list").innerHTML = "";
    
    let Task = document.getElementById("Task").value;


    


    if(Task===""){
        alert("Please add a new task.");
    }
    else{

        TasksArray.push(Task);
        
            
        
    }
    

    TasksArray.forEach(i => {
        document.getElementById("list").innerHTML+=(`
        <li> 
            <div>
            <i class="fa-solid fa-circle-check"></i>  ${i}
            </div> 
                
        </li>  
        `);
    });
    
    document.getElementById("Task").value="";
}


function deleteTask(number){
    if(TasksArray.length === 0){
        alert("There's nothing to erase.");
    }else{
        number = prompt("Indicate what tasks do you want to erase (by its number): ")

        if(number<2){
            TasksArray.shift();
        }else{
            TasksArray.splice(number-1,number-1);
        }
    
    
        document.getElementById("list").innerHTML = "";
        TasksArray.forEach(i => {
            document.getElementById("list").innerHTML+=(`
            <li> 
            <div>
            <i class="fa-solid fa-circle-check"></i>  ${i}
            </div> 
                
        </li>  
            `);
        });
    }
   
}