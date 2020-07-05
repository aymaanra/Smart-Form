if ("state" in window.localStorage == false) {
  // $("#welcome").hide();
  window.localStorage.setItem("state", "welcome_view");
}
if ("userData" in window.localStorage == false) {

  var userData = {};
  //Creating a HTML object inside the userData object,HTML Positive answers are meant to be in the html_likes array,HTML Negative answers are meant to be in the html_dislikes array
  userData["HTML"] = { html_likes: [], html_dislikes: [], html_strength: "" };
  window.localStorage.setItem("userData", JSON.stringify({}));

  //Creating a CSS object inside the userData object,CSS  Positive answers are meant to be in the css_likes array,CSS Negative answers are meant to be in the css_dislikes array
  userData["CSS"] = { css_likes: [], css_dislikes: [], css_strength: "" };

  //When the user selects the JS Option
  //Creating a JS object inside the userData object,JS Positive answers are meant to be in the js_likes array,JS Negative answers are meant to be in the js_dislikes array
  userData["JS"] = { js_likes: [], js_dislikes: [], js_strength: "" };

  window.localStorage.setItem("userData", JSON.stringify(userData));
}

else {
  var userData = JSON.parse(window.localStorage.getItem("userData"));
}


//Variables for the programming language questions with user selection options

if ("HTML_answered" in window.localStorage == false) {

  var HTML_answered = false;
  window.localStorage.setItem("HTML_answered", JSON.stringify(HTML_answered));
}

else {
  var HTML_answered = JSON.parse(window.localStorage.getItem("HTML_answered"));
}


if ("CSS_answered" in window.localStorage == false) {

  var CSS_answered = false;
  window.localStorage.setItem("CSS_answered", JSON.stringify(CSS_answered));
}

else {
  var CSS_answered = JSON.parse(window.localStorage.getItem("CSS_answered"));
}


if ("JS_answered" in window.localStorage == false) {

  var JS_answered = false;
  window.localStorage.setItem("JS_answered", JSON.stringify(JS_answered));
}

else {
  var JS_answered = JSON.parse(window.localStorage.getItem("JS_answered"));
}



if (HTML_answered == true) {
  $("#HTML_button").hide();
}
if (CSS_answered == true) {
  $("#CSS_button").hide();
}
if (JS_answered == true) {
  $("#JS_button").hide();
}

if (window.localStorage.state == "q3_view") {
  run_view_3();
}


//Hiding remaining views, showing welcome view
$(".jumbotron.row,#thanks").hide();
$("#answers").hide();
//Hiding the warning message;
$(".warningmsg").hide();


//Centering everything
$(".container").css("position", "absolute");
$(".container").css("left", "50%");
$(".container").css("top", "50%");
$(".container").css("transform", "translate(-50%,-50%)");
$(".container").css("text-align", "center");


// Showing View 1 with animation on click
$("#startSurveyButton").on("click", function () {
  //Hiding the welcome view and Making the question 1 view appear with a animation, then storing that in localStorage
  normal_switch(click = true, "#q1", "#welcome", "q1_view");
});


//For text fields

//Name colors
$("#name").on("mouseenter", function () {
  $("#q1").css("background-color", "#f6c3ce");
});
$("#name").on("mouseleave", function () {
  $("#q1").css("background-color", "#EEEEEE");
});

//Email colors
$("#email").on("mouseenter", function () {
  $("#q1").css("background-color", "#c3f6eb");
});

$("#email").on("mouseleave", function () {
  $("#q1").css("background-color", "#EEEEEE");
});
switch_view_localStorage();
//Form validation using jquery plugin

$(function () {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",

      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },

    },
    // Specify validation error messages
    messages: {
      name: "Please enter your name",
      email: "Please enter a valid email address",
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      // form.submit();
      let name_val = $("#name").val();
      let email_val = $("#email").val();
      userData.name = name_val;
      userData.email = email_val;

      //Hiding the q1 view and Making the q2 view appear with a animation
      normal_switch(click = true, "#q2", "#q1", "q2_view");


    }
  });
});

//When the user selects HTML Option

HTML_option_box();




