var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// Contact Form Scripts
$( document ).ready(function() {
$( "#request" ).click(function() {
    console.log("HERE");
    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var fname = $("input#fname").val();
            var lname = $("input#lname").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var origin = $("input#origin").val();
            var dest = $("input#dest").val();
            var passengers = $("input#passengers").val();
            var trip = $("input[name=trip]").val();
            var depdate = $("input#depdate").val();
            var deptime = $("input#deptime").val();
            var notes = $("textarea#notes").val();
            var firstName = fname; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            var rootFolder = '/BigFly/';
            var root = location.protocol + '//' + location.host + rootFolder;

            $.ajax({
                url: root + "mail.php",
                type: "POST",
                // datatype: "json",
                // contentType: 'application/json; charset=utf-8',
                data: {
                    fname: fname,
                    lname: lname,
                    phone: phone,
                    email: email,
                    origin: origin,
                    dest: dest,
                    passengers: passengers,
                    trip: trip,
                    depdate: depdate,
                    deptime: deptime,
                    notes: notes
                },
                cache: false,
                success: function(status) {
                    console.log(status);
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    // $('#contactForm').trigger("reset");
                },
                error: function(xhr, status, error) {
                    console.log(fname);
                    console.log(lname);
                    console.log(phone);
                    console.log(email);
                    console.log(origin);
                    console.log(dest);
                    console.log(passengers);
                    console.log(trip);
                    console.log(depdate);
                    console.log(deptime);
                    console.log(notes);
                    console.log(status);
                    console.log(xhr.responseText);
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});
});

}
/*
     FILE ARCHIVED ON 10:33:59 Jan 30, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:31:59 Aug 02, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 29.159
  PetaboxLoader3.datanode: 652.722 (5)
  exclusion.robots: 0.201
  exclusion.robots.policy: 0.187
  CDXLines.iter: 20.933 (3)
  captures_list: 642.961
  PetaboxLoader3.resolve: 131.01 (2)
  load_resource: 257.682
  esindex: 0.01
  LoadShardBlock: 589.305 (3)
*/