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
        const donateName=this.closest('.card-body').querySelector('.card-title').textContent;
        if(isNaN(donateEntry) || donateEntry<=0 || donateEntry>remainingBalance){
            alert("Please enter valid amount");
            return;
        }
        const {totalDonate, remainingBalance:balance}=calculateDonate(donateEntry, donateSum);
        donateSum.textContent=totalDonate + 'BDT';
        document.getElementById('mainBalance').textContent=balance+'BDT';
        this.closest('.card-body').querySelector('.donateAmount').value='';
        historyAppend(donateEntry,donateName)

        const modal=document.getElementById('myModal');
        modal.showModal();

    });
});
// Function show history 
function historyAppend(donate,donateN){
    const historyDiv=document.getElementById('historyInfo');
    const historyList=document.createElement("div");
    historyList.innerHTML=`
    <p class="font-bold">${donate} Taka is ${donateN}</p>
    <p class="text-sm text-gray-500">Date: ${new Date().toLocaleString()}</p>
`;
historyDiv.appendChild(historyList);

}

// history tab & domain tab functionality
const history=document.getElementById('historyTab');
const donation=document.getElementById('donationTab');
const donationContent=document.getElementById('donationContent');
const historyInfo=document.getElementById('historyInfo');
history.addEventListener("click", function(){
    history.classList.add('bg-green-500', 'text-white' );
    history.classList.remove('bg-white', 'text-black' );
    donation.classList.remove('bg-green-500', 'text-white' );
    donation.classList.add('bg-white', 'text-black'  );
    historyInfo.classList.remove('hidden');
    donationContent.classList.add('hidden');
});

donation.addEventListener("click", function(){
    donation.classList.add('bg-green-500', 'text-white' );
    donation.classList.remove('bg-white', 'text-black' );
    history.classList.remove('bg-green-500', 'text-white' );
    history.classList.add('bg-white', 'text-black'  );
    donationContent.classList.remove('hidden');
    historyInfo.classList.add('hidden');
});




