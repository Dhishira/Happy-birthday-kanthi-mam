var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img) 
    {
      block_image_object = Img;

      block_image_object.scaleToWidth(700);
      block_image_object.scaleToHeight(510);
      
      block_image_object.set({
      top:0,
      left:0
      });
     
      canvas.add(block_image_object);

    });
}

function playSound()
{
	x.play();
}

images = ["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","1.jpg",]

var i = 0;
function next() {
  
  if (i == 7)
    {
      i=0;
    }
document.getElementById("next_image").src=images[i];
i++;}
