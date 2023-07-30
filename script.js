const btn=document.getElementById('flip-btn');
const stopBtn=document.getElementById('stop-btn');
const reset=document.getElementById('reset');
const result=document.querySelector('.res');
btn.addEventListener('click',()=>{
        const coinFlip=document.querySelector('.coin-image');
        coinFlip.style.animationName='flip';
        result.innerHTML="";
});
stopBtn.addEventListener('click',()=>{
    const num=Math.random()*10;
    const coinFlip=document.querySelector('.coin-image');
    const coin=document.querySelector('.coin');
    console.log(num);
    if(num>5){
        coin.src='head.png';
        coinFlip.style.animationName='none';
    setTimeout(() => {
        result.innerHTML="The Toss is Heads."
    }, 300);
    }
    else{
        coin.src='tail.png';
        coinFlip.style.animationName='none';
        setTimeout(() => {
            
            result.innerHTML="The Toss is Tails."
        }, 300);
    }
})
reset.addEventListener('click',()=>{
    window.location.reload();
});