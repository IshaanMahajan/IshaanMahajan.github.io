$("#formValidation").validate({
    rules:{
        name:{
            minlength:2
        },
        email:{
            email:true
        },
        contactnumber:{
            number:true,
            minlength:10,
            maxlength:10
        }
    },
    messages:{
        name:{
            required: "Enter your name",
            minlength:"Name at least 2 characters"
        },
        email:"Enter your email",
        contactnumber:"Enter your phone number",
        query:"Ask any query"
    },
    submitHandler: function(form) {
      form.submit();
    }
   });
   document.cookie='Firstname= Ishaan; expires='+new Date(2023, 0, 1).toUTCString()
   document.cookie='Lastname= Mahajan ; expires='+new Date(9999, 0, 1).toUTCString()
   console.log(document.cookie)
