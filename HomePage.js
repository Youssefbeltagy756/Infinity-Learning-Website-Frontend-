

var Img = document.getElementById("TheImage");
let TheDescription = document.getElementById("TheDesc");
var TheIndexOfTheImages = 1;
function changeThePicFromTheRightBtn()
{
    if(TheIndexOfTheImages<3)
    TheIndexOfTheImages++;
    else
    TheIndexOfTheImages=1;

    applyChange();
} 
function changeThePicFromTheLeftBtn()
{
  if(TheIndexOfTheImages>1)
    TheIndexOfTheImages--;
    else
    TheIndexOfTheImages=3;

    applyChange();
}
function applyChange()
{
    if(TheIndexOfTheImages==1)
    {
    Img.src = "https://c1.wallpaperflare.com/preview/471/703/720/e-learning-training-school-online-learn-knowledge.jpg";
     TheDescription.innerHTML = "All Canadians have access to medical services at a reasonable  price. Second, Canada has a high standard of education. Students are taught by well‐trained  teachers and are encouraged to continue studying at university.Canada is one of the best countries in the world to live in. First, Canada has an excellent health care system. All Canadians have access to medical services at a reasonable  price.";
    }
    if(TheIndexOfTheImages==2)
    {
    Img.src = "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
    TheDescription.innerHTML = "A few years ago we were wondering - is there a good paraphrasing website with an automatic paraphrasing tool online? We searched the Internet for a good sentence rephraser, and altought we found many, none of it could rephrase paragraphs correctly. Decision was made to create the best English paraphrasing tool to rewrite any text. Only our  has a built-in reword generator which will help rephrase any text automatically and accordingly. We can guarantee that you wont find another synonym generator that creates better content. It allows you to rephrasF";
    }
    if(TheIndexOfTheImages==3)
    {
    Img.src = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
    TheDescription.innerHTML = "In paraphrase, the meaning and ideas of the source material has to be maintained - by using your own words to express someone else's messages or ideas. To effective reword a text you should use as few words as possible from the source content. Our paraphrasing tool will help you achieve that and rewrite any text in seconds, therefore avoiding plagiarism issues. Paraphrase Online is free app that can be used for automatic dynamic text processing. Special alg";
    }
    
}

function openGetStarted()
{
    window.open("GetStarted.html");
    window.close();
}