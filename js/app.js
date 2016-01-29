$(function(){
  DragAndDrop.go();
})

var DragAndDrop = DragAndDrop || {} 

DragAndDrop.go = function(){
  var dropzone = $('#dropzone')

  dropzone.on('dragenter', function(enter){
    enter.stopPropagation();
    enter.preventDefault();
    console.log("dragged in")
  });

  dropzone.on('dragover', function(over){
    over.stopPropagation();
    over.preventDefault();
  })

  dropzone.on('drop', function(drop){
    drop.preventDefault();

    var files = drop.originalEvent.dataTransfer.files;

    handleDroppedFiles(files)
  })

  //Prevent file opening in browser

  $(document).on('dragenter', function (enter) 
  {
    enter.stopPropagation();
    enter.preventDefault();
  });
  $(document).on('dragover', function (over) 
  {
    over.stopPropagation();
    over.preventDefault();
  });
  $(document).on('drop', function (drop) 
  {
    drop.stopPropagation();
    drop.preventDefault();
  });

/// Handle dropped files

function handleDroppedFiles(files){

 for (var i = 0; i < files.length; i++) 
 {
  var data = new FormData();
  data.append('file', files[i]); 

  sendFileToServer(data);
}
}

//send form data to server using AJAX
function sendFileToServer(data){
  var uploadURL ="yourUploadUrl"; //Upload URL
    var extraData ={}; //Extra Data.
    var jqXHR=$.ajax({
      xhr: function() {
        var xhrobj = $.ajaxSettings.xhr();
        if (xhrobj.upload) {
          xhrobj.upload.addEventListener('progress', function(event) {
            var percent = 0;
            var position = event.loaded || event.loaded;
            var total = event.total;
            if (event.lengthComputable) {
              percent = Math.ceil(position / total * 100);
            }
                        //Set progress
                        // status.setProgress(percent);
                      }, false);
        }
        return xhrobj;
      },
      url: uploadURL,
      type: "POST",
      contentType:false,
      processData: false,
      cache: false,
      data: data,
      success: function(data){
        status.setProgress(100);

            //$("#status1").append("File upload Done<br>");           
          }
        }); 

    // status.setAbort(jqXHR);
  }

}