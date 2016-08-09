var depth = 0;
var windowName = "";
var foodArray=[['Citrus Fruits', false, false],['Tomatoes', false, false],['Red Meat', false, false],['Fats', false, false],['Soda', false, false],['Dairy', false, false],['Nuts', false, false],['Gluten', false, false]];
var flag = false;
var failures=0;
var finished=[0, 0,0,0];
var snackComplete=false;

/* PAGE LOADING FUNCTIONs*/
function adjustCircles() {
    var homepage=document.getElementsByClassName('content');
    var x = homepage[0].getElementsByClassName("dateCircle");
    var i = x.length;
    var fullDate = new Date();
	var day= fullDate.getDate();
    while(i > 0){
		var z = x[i-1];
    	if(i > day){
    		z.className = "noDateCircle";
    	}
    	if(i==day){
    		z.id="todayDateCircle";
    	}
    	i= i-1;
    }
}

function anchorFunction() {
        var anchors = document.getElementById('todayDateCircle');
            anchors.onclick = function(){dailyReviewWindow();}
    }

function prepPage(){
    adjustCircles();
    anchorFunction();
}

/* WINDOW TOGGLING FUNCTIONs*/
function dailyReviewWindow(){
    var DRWindow = document.getElementById("dailyReviewWindow");
    var greyBackground =  document.getElementById("greyBackground");
    DRWindow.style.visibility = "visible";
    greyBackground.style.visibility= "visible";
    depth=1;
    windowName="dailyReviewWindow";
}

function symtomsWindow(){
    var symWindow = document.getElementById("sym_window");
    sym_window.style.visibility="visible";
    depth=2;
    windowName="symtomsWindow";
}

function mealWindow(meal){
    var bWindow = document.getElementById(meal);
    bWindow.style.visibility="visible";
    depth=2;
    windowName=meal;

}

/* ANY BACK BUTTON */

function doneButton(meal, box, button, windowName){
    backPressed();
    submitLog(meal, box, button);
    successAdjustment(windowName);
    if(flag==true){
        adjustSuccessList();
    }
    checkForCompletion();
}


function backPressed(){
    var currentWindow=document.getElementById(windowName);
    var greyBackground =  document.getElementById("greyBackground");
    currentWindow.style.visibility = "hidden";
    if(depth ==1){
        greyBackground.style.visibility= "hidden"; 
    }else if (depth == 2) {
        windowName = "dailyReviewWindow";
    };
    depth = depth -1;
}




function submitLog(meal, box, button){
    var mealText= document.getElementById(meal);
    var mealBox= document.getElementById(box);
    var mealButton= document.getElementById(button);
    if (button=="symptomsButton"){
        mealButton.src='images/bluePlusIcon.png';
        finished[2]=1;
        symptomsToWindow();
        return
     }
    var mealButton= document.getElementById(button);
    mealBox.innerText=mealText.value;
    if (mealBox.innerText == "" || mealBox.innerText == null) {
        mealButton.src='images/pinkPlusIcon.png'
    }else{
        mealButton.src='images/bluePlusIcon.png';
        if(button=='dinnerButton'){
            finished[0]=1;
        }else if(button=='lunchButton'){
            finished[1]=1;
        }else if(button=='breakfastButton'){
            finished[3]=1;
        }else if(button=='snackButton'){
            snackButton=true;
        }
    }
}

function successAdjustment(windowName){
    var a=document.getElementById(windowName);
    var b=a.getElementsByTagName('input');
    var i = 0;
    var confirm=false;
    failures =0;
    while(i<8){
        if(b[i].checked==true){
            foodArray[i][1]=true;
            confirm=true;
        }
        if(confirm ==true){
            flag = true;
            failures= failures++;
        }
        if(foodArray[i][1] == true && b[i].checked==false){
            foodArray[i][1]=false;
            failures = failures--;
        }
        i++;
    }
}



function symptomsToWindow(){
    var buttons=document.getElementsByClassName("Ybutton");
    var mySymptoms=[];
    i=buttons.length;
    while(i>0){
        if(buttons[i-1].checked==true){
            var symtomName=buttons[i-1].parentElement.children[0].innerHTML;
            mySymptoms.push(symtomName);
        }
        i--;
    }
    adjustSymptomList(mySymptoms);
}

function adjustSymptomList(mySymptoms){
    var symptomsDiv = document.getElementById('symBox');
    symptomsDiv.innerHTML="";
    var i = mySymptoms.length;
    while(i>0){
        symptomsDiv.innerHTML=symptomsDiv.innerHTML+mySymptoms[i-1]+'<br>';
        i--;
    }
}

function adjustSuccessList(){
    var successDiv = document.getElementById('resultLogBox').innerHTML;
    if(successDiv==" <p id=\"successText\">Good Job!<br> <br>You have <br>avoided all <br>of the foods!</p>"){
        document.getElementById('resultLogBox').innerHTML="<ul id=\"resultList\"><p class='resultListFail'>You ate these<br><b>eliminated</b> items.<p></ul>";
        1+1;
    }
    var myList=document.getElementById('resultList');
    var i = 0;
    var foodObject;
    var foodAlready;
    while(i<8){
        foodChecked = foodArray[i][1];
        foodAlready = foodArray[i][2];
        if(foodChecked==true && foodAlready==false){
            a=document.createTextNode(foodArray[i][0]);
            b=document.createElement("LI");
            b.className="successListItem";
            b.appendChild(a);
            myList.appendChild(b);
            foodArray[i][2]=true;
        }if(foodChecked==false && foodAlready==true){

            1+1;
        /*code*/
        }
        i++;
    }
}


/* CHECKING FOR COMPLETIONS */



function checkForCompletion(){
    var i=4
    var trueFinish=0;
    while(i>0){
        if(finished[i-1] == 1){
            trueFinish=trueFinish+1;
            
        }
        i--;
    }
   
    if(trueFinish>3){
        var navDate=document.getElementById("navDateCircle");
        var snack=document.getElementById("snackButton");
        navDate.style.backgroundColor = '#1284E5';
        if(snackComplete==false){
            snack.src='images/greenPlusIcon.png';
        }

        var calDates=document.getElementById("todayDateCircle");
        calDates.style.backgroundColor = '#1284E5';

    }

}

function hideAnalysis(){
    analysisWindow=document.getElementById("analysisWindow");
    analysisWindow.style.visibility="hidden";
}

function showAnalysis(){
    analysisWindow=document.getElementById("analysisWindow");
    analysisWindow.style.visibility="visible";
}

