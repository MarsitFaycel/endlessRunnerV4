// Start the app
require( [ 'app','variable','diff'], function (  app, variable, diff ) {

    // Initialize our app and start the animation loop (animate is expected to call itself)


   //window.addEventListener('click', diff.facile);
   /*document.getElementById("Facile").addEventListener('click',function () {
       document.getElementById("Difficulte").innerHTML+= ": Easy";
       variable.player.speed = 1;

       var element = document.getElementById("but");
       document.body.removeChild(element)

   })
    document.getElementById("Intermediaire").addEventListener('click',function () {
        variable.player.speed = 1.4;
        document.getElementById("Difficulte").innerHTML+= ": Normal";

        var element = document.getElementById("but");
        document.body.removeChild(element)

    })
    document.getElementById("Difficile").addEventListener('click',function () {
        variable.player.speed = 1.3;
        document.getElementById("Difficulte").innerHTML+= ": Hard";

        var element = document.getElementById("but");
        document.body.removeChild(element)

    })


    */

   // stat.showPanel( 1); // 0: fps, 1: ms, 2: mb, 3+: custom

    window.onload = app.init();
    app.animate();


    function keyDown(event){
        variable.keyboard[event.keyCode] = true;
        if(event.keyCode == 32 ) //tab
            variable.pressed = 1;

        if(event.keyCode == 27 &&  variable.alive == 0  ){ //echap
            variable.paused ==1 ?  variable.paused = 0 :  variable.paused = 1;

            console.log("echec pressed"+variable.alive);

        }

        if(event.keyCode == 13){ // entrer
           variable.gameReset = 1;
        }

    }
    function keyUp(event){
        variable.keyboard[event.keyCode] = false;
        if(event.keyCode == 32 )
            variable.pressed = 0;
    }
    function mouseDown(){


        variable.pressed = 1;
    }
    function mouseUp(){

        variable.pressed = 0;

    }

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
    //window.addEventListener('mousedown', mouseDown);
    window.addEventListener('touchstart', mouseDown);
    window.addEventListener('touchend', mouseUp);

    //mobile controls !!
    function addEvent(element, evnt, funct){
        if (element.attachEvent)
            return element.attachEvent('on'+evnt, funct);
        else
            return element.addEventListener(evnt, funct, false);
    }

    addEvent(
        document.getElementById("button1"),
        'click',
        function () {
            if(variable.alive == 0){
                variable.paused ==1 ?  variable.paused = 0 :  variable.paused = 1; }
            variable.pressed = 1;
            document.getElementById("button1").style.display = "none";}
            );
    addEvent(
        document.getElementById("reset1"),
        'click',
        function () {   variable.gameReset = 1; }
    );


/*
    var e= document.getElementById("button1");
   function pausevent() {
        variable.paused ==1 ?  variable.paused = 0 :  variable.paused = 1;
    }
    //e.onclick = onclickevent;

    e.addEventListener('click',pausevent);
  */

} );
