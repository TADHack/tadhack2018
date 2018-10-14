  if(testcase == 0) {
    $.ajax({
      type: "POST",
      url: https://api4.apidaze.io/4dd2c918/sms/send?api_secret=02acb1c22bf274223bfbd861da334d59,
      data: {
            from: 13129850406,
            to: 12244328255,
            body: "This is a test of ajax"
            },
      success: success,
      dataType: string
    });
   });
 }
})(jQuery);
