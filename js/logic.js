

function displayDate() {
    var rightnow = moment().format("dddd MMM Mo YYYY");
      let displayDate = document.getElementById("currentDay");
      displayDate.text(rightnow);
    }
    const m = moment();
      console.log(m.format("dddd MMM Mo YYYY"));
      
      