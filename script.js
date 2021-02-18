var images = ["https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1557711485l/44495497._SX318_.jpg",
"https://thumbs.dreamstime.com/b/father-portrait-handsome-man-shirt-jeans-sweater-wearing-glasses-cartoon-character-standing-dad-vector-illustration-86364395.jpg", 
"https://thumbs.dreamstime.com/b/mother-portrait-beautiful-woman-long-brown-hair-young-standing-maternity-mom-vector-illustration-86364538.jpg" ,
 "https://thumbs.dreamstime.com/b/happy-cute-kid-boy-pose-as-model-vector-164555488.jpg",
  "https://www.seekpng.com/png/detail/256-2561337_read-it-beautiful-girl-clipart.png"
];
var names = ["Family Book","Humayun Kamran", "Lubna Humayun", "Ramis Humayun", "Rameen Humayun"];
var i = 0;
function change()
{
    i++;
    var family_member_number = 4;
    if(i > family_member_number )
    {
        i = 0;
    }
    var NewImage = images[i];
    var NewName  = names[i];
    document.getElementById("family_member_image").src = NewImage;
    document.getElementById("family_member_name").innerHTML = NewName;
}
