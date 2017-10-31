function Ticket(userType, matinee) {

  this.userType = userType;
  this.matinee = matinee;
}

Ticket.prototype.ticketPrice = function() {
  if (this.userType === "senior" && this.matinee === false) {
    return "$10.50";
  } else if (this.userType === "student" && this.matinee === false){
    return "$10.50";
  } else if (this.userType === "child" && this.matinee === false){
    return "$9.50";
  } else if (this.userType === "adult" && this.matinee === false){
    return "$12.50";
  }

  if (this.matinee === true) {
    return "$6.50";
  }
};

function resetSelect() {
  $("select#movieName").val("");
  $("select#movieTime").val("");
  $("select#movieUser").val("");
}

$(document).ready(function() {
  $("form#ticketType").submit(function(event){
      event.preventDefault();

      var selectedMovie = $("select#movieName").val();
      var selectedTime = $("select#movieTime").val();
      var selectedUser = $("select#movieUser").val();
      var matinee = false;

      if (selectedTime === "10:00 AM") {
        matinee = true;
      }

      var newTicket = new Ticket(selectedUser, matinee);
      var priceResult = newTicket.ticketPrice();

      resetSelect();

      $(".selectedMovie").text(selectedMovie);
      $(".priceResult").text(priceResult);

      $("#result").show();
  });
});