function updateAnswers_html() {
  //Storing the answers in the HTML object of the userData object
  //Positive answers to HTML

  //Likes Q1
  //If the box is checked then Adding the answers in object if it does not exist 
  if ($("#html_like_q1").is(":checked")) {
    if (userData.HTML.html_likes.includes($("#html_like_q1").data("text")) == false) {
      userData.HTML.html_likes.push($("#html_like_q1").data("text"));

    }
  }

  //If the box is unchecked then removing the answers in object if it exists
  else if ($("#html_like_q1").is(":not(:checked)")) {
    if (userData.HTML.html_likes.includes($("#html_like_q1").data("text")) == true) {
      userData.HTML.html_likes.splice(userData.HTML.html_likes.indexOf($("#html_like_q1").data("text")));
    }
  }

  //Likes Q2
  if ($("#html_like_q2").is(":checked")) {
    if (userData.HTML.html_likes.includes($("#html_like_q2").data("text")) == false) {
      userData.HTML.html_likes.push($("#html_like_q2").data("text"));
    }
  }
  else if ($("#html_like_q2").is(":not(:checked)")) {
    if (userData.HTML.html_likes.includes($("#html_like_q2").data("text")) == true) {
      userData.HTML.html_likes.splice(userData.HTML.html_likes.indexOf($("#html_like_q2").data("text")));
    }
  }

  //Likes Q3
  if ($("#html_like_q3").is(":checked")) {
    if (userData.HTML.html_likes.includes($("#html_like_q3").data("text")) == false) {
      userData.HTML.html_likes.push($("#html_like_q3").data("text"));
    }
  }
  else if ($("#html_like_q3").is(":not(:checked)")) {
    if (userData.HTML.html_likes.includes($("#html_like_q3").data("text")) == true) {
      userData.HTML.html_likes.splice(userData.HTML.html_likes.indexOf($("#html_like_q3").data("text")));
    }
  }

  //Likes Q4
  if ($("#html_like_q4").is(":checked")) {
    if (userData.HTML.html_likes.includes($("#html_like_q4").data("text")) == false) {
      userData.HTML.html_likes.push($("#html_like_q4").data("text"));
    }
  }
  else if ($("#html_like_q4").is(":not(:checked)")) {
    if (userData.HTML.html_likes.includes($("#html_like_q4").data("text")) == true) {
      userData.HTML.html_likes.splice(userData.HTML.html_likes.indexOf($("#html_like_q4").data("text")));
    }
  }



  //Negative answers to HTML

  //Dislikes Q1
  //If the box is checked then Adding the answers in object if it does not exist 
  if ($("#html_dislike_q1").is(":checked")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q1").data("text")) == false) {
      userData.HTML.html_dislikes.push($("#html_dislike_q1").data("text"));
    }
  }

  //If the box is unchecked then removing the answers in object if it exists
  else if ($("#html_dislike_q1").is(":not(:checked)")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q1").data("text")) == true) {
      userData.HTML.html_dislikes.splice(userData.HTML.html_dislikes.indexOf($("#html_dislike_q1").data("text")));
    }
  }

  //Dislikes Q2
  if ($("#html_dislike_q2").is(":checked")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q2").data("text")) == false) {
      userData.HTML.html_dislikes.push($("#html_dislike_q2").data("text"));
    }
  }
  else if ($("#html_dislike_q2").is(":not(:checked)")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q2").data("text")) == true) {
      userData.HTML.html_dislikes.splice(userData.HTML.html_dislikes.indexOf($("#html_dislike_q2").data("text")));
    }
  }

  //Dislikes Q3
  if ($("#html_dislike_q3").is(":checked")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q3").data("text")) == false) {
      userData.HTML.html_dislikes.push($("#html_dislike_q3").data("text"));
    }
  }
  else if ($("#html_dislike_q3").is(":not(:checked)")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q3").data("text")) == true) {
      userData.HTML.html_dislikes.splice(userData.HTML.html_dislikes.indexOf($("#html_dislike_q3").data("text")));
    }
  }

  //Dislikes Q4
  if ($("#html_dislike_q4").is(":checked")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q4").data("text")) == false) {
      userData.HTML.html_dislikes.push($("#html_dislike_q4").data("text"));
    }
  }
  else if ($("#html_dislike_q4").is(":not(:checked)")) {
    if (userData.HTML.html_dislikes.includes($("#html_dislike_q4").data("text")) == true) {
      userData.HTML.html_dislikes.splice(userData.HTML.html_dislikes.indexOf($("#html_dislike_q4").data("text")));
    }
  }


  window.localStorage.setItem("userData", JSON.stringify(userData));
}


//When the user selects the CSS Option
CSS_option_box();


