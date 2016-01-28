$(function(){
  DragAndDrop.go();
})

var DragAndDrop = DragAndDrop || {} 

DragAndDrop.go = function(){
  var dropzone = $('#dropzone')

  dropzone.on('dragenter', function(a){
    a.stopPropagation();
    a.preventDefault();
    console.log("dragged in")
  });

  dropzone.on('dragover', function(b){
    a.stopPropagation();
    a.preventDefault();
  })

  dropzone.on('drop', function(c){

    c.preventDefault();
  })




}