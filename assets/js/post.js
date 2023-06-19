$(document).ready(function() {
    $("#registrationForm").on("submit", function(e) {
      e.preventDefault();
  
      var fullName = $("#fullname").val();
      var email = $("#email").val();
      var profession = $("#profession").val();
      var continent = $("#continent").val();
      var profilePic = $("#profile_picture").val();
  
      var errorMessages = {
        fullName: "Type your full name",
        email: "Type your email address",
        profession: "Type your profession",
        continent: "Choose your continent",
        profilePic: "Choose your profile picture"
      };
  
      var isValid = true;
  
      $(".error").hide();
  
      if (!fullName) {
        $("#fullNameErr").fadeIn().html(errorMessages.fullName);
        isValid = false;
      }
  
      if (!email) {
        $("#emailErr").fadeIn().html(errorMessages.email);
        isValid = false;
      }
  
      if (!profession) {
        $("#professionErr").fadeIn().html(errorMessages.profession);
        isValid = false;
      }
  
      if (!continent) {
        $("#continentErr").fadeIn().html(errorMessages.continent);
        isValid = false;
      }
  
      if (!profilePic) {
        $("#profilePicErr").fadeIn().html(errorMessages.profilePic);
        isValid = false;
      }
  
      if (isValid) {
        alert("Your registration is successful");
      } else {
       alert("Something went wrong")
      }
    });
  });