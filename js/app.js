$(function(){
  DragAndDrop.go();
})

var DragAndDrop = DragAndDrop || {} 

DragAndDrop.go = function(){
  var dropzone = $('#dropzone')

  dropzone.on('dragenter', function(enter){
    enter.stopPropagation();
    enter.preventDefault();
    this.className = 'dropzone dragover'
  });

  dropzone.on('dragover', function(over){
    over.stopPropagation();
    over.preventDefault();
    this.className = 'dropzone dragover'
  })

  dropzone.on('drop', function(drop){
    drop.preventDefault();//stop file opening in browser

    var files = drop.originalEvent.dataTransfer.files;
    handleDroppedFiles(files)
    displayDroppedFiles(files)
  })

  function  displayDroppedFiles(files){
    console.log(files)
    $( ".uploads" ).append( "<p>"+files[0].name+"</p>" );
  }

  var form = $('#fileForm');

  form.submit(function(click){
    click.preventDefault();
    // handleDroppedFiles(click)
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
  var data = new FormData();
  var xhr = new XMLHttpRequest();

  for (var i = 0; i < files.length; i++) 
  {  
    data.append('file', files[i]); 
  // sendFileToServer(data);
}

xhr.onload = function(){
  var datad = this.responseText;
  console.log(datad)
}

xhr.open('post', 'upload.php');
xhr.send(data)
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
        console.log(data)          }
      }); 
  }


}
