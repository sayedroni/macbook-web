// Function For Extra Memory Cost.....
function ramCost(memorycost) {
    const ExtraMemoryCost = document.getElementById('extra-memoryCost');
    ExtraMemoryCost.innerText = memorycost;
}

// Function For Extra Storage Cost.....
function ssdCost(storagecost) {
    const ExtraStorageCost = document.getElementById('StorageCost');
    ExtraStorageCost.innerText = storagecost;
}
// Function For Delivary Cost.....
function Delivery(deliveryCharge) {
    const DeliveryCost = document.getElementById('deliveryCost');
    DeliveryCost.innerText = deliveryCharge;
}

function totalprice() {
    const bestcost = document.getElementById('bestPrice');
    const bestPrice = Number(bestcost.innerText);

    const ExtraMemoryCost = document.getElementById('extra-memoryCost');
    const memoryPrice = Number(ExtraMemoryCost.innerText);

    const ExtraStorageCost = document.getElementById('StorageCost');
    const storagePrice = Number(ExtraStorageCost.innerText);

    const DeliveryCost = document.getElementById('deliveryCost');
    const deliveryPrice = Number(DeliveryCost.innerText);

    // TOTAL VALUE OF CART

    const totalAmount = bestPrice + memoryPrice + storagePrice + deliveryPrice;

    //Total Price Without Discount 
    const total = document.getElementById('totalCost');
    const tValue = total.innerText;
    total.innerText = totalAmount;

    //  Footer total cost
    const ftotal = document.getElementById('footerTotal');
    const footerValue = ftotal.innerText;
    ftotal.innerText = totalAmount;
    return totalAmount;
}

function promoCode() {
    const total = totalprice();
    const promoInput = document.getElementById('promoInput').value;
    const promocode = 'stevekaku';
    if (promoInput == promocode) {
        const discount = (total * 20) / 100;
        const newtotal = total - discount;
        const ftotal = document.getElementById('footerTotal');
        const footerValue = ftotal.innerText;
        ftotal.innerText = newtotal;
    }
    else {
        alert('Wrong Promo');
    }
}

// Document For Memory..... 
document.getElementById('button-8GBram').addEventListener('click', function () {
    ramCost(0);
    totalprice();
})
document.getElementById('button-16GBram').addEventListener('click', function () {
    ramCost(180);
    totalprice();
})
// Document For Storage..... 
document.getElementById('button-256GBssd').addEventListener('click', function () {
    ssdCost(0)
    totalprice();
})
document.getElementById('button-512GBssd').addEventListener('click', function () {
    ssdCost(100);
    totalprice();
})
document.getElementById('button-1TBssd').addEventListener('click', function () {
    ssdCost(180);
    totalprice();
})
// Document For Delivery..... 
document.getElementById('button-deliveryFree').addEventListener('click', function () {
    Delivery(0)
    totalprice();
})
document.getElementById('button-deliveryCharge').addEventListener('click', function () {
    Delivery(20);
    totalprice();
})

//Document for Promo Code.....
document.getElementById('button-promo').addEventListener('click', function () {
    promoCode();
})