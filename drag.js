
var li1=$("li")

var ul1=$("#sec1_appen");
console.log(ul1);

var ul2=$("#sec2_appen");

var ul3=$("#sec3_appen");

function onDragStart(e){
    var id = e.target.id;
    // debugger;
    e.dataTransfer.setData('myId',id);
    // console.log('drag started!')
  }
  function onDragOver(e){
    e.preventDefault();
    // console.log('dragover started!')

  }
  function onDrop(e){
    var id = e.dataTransfer.getData('myId')
   // if(e.target.att)
   // debugger;
   console.log(e.target.nodeName)
   if(e.target.nodeName =="UL")
   {
    console.log(e.target.nodeName)

    console.log(document.getElementById(id))
    e.target.appendChild(document.getElementById(id));
   }
   else if(e.target.nodeName=="LI")
   {
    e.target.parentElement.appendChild(document.getElementById(id));
    // console.log(e.target.type())
    }
  }

  var inp1=$("#inp1");
  var inp2=$("#inp2");
  var inp3=$("#inp3");

  var b1=$("#b1");
  var b2=$("#b2");
  var b3=$("#b3");

  b1.on("click",function(){
    var li=$("<li>")
    li.html(inp1.val());
    li.attr("draggable","true");
    li.attr("ondragstart","onDragStart(event)");
    li.attr("id"," ");
    inp1.val(" ");
    ul1.append(li);

  })

  b2.on("click",function(){
    var li=$("<li>")
    li.html(inp2.val());
    li.attr("draggable","true");
    li.attr("id"," ");
    li.attr("ondragstart","onDragStart(event)");
    inp2.val(" ");
    ul2.append(li);

  })

  b3.on("click",function(){
    var li=$("<li>")
    li.html(inp3.val());
    li.attr("draggable","true");
    li.attr("ondragstart","onDragStart(event)");
    li.attr("id"," ");
     inp3.val(" ");   
    ul3.append(li);

  })


