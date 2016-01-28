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

