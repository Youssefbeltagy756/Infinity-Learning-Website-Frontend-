let AddBtn = document.getElementsByClassName('plusDiv');
            let CoursesList = document.getElementById("courses");
            
            for (var i = 0; i < AddBtn.length; i++) {
                AddBtn[i].addEventListener('click',function(){
                let mainDiv = document.createElement("div");
                mainDiv.className = 'TheCourse';
                CoursesList.appendChild(mainDiv);
                let CourseTitles = document.createElement("div");
                CourseTitles.className = 'CourseTitle';
                mainDiv.appendChild(CourseTitles);
                let SubjectName = document.createElement("h2");
                SubjectName.innerHTML = document.getElementsByClassName('subjectDiv').innerHTML;
                {
                    for (var i = 0; i < SubjectName.length; i++)
                    {
                        CourseTitles.appendChild(SubjectName[i]);
                    }
                }
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
            }
            