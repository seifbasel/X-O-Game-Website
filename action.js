function won(winer){
    let name= document.getElementById("title");
        name.innerHTML=winer+" WON ";
    let counter=0
    setInterval(function(){name.innerHTML =counter+=1 },1000);
    setTimeout(function(){location.reload()},4000);


}

function tie(){
    let name= document.getElementById("title");
        name.innerHTML=" TIE ";
    setInterval(function(){name.innerHTML =counter+=1 },1000);
    setTimeout(function(){location.reload()},4000);

}

function winner(){
    for(let i=1; i<10; i+=1){

        array[i]=document.getElementById("item_"+i).innerHTML;
    }

    if (array[1]==array[2] && array[2]==array[3] && array[1]!=""){
        won(array[1]);
    }
    else if (array[4]==array[5] && array[5]==array[6] && array[4]!=""){
        won(array[4]);
    }
    else if (array[7]==array[8] && array[8]==array[9] && array[7]!=""){
        won(array[7]);
    }
    else if (array[1]==array[4] && array[4]==array[7] && array[4]!=""){
        won(array[1]);
    }
    else if (array[2]==array[5] && array[5]==array[8] && array[5]!=""){
        won(array[2]);
    }
    else if (array[4]==array[5] && array[5]==array[6] && array[5]!=""){
        won(array[4]);
    }
    else if (array[3]==array[6] && array[6]==array[9] && array[6]!=""){
        won(array[3]);
    }
    
    else if (array[1]==array[5] && array[5]==array[9] && array[5]!=""){
        won(array[1]);
    }

    else if (array[3]==array[5] && array[5]==array[7] && array[5]!=""){
        won(array[3]);
    }
    else if(array[1]!=""&&array[2]!="" && array[3]!="" &&array[4]!=""&&array[5]!="" && array[6]!="" &&array[7]!=""&&array[8]!="" && array[9]!=""){
        tie();
    }
}


let turn ="x";
let array=[];
function play(id){
    let element=document.getElementById(id);
    if (turn==="x" && element.innerHTML==""){
        element.innerHTML="x";
        turn="o";
    }
    else if (turn==="o" && element.innerHTML==""){

        element.innerHTML="o";
        turn="x";
    }
    winner();

}