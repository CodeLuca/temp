// im being fucking lazy so u might wannt to add extra data validation and i defined everything in the function scope which was a pretty shit idea

function _CLIENT_SEND(){
    
  // FUNCTION DECLERATION
  
  function isInt(value) {
    return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
  }
  
  function cleanDiv(div_clear){
    var div = document.getElementById(div_clear);
    while (div.firstChild){
        div.removeChild(div.firstChild);
    }
  }
  
  // VARIABLE DECLERATION
  
  const _NAME_SELECTIONS = [
    document.getElementById("COMPUTING"),
    document.getElementById("MATHS")
  ]
  
  const _LABEL_OUTPUT = [
    document.getElementById("OUTPUT_1"), 
    document.getElementById("OUTPUT_2")
  ];
  
  var COUNT = 0
  
  // CLEAR _LABEL_OUTPUT
  function _CLEAR_LABEL(){
    _LABEL_OUTPUT.forEach(function(_VALUE) {
      _VALUE.innerHTML = ""
    });
  }
  
  _CLEAR_LABEL()
  
  // DATA_VALIDATION CHECKING
    
  if ( isInt(Number(_NAME_SELECTIONS[0].value)) !== true || isInt(Number(_NAME_SELECTIONS[1].value)) !== true ){
    return _LABEL_OUTPUT[0].innerHTML = "VALUES NOT NUMBER"
  }
  
  if (_NAME_SELECTIONS[0].value <= 6 || _NAME_SELECTIONS[1].value < 6){
    return _LABEL_OUTPUT[0].innerHTML = "We don't recommend that you do this course at this moment in time. We're sorry."
  } else {
    _LABEL_OUTPUT[0].innerHTML = "You can do BTEC computing and A-Level Maths."
  }
  
  cleanDiv("_LABEL_INPUT")
  
  var _TITLE = document.createElement("h4");
  var _TITLE_NODE = document.createTextNode("Would you to do the following courses?");
  _TITLE.appendChild(_TITLE_NODE);
  
  document.getElementById("_LABEL_INPUT").appendChild(_TITLE);

  // FIRST LABEL
  var _LABEL_1 = document.createElement("label");
  
  var _LABEL_1_TEXT = document.createTextNode("BTEC Computing?");
  _LABEL_1.appendChild(_LABEL_1_TEXT);
  
  var _INPUT_1 = document.createElement("input");
  _INPUT_1.id = "BTEC_COMPUTING"

  // BR
  var _BR = document.createElement("br");
  var _BR_2 = document.createElement("br");

  // SECOND LABEL
  var _LABEL_2 = document.createElement("label");
  
  var _LABEL_2_TEXT = document.createTextNode("A level maths?:");
  _LABEL_2.appendChild(_LABEL_2_TEXT);
  
  var _INPUT_2 = document.createElement("input");
  _INPUT_2.id = "A_MATHS"
  
  // CREATE BUTTON
  var _BUTTON = document.createElement("button")
  _BUTTON.id = "SUBMIT"
  _BUTTON.innerHTML = "Continue";

  // GET LABEL INPUT
  var _LABEL_INPUT = document.getElementById("_LABEL_INPUT");
  
  // APPEND PRE CREATED DOMS TO LABEL (DIV)
  _LABEL_INPUT.appendChild(_LABEL_1);
  _LABEL_INPUT.appendChild(_INPUT_1);
  _LABEL_INPUT.appendChild(_BR)
  _LABEL_INPUT.appendChild(_LABEL_2);
  _LABEL_INPUT.appendChild(_INPUT_2);
  _LABEL_INPUT.appendChild(_BR_2)
  _LABEL_INPUT.appendChild(_BUTTON);

  _BUTTON.addEventListener ("click", function() {
    
    const _NAME_SELECTIONS = [
      document.getElementById("BTEC_COMPUTING"),
      document.getElementById("A_MATHS")
    ]

    if (_NAME_SELECTIONS[0].value == "yes" && _NAME_SELECTIONS[1].value == "yes"){
      COUNT = COUNT + 100
    } else if (_NAME_SELECTIONS[0].value == "yes" && _NAME_SELECTIONS[1].value == "no"){
      COUNT = COUNT + 60
    } else if (_NAME_SELECTIONS[0].value == "no" && _NAME_SELECTIONS[1].value == "yes"){
      COUNT = COUNT + 60
      _LABEL_OUTPUT[0].innerHTML = "You have 60 points."
    } else {
      _LABEL_OUTPUT[0].innerHTML = "You have 0 points."
      return;
    }
    
    _LABEL_OUTPUT[1].innerHTML = "AWAITING INPUT..."
    _LABEL_OUTPUT[0].innerHTML = "YOU HAVE GOT "+ COUNT +" POINTS"
    
    cleanDiv("_LABEL_INPUT")
    
    // FIRST LABEL
    var _LABEL_1 = document.createElement("label");

    var _LABEL_1_TEXT = document.createTextNode("What do you plan on getting? 'pass','merit' 'distinction' or 'distinction*': ");
    _LABEL_1.appendChild(_LABEL_1_TEXT);

    var _INPUT_1 = document.createElement("input");
    _INPUT_1.id = "P_M_D"

    // BR
    var _BR = document.createElement("br");

    // CREATE BUTTON
    var _SECOND_BUTTON = document.createElement("button")
    _SECOND_BUTTON.id = "SUBMIT"
    _SECOND_BUTTON.innerHTML = "Continue to jobs";

    // GET LABEL INPUT
    var _LABEL_INPUT = document.getElementById("_LABEL_INPUT");

    // APPEND PRE CREATED DOMS TO LABEL (DIV)
    _LABEL_INPUT.appendChild(_LABEL_1);
    _LABEL_INPUT.appendChild(_INPUT_1);
    _LABEL_INPUT.appendChild(_BR)
    _LABEL_INPUT.appendChild(_SECOND_BUTTON);

    _SECOND_BUTTON.addEventListener ("click", function() {
      _VAL = document.getElementById("P_M_D").value

      if (_VAL === "pass"){
        COUNT = COUNT + 100
      } else if (_VAL === "merit"){
        COUNT = COUNT + 150       
      } else if (_VAL === "distinction"){
        COUNT = COUNT + 200    
      } else if (_VAL === "distinction*"){
        COUNT = COUNT + 300
      } else {
        _LABEL_OUTPUT[0].innerHTML = "YOU DID NOT ENTER A VALID VALUE: " + _VAL
        return _LABEL_OUTPUT[1].innerHTML = "PROCESS END"
      }
      
      _LABEL_OUTPUT[1].innerHTML = "CONTINUING..."
      _LABEL_OUTPUT[0].innerHTML = "YOU HAVE GOT "+ COUNT +" POINTS"
      
      // ASK ABOUT JOBS AND INTERNSHIPS ETC
      
      cleanDiv("_LABEL_INPUT")
  
      // FIRST LABEL
      var _LABEL_1 = document.createElement("label");

      var _LABEL_1_TEXT = document.createTextNode("[yes/no] Have you released games/code on the web?: ");
      _LABEL_1.appendChild(_LABEL_1_TEXT);

      var _INPUT_1 = document.createElement("input");
      _INPUT_1.id = "_GAMES_CODE_WEB"

      // BR
      var _BR = document.createElement("br");
      var _BR_2 = document.createElement("br");

      // SECOND LABEL
      var _LABEL_2 = document.createElement("label");

      var _LABEL_2_TEXT = document.createTextNode("[yes/no] Have you ever done an internship: ");
      _LABEL_2.appendChild(_LABEL_2_TEXT);

      var _INPUT_2 = document.createElement("input");
      _INPUT_2.id = "INTERN_SHIP"

      // CREATE BUTTON
      var _THIRD_BUTTON = document.createElement("button")
      _THIRD_BUTTON.id = "SUBMIT"
      _THIRD_BUTTON.innerHTML = "Continue to view points";

      // GET LABEL INPUT
      var _LABEL_INPUT = document.getElementById("_LABEL_INPUT");

      // APPEND PRE CREATED DOMS TO LABEL (DIV)
      _LABEL_INPUT.appendChild(_LABEL_1);
      _LABEL_INPUT.appendChild(_INPUT_1);
      _LABEL_INPUT.appendChild(_BR)
      _LABEL_INPUT.appendChild(_LABEL_2);
      _LABEL_INPUT.appendChild(_INPUT_2);
      _LABEL_INPUT.appendChild(_BR_2)
      _LABEL_INPUT.appendChild(_THIRD_BUTTON);
      
      _THIRD_BUTTON.addEventListener ("click", function() {
        const _JOB_INTERN = [
          document.getElementById("_GAMES_CODE_WEB"),
          document.getElementById("INTERN_SHIP")
        ]
        
        if (_JOB_INTERN[0].value === "yes"){
          COUNT = COUNT + 500
        } else if (_JOB_INTERN[0].value !== "no"){
          _LABEL_OUTPUT[0].innerHTML = "YOU DID NOT ENTER A VALID VALUE: " + _JOB_INTERN[0].value
          return _LABEL_OUTPUT[1].innerHTML = "PROCESS END"          
        }
        
         if (_JOB_INTERN[1].value === "yes"){
          COUNT = COUNT + 300
        } else if (_JOB_INTERN[1].value !== "no"){
          _LABEL_OUTPUT[0].innerHTML = "YOU DID NOT ENTER A VALID VALUE: " + _JOB_INTERN[0].value
          return _LABEL_OUTPUT[1].innerHTML = "PROCESS END"          
        }
        
        // CLEAR DIV
        
        cleanDiv("_LABEL_INPUT")
        
        _LABEL_OUTPUT[0].innerHTML = "YOU HAVE GOT "+ COUNT +" POINTS"
        
        if (COUNT < 300){
          return _LABEL_OUTPUT[1].innerHTML = "YOU'VE GOT LESS THAN 300 POINTS, YOU ARE UNLIKELY TO BE ABLE TO FOLLOW A PATH IN COMPUTING"   
        } else if (COUNT > 300 && COUNT < 1000){
          return _LABEL_OUTPUT[1].innerHTML = "YOU MAY BE ABLE TO FOLLOW A PATH IN THIS CAREER BUT FINDING A JOB MAY BE DIFICULT"   
        } else if (COUNT > 1000){
          return _LABEL_OUTPUT[1].innerHTML = "YOU HAVE A CHANCE IN THIS CAREER PATH BUT BEWARE, IT'S DIFICULT"   
        }
      })
    })
  });
}

