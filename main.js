img = "";
function preload()
{
img=loadImage('dog_cat')
}
function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

}
function draw() {
    image(img,0 ,0 ,640,420);
Fill("FF0000");
    text("Dog", 45 ,75);
   noFill("FF0000")
    stroke("#FF0000");
    rect(30,60,450,430);
}
function Chair() {
    window.location.href = "Chairpage.html"
    img=loadImage('Chair_picture_for_project')


}