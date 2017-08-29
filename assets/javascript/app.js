var QA = [
    { question1: "What is the largest ocean?",
      correctA: "Pacific Ocean",
      wrongA1: "Atlantic Ocean",
      wrongA2: "Red Sea",
      wrongA3: "Gulf of Mexico"

    },

        { question2: ("What is the capital of New York?"),
        correctA: "Albany",
        wrongA1: "New York City",
        wrongA2: "New Jersey",
        wrongA3: "Albania",
        secondQ: function(){
            $(this).on("click")
        }
        

    }



];

// console.log(QA[0].question);
// console.log(QA[0].correctA);

$(".question").append("<h2>"+ QA[0].question1 +"</h2>");
$(".answer").append("<h3>"+ QA[0].correctA +"</h3>");
$(".answer").append("<h3>"+ QA[0].wrongA1 +"</h3>");
$(".answer").append("<h3>"+ QA[0].wrongA2 +"</h3>");
$(".answer").append("<h3>"+ QA[0].wrongA3 +"</h3>");








// $(document).ready(function () {


//     function page(question, rightAnswer) {
//         this.question = question;
//         this.rightAnswer = rightAnswer;

//     }


//     var page1 = new page("What is his name?", "Doe");
    




//     function check(px) {

//         $.each(px, function (key, value) {

//             var x = value;


//             if (key ===  "question") {

//                 $(".question").append("<h3>" + value + "</h3>")

//             } else {
//                 $(".answer").append("<h2>" + value + "</h2>")
//             }



//         })

//         $("h2").on("click", function () {

//             if (page1.rightAnswer) {

//             }
//         })
       

//     }

//     check(page1);


// });