document.getElementById("emailSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("emailInput").value;
  if (value === "")
    return;
  // console.log(value);
  
  const url3 = "https://cat-fact.herokuapp.com/facts";
  fetch(url3)
    .then(function(response){
      return response.json();
    }).then(function(json){
      // console.log(json);
      let curHead = "<h1 class=\"sectionHeader centerText underline\">Cat Facts</h1>";
      let catFacts = "";
      for(let i = 0; i < json.length; i++){
        catFacts += "<div class=\"boxGreen\">";
        catFacts += "<p class=\"centerText\">Fact: " + json[i].text + "</p>";
        catFacts += "<p class=\"centerText\">Verified: " + json[i].status.verified + "</p>";
        catFacts += "</div>";
      }
      document.getElementById("catHeader").innerHTML = curHead;
      document.getElementById("catResults").innerHTML = catFacts;
  });

  const url4 = " https://api.coindesk.com/v1/bpi/currentprice.json";
  fetch(url4)
    .then(function(response){
      return response.json();
    }).then(function(json){
      // console.log(json);
      let curHead = "<h1 class=\"sectionHeader centerText underline\">Current Bitcoin Exchange</h1>";
      let numberFacts = "";
      numberFacts += "<div class=\"boxGreen\">";
      numberFacts += "<p class=\"centerText\">" + json.bpi.EUR.description + ": " + json.bpi.EUR.rate + json.bpi.EUR.symbol + "</p>";
      numberFacts += "<p class=\"centerText\">" + json.bpi.GBP.description + ": " + json.bpi.GBP.rate + json.bpi.GBP.symbol + "</p>";
      numberFacts += "<p class=\"centerText\">" + json.bpi.USD.description + ": " + json.bpi.USD.rate + json.bpi.USD.symbol + "</p>";
      numberFacts += "<p class=\"centerText\">Updated: " + moment(json.time).format('MMMM Do YYYY') + "</p>";
      numberFacts += "</div>";
      document.getElementById("bitHeader").innerHTML = curHead;
      document.getElementById("bitResults").innerHTML = numberFacts;
  });
  
  const url5 = "https://apilayer.net/api/check?access_key=1a8c0d1d8a37721a2c03c7fd9cfbc797&email=" + value + "&smtp=1&format=1";
  fetch(url5)
    .then(function(response){
      return response.json();
    }).then(function(json){
      // console.log(json);
      let curHead = "<h1 class=\"sectionHeader centerText underline\">Email Info</h1>";
      let emailInfo = "";
      emailInfo += "<div class=\"boxGreen\">";

      emailInfo += "<p class=\"centerText\">You entered: " + json.email;
      if(json.format_valid === true){
        emailInfo += " which is a valid email addresss. </p>";
      }
      else{
        emailInfo += " which is not a valid email addresss. </p>";
      }
      if(!(json.did_you_mean === "")){
        emailInfo += "<p class=\"centerText\">Did you mean: " + json.did_you_mean + "</p>";
      }
      if(!(json.domain === null)){
        emailInfo += "<p class=\"centerText\">Your domain is: " + json.domain + "</p>";
      }
      emailInfo += "</div>";
      document.getElementById("emailHeader").innerHTML = curHead;
      document.getElementById("emailResults").innerHTML = emailInfo;
  });
});

  