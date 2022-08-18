            
            var email=document.getElementById('email');
            email.addEventListener('keyup', mailvalidate);

            var email2=document.getElementById('email2');
            email2.addEventListener('keyup', mailvalidate); //calling same function

            // function mailvalidate2(){
            //     var emailexp2=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

            //     var useremail2=document.getElementById("email2").value;

            //     if(emailexp2.test(useremail2)){
            //         console.log('valid');
            //         email2.classList.add('is-valid');
            //         email2.classList.remove('is-invalid');
            //     }
            //     else{
            //         console.log('invalid');
            //          email2.classList.add('is-invalid');
            //         email2.classList.remove('is-valid');
            //     }
            // }

            
            function mailvalidate(e){
                
                var fieldid=e.target.id;
                var fieldelm=document.getElementById(fieldid);

                var emailexp=/^([a-zA-Z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;

                var useremail=fieldelm.value;

                if(emailexp.test(useremail)){
                    fieldelm.classList.add('is-valid');
                    fieldelm.classList.remove('is-invalid');
                }
                else{
                    fieldelm.classList.add('is-invalid');
                    fieldelm.classList.remove('is-valid');
                }
            }


            
            var passelm=document.getElementById('pass');
            var repasselm=document.getElementById('repass');

            
            passelm.addEventListener('keyup',passvalidate);
            repasselm.addEventListener('keyup',repassvalidate);
            function passvalidate(){
                var plength=/^.{10,}$/;///length checking
                var pcap=/[A-Z]+/;///capital checking
                var psmall=/[a-z]+/;///lowercase checking
                var pspecial=/^.*[^A-Za-z0-9].*$/;///special character checking

                var passinput=document.getElementById("pass").value;

                if(plength.test(passinput)){
                    document.getElementById('length').style.color="green";
                }
                else{
                    document.getElementById('length').style.color="red";
                }

                if(pcap.test(passinput)){
                    document.getElementById('capital').style.color="green";
                }
                else{
                    document.getElementById('capital').style.color="red";
                }

                if(psmall.test(passinput)){
                    document.getElementById('small').style.color="green";
                }
                else{
                    document.getElementById('small').style.color="red";
                }

                if(pspecial.test(passinput)){
                    document.getElementById('special').style.color="green";
                }
                else{
                    document.getElementById('special').style.color="red";
                }
            }
           
           function repassvalidate(){
            var passinput=document.getElementById("pass").value;
            var repassinput=document.getElementById("repass").value;
            if(passinput == repassinput){
                     
                     repass.classList.add('is-valid');
                     repass.classList.remove('is-invalid');
                 }
                 else{
                    
                    repass.classList.add('is-invalid');
                     repass.classList.remove('is-valid');
                 }

             
           }

         









 var phone=document.getElementById('phone');
            phone.addEventListener('keyup', phnvalidate);

            function phnvalidate(e){
                
                var phnexp=/^[0-9]{11,}$/;

                var userphn=phone.value;

                if(phnexp.test(userphn)){
                    phone.classList.add('is-valid');
                    phone.classList.remove('is-invalid');
                }
                else{
                     phone.classList.add('is-invalid');
                    phone.classList.remove('is-valid');
                }

                }
           


const fnam2 = document.getElementById('fnam2')
const lnam = document.getElementById('lnam')
const add = document.getElementById('add')
const form = document.getElementById('form')
const num = document.getElementById('num')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (fnam2.value === '' || fnam2.value == null) {
    messages.push('first Name is required')
  }
  if (lnam.value === '' || lnam.value == null) {
    messages.push('last Name is required')
  }
  if (add.value === '' || add.value == null) {
    messages.push('address is required')
  }
  if (num.value === '' || num.value == null) {
    messages.push('number is required')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  
})






            $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });



$("inam").carousel();
$("nam").carousel();
$("caro3").carousel();