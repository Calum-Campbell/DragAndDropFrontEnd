# DragAndDropFrontEnd
Front End Drag and Drop Page


## Process

### Set up Boilerplate
1. wdi-london-alumni
2. Set up basic frontend App, Html,css,js
3. Use Bower to manage dependensies

### Get some basic functionality

####Set up front
1. Set up basic html and css so can see whats happening in browser

```
  <div id="dropzone"></div>

```
```
#dropzone {
  width: 200px;
  height:200px;
  border: 2px dashed red;
  color: blue;
  line-height: 300px;
  text-align: center;
}
```

####Set up drag/drop jquery
2. Use JQuery .on to handle drag over of dropzone element


```
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
```

#### prevent default browser file opening
3. Dont want files to open in browser window if dropped outside thebox, so will prevent this.
4. This is the default so will prevnt the default on the rest of the document

```
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
```

#### Write function to handle the dropped file(s)
1. Create handleDroppedFile function so that on drop, function is fired and data is compiled into Formdata object to be sent via AJAX.

```
function handleDroppedFiles(files){

 for (var i = 0; i < files.length; i++) 
  {
  var data = new FormData();
  data.append('file', files[i]); 
  console.log(data)    
  }
}
```
### Added sendFileToServer function

```
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

```



