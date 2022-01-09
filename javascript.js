function nam(){
   var str = document.getElementById("nameinput").value;
  document.getElementById("name").innerHTML="Welcome "+ str + " To My Website"
}


const toggler = document.querySelector('.toggler');
    const body = document.querySelector('body')
    toggler.addEventListener('click', () => {
      toggler.classList.toggle('toggler-active');
      body.classList.toggle('active');
    })


window.onscroll = () =>{
  let maxHeight = window.document.body.scrollHeight - window.innerHeight;
  let percentage = ((window.scrollY) / maxHeight) * 100;
  document.querySelector('#scroll').style.width = percentage + '%';
}


let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){

      navLinks.forEach(links => {
        links.classList.remove('nava');
        document.querySelector('nav ul li a[href*= ' + id + ']').classList.add('nava');

      });

    };

  });

}; 