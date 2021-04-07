function restart()
{
    document.getElementById("top1").innerHTML=" ";
    document.getElementById("right1").innerHTML=" ";
    document.getElementById("left1").innerHTML=" ";
    document.getElementById("bottom1").innerHTML=" ";


}
function update(form)
{
    document.getElementById("top1").innerHTML=form.elements["top"].value;
    document.getElementById("top1").style.cssText="color:red; font-size: x-large";
    document.getElementById("bottom1").innerHTML=form.elements["bottom"].value;
    document.getElementById("bottom1").style.cssText="color:red; font-size: x-large";
    document.getElementById("right1").innerHTML=form.elements["right"].value;
    document.getElementById("right1").style.cssText="color:red; font-size: x-large";
    document.getElementById("left1").innerHTML=form.elements["left"].value;
    document.getElementById("left1").style.cssText="color:red; font-size: x-large";
}
function switch1()
{
    var d1=document.getElementById("top1");
    var d2=document.getElementById("left1");
    var d=d1.innerHTML;
    d1.innerHTML=d2.innerHTML;
    d2.innerHTML=d;
}
function switch2()
{
     var d1=document.getElementById("left1");
     var d2=document.getElementById("right1");
     var d=d1.innerHTML;
     d1.innerHTML=d2.innerHTML;
     d2.innerHTML=d;
}
function switch3()
{
     var d1=document.getElementById("bottom1");
       var d2=document.getElementById("right1");
       var d=d1.innerHTML;
       d1.innerHTML=d2.innerHTML;
       d2.innerHTML=d;
}