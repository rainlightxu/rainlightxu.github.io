
window.onload = function () {
    var tabs = document.getElementById("tabs");
    var lis = tabs.getElementsByTagName("li");
    console.log(tabs);
    var lists = document.getElementById("lists").getElementsByTagName("ul");
    console.log(lists);

    for(var i = 0; i < lis.length; i++){
        lis[i].onclick = showlist;
    }
    function showlist() {
        for(var i = 0; i < lis.length; i++){
            if(lis[i] === this) {
                lis[i].className = "active";
                lists[i].className = "active";
            } else {
                lis[i].className = "";
                lists[i].className = "";
            }

        }
    }

    }