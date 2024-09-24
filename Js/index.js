let remainingBalance=5000;
function calculateDonate(donateAmount, donateSum){
        let donateA=parseFloat(donateSum.textContent) || 0;
        let totalDonate=donateA+donateAmount;
        remainingBalance=remainingBalance-donateAmount;
        return {totalDonate, remainingBalance};
}

document.querySelectorAll('.donateNow').forEach((button, index)=>{
    button.addEventListener('click', function(){
        const donateEntry=parseFloat(this.closest('.card-body').querySelector('.donateAmount').value);
        const donateSum=document.querySelectorAll('.totalDonate')[index];
        if(isNaN(donateEntry) || donateEntry<=0 || donateEntry>remainingBalance){
            alert("Please enter valid amount");
            return;
        }

        const {totalDonate, remainingBalance:balance}=calculateDonate(donateEntry, donateSum);
        donateSum.textContent=totalDonate + 'BDT';
        document.getElementById('mainBalance').textContent=balance+'BDT';
        this.closest('.card-body').querySelector('.donateAmount').value='';

    });
});
