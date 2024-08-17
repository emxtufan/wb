window.addEventListener("load", function() {
   var modal = document.querySelector('.overlay');
   var xxxx = document.querySelector('.xxxx');
   xxxx.style.display = 'block'
   modal.style.display = "none";
   
});




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "70% 20%",
        scrub: 1, 
        pin: true
    }
});
tl
.to("#center",{
    
   height: "100vh",
},'a')
.to("#top",{
    top: "-50%",
 },'a')

 .to('#date', {
   fontSize: "0",
},'a')


 .to("#bottom",{
    bottom: "-50%",
 },'a')
.to("#top-h1",{
    bottom: "10%"
 },'a')
 .to("#bottom-h1",{
    bottom: "50%"
 },'a')
.to("#center-h1",{
   top: "-30%"
},'a')

.to(".content",{
   marginTop: "0%"
})

.to("#nunta1",{
    fontSize: "40px",
    
 })

 .to("#nunta2",{
    opacity:1,
 })

 .to("#nunta3",{
    fontSize: "20px",
 })

 import confetti from "https://cdn.skypack.dev/canvas-confetti";
// Funcție pentru a actualiza afișarea numărătorii inversă
function updateCountdown() {
   const endDate = new Date('2024-10-06T00:00:00');
   const now = new Date();
   const difference = endDate - now;
   const days = Math.floor(difference / (1000 * 60 * 60 * 24));
   const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((difference % (1000 * 60)) / 1000);
   document.getElementById('day').innerHTML = days
   document.getElementById('hours').innerHTML = hours
   document.getElementById('minutes').innerHTML = minutes
   document.getElementById('seconds').innerHTML = seconds
 }
 updateCountdown();
 setInterval(updateCountdown, 1000);




 var c = document.querySelector('#c');
 var u = document.querySelector('#u');


 c.addEventListener("change", function() {
    if (c.value == 'da'){
      console.log(c.value == 'da');
      u.style.display = 'block'
      confetti();
    }else{
      u.style.display = 'none'

    }
 });
 



 function onchange(){
   alert()
   
   
   
   // persoane_cazare.addEventListener("change", function() {
   //    if (persoane_cazare == 'da'){
   //      console.log(persoane_cazare == 'da');
   //      pers_cazate.style.display = 'block'
   //      confetti();
   //    }else{
   //       pers_cazate.style.display = 'none'
   //    }
   // });

 }







 const scriptURL = 'https://script.google.com/macros/s/AKfycbwjLPZWy5uwZIe8ZXGFkKiJ59f4ltmhhf9mzQ9nLnRB6SzuCB5eTQbuaYULsL9QKSL5FQ/exec'

const form = document.forms['contact-form']



var button1 = document.querySelector('#button1')


