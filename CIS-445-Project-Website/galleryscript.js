const images = ["Photos/sketchup_room_above_view.PNG", "Photos/sketchup_room_above_zoom_door_bed_view.png", "Photos/sketchup_room_above_zoom_inside_window.png", "Photos/sketchup_room_outside_window.png"]; // Add as many images as you want
let currentIndex = 0;

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById("gallery-image").src = images[currentIndex];
}
