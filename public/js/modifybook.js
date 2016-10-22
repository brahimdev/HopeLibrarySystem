/*管理员修改书籍的函数*/
(function(global,$){
    $("#save").click(function(){
        var bookGroup=$.trim($(":radio[name=bookGroup]:checked").parent().text());
        var bookName=$.trim($("#bookName").val());
        var hopeID=$.trim($("#hopeID").val());
        var bookAuthor=$.trim($("#bookAuthor").val());
        var bookISBN=$.trim($("#bookISBN").val());
        var bookPress=$.trim($("#bookPress").val());

        $.ajax({
            dataType:"json",
            async:true,
            data:{"bookGroup":bookGroup,"bookName":bookName,"hopeID":hopeID,"bookAuthor":bookAuthor,"bookISBN":bookISBN,"bookPress":bookPress},
            type:"POST",
            beforeSend:function(){

            },
            success:function(response){
                if(response){
                    var success=response.message;
                }
                layer.alert(success,{
                        skin: 'layui-layer-molv',
                        closeBtn: 0,
                        shift: 2 
                    });
                    setTimeout(function(){
                        location.assign("/admin");
                    },500)
                    
                    
                },
            error:function(){
                layer.alert("请求失败",{
                        skin: 'layui-layer-molv',
                        closeBtn: 0,
                        shift: 2 
                    });
            },
            complete:function(){
                
            }

        })
    });
})(window,jQuery)