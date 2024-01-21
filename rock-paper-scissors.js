let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click" ,()=>{
        const userChoice=choice.getAttribute("id");
        console.log("clicked",userChoice);
        game(userChoice);
    })
    
});

const generate=()=>{
    let arr=["rock","paper","scissors"];
    const ind=Math.floor(Math.random()*3);
    return arr[ind];
}

const game=(userChoice)=>{
    console.log(userChoice);
    let compChoice=generate();
    console.log(compChoice);
    if (userChoice===compChoice)
    {
        msg.innerText=`draw`;
        msg.style.backgroundColor= "#6a040f";
    }
    else {
        
        if(userChoice==="rock"){
           if(compChoice==="paper")
           { 
            msg.innerText=`computer wins, paper beats rock`;
            msg.style.backgroundColor= "red";
            compScore++;
            comp.innerText=compScore;
            }
            else{
             msg.innerText=`user wins, rock beats scissors`;
             msg.style.backgroundColor= "green";
             userScore++;
             user.innerText=userScore;
         }
        }
        else if(userChoice==="paper")
        {
            if(compChoice==="rock"){
                 msg.innerText= `user wins, paper beats rock`;
                 msg.style.backgroundColor= "green";
                 userScore++;
                user.innerText=userScore;
             }else{
                 msg.innerText= `computer wins, scissors beats paper`;
                 msg.style.backgroundColor= "red";
                 compScore++;
                 comp.innerText=compScore;
             }
        }
        else{
           if(compChoice==="paper"){ 
            msg.innerText= `user wins, scissors beats paper`;
            msg.style.backgroundColor= "green";
            userScore++;
            user.innerText=userScore;
        }
           else{
            msg.innerText=`computer wins, rock beats scissors`; 
            msg.style.backgroundColor= "red";
            compScore++;
            comp.innerText=compScore;
           }
        }

    }
}