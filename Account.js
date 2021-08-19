

let AddBtn1 = document.getElementById("Math1");
let AddBtn2 = document.getElementById("physics1");
let AddBtn3 = document.getElementById("Math2");
let AddBtn4 = document.getElementById("Dynamics1");
let AddBtn5 = document.getElementById("Prog1");
let AddBtn6 = document.getElementById("Prog2");

function openTheCourse()
{
    window.open("The Course.html");
    window.close();
}

 let CoursesList = document.getElementById("courses");
 

     AddBtn1.addEventListener('click',function(){

     let mainDiv = document.createElement("div");
     mainDiv.className = 'TheCourse';
     CoursesList.appendChild(mainDiv);
     let CourseTitles = document.createElement("div");
     CourseTitles.className = 'CourseTitle';
     mainDiv.appendChild(CourseTitles);
     let SubjectName = document.createElement("h2");
     
     SubjectName.innerHTML = 'Math1';
     
     CourseTitles.appendChild(SubjectName);
     let CourseData = document.createElement("div");
     CourseData.className = 'CourseData';
     mainDiv.appendChild(CourseData);
     let ProgessData = document.createElement("h3");
     ProgessData.className = 'Progress';
     ProgessData.innerHTML = document.getElementById("Progress").innerHTML;
     CourseData.appendChild(ProgessData);
     let State = document.createElement("span");
     State.className = 'state';
     State.innerHTML = document.getElementById("state").innerHTML;
     CourseData.appendChild(State);
     let TheBtnView = document.createElement("button");
     TheBtnView.innerHTML = document.getElementById("button").innerHTML;
     TheBtnView.className = 'theButton';
     CourseData.appendChild(TheBtnView);
 });
 
      AddBtn2.addEventListener('click',function(){

     let mainDiv = document.createElement("div");
     mainDiv.className = 'TheCourse';
     CoursesList.appendChild(mainDiv);
     let CourseTitles = document.createElement("div");
     CourseTitles.className = 'CourseTitle';
     mainDiv.appendChild(CourseTitles);
     let SubjectName = document.createElement("h2");
     
     SubjectName.innerHTML = 'Physics1';
     
     CourseTitles.appendChild(SubjectName);
     let CourseData = document.createElement("div");
     CourseData.className = 'CourseData';
     mainDiv.appendChild(CourseData);
     let ProgessData = document.createElement("h3");
     ProgessData.className = 'Progress';
     ProgessData.innerHTML = document.getElementById("Progress").innerHTML;
     CourseData.appendChild(ProgessData);
     let State = document.createElement("span");
     State.className = 'state';
     State.innerHTML = document.getElementById("state").innerHTML;
     CourseData.appendChild(State);
     let TheBtnView = document.createElement("button");
     TheBtnView.innerHTML = document.getElementById("button").innerHTML;
     TheBtnView.className = 'theButton';
     TheBtnView.tagName
     CourseData.appendChild(TheBtnView);
 });


 AddBtn3.addEventListener('click',function(){

     let mainDiv = document.createElement("div");
     mainDiv.className = 'TheCourse';
     CoursesList.appendChild(mainDiv);
     let CourseTitles = document.createElement("div");
     CourseTitles.className = 'CourseTitle';
     mainDiv.appendChild(CourseTitles);
     let SubjectName = document.createElement("h2");
     
     SubjectName.innerHTML = 'Math2';
     
     CourseTitles.appendChild(SubjectName);
     let CourseData = document.createElement("div");
     CourseData.className = 'CourseData';
     mainDiv.appendChild(CourseData);
     let ProgessData = document.createElement("h3");
     ProgessData.className = 'Progress';
     ProgessData.innerHTML = document.getElementById("Progress").innerHTML;
     CourseData.appendChild(ProgessData);
     let State = document.createElement("span");
     State.className = 'state';
     State.innerHTML = document.getElementById("state").innerHTML;
     CourseData.appendChild(State);
     let TheBtnView = document.createElement("button");
     TheBtnView.innerHTML = document.getElementById("button").innerHTML;
     TheBtnView.className = 'theButton';
     CourseData.appendChild(TheBtnView);
 }); 

 AddBtn4.addEventListener('click',function(){

     let mainDiv = document.createElement("div");
     mainDiv.className = 'TheCourse';
     CoursesList.appendChild(mainDiv);
     let CourseTitles = document.createElement("div");
     CourseTitles.className = 'CourseTitle';
     mainDiv.appendChild(CourseTitles);
     let SubjectName = document.createElement("h2");
     
     SubjectName.innerHTML = 'Dynamics1';
     
     CourseTitles.appendChild(SubjectName);
     let CourseData = document.createElement("div");
     CourseData.className = 'CourseData';
     mainDiv.appendChild(CourseData);
     let ProgessData = document.createElement("h3");
     ProgessData.className = 'Progress';
     ProgessData.innerHTML = document.getElementById("Progress").innerHTML;
     CourseData.appendChild(ProgessData);
     let State = document.createElement("span");
     State.className = 'state';
     State.innerHTML = document.getElementById("state").innerHTML;
     CourseData.appendChild(State);
     let TheBtnView = document.createElement("button");
     TheBtnView.innerHTML = document.getElementById("button").innerHTML;
     TheBtnView.className = 'theButton';
     CourseData.appendChild(TheBtnView);
 });

 AddBtn5.addEventListener('click',function(){

     let mainDiv = document.createElement("div");
     mainDiv.className = 'TheCourse';
     CoursesList.appendChild(mainDiv);
     let CourseTitles = document.createElement("div");
     CourseTitles.className = 'CourseTitle';
     mainDiv.appendChild(CourseTitles);
     let SubjectName = document.createElement("h2");
     
     SubjectName.innerHTML = 'Prog1';
     
     CourseTitles.appendChild(SubjectName);
     let CourseData = document.createElement("div");
     CourseData.className = 'CourseData';
     mainDiv.appendChild(CourseData);
     let ProgessData = document.createElement("h3");
     ProgessData.className = 'Progress';
     ProgessData.innerHTML = document.getElementById("Progress").innerHTML;
     CourseData.appendChild(ProgessData);
     let State = document.createElement("span");
     State.className = 'state';
     State.innerHTML = document.getElementById("state").innerHTML;
     CourseData.appendChild(State);
     let TheBtnView = document.createElement("button");
     TheBtnView.innerHTML = document.getElementById("button").innerHTML;
     TheBtnView.className = 'theButton';
     CourseData.appendChild(TheBtnView);
 });

 AddBtn6.addEventListener('click',function(){

     let mainDiv = document.createElement("div");
     mainDiv.className = 'TheCourse';
     CoursesList.appendChild(mainDiv);
     let CourseTitles = document.createElement("div");
     CourseTitles.className = 'CourseTitle';
     mainDiv.appendChild(CourseTitles);
     let SubjectName = document.createElement("h2");
     
     SubjectName.innerHTML = 'Prog2';
     
     CourseTitles.appendChild(SubjectName);
     let CourseData = document.createElement("div");
     CourseData.className = 'CourseData';
     mainDiv.appendChild(CourseData);
     let ProgessData = document.createElement("h3");
     ProgessData.className = 'Progress';
     ProgessData.innerHTML = document.getElementById("Progress").innerHTML;
     CourseData.appendChild(ProgessData);
     let State = document.createElement("span");
     State.className = 'state';
     State.innerHTML = document.getElementById("state").innerHTML;
     CourseData.appendChild(State);
     let TheBtnView = document.createElement("button");
     TheBtnView.innerHTML = document.getElementById("button").innerHTML;
     TheBtnView.className = 'theButton';
     CourseData.appendChild(TheBtnView);
 });
