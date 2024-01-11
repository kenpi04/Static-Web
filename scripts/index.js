(function($){
    // can do something like 
    const COMMAND={
        Forward:"F",
        Backward:"B",
        Left:"L",
        Stop:"S",
        Right:"R",
    }
    function sendCommand(cmd){
        $.ajax({
            type:"GET",
            url:"http://192.168.1.7/sendCommand/"+cmd,
            success:function(response){
                if(response.ok){
                    toggleMessage("Thành công")
                }
            }
        })
    }
    function toggleMessage(message){
        $("#divMessage").html(message).show();
        setTimeout(() => {
            $("#divMessage").hide();
        }, 5000);
    }
    function initUI(){
        const htmlString=` <center>
        <h1>Control Arduno Car</h1>
        <div class="mt-4 d-flex flex-column">
            <div> <button id="btnForward" class="btn btn-success btn-lg">Forward</button></div>

            <div class="mt-5"> <button id="btnLeft" class="btn btn-success  btn-lg">Left</button>
                <button id="btnStop" class="btn btn-success mx-5 btn-lg">Stop</button>
                <button id="btnRight" class="btn btn-success btn-lg">Right</button>
            </div>
            <div class="mt-5">
                <button id="btnBackWard" class="btn btn-success btn-lg">Backward</button>
            </div>
        </div>
    </center>`
    $("#app").html(htmlString);
    }
   
    $(document).ready(function(){
        const jqueryScript=document.createElement("script");
        jqueryScript.src="https://code.jquery.com/jquery-3.7.1.min.js"
        jqueryScript.integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        jqueryScript.crossOrigin="anonymous"
        document.body.appendChild(jqueryScript);
        initUI();
        $("#btnForward").on("click",function(){sendCommand(COMMAND.Forward)})
        $("#btnBackward").on("click",function(){sendCommand(COMMAND.Backward)})
        $("#btnLeft").on("click",function(){sendCommand(COMMAND.Left)})
        $("#btnRight").on("click",function(){sendCommand(COMMAND.Right)})
        $("#btnStop").on("click",function(){sendCommand(COMMAND.Stop)})
    })
  
})(jQuery);