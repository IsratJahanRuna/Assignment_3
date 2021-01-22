// Determine Kilometer To Meter -->



function kilometerToMeter(kilometer) {
    if (kilometer < 0 || Number(kilometer) != kilometer) {
        console.log("Your input is invalid...");
        return -1;
    }
    else {
        var meter = kilometer * 1000;
        return meter;
    }

}

//  var result = kilometerToMeter(10);
//  console.log(result);




//Build A Budget Calculator -->



function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {
    function isInt(n) {
        return Number(n) == n && n % 1 == 0;
    }
    var check = isInt(numOfWatch);
    function isInt(n) {
        return Number(n) == n && n % 1 == 0;
    }
    var check1 = isInt(numOfMobile);
    function isInt(n) {
        return Number(n) == n && n % 1 == 0;
    }
    var check2 = isInt(numOfLaptop);
    if (numOfWatch < 0 || numOfMobile < 0 || numOfLaptop < 0 || check == false || check1 == false || check2 == false) {
        console.log("Your input is invalid...")
        return -1;
    }
    else {
        var watchPrice = numOfWatch * 50;
        var mobilePrice = numOfMobile * 100;
        var laptopPrice = numOfLaptop * 500;
        var total = watchPrice + mobilePrice + laptopPrice;
        return total;
    }
}

//  var result = budgetCalculator(10, 10, 10);
//  console.log(result);




// Calculate A Hotel Bill -->



function hotelCost(spendDays) {
    var totalCost = 0;
    function isInt(n){
        return Number(n) == n && n % 1 == 0;
    }
     var check = isInt(spendDays);
    if (spendDays < 0 || check == false) {
        console.log("Your input is invalid...")
        return -1;
    }
    else {
        if (spendDays <= 10) {
            totalCost = spendDays * 100;

        }
        else if (spendDays <= 20) {
            var firstPartCost = 10 * 100;
            var remaining = spendDays - 10;
            var secondPartCost = remaining * 80;
            totalCost = firstPartCost + secondPartCost;

        }
        else {
            var firstPartCost = 10 * 100;
            var secondPartCost = 10 * 80;
            var remaining = spendDays - 20;
            var thirdPartCost = remaining * 50;
            totalCost = firstPartCost + secondPartCost + thirdPartCost;

        }
        return totalCost;
    }
}

//  var result = hotelCost(12.5);
//  console.log(result);




// Determine The MegaFriend -->



function megaFriend(friends) {
    var mega = friends[0];
    var check = 0;
    for (var i = 0; i < friends.length; i++) {
        var name = typeof (friends[i]);
        var compare = typeof ("runa");
        var empty = '';
        var nothing = ' ';
        if (friends.length < 1 || name != compare || friends[i] == empty || friends[i] == nothing) {
            //console.log("Your input is invalid...");
            check = "Your input is invalid...";
        }
    }
    if (check != 0) {
        console.log("Your input is invalid...");
        return -1;
    }
    for (var i = 0; i < friends.length; i++) {
        if (mega.length < friends[i].length) {
            mega = friends[i];
        }
    }
    return mega;
}

//  var friendsNameArray = ['Nafiz', 'Israt', 'Mehrin', 'Raiannnnnnnn', 'Sumaiyaaaaaa'];
//  var result = megaFriend(friendsNameArray);
//  console.log(result);

