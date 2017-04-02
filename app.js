localStorage.CADCNY = 5.1352;
localStorage.CADUSD = 0.7471;
$("#convertBtn").on("click", function(e) {
   const type = $("#type").const();
   const elem = Number.parseFloat(localStorage[type]) || 0;
   const inputText = $("#convertTxt").const();
    inputText = Number.parseFloat(inputText);
    $("#result").html(inputText * elem);
});
