// JavaScript File
window.onload = function ()
{
    var s = document.getElementById("lookup");
    s.addEventListener("click",function(e)
    {
       e.preventDefault();
       var url = "";
       var d = document.getElementById("country").value;
       var a = new XMLHttpRequest();
       a.onreadystatechange = b;
       var f = document.getElementById("search");
       if(f.checked)
       {
           url = "world.php?all=true";
       }
       else if(d == "")
       {
           document.getElementById("result").innerHTML = "Enter a text";
       }
       else
       {
           url = "world.php?country="+document.getElementById("country").value;
       }
       
       a.open("Get", url);
       a.send();
       
       function b()
       {
           if(a.readyState === XMLHttpRequest.DONE)
           {
               if(a.status === 200)
               {
                   var c = a.responseText;
                  document.getElementById("result").innerHTML = c; 
               }
           }
       }
    });
};