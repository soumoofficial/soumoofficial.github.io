$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");            
        }else{
            $('.navbar').removeClass("sticky"); 
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });

    // typing animation script
    var typed = new Typed(".typing",{
        strings:["YouTuber","Developer","Blogger","Designer","Freelancer"],
        typespeed :100,
        backspeed:60,
        loop:true
    });

    var typed = new Typed(".typing-2",{
        strings:["YouTuber","Developer","Blogger","Designer","Freelancer"],
        typespeed :50,
        backspeed:60,
        loop:true
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }            
        }
    });
});

   let saveFile = () => {
        
        // Get the data from each element on the form.
        const name = document.getElementById('txtName');
        const email = document.getElementById('txtEmail');
        const subject = document.getElementById('txtSub');
        const project = document.getElementById('txtProj');
        
        // This variable stores all the data.
        let data = 
            '\r Name: ' + name.value + ' \r\n ' + 
            'Email: ' + email.value + ' \r\n ' + 
            'Subject: ' + subject.value + ' \r\n ' + 
            'Project: ' + project.value;
        
        // Convert the text to BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt';      // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
    }

    function sendMail() {
         var link = "mailto:ghoshsoumo14@gmail.com"
         + "?cc=myCCaddress@example.com"
         + "&subject=" + escape("This is my subject")
         + "&body=" + escape(document.getElementById('Body').value)
     ;

     window.location.href = link;
 }