document.addEventListener("mousemove", parallax);
function parallax(e){
    // parallaxTemp(e, '.inf_text', 3, " rotate(-25deg)");/

    parallaxTemp(e, '.b_1', 0, "");
    parallaxTemp(e, '.b_2', 0, "");
}
function parallaxTemp(e, p_class, p_speed, p_add_style){


    const elements  = document.querySelectorAll(`${p_class}`);
    elements.forEach((el)=>{
        var inc = parseInt(el.getAttribute("speed"));
        const speed = p_speed + inc;
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        el.style.transform = `translateX(${x}px) translateY(${y}px) ${p_add_style}`;
   })
}



