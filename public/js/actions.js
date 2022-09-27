
    $(document).ready(()=>{

    $('form').on('submit', function(){

      var item = $('form input');
      if (item.val().length===0) {
        alert("Please enter some activity to add.")
        console.log("alert sent")
      }else{
        console.log('entered else')
        var itemS = {item: item.val()}
        // console.log("the type is,"+ typeof(item))

        $.ajax({
          url: '/',
          type: 'POST',
          data: itemS,
          success: (data)=>{
            location.reload();
          }
        })
      }
    })

    // here
  //   $('li').on('click', function (){
  //     var item = $(this).html();
  //     $.ajax({
  //       url: '/',
  //       type: "DELETE",
  //       data: {item: item},
  //       success: (data)=>{
  //         location.reload()
  //       }
  //     })
  // });

    $('li').on('click', function (){
      var item = $(this).html();
      $.ajax({
        url: '/'+item,
        type: "DELETE",
        success: (data)=>{
          location.reload()
        }
      })
  });

  });
