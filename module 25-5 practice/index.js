// all heading color changes
const allHeadings2 = document.getElementsByTagName('h2');
for(const heading of allHeadings2){
    heading.style.color = 'lightblue'
};

// bagpack section background color change

document.getElementById('bagpack').style.backgroundColor = 'tomato'

// card class border change 

const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.borderRadius = '30px';
}

// ৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো। যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। একটু চিন্তা করে করার চেষ্টা করো। 

const allButton = document.getElementsByClassName('panda-btn-buy-now')
for(const button of allButton){
   button.addEventListener('click', function(event){
    event.target.style.display = 'none'
   })
}

// Email Text check
// ৭. একদম নিচে একটা LET'S STAY IN TOUCH নামে একটা জিনিস আছে। সেখানে তুমি submit বাটনটা disable করে ফেলবে। তারপর কেউ যদি উপরে input ফিল্ডে যদি একজাক্টলি email শব্দটা লিখে। তাহলে বাটন একটিভ হবে। আর যদি অন্য কিছু লিখে তাহলে বাটনটা একটিভ হবে না।

document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('delete-btn');
    if(text === 'email'){
        deleteButton.removeAttribute('disabled')
    }
    else{
        deleteButton.setAttribute('disabled', true)
    }
})


// ৮. (অপশনাল) একটা মজার চ্যালেঞ্জ। কোন একটা ইমেজ এর উপরে mouseenter করলে সেই ইমেজটা চেইঞ্জ হয়ে যাবে। একটু গুগলে সার্চ দিয়ে দেখো। জিনিসটা কিভাবে করা যেতে পারে। 

// const productImages = document.getElementsByTagName('img')
// for(const image of productImages){
//     image.addEventListener('mouseover', function(){
//         image.src = '/images/bags/bag-1.png'
//     })
//     image.addEventListener('mouseout', function(){
//         image.src = image.src
//       })
// }

// ৯. (অপশনাল) নিচের যে LET'S STAY IN TOUCH আছে সেখানে কোন খালি জায়গায় ডাবল ক্লিক করলে ঐটার পিছনের কালার চেইঞ্জ হয়ে যাবে। 

document.getElementById('subscribe').addEventListener('dblclick', function(event){
    // const subscribe = document.getElementById('subscribe')
    // subscribe.style.backgroundColor = 'purple'
    event.target.style.backgroundColor = 'purple'
})