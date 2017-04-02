localStorage.CADCNY = 5.1352;
localStorage.CADUSD = 0.7471;
$("#convertBtn").on("click", function(e) {
    var type = $("#type").val();
    var elem = Number.parseFloat(localStorage[type]) || 0;
    var inputText = $("#convertTxt").val();
    inputText = Number.parseFloat(inputText);
    $("#result").html(inputText * elem);
});