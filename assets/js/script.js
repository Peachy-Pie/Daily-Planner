// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
//go to mini project for clock
// if dayjshr > time past else present else future
let currentTime = $('#currentDay')
var scheduler = [
  {
      id: "hr0",
      hr: "09",
      time: "09",
      meridiem: "am",
      plan: '',
  },
  {
      id: "hr1",
      hr: "10",
      time: "10",
      meridiem: "am",
      plan: '',
  },
  {
      id: "hr2",
      hr: "11",
      time: "11",
      meridiem: "am",
      plan: '',
  },
  {
      id: "hr3",
      hr: "12",
      time: "12",
      meridiem: "pm",
      plan: '',
  },
  {
      id: "hr4",
      hr: "01",
      time: "13",
      meridiem: "pm",
      plan: '',
  },
  {
      id: "hr5",
      hr: "02",
      time: "14",
      meridiem: "pm",
      plan: '',
  },
  {
      id: "hr6",
      hr: "03",
      time: "15",
      meridiem: "pm",
      plan: '',
  },
  {
      id: "hr7",
      hr: "04",
      time: "16",
      meridiem: "pm",
      plan: '',
  },
  {
      id: "hr8",
      hr: "05",
      time: "17",
      meridiem: "pm",
      plan: '',
  },
  
];

$(function () {

  scheduler.forEach(function(hr) {
    const planVal = $("<div>").attr({
        class: "row time-block",
    });
    $(".container-lg").append(planVal);

    const hour = $('<div>', {
      class: 'col-2 col-md-1 hr text-center py-3',
    }).text(`${hr.hr}${hr.meridiem}`).appendTo(planVal)
    
    let plan = $('<textarea>').appendTo(planVal)

    plan.attr("id", hr.id);
    if (hr.time < dayjs().format("HH")) {
        plan.attr ({
          "class": "col-8 col-md-10 description past", 
        })
    } else if (hr.time === dayjs().format("HH")) {
        plan.attr({
          "class": "col-8 col-md-10 description present",
        })
    } else {
        plan.attr({
          "class": "col-8 col-md-10 description future",
        })

    };
  });

  let saveBtn = $('<button>', {
    class: "btn saveBtn col-2 col-md-1"
  }).appendTo('.time-block')

  let saveBtnIcon = $('<i>', {
    class: 'fas fa-save',
  }).appendTo('.saveBtn')

  function renderStorage () {
    $('textarea').each(function() {
      $(this).val(JSON.parse(
        localStorage.getItem(hr0, hr1, hr2, hr3, hr4, hr5, hr6, hr7, hr8)
      ))
    })
  };
  renderStorage()

  $('.saveBtn').click(function(e){
    e.preventDefault();
    let ids = '';
    $(this).siblings().each(function(idx, el) {
      ids = ('#' + el.id)
      console.log(el.value)
      localStorage.setItem(el.id, JSON.stringify(el.value))
    })
    })
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  function displayTime () {
    let current = dayjs().format('dddd MMMM DD [at] h:mm:ss a')
      currentTime.text(current)
  }

  displayTime();
  setInterval(displayTime, 1000)
  
});
