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
  console.log(data)    
  }
}

}