function updateAnswers_css() {
  //Storing the answers in the CSS object of the userData object
  //Positive answers to CSS

  //Likes Q1
  //If the box is checked then Adding the answers in object if it does not exist 
  if ($("#css_like_q1").is(":checked")) {
    if (userData.CSS.css_likes.includes($("#css_like_q1").data("text")) == false) {
      userData.CSS.css_likes.push($("#css_like_q1").data("text"));
    }
  }
  //If the box is unchecked then removing the answers in object if it exists
  else if ($("#css_like_q1").is(":not(:checked)")) {
    if (userData.CSS.css_likes.includes($("#css_like_q1").data("text")) == true) {
      userData.CSS.css_likes.splice(userData.CSS.css_likes.indexOf($("#css_like_q1").data("text")));
    }
  }

  //Likes Q2
  if ($("#css_like_q2").is(":checked")) {
    if (userData.CSS.css_likes.includes($("#css_like_q2").data("text")) == false) {
      userData.CSS.css_likes.push($("#css_like_q2").data("text"));
    }
  }
  else if ($("#css_like_q2").is(":not(:checked)")) {
    if (userData.CSS.css_likes.includes($("#css_like_q2").data("text")) == true) {
      userData.CSS.css_likes.splice(userData.CSS.css_likes.indexOf($("#css_like_q2").data("text")));
    }
  }

  //Likes Q3
  if ($("#css_like_q3").is(":checked")) {
    if (userData.CSS.css_likes.includes($("#css_like_q3").data("text")) == false) {
      userData.CSS.css_likes.push($("#css_like_q3").data("text"));
    }
  }
  else if ($("#css_like_q3").is(":not(:checked)")) {
    if (userData.CSS.css_likes.includes($("#css_like_q3").data("text")) == true) {
      userData.CSS.css_likes.splice(userData.CSS.css_likes.indexOf($("#css_like_q3").data("text")));
    }
  }




  //Negative answers to CSS

  //Dislikes Q1
  //If the box is checked then Adding the answers in object if it does not exist 
  if ($("#css_dislike_q1").is(":checked")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q1").data("text")) == false) {
      userData.CSS.css_dislikes.push($("#css_dislike_q1").data("text"));
    }
  }

  //If the box is unchecked then removing the answers in object if it exists
  else if ($("#css_dislike_q1").is(":not(:checked)")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q1").data("text")) == true) {
      userData.CSS.css_dislikes.splice(userData.CSS.css_dislikes.indexOf($("#css_dislike_q1").data("text")));
    }
  }

  //Dislikes Q2
  if ($("#css_dislike_q2").is(":checked")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q2").data("text")) == false) {
      userData.CSS.css_dislikes.push($("#css_dislike_q2").data("text"));
    }
  }
  else if ($("#css_dislike_q2").is(":not(:checked)")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q2").data("text")) == true) {
      userData.CSS.css_dislikes.splice(userData.CSS.css_dislikes.indexOf($("#css_dislike_q2").data("text")));
    }
  }

  //Dislikes Q3
  if ($("#css_dislike_q3").is(":checked")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q3").data("text")) == false) {
      userData.CSS.css_dislikes.push($("#css_dislike_q3").data("text"));
    }
  }
  else if ($("#css_dislike_q3").is(":not(:checked)")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q3").data("text")) == true) {
      userData.CSS.css_dislikes.splice(userData.CSS.css_dislikes.indexOf($("#css_dislike_q3").data("text")));
    }
  }

  //Dislikes Q4
  if ($("#css_dislike_q4").is(":checked")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q4").data("text")) == false) {
      userData.CSS.css_dislikes.push($("#css_dislike_q4").data("text"));
    }
  }
  else if ($("#css_dislike_q4").is(":not(:checked)")) {
    if (userData.CSS.css_dislikes.includes($("#css_dislike_q4").data("text")) == true) {
      userData.CSS.css_dislikes.splice(userData.CSS.css_dislikes.indexOf($("#css_dislike_q4").data("text")));
    }
  }
  window.localStorage.setItem("userData", JSON.stringify(userData));
}


//When user selects JS Option
JS_option_box();


