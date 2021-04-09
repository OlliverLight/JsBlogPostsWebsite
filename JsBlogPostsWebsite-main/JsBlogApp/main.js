/*Most of the programming was quite straight foreward, without any issues, but i
did use the console.log() method to test out certain things, such as the
uInput containing the correct number. I also tested switchng browsers, and all of them 
seemed to work sve for Microsoft Edge. im not sure whats breaking,
but it has something to do with the input type="number" part of the code. 
no arrows shows up at the edge of the input widow, and 
you cant make the blogposts appear by manually increasing the number.*/

document.addEventListener("DOMContentLoaded", pageLoaded)
function pageLoaded(){
  //This QuerySeleector gets the first element with a certain Id, Indicated by the #
    let uInput = document.querySelector("#posts-number");

    uInput.oninput = function(){
        removeAllPosts();
        makePosts(parseInt(uInput.value));
    }
}
function makePosts(counting){
  /*getElementById calls on corresponding HTML element with the same id and
  the for loop creates a Section element depending on what the value of counting
  is. querySelector gets the first element, in its context, and allows you
  to eddit its properties, in this case applying a backround color
  via a onclick command.*/
    var main = document.getElementById("Main");
    for (var i=0; i<counting; i++){
        var frag = fragmentFromPost(`
        <section>
          <div id="sectdiv" class="card card-body">
            <h4 class="display-6 text-center" contenteditable="true">BlogPost${i + 1}</h4>
            <p contenteditable="true">Flavor Text</p>
          </div>
        </section>
        `)
        frag.querySelector("h4").onclick = function(e){
         e.currentTarget.style.backgroundColor = "rgb(19, 117, 84)";
        };
        frag.querySelector("p").onclick = function(e){
          e.currentTarget.style.backgroundColor = "rgb(13, 134, 94)";
        };
        main.append(frag);
    }
}
function fragmentFromPost(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}
//querySelectorAll does what it says on the tin, it sellects all elements specified, and in this example, removes them.
  function removeAllPosts() {
    var test_sections = document.querySelectorAll("section");
    for (var i = 0; i < test_sections.length; i++) {
      test_sections[i].remove();
    }
}
