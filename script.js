'use script'
document.querySelector('.top').addEventListener('click', function()
{
    alert('THIS IS HOME')
}
)
document.querySelector('.right').addEventListener('click', function()
{
    document.querySelector('.gridcontainer').classList.remove('hidden')
}
)

document.querySelector('.farright').addEventListener('click', function(){
    document.querySelector('.modal').classList.remove('hidden')
    document.querySelector('.overlay').classList.remove('hidden')
})

document.querySelector('.close-modal').   addEventListener('click',function(){

    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')

    })
    document.querySelector('.topprojects').addEventListener('click', function()
{
    document.querySelector('.gridcontainer').classList.remove('hidden')
})
// const days=[
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday'
    
// ];
// const months=[
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',];
//     const date=new Date();
//     const month=date.getMonth();
//     console.log(months[month]);
//     const day=date.getDay()
//     console.log(days[day])
//     console.log(date.getDate())
//     console.log(date.getFullYear())
//     const sentence=`${days[day]},${date.getDate()} ${months[month]},${date.getFullYear()}.   `
//     console.log(sentence)
//     document.body.innerHTML=sentence