function updateAnswers_js() {
  //Storing the answers in the JS object of the userData object
  //Positive answers to JS

  //Likes Q1
  //If the box is checked then Adding the answers in object if it does not exist 
  if ($("#js_like_q1").is(":checked")) {
    if (userData.JS.js_likes.includes($("#js_like_q1").data("text")) == false) {
      userData.JS.js_likes.push($("#js_like_q1").data("text"));
    }
  }
  //If the box is unchecked then removing the answers in object if it exists
  else if ($("#js_like_q1").is(":not(:checked)")) {
    if (userData.JS.js_likes.includes($("#js_like_q1").data("text")) == true) {
      userData.JS.js_likes.splice(userData.JS.js_likes.indexOf($("#js_like_q1").data("text")));
    }
  }

  //Likes Q2
  if ($("#js_like_q2").is(":checked")) {
    if (userData.JS.js_likes.includes($("#js_like_q2").data("text")) == false) {
      userData.JS.js_likes.push($("#js_like_q2").data("text"));
    }
  }

  else if ($("#js_like_q2").is(":not(:checked)")) {
    if (userData.JS.js_likes.includes($("#js_like_q2").data("text")) == true) {
      userData.JS.js_likes.splice(userData.JS.js_likes.indexOf($("#js_like_q2").data("text")));
    }
  }

  //Likes Q3
  if ($("#js_like_q3").is(":checked")) {
    if (userData.JS.js_likes.includes($("#js_like_q3").data("text")) == false) {
      userData.JS.js_likes.push($("#js_like_q3").data("text"));
    }
  }

  else if ($("#js_like_q3").is(":not(:checked)")) {
    if (userData.JS.js_likes.includes($("#js_like_q3").data("text")) == true) {
      userData.JS.js_likes.splice(userData.JS.js_likes.indexOf($("#js_like_q3").data("text")));
    }
  }

  //Likes Q4
  if ($("#js_like_q4").is(":checked")) {
    if (userData.JS.js_likes.includes($("#js_like_q4").data("text")) == false) {
      userData.JS.js_likes.push($("#js_like_q4").data("text"));
    }
  }

  else if ($("#js_like_q4").is(":not(:checked)")) {
    if (userData.JS.js_likes.includes($("#js_like_q4").data("text")) == true) {
      userData.JS.js_likes.splice(userData.JS.js_likes.indexOf($("#js_like_q4").data("text")));
    }
  }


  //Negative answers to JS

  //Dislikes Q1
  //If the box is checked then Adding the answers in object if it does not exist 
  if ($("#js_dislike_q1").is(":checked")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q1").data("text")) == false) {
      userData.JS.js_dislikes.push($("#js_dislike_q1").data("text"));
    }
  }

  //If the box is unchecked then removing the answers in object if it exists
  else if ($("#js_dislike_q1").is(":not(:checked)")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q1").data("text")) == true) {
      userData.JS.js_dislikes.splice(userData.JS.js_dislikes.indexOf($("#js_dislike_q1").data("text")));
    }
  }

  //Dislikes Q2
  if ($("#js_dislike_q2").is(":checked")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q2").data("text")) == false) {
      userData.JS.js_dislikes.push($("#js_dislike_q2").data("text"));
    }
  }
  else if ($("#js_dislike_q2").is(":not(:checked)")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q2").data("text")) == true) {
      userData.JS.js_dislikes.splice(userData.JS.js_dislikes.indexOf($("#js_dislike_q2").data("text")));
    }
  }

  //Dislikes Q3
  if ($("#js_dislike_q3").is(":checked")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q3").data("text")) == false) {
      userData.JS.js_dislikes.push($("#js_dislike_q3").data("text"));
    }
  }
  else if ($("#js_dislike_q3").is(":not(:checked)")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q3").data("text")) == true) {
      userData.JS.js_dislikes.splice(userData.JS.js_dislikes.indexOf($("#js_dislike_q3").data("text")));
    }
  }
  //Dislikes Q4
  if ($("#js_dislike_q4").is(":checked")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q4").data("text")) == false) {
      userData.JS.js_dislikes.push($("#js_dislike_q4").data("text"));
    }
  }
  else if ($("#js_dislike_q4").is(":not(:checked)")) {
    if (userData.JS.js_dislikes.includes($("#js_dislike_q4").data("text")) == true) {
      userData.JS.js_dislikes.splice(userData.JS.js_dislikes.indexOf($("#js_dislike_q4").data("text")));
    }
  }
  window.localStorage.setItem("userData", JSON.stringify(userData));
}










//Function to check if at least one question is answered in each option
function check_if_all_options_answered(option_view_id) {
  if (HTML_answered == true && CSS_answered == true && JS_answered == true) {

    normal_switch(click = true, "#q3", option_view_id, "q3_view");
    run_view_3();
    return true;
  }
}


