    var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 

    // Wait for Cordova to connect with the device
    //
	
	
    function init(){
    	document.addEventListener("deviceready",onDeviceReady,false);
    }
	
    // Cordova is ready to be used!
    //
    function onDeviceReady() {
     	navigator.notification.alert("Application Started");
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      console.log(imageData);

      // Get image handle
      //
      var playboard = document.getElementById('playboard-normal');
      //var playboard = $('.playboard').val();

      // Unhide image elements
      //
      //playboard.width(200);
      //playboard.height(200);
      playboard.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      playboard.src = /*"data:image/jpeg;base64," + */imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';


      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
      largeImage.width(200); // Units are assumed to be pixels
      largeImage.height(200);
      
    }

    // A button will call this function
    //
    function capturePhoto() {
	  // Take picture using device camera and retrieve image as base64-encoded string
	  navigator.camera.getPicture(onPhotoDataSuccess, onFail,{
	          quality : 25, 
	          destinationType : Camera.DestinationType.FILE_URI, 
	          sourceType : Camera.PictureSourceType.CAMERA, 
	          allowEdit : true,
	          encodingType: Camera.EncodingType.JPEG,
	          targetWidth: 500,
	          targetHeight: 500,
	          popoverOptions: CameraPopoverOptions,
	          saveToPhotoAlbum: true });         
	}

    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
        destinationType: destinationType.FILE_URI,
        sourceType: source });
    }

    // Called if something bad happens.
    // 
    function onFail(message) {
      alert('Failed because: ' + message);
    }
