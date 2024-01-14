(function ($) {
  // can do something like
  const COMMAND = {
    Forward: "F",
    Backward: "B",
    Left: "L",
    Stop: "S",
    Right: "R",
    Wifi: "WIFI",
    Auto: "AUTO",
  };
  function sendCommand(cmd) {
    $.ajax({
      type: "GET",
      url: "/sendCommand/" + cmd,
      success: function (response, status) {
        if (status == "ok") {
          toggleMessage("Thành công");
        }
      },
    });
  }
  function toggleMessage(message) {
    $("#divMessage").html(message).show();
    setTimeout(() => {
      $("#divMessage").hide();
    }, 5000);
  }
  function initUI() {
    const htmlString = ` <center>
        <h1>Control Arduno Car</h1>
        <div class="mt-4 d-flex">
        <div> <button id="btnWifi"
                class="btn btn-warning btn-lg">Wifi</button></div>

        <div class="ml-2"> <button id="btnAuto"
                class="btn btn-info  btn-lg">Auto</button>

        </div>

    </div>
        <div class="mt-4 d-flex flex-column">
            <div> <button id="btnForward" class="btn btn-success btn-lg">Forward</button></div>

            <div class="mt-5"> <button id="btnLeft" class="btn btn-success  btn-lg">Left</button>
                <button id="btnStop" class="btn btn-success mx-5 btn-lg">Stop</button>
                <button id="btnRight" class="btn btn-success btn-lg">Right</button>
            </div>
            <div class="mt-5">
                <button id="btnBackward" class="btn btn-success btn-lg">Backward</button>
            </div>
        </div>
    </center>`;
    $("#app").html(htmlString);
  }

  $(document).ready(function () {
    initUI();
    $("#btnForward").on("click", function () {
      sendCommand(COMMAND.Forward);
    });
    $("#btnBackward").on("click", function () {
      sendCommand(COMMAND.Backward);
    });
    $("#btnLeft").on("click", function () {
      sendCommand(COMMAND.Left);
    });
    $("#btnRight").on("click", function () {
      sendCommand(COMMAND.Right);
    });
    $("#btnStop").on("click", function () {
      sendCommand(COMMAND.Stop);
    });
    $("#btnWifi").on("click", function () {
      sendCommand(COMMAND.Wifi);
      $(this).attr("disabled", true);
      $("#btnAuto").attr("disabled", false);
    });
    $("#btnAuto").on("click", function () {
      sendCommand(COMMAND.Auto);
      $(this).attr("disabled", true);
      $("#btnWifi").attr("disabled", false);
    });
  });
})(jQuery);