function run_view_3() {



  //Making the previous button take the user to the previous view
  $("#strength_previous_button").click(function () {
    //Updating object with answers
    updateAnswers_strength();
    //Changing the visual elements
    $("#HTML_button").show();
    $("#CSS_button").show();
    $("#JS_button").show();
    HTML_answered = false;
    CSS_answered = false;
    JS_answered = false;
    window.localStorage.setItem("HTML_answered", JSON.stringify(HTML_answered));
    window.localStorage.setItem("CSS_answered", JSON.stringify(CSS_answered));
    window.localStorage.setItem("JS_answered", JSON.stringify(JS_answered));

    //Hiding the q3 view and Making the q2 view appear with a animation
    normal_switch(click = true, "#q2", "#q3", "q2_view");

  });

  //Making the next button take the user to the selection view
  $("#strength_next_button").click(function () {
    //Updating object with answers
    updateAnswers_strength();

    let unchecked_strength_html = 0;

    $(".html_radio").each(function (index) {
      if ($(this).is(":not(:checked)")) {
        unchecked_strength_html += 1;
      }
    })

    let unchecked_strength_css = 0;

    $(".css_radio").each(function (index) {
      if ($(this).is(":not(:checked)")) {
        unchecked_strength_css += 1;
      }
    })

    let unchecked_strength_js = 0;
    $(".js_radio").each(function (index) {
      if ($(this).is(":not(:checked)")) {
        unchecked_strength_js += 1;
      }
    })

    if (unchecked_strength_html == 4 || unchecked_strength_css == 4 || unchecked_strength_js == 4) {


      $(".warningmsg").show();

      setTimeout(function () {
        //Hiding the warning messageafter 2 seconds
        $(".warningmsg").hide();
      }, 2000);
    }

    else {


      //Hiding the q3 view and Making the thanks view appear with a animation
      normal_switch(click = true, "#thanks", "#q3", "thanks_view");
    }

  });



  function updateAnswers_strength() {
    //Storing the answers in the HTML,CSS and JS object of the userData object
    //Storing he strength of the user in each programming language

    //HTML Strength

    //Option 1
    //If the box is checked then Adding the answers in object if it does not exist 
    if ($("#html_strength_option_1").is(":checked")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_1").data("text")) == false) {
        userData.HTML.html_strength = $("#html_strength_option_1").data("text");
      }
    }
    //If the box is unchecked then removing the answers in object if it exists
    else if ($("#html_strength_option_1").is(":not(:checked)")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_1").data("text")) == true) {
        userData.HTML.html_strength = "";
      }
    }

    //Option 2
    if ($("#html_strength_option_2").is(":checked")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_2").data("text")) == false) {
        userData.HTML.html_strength = $("#html_strength_option_2").data("text");
      }
    }

    else if ($("#html_strength_option_2").is(":not(:checked)")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_2").data("text")) == true) {
        userData.HTML.html_strength = "";
      }
    }

    //Option 3
    if ($("#html_strength_option_3").is(":checked")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_3").data("text")) == false) {
        userData.HTML.html_strength = $("#html_strength_option_3").data("text");
      }
    }

    else if ($("#html_strength_option_3").is(":not(:checked)")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_3").data("text")) == true) {
        userData.HTML.html_strength = "";
      }
    }


    //Option 4
    if ($("#html_strength_option_4").is(":checked")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_4").data("text")) == false) {
        userData.HTML.html_strength = $("#html_strength_option_4").data("text");
      }
    }

    else if ($("#html_strength_option_4").is(":not(:checked)")) {
      if (userData.HTML.html_strength.includes($("#html_strength_option_4").data("text")) == true) {
        userData.HTML.html_strength = "";
      }
    }


    //CSS Strength

    //Option 1
    //If the box is checked then Adding the answers in object if it does not exist 
    if ($("#css_strength_option_1").is(":checked")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_1").data("text")) == false) {
        userData.CSS.css_strength = $("#css_strength_option_1").data("text");
      }
    }
    //If the box is unchecked then removing the answers in object if it exists
    else if ($("#css_strength_option_1").is(":not(:checked)")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_1").data("text")) == true) {
        userData.CSS.css_strength = "";
      }
    }

    //Option 2
    if ($("#css_strength_option_2").is(":checked")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_2").data("text")) == false) {
        userData.CSS.css_strength = $("#css_strength_option_2").data("text");
      }
    }

    else if ($("#css_strength_option_2").is(":not(:checked)")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_2").data("text")) == true) {
        userData.CSS.css_strength = "";
      }
    }

    //Option 3
    if ($("#css_strength_option_3").is(":checked")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_3").data("text")) == false) {
        userData.CSS.css_strength = $("#css_strength_option_3").data("text");
      }
    }

    else if ($("#css_strength_option_3").is(":not(:checked)")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_3").data("text")) == true) {
        userData.CSS.css_strength = "";
      }
    }


    //Option 4
    if ($("#css_strength_option_4").is(":checked")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_4").data("text")) == false) {
        userData.CSS.css_strength = $("#css_strength_option_4").data("text");
      }
    }

    else if ($("#css_strength_option_4").is(":not(:checked)")) {
      if (userData.CSS.css_strength.includes($("#css_strength_option_4").data("text")) == true) {
        userData.CSS.css_strength = "";
      }
    }



    //JS Strength

    //Option 1
    //If the box is checked then Adding the answers in object if it does not exist 
    if ($("#js_strength_option_1").is(":checked")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_1").data("text")) == false) {
        userData.JS.js_strength = $("#js_strength_option_1").data("text");
      }
    }
    //If the box is unchecked then removing the answers in object if it exists
    else if ($("#js_strength_option_1").is(":not(:checked)")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_1").data("text")) == true) {
        userData.JS.js_strength = "";
      }
    }

    //Option 2
    if ($("#js_strength_option_2").is(":checked")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_2").data("text")) == false) {
        userData.JS.js_strength = $("#js_strength_option_2").data("text");
      }
    }

    else if ($("#js_strength_option_2").is(":not(:checked)")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_2").data("text")) == true) {
        userData.JS.js_strength = "";
      }
    }

    //Option 3
    if ($("#js_strength_option_3").is(":checked")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_3").data("text")) == false) {
        userData.JS.js_strength = $("#js_strength_option_3").data("text");
      }
    }

    else if ($("#js_strength_option_3").is(":not(:checked)")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_3").data("text")) == true) {
        userData.JS.js_strength = "";
      }
    }


    //Option 4
    if ($("#js_strength_option_4").is(":checked")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_4").data("text")) == false) {
        userData.JS.js_strength = $("#js_strength_option_4").data("text");
      }
    }

    else if ($("#js_strength_option_4").is(":not(:checked)")) {
      if (userData.JS.js_strength.includes($("#js_strength_option_4").data("text")) == true) {
        userData.JS.js_strength = "";
      }
    }

    window.localStorage.setItem("userData", JSON.stringify(userData));
  }

}

