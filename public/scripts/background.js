var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1515408320194-59643816c5b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        "url(https://images.unsplash.com/photo-1510002507184-45227b3a3524?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80)",
        "url(https://images.unsplash.com/photo-1466220549276-aef9ce186540?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
        "url(https://farm1.staticflickr.com/274/18488483008_b7f6cb9196_k.jpg"
      ];
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 4000);
