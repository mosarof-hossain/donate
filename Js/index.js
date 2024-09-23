let totalDonate=0;
function calculateDonate(){
    const donateAmount=document.getElementById('donateAmount');
    const amount=parseFloat(donateAmount.value);
    totalDonate=totalDonate+amount;
    document.getElementById('totalDonate').textContent=totalDonate+'BDT';
    donateAmount.value='';
}
document.getElementById('donateNow').addEventListener('click',calculateDonate);