// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
//go to mini project for clock
// if dayjshour > time past else present else future
let currentTime = $('#currentDay')
var scheduler = [
  {
      id: "0",
      hour: "09",
      time: "09",
      meridiem: "am",
  },
  {
      id: "1",
      hour: "10",
      time: "10",
      meridiem: "am",
  },
  {
      id: "2",
      hour: "11",
      time: "11",
      meridiem: "am",
  },
  {
      id: "3",
      hour: "12",
      time: "12",
      meridiem: "pm",
  },
  {
      id: "4",
      hour: "01",
      time: "13",
      meridiem: "pm",
  },
  {
      id: "5",
      hour: "02",
      time: "14",
      meridiem: "pm",
  },
  {
      id: "6",
      hour: "03",
      time: "15",
      meridiem: "pm",
  },
  {
      id: "7",
      hour: "04",
      time: "16",
      meridiem: "pm",
  },
  {
      id: "8",
      hour: "05",
      time: "17",
      meridiem: "pm",
  },
  
]

$(function () {

  scheduler.forEach(function(creation) {
    var planVal = $("<div>").attr({
        "class": "row time-block"
    });
    $(".container-lg").append(planVal);

    let planHour = $('<div>', {
      class: 'col-2 col-md-1 hour text-center py-3'
    }).text(`${creation.hour}${creation.meridiem}`).appendTo(planVal)
    
    let plan = $('<textarea>').appendTo(planVal)

    plan.attr("id", creation.id);
    if (creation.time < dayjs().format("HH")) {
        plan.attr ({
            "class": "col-8 col-md-10 description past", 
        })
    } else if (creation.time === dayjs().format("HH")) {
        plan.attr({
            "class": "col-8 col-md-10 description present"
        })
    } else if (creation.time > dayjs().format("HH")) {
        plan.attr({
            "class": "col-8 col-md-10 description future"
        })

    };
  });

  let saveBtn = $('<button>', {
    class: "btn saveBtn col-2 col-md-1"
  }).appendTo('.time-block')

  let saveBtnIcon = $('<i>', {
    class: 'fas fa-save',
  }).appendTo('.saveBtn')

  $('.saveBtn').click(function() {
    console.log('Ive been clicked')
  })

  
  
  
  
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayTime () {
    let current = dayjs().format('dddd MMMM DD [at] h:mm:ss a')
      currentTime.text(current)
  }

  displayTime();
  setInterval(displayTime, 1000)
  
});
