const ul_e = document.querySelector(".status_list");

const t_e = document.getElementById("template_status");
const number_e = t_e.content.querySelector(".tb_number");
const name_e = t_e.content.querySelector(".tb_name");
const data_e = t_e.content.querySelector(".tb_data");
const bar_e = t_e.content.querySelector(".tb_bar");


fetch("./js/graph.json")
.then(function (response) {
  return response.json();
})
.then(function (data) {
    for(let i = 0; i < data.status.length; i++){

        number_e.textContent = `${i + 1}`;
        name_e.textContent = `${data.status[i].name}`;
        data_e.textContent = `${data.status[i].data}`;

        let li = t_e.content.cloneNode(true);
        ul_e.append(li);
    }


    const status_loader = gsap.timeline({defaults: {duration: 0.9}});
    let i_count = 0;
    document.querySelectorAll('.tb_loader').forEach(function(item){
        const perce = data.status[i_count].bar;
        
        item.style.width = `${perce}%`;

        if (parseInt(perce) <= 25){
            item.style.cssText += "background-color: #ff7a90";
        }
        else if (parseInt(perce) <= 50){
            item.style.cssText += "background-color: #d285ff";
        } 
        else if (parseInt(perce) <= 75){
            item.style.cssText += "background-color:  #1b89e3";
        } 
        else{
            item.style.cssText += "background-color: #70d4ca;";
        }

        
        status_loader.from(item, {ease: "power4.out",  scaleX: 0, transformOrigin:'left center'}, "-=0.8");
        i_count += 1;
    })

    ScrollTrigger.create({
        animation: status_loader,
        // scroller: ".container",
        trigger: ".status_section",
        start: "top bottom",
        toggleActions: "restart pause none pause"
    })
})