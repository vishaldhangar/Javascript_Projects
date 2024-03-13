const questions = [{
    'que': 'Which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': "What year was Javascript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of these",
    'correct': "a"
},
{
    'que': "What does CSS stands for?",
    'a': "HyperText markup language",
    'b': "Cascading Style sheet",
    'c': "cascading sheet of styles",
    'd': "cascading system style",
    'correct': "b"
}
]

let index=0;
let total=questions.length;
let right=0;
let wrong=0;
const queBox=document.getElementById("queBox")
const optionInputs=document.querySelectorAll('.options')
const loadQuestion = () =>{
    if(index===total)
    {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    queBox.innerText =   ` ${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}


const submitQuiz =()=>{
    const data=questions[index];
    const ans=getAnswer()
     if(ans===data.correct){
        right++;
     }
     else{
        wrong++;
     }
     index++;
     loadQuestion();
     return;
}

const getAnswer =()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
            }
            
        }
    )
    return answer;
}

// next question mai jab aye to tick phle se na aaye uske liye reste mardo
const reset =()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz =()=>{
    document.getElementById("box").innerHTML=`
<h3> Thanku for playing the Quiz </h3>
<h2> ${right}/${total} are correct </h2>
`
}

// calling the function
loadQuestion();
        










