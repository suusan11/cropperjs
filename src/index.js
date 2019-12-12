//setting canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

//file upload
const fileUpload = document.getElementById('fileUpload');
fileUpload.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (e) => {
      const image = document.getElementById('image');
      console.log(e);
      image.setAttribute('src', e.target.result);
    };
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = (e) => {
      const image = document.getElementById('image');
      const cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 0,
        minContainerWidth: 800,
        minContainerHeight: 500,
        ready() {
          // cropper.setDragMode("move")
          //   .setDragMode("crop")
          //   .zoom(0.1, -0.1)
          //   .rotato(-45, 45)
          //   .scaleX(-1)
          //   .scaleY(-1);
        },
      });
    };
  }
});