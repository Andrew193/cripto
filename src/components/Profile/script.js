const Functions={
    onmouseover:(e,element)=>{
    element.style.display="block";
    let coords = e.target.getBoundingClientRect();
    let left = coords.left + (e.target.offsetWidth - element.offsetWidth) / 2;
    if (left < 0) left = 0; // не заезжать за левый край окна
    let top = coords.top - element.offsetHeight - 5;
    if (top < 0)  // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + e.target.offsetHeight + 5;
    element.style.left = left + 'px';
    element.style.top = top + 'px';
    },
    onmouseout:(element)=>{
        element.style.display="none";
    },
    uploadFile:(element)=>{
        element.click();
    },
    setImg:(e,element,dispatch)=>{
        const src=URL.createObjectURL(e.target.files[0])
        dispatch({type:"SETIMAGE",avatar:`url(${src})`})
    }
}
module.exports=Functions;