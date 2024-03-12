const breakFastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// breakfast menu itteration
const breakFastMenuhtml = breakFastMenu.map((item,index)=>`<p>Item:${index+1}:${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakFastMenuhtml; 
// maincourse menu itteration with .foreach
let mainCourseMenuItems = '';
mainCourseMenu.forEach((item,index)=>{
mainCourseMenuItems += `<p>${index +1}:${item} </p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItems;
// looping with for loop to itterate throught the last dessert menu
let dessertMenuData = '';
for(let i=0;i<=dessertMenu.length;i++){
    dessertMenuData += `<p>${i+1}:${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuData;
