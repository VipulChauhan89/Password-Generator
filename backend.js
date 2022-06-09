var rangeSlider=document.getElementById("slider");
var a=8;
document.getElementById("slide").value=a;
rangeSlider.oninput=function(){
    document.getElementById("slide").value=this.value;
    a=this.value;
}
function load(n)
{
    document.getElementById("slide").value=n;
}
function generate()
{
    document.getElementById("cpy").className="bi bi-clipboard-fill";
    var password="";
    var number=document.getElementById("number");
    var alphabet=document.getElementById("alphabet");
    var symbol=document.getElementById("symbol");
    if(number.checked==true && alphabet.checked==true && symbol.checked==true)
    {
        var set="1234567890abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}]|\:;'<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
    else if(number.checked==true && symbol.checked==true)
    {
        var set="1234567890~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
    else if(alphabet.checked==true && symbol.checked==true)
    {
        var set="abcdefghijklmnopqrstuvwxyz~`!@#$%^&*()_-+={[}]|\:;'<,>.?/ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
    else if(number.checked==true && alphabet.checked==true)
    {
        var set="abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
    else if(number.checked==true)
    {
        var set="1234567890";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
    else if(alphabet.checked==true)
    {
        var set="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
    else if(symbol.checked==true)
    {
        var set="~`!@#$%^&*()_-+={[}]|\:;'<,>.?/";
        for(var i=0;i<a;i++)
        {
            password+=set.charAt(Math.floor(Math.random()*set.length));
        }
        document.getElementById("pass").value=password;
    }
}
function copy()
{
    document.getElementById("pass").select();
    document.execCommand("copy");
    document.getElementById("cpy").className="bi bi-check";
}