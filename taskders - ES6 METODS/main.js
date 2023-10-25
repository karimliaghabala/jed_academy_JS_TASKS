const f10 = ['ali','agabala','rehman', 'alisahib','bali', 'feqan', 'sada']

// const t1 = f10.filter((el)=> {
//     if(el.length >4 && el.length<8){
//         console.log(el);
//     }
// })

// const t2 = f10.find((ele)=>{
//     if(ele.length === 4 && ele[ele.length-1] === 'i'){  // add.endsWith('i)
//         console.log(ele)
//     }
// })

// const t3 = f10.every((elem)=>{
//     if(elem.includes('a')){
//         console.log(elem);
//     }
// })

const t4 = f10.some((elem)=>{
    if(elem.includes('z')){
        console.log(elem);
    }
})