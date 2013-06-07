
 $( init );

 function init() {
  document.addEventListener("touchstart", touchHandler, true);
  document.addEventListener("touchmove", touchHandler, true);
  document.addEventListener("touchend", touchHandler, true);
  document.addEventListener("touchcancel", touchHandler, true);   
  }
  function touchHandler(event)
  {
  var touches = event.changedTouches,
  first = touches[0],
  type = "";
  switch(event.type)
  {
  case "touchstart": type="mousedown"; break;
  case "touchmove":  type="mousemove"; break;        
  case "touchend":   type="mouseup"; break;
  default: return;
  }
  var simulatedEvent = document.createEvent("MouseEvent");
   simulatedEvent.initMouseEvent(type, true, true, window, 1,
                      first.screenX, first.screenY,
                      first.clientX, first.clientY, false,
                      false, false, false, 0/*left*/, null);
  first.target.dispatchEvent(simulatedEvent); 
  event.preventDefault();
   }

 function checkwin()
  {
     var z=1;
     var win = 0;
      $('.place').each(function(i, obj) 
          {
                    if(this.querySelector("#img"+z))
                      {
                        win++;
                      }
                    z++;
          });
      if(win==16)
      {
        alert("NAKADAOG KAG WANMELYON PESOS!");
        return true;
      }
      else
      {
        return false;
      }
  }

  function createRand()
{
  var arr = [];
  for(var x=0;x<=15;x++)
  {
    arr[x] = x+1;
  }

  return arr;
}




function start() {
  var i = 1;
  var z = 1
  var x = 0;
  var y = 0;

  var mintop = 500;
  var array = createRand();

    for(z=1;z<=16;z++)
    {
      var num = Math.floor(Math.random() * array.length);
      var roll = array.splice(num, 1);
      m = roll;
      $("#playblock"+z).append("<div id='puzz"+z+"' class='puzz'></div>");
      $("#puzz"+z).append("<img class='img' id='img"+m+"' draggable='false'  style='overflow: hidden;' src='images/mar.jpg' width='200px' height='200px' alt='Clipped image'/>");
    }


    for(z=1;z<=16;z++)
    {
      $("#container").append("<div id='place"+z+"' class='place' style='float:left;'></div>");
      
    }



    $('.puzz').draggable({helper: 'clone', revert: true});

    var stockArea = $('.place, .playblock-normal').droppable({
        drop: function (event, ui) {
            if(this.innerHTML.length < 5)
            {
            ui.helper.fadeOut();
            var target = $('.place');
            $(this).empty();
            $(ui.draggable).appendTo(this);
            checkwin();
            }
        }
    });
 
      for(y=1; y<=4; y++)
      {
       for(x=1; x<=4; x++)
          {     
                document.getElementById('img'+i).style.marginLeft = -(x-1)*50+"px"; 
                document.getElementById('img'+i).style.marginTop = -(y-1)*50+"px"; 
                i++;
          }
      }

    }
