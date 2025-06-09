console.log("hello world");

const canvas = document.getElementById("input");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = ("resources/spider.png");

const keymap = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,.      ";

function map(value, in_min, in_max, out_min, out_max) {
  return (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

img.onload = () => {
    let ascii = "";

    // make the canvas the required size
    canvas.width = img.width;
    canvas.height = img.height;

    // draw the image
    ctx.drawImage(img, 0, 0);

    const pixels = ctx.getImageData(0, 0, img.width, img.height).data;

    const wishedScale = 50; // in chars high
    
    // use heightscale or widthscale
    const heightScale = false; 
    const scale = heightScale ? Math.floor(img.height/Math.min(wishedScale, img.height)) : Math.floor(img.width/Math.min(wishedScale, img.width));

    for (let h = 0; h < img.height; h +=scale) {
        for (let w = 0; w < img.width; w +=scale ){
            const i = (h*img.width + w)*4;
            const r = pixels[i];
            const g = pixels[i+1];
            const b = pixels[i+2];

            const brightness = 0.299*r + 0.587*g + 0.114*b;
    
            ascii += keymap[Math.floor(map(brightness, 0, 255, 0, keymap.length-1))];
        }
        ascii += "\n";
    }
    document.getElementById("output").textContent = ascii;
}