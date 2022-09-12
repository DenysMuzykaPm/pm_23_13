

gsap.registerEffect({
    name:"counter",
    extendTimeline:true,
    defaults:{
      end:0,
      duration:0.8,
      ease:"circ",
      increment:1,
    },
    effect: (targets, config) => {
    let tl = gsap.timeline()
    let num = targets[0].innerText.replace(/\,/g,'')
    targets[0].innerText = num
    
    tl.to(targets, {duration:config.duration, 
               innerText:config.end, 
               modifiers:{
                 innerText:function(innerText){
                   return  gsap.utils.snap(config.increment, innerText).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
                 }
               },
               ease:config.ease}, 0)
    
    return tl
  }
  })



//header section                                                                                                    
const header = gsap.timeline({defaults: {duration: 0.6}});
header.from('.lp_inner', {ease: "power4.out",opacity: 0, y: -100 })
        .from('.input_bar', {ease: "power4.out", opacity: 0, y: -100}, "-=0.8")
        .from('.ntp', {ease: "power4.out", stagger: {
            from:"end",
            each:0.1

        }, opacity: 0, y: -100}, "")


//side bar section                                                                                                   
const side_bar = gsap.timeline({defaults: {duration: 0.3}});
side_bar.from('.user_box', {ease: "power4.out",opacity: 0, x: -100 }, "+=0.5")
        .from('.so_plate', {ease: "power4.out", stagger: {
            from:"start",
            each:0.08

        }, opacity: 0, x: -100}, "-=0.4")
        .from('.side_bot', {ease: "power4.out",opacity: 0, x: -100 }, "-=0.5")


const side_tools = document.querySelectorAll(".so_plate")
side_tools.forEach( function(item){

    in_item = item.querySelector(".fa-solid");
    const st_hover =  gsap.to(in_item,  {duration: 0.3, ease: "circ.out", x: -20, paused: true, })

    item.addEventListener("mouseenter", () => st_hover.play());
    item.addEventListener("mouseleave", () => st_hover.reverse());
})

//card section                                                                                                         
let num1 = document.querySelector('#num_1').getAttribute("end_num");
let num2 = document.querySelector('#num_2').getAttribute("end_num");
let num3 = document.querySelector('#num_3').getAttribute("end_num");

const cards = gsap.timeline({defaults: {duration: 0.6}});
cards.from('.page_name', {ease: "power4.out",opacity: 0, y: -100 }, "+=0.2")
        .from('.card_box', {ease: "power4.out", stagger: {
            from:"start",
            each:0.08

        }, opacity: 0, y: -25}, "-=0.4")
        .counter('#num_1', {end:num1, increment:1}, "-=0.7")
        .counter('#num_2', {end:num2, increment:1}, "-=0.7")
        .counter('#num_3', {end:num3, increment:1}, "-=0.7")



//graphics section                                                                                                    
// change sizes of charts boxes
function set_graphics_width(){
    const referens = document.querySelector(".cb_3").offsetWidth;
    var referens2 = 2 * document.querySelector(".cb_2").offsetWidth;
    referens2 += parseInt(getComputedStyle(document.querySelector(".cb_2")).marginLeft)

    document.getElementById("small_chart").style.width = `${referens}px`;
    document.getElementById("big_chart").style.width = `${referens2}px`;
}
set_graphics_width()
window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight; 
    set_graphics_width()

    
});


// templates for charts                                                                                               
const ul = document.querySelector('.bm_month');

const t = document.getElementById('template_element')
const p = t.content.querySelector(".month_name");
const c_1= t.content.getElementById("c_1");
const c_2= t.content.getElementById("c_2");
const c_3= t.content.getElementById("c_3");


const big_chart = gsap.timeline({defaults: {duration: 1}});
big_chart.from(".big_chart", {ease: "power4.out", opacity: 0, y: -100})


fetch("./js/graph.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {

  for(let i = 0; i < 8; i++){
    p.textContent = `${data.months[i].name}`;
    c_1.style.height = `${data.months[i].c_1}%`
    c_2.style.height = `${data.months[i].c_2}%`
    c_3.style.height = `${data.months[i].c_3}%`
    let li = t.content.cloneNode(true);
    ul.append(li);
    
  }
  const month_li = gsap.timeline({defaults: {duration: 0.7}});
  month_li.from(".c_line", {ease: "power4.out", opacity: 0, scaleY: 0, stagger: {
  from:"start",
  each:0.04
  
  }})
})


// small chart
const small_chart = gsap.timeline({defaults: {duration: 1}});
small_chart.from(".small_chart", {ease: "power4.out", opacity: 0, y: -100}, "+0.1")