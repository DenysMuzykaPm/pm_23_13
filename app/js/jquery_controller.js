function getCurentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

console.log(`filename> ${getCurentFileName()}`)

const dick = {
    index: 1,
    ui_elements:2,
    icons: 3,
    form: 4,
    charts: 5,
    tablets: 6,
    sample_pages: 7
}

$(document).ready(() =>{

    $(`a.so_plate:nth-child(${dick[`${getCurentFileName().replace(".html", "")}`]}) p.so_text`).css("color", "#9d64b4");
})