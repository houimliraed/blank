function calculate()
{
    let width=parseFloat(document.getElementById('width').value);
    let length=parseFloat(document.getElementById('length').value);

    let w = (width * length); 

    document.getElementById('result').innerText = `the area is ${w}`;
}