button1.addEventListener('click', e => {
   var nume = document.querySelector('#name').value;
   var email = document.querySelector('#email').value;
   var c = document.querySelector('#c').value;
   var error = document.querySelector('#error')
   console.log(nume.trim() === '')
   if (nume.trim() === '') {
      Swal.fire({
         title: 'Te rugam sa completezi numele.',
         icon: 'error',
         confirmButtonText: 'Bine'
       })
   }else if(email.trim() === ''){
      Swal.fire({
         title: 'Te rugam sa completezi prenumele.',
         icon: 'error',
         confirmButtonText: 'Bine'
       })
   }else  if(c == 'Ne vom vedea la nunta?'){
      Swal.fire({
         title: 'Te rugam sa alegi daca ne vedem la nunta.',
         icon: 'error',
         confirmButtonText: 'Bine'
       })
   }else{
      e.preventDefault();
     
      
      
      
      if (c == 'nu'){
         var adult ='empty'
         var copil ='empty'
         var messaj ='empty'
      }else{
         var adult = document.querySelector('#adult').value
         var copil = document.querySelector('#copil').value
         var messaj = document.querySelector('#messaj').value
         var cazare = document.querySelector('#cazare').value
         var persoane_cazare = document.querySelector('#persoane_cazare').value
         var pers_cazate = document.querySelector('#pers_cazate')

      }


      if (adult.trim() === 'Cate persoane adulte veti veni?'){
         Swal.fire({
            title: 'Te rugam sa selectezi numarul de persoane.',
            icon: 'error',
            confirmButtonText: 'Bine'
          })
      }else if (copil.trim() === 'Cu cati copii veti veni?'){
         Swal.fire({
            title: 'Te rugam sa selectezi numarul de copii.',
            icon: 'error',
            confirmButtonText: 'Bine'
          })
      }else if(cazare == 'Aveti nevoie de cazare ?'){
         Swal.fire({
            title: 'Te rugam sa ne spui daca ai nevoie de cazare',
            icon: 'error',
            confirmButtonText: 'Bine'
          })
      }
      
      
      else if(cazare == 'Da'){
         if(persoane_cazare.trim() == 'Numarul de persoane?'){
            Swal.fire({
               title: 'Te rugam sa ne spui cate persoane vor fi cazate',
               icon: 'error',
               confirmButtonText: 'Bine'
             })
             
         }else if(grecaptcha.getResponse() === ''){
            Swal.fire({
               title: 'Te rugam sa confirmi ca esti om',
               icon: 'error',
               confirmButtonText: 'Bine'
             })
            return   
         }
         else{
            var dataCurenta = new Date();
            var zi = dataCurenta.getDate();
            var luna = dataCurenta.getMonth() + 1; // Adăugăm 1 pentru a obține luna corectă (de la 1 la 12)
            var an = dataCurenta.getFullYear();
            var datas = `${zi}-${luna}-${an}`
            console.log(nume, email, c, adult, copil, messaj)
            const formData = new FormData();
            formData.append('nume', nume);
            formData.append('prenume', email);
            formData.append('confirm', c);
            formData.append('adult', adult);
            formData.append('copil', copil);
            formData.append('messaj', messaj);
            formData.append('cazare', cazare);
            formData.append('nr_cazati', persoane_cazare);
            formData.append('data-confirmarii', datas);
            error.innerHTML = ''
            button1.classList.add("loading")
            fetch(scriptURL, { method: 'POST', body: formData })
            
            
              .then(response => {
                if (response.ok) {
                  Swal.fire({
                     title: 'Formularul a fost trimis cu succes!',
                     icon: 'success',
                     confirmButtonText: 'Bine'
                   })
                  form.reset();
                  grecaptcha.reset()
                  button1.classList.remove("loading")
   
                } else {
                  throw new Error('Eroare în trimiterea formularului.');
                }
              })
              .catch(error => console.error('Error!', error.message));
         }
      }
      
     else if(grecaptcha.getResponse() === ''){
         Swal.fire({
            title: 'Te rugam sa confirmi ca esti om',
            icon: 'error',
            confirmButtonText: 'Bine'
          })
         return   
      }
      else{
         var dataCurenta = new Date();
         var zi = dataCurenta.getDate();
         var luna = dataCurenta.getMonth() + 1; // Adăugăm 1 pentru a obține luna corectă (de la 1 la 12)
         var an = dataCurenta.getFullYear();
         var datas = `${zi}-${luna}-${an}`
         console.log(nume, email, c, adult, copil, messaj)
         const formData = new FormData();
         formData.append('nume', nume);
         formData.append('prenume', email);
         formData.append('confirm', c);
         formData.append('adult', adult);
         formData.append('copil', copil);
         formData.append('cazare', cazare);
         formData.append('nr_cazati', 'empty');
         formData.append('data-confirmarii', datas);

         error.innerHTML = ''
         button1.classList.add("loading")
         fetch(scriptURL, { method: 'POST', body: formData })
         
         
           .then(response => {
             if (response.ok) {
               Swal.fire({
                  title: 'Formularul a fost trimis cu succes!',
                  icon: 'success',
                  confirmButtonText: 'Bine'
                })
               form.reset();
               grecaptcha.reset()
               button1.classList.remove("loading")

             } else {
               throw new Error('Eroare în trimiterea formularului.');
             }
           })
           .catch(error => console.error('Error!', error.message));
      }
   }
   }
  

     
 );