view_answers();
function view_answers() {
  $("#view_answers_button").click(function () {
    //Hiding the thanks view and Making the answers view appear with a animation
    normal_switch(click = true, "#answers", "#thanks", "answers_view");
    display_answers();
  });
  if (localStorage.state == "answers_view") {
    display_answers();
  }

}


function display_answers() {
  // HTML Answers
  $("#answers #html_section").append("<u><strong><h2>HTML:</h2></strong></u>");

  //Likes
  $("#answers #html_section ").append("<b><h3>HTML Likes:</h3></b>  <ul id=" + "html_likes_ul" + "></ul>");

  //Checking if user answered
  if (userData.HTML.html_likes.length > 0) {
    for (let i = 0; i < userData.HTML.html_likes.length; i++) {
      $("#answers #html_section #html_likes_ul").append("<li> <h4>" + userData.HTML.html_likes[i] + "</h4></li>");
    }
  }

  //Display No likes if user didn't answer the question
  else {
    $("#answers #html_section #html_likes_ul").append("<li> <h4> No likes</h4></li>");
  }

  //Dislikes
  $("#answers #html_section").append("<b><h3>HTML Dislikes:</h3></b>  <ul id=" + "html_dislikes_ul" + "></ul>");

  if (userData.HTML.html_dislikes.length > 0) {
    for (let i = 0; i < userData.HTML.html_dislikes.length; i++) {
      $("#answers #html_section #html_dislikes_ul").append("<h4><li>" + userData.HTML.html_dislikes[i] + "</h4></li>");
    }
  }

  else {
    $("#answers #html_section #html_dislikes_ul").append("<li> <h4> No dislikes</h4></li>");
  }

  //Strength
  $("#answers #html_section").append("<h3>HTML Strength:</h3>  <h4>" + userData.HTML.html_strength + "</h4>");



  // CSS Answers
  $("#answers #css_section").append("<u><strong><h2>CSS:</h2></strong></u>");

  //Likes
  $("#answers #css_section ").append("<b><h3>CSS Likes:</h3></b>  <ul id=" + "css_likes_ul" + "></ul>");

  //Checking if user answered
  if (userData.CSS.css_likes.length > 0) {
    for (let i = 0; i < userData.CSS.css_likes.length; i++) {
      $("#answers #css_section #css_likes_ul").append("<li> <h4>" + userData.CSS.css_likes[i] + "</h4></li>");
    }
  }

  //Display No likes if user didn't answer the question
  else {
    $("#answers #css_section #css_likes_ul").append("<li> <h4> No likes</h4></li>");
  }

  //Dislikes
  $("#answers #css_section").append("<b><h3>CSS Dislikes:</h3></b>  <ul id=" + "css_dislikes_ul" + "></ul>");

  if (userData.CSS.css_dislikes.length > 0) {
    for (let i = 0; i < userData.CSS.css_dislikes.length; i++) {
      $("#answers #css_section #css_dislikes_ul").append("<h4><li>" + userData.CSS.css_dislikes[i] + "</h4></li>");
    }
  }

  else {
    $("#answers #css_section #css_dislikes_ul").append("<li> <h4> No dislikes</h4></li>");
  }

  //Strength
  $("#answers #css_section").append("<h3>CSS Strength:</h3>  <h4>" + userData.CSS.css_strength + "</h4>");




  // JS Answers
  $("#answers #js_section").append("<u><strong><h2>JS:</h2></strong></u>");

  //Likes
  $("#answers #js_section ").append("<b><h3>JS Likes:</h3></b>  <ul id=" + "js_likes_ul" + "></ul>");

  //Checking if user answered
  if (userData.JS.js_likes.length > 0) {
    for (let i = 0; i < userData.JS.js_likes.length; i++) {
      $("#answers #js_section #js_likes_ul").append("<li> <h4>" + userData.JS.js_likes[i] + "</h4></li>");
    }
  }

  //Display No likes if user didn't answer the question
  else {
    $("#answers #js_section #js_likes_ul").append("<li> <h4> No likes</h4></li>");
  }

  //Dislikes
  $("#answers #js_section").append("<b><h3>JS Dislikes:</h3></b>  <ul id=" + "js_dislikes_ul" + "></ul>");

  if (userData.JS.js_dislikes.length > 0) {
    for (let i = 0; i < userData.JS.js_dislikes.length; i++) {
      $("#answers #js_section #js_dislikes_ul").append("<li> <h4>" + userData.JS.js_dislikes[i] + "</h4></li>");
    }
  }

  else {
    $("#answers #js_section #js_dislikes_ul").append("<li> <h4> No dislikes</h4></li>");
  }

  //Strength
  $("#answers #js_section").append("<h3>JS Strength:</h3>  <h4>" + userData.JS.js_strength + "</h4>");


}

//When the user clicks on delete answers button
$("#delete_answers_button").click(function () {
  //Reloading the page to delete everything and go to start
  window.localStorage.clear();
  location.reload();
});

$("#delete_answers_button_second").click(function () {
  //Reloading the page to delete everything and go to start
  window.localStorage.clear();
  location.reload();
});

//What happens when user clicks on any 3 option boxes in q2 view 
function HTML_option_box() {
  //When the user selects HTML Option
  $("#HTML_button").click(function () {
    //Hiding the q2 view Making the q2a view appear with a animation
    normal_switch(click = true, "#q2a", "#q2", "q2a_view");



  });
  //Making the previous button take the user to the previous view
  $("#previous_button").click(function () {
    //Updating object with answers
    updateAnswers_html();
    //Changing the visual elements
    $("#HTML_button").show();

    //Hiding the q2a view Making the q2 view appear with a animation
    normal_switch(click = true, "#q2", "#q2a", "q2_view");

  });

  //Making the next button take the user to the selection view
  $("#next_button").click(function () {
    console.log("haha");
    //Updating object with answers
    updateAnswers_html();


    var HTML_unchecked = 0;


    $(".HTML_checkboxes").each(function (index) {
      if ($(this).is(":not(:checked)")) {
        HTML_unchecked += 1;

      }
    })

    if (HTML_unchecked == 8) {

      $(".warningmsg").show();

      setTimeout(function () {
        //Hiding the warning messageafter 2 seconds
        $(".warningmsg").hide();

        //Hiding the q2a view and Making the q2 view appear with a animation
        normal_switch(click = true, "#q2", "#q2a", "q2_view");

      }, 2000);
    }

    else {
      //Updating the variable to tell the program that the HTML questions have been answered
      HTML_answered = true;
      window.localStorage.setItem("HTML_answered", JSON.stringify(HTML_answered));

      if (check_if_all_options_answered("#q2a") != true) {
        $("#HTML_button").hide();
        //Hiding the q2a view and Making the q2 view appear with a animation
        normal_switch(click = true, "#q2", "#q2a", "q2_view");

      }

    }

  });
}

function CSS_option_box() {

  $("#CSS_button").click(function () {
    //Hiding the q2 view Making the q2b view appear with a animation
    normal_switch(click = true, "#q2b", "#q2", "q2b_view");
  });
  //Making the previous button take the user to the previous view
  $("#previous_button").click(function () {
    //Updating object with answers
    updateAnswers_css();
    //Changing the visual elements
    $("#CSS_button").show();
    normal_switch(click = true, "#q2", "#q2b", "q2_view");
  });

  //Making the next button take the user to the selection view
  $("#CSS_next_button").click(function () {
    //Updating object with answers
    updateAnswers_css();

    let unchecked_css = 0;
    $(".CSS_checkboxes").each(function (index) {
      if ($(this).is(":not(:checked)")) {
        unchecked_css += 1;
      }
    })

    if (unchecked_css == 7) {

      $(".warningmsg").show();

      setTimeout(function () {
        //Hiding the warning messageafter 2 seconds
        $(".warningmsg").hide();

        //Hiding the q2b view and Making the q2 view appear with a animation
        normal_switch(click = true, "#q2", "#q2b", "q2_view");

      }, 2000);
    }

    else {
      //Updating the variable to tell the program that the CSS questions have been answered
      CSS_answered = true;
      window.localStorage.setItem("CSS_answered", JSON.stringify(CSS_answered));

      if (check_if_all_options_answered("#q2b") != true) {
        $("#CSS_button").hide();
        //Hiding the q2b view and Making the q2 view appear with a animation
        normal_switch(click = true, "#q2", "#q2b", "q2_view");

      }

    }

  });

}




function JS_option_box() {

  $("#JS_button").click(function () {
    //Hiding the q2b view Making the q2c view appear with a animation
    normal_switch(click = true, "#q2c", "#q2", "q2c_view");
  });
  //Making the previous button take the user to the previous view
  $("#JS_previous_button").click(function () {
    //Updating object with answers
    updateAnswers_js();
    //Changing the visual elements
    $("#JS_button").show();

    //Hiding the q2c view Making the q2 view appear with a animation
    normal_switch(click = true, "#q2", "#q2c", "q2_view");

  });

  //Making the next button take the user to the selection view
  $("#JS_next_button").click(function () {
    //Updating object with answers
    updateAnswers_js();

    let unchecked_js = 0;
    $(".JS_checkboxes").each(function (index) {
      if ($(this).is(":not(:checked)")) {
        unchecked_js += 1;
      }
    })

    if (unchecked_js == 8) {

      $(".warningmsg").show();

      setTimeout(function () {
        //Hiding the warning messageafter 2 seconds
        $(".warningmsg").hide();

        //Hiding the q2c view and Making the q2 view appear with a animation
        normal_switch(click = true, "#q2", "#q2c", "q2_view");
      }, 2000);
    }

    else {
      //Updating the variable to tell the program that the JS questions have been answered
      JS_answered = true;
      window.localStorage.setItem("JS_answered", JSON.stringify(JS_answered));
      if (check_if_all_options_answered("#q2c") != true) {
        $("#JS_button").hide();

        //Hiding the q2c view and Making the q2 view appear with a animation
        normal_switch(click = true, "#q2", "#q2c", "q2_view");
      }
    }

  });
}
















//Function for making view appear according to localStorage
function switch_view_localStorage() {
  //$("#welcome").hide();

  normal_switch(click = false, "#welcome", "#q1", "welcome_view");

  if (window.localStorage.state != "welcome_view") {

    $("#welcome").hide();
  }



  //Welcome view to q1
  normal_switch(click = false, "#q1", "#welcome", "q1_view");

  //q1 view to q2
  normal_switch(click = false, "#q2", "#q1", "q2_view");

  //q2 and q2a

  normal_switch(click = false, "#q2a", "#q2", "q2a_view");
  normal_switch(click = false, "#q2", "#q2a", "q2_view");
  normal_switch(click = false, "#q3", "#q2a", "q3_view");


  //q2 and q2b
  normal_switch(click = false, "#q2b", "#q2", "q2b_view");

  normal_switch(click = false, "#q2", "#q2b", "q2_view");
  normal_switch(click = false, "#q3", "#q2b", "q3_view");

  //q2 and q2c
  normal_switch(click = false, "#q2c", "#q2", "q2c_view");
  normal_switch(click = false, "#q2", "#q2c", "q2_view");
  normal_switch(click = false, "#q3", "#q2c", "q3_view");

  normal_switch(click = false, "#thanks", "#q3", "thanks_view");
  normal_switch(click = false, "#answers", "#thanks", "answers_view");
  // normal_switch(click = false,"#q1", "#welcome","q1_view");
  // normal_switch(click = false,"#q1", "#welcome","q1_view");
  // normal_switch(click = false,"#q1", "#welcome","q1_view");

}

//Function for previous button animation, takes the id of previous view and current view as parameters
function previous(previous_view_id, current_view_id) {
  //Hiding the current view
  $(current_view_id).hide();
  //Making the previous view appear with a animation
  $(previous_view_id).slideUpShow();
}

//Function for next button animation,takes the id of current view and next view as parameters
function next(next_view_id, current_view_id) {
  //Hiding the current view
  $(current_view_id).hide();
  //Making the next view appear with a animation
  $(next_view_id).slideDown();
}

//Custom SlideUp show animation 
jQuery.fn.slideUpShow = function (time, callback) {
  if (!time)
    time = 400;
  var o = $(this[0]) // It's your element

  if (o.is(':hidden')) {
    var height = o.css({
      display: "block"
    }).height();

    o.css({
      overflow: "hidden",
      marginTop: height,
      height: 0
    }).animate({
      marginTop: 0,
      height: height
    }, time, function () {
      $(this).css({
        display: "",
        overflow: "",
        height: "",
        marginTop: ""
      });
      if (callback)
        callback();
    });
  }
  return this; // This is needed so others can keep chaining off of this
};


//Function to go to next view and/or store the state in localStorage
function normal_switch(click = false, next_view, current_view, state) {


  //If there is no true argument given while calling the function and the state matches the condition, change view according to state
  if (click == false && window.localStorage.getItem("state") == state) {
    //Hiding the welcome view and Making the question 1 view appear with a animation
    next(next_view, current_view);
    return true;
  }

  //If true argument given that means its for a click on a button so change the view then store the view name in state in localStorage
  else if (click == true) {
    window.localStorage.setItem("state", state);
    next(next_view, current_view);
    //Creating property in local storage object:


  }

}
