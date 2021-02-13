let globeTreasure = 0
let announceTreasure = document.getElementById("treasure-amount")
let tpcAnnounce = document.getElementById("tpcAnnouncer")
let treasurePerClick = 1
let tpsAnnounce = document.getElementById("tpsAnnouncer")
let treasurePerSecond = 0
let upgradeTwoCost = 100
let upgradeOneAnnounce = document.getElementById("upgrade1")
let upgradeOneCost = 20
let upgradeTwoAnnounce = document.getElementById("upgrade2")
let upgradeThreeCost = 15
let upgradeThreeAnnounce = document.getElementById("upgrade3")
let upgradeFourCost = 1000
let upgradeFourAnnounce = document.getElementById("upgrade4")
let upgradeOneAmount = 0
let upgradeTwoAmount = 0
let upgradeThreeAmount = 0
let upgradeFourAmount = 0




function Initialize(){
    upgradeOneAnnounce.innerText = `Skinny Pete $ ${upgradeOneCost}\nIncrease treasure per click by 1\nYou have ${upgradeOneAmount} Skinny Petes`
    upgradeTwoAnnounce.innerText = `One-Legged Willy $ ${upgradeTwoCost}\nIncrease treasure per click by 1\nYou have ${upgradeTwoAmount} One-Legged Willies`
    upgradeThreeAnnounce.innerText = `Amatuer Treasure Hunters $ ${upgradeThreeCost}\nIncrease treasure per second by 1\nYou have ${upgradeThreeAmount} Amatuer Treasure Crews`
    upgradeFourAnnounce.innerText = `Ninja Pirates $ ${upgradeFourCost}\n   Increase treasure per click by 10\nYou have ${upgradeFourAmount} Ninja Pirates`
}
function treasureAnnouncer(){
    announceTreasure.innerText = `${globeTreasure}`
}
function tpcAnnouncer(){
    tpcAnnounce.innerText = `You make ${treasurePerClick} treasure per click`
}
function tpsAnnouncer(){
    tpsAnnounce.innerText = `You make ${treasurePerSecond} treasure per second`
}
function treasureClick(){
    globeTreasure = globeTreasure + treasurePerClick
    treasureAnnouncer()
    console.log(globeTreasure);
}
function upgradeOne(){
    if(globeTreasure >= upgradeOneCost){
        globeTreasure = globeTreasure - upgradeOneCost
        treasurePerClick ++
        upgradeOneCost = Math.floor(upgradeOneCost*1.25)
        upgradeOneAmount ++
        upgradeOneAnnounce.innerText = `Skinny Pete $ ${upgradeOneCost}\nIncrease treasure per click by 1\nYou have ${upgradeOneAmount} Skinny Petes`
        treasureAnnouncer()
        tpcAnnouncer()
    }
}
function upgradeTwo(){
    if(globeTreasure >= upgradeTwoCost){
        globeTreasure = globeTreasure - upgradeTwoCost
        treasurePerClick = treasurePerClick +5
        upgradeTwoCost = Math.floor(upgradeTwoCost*1.25)
        upgradeTwoAmount ++
        upgradeTwoAnnounce.innerText = `One-Legged Willy $ ${upgradeTwoCost}\nIncrease treasure per click by 5\nYou have ${upgradeTwoAmount} One-Legged Willies`
        treasureAnnouncer()
        tpcAnnouncer()
    }
}

function upgradeThree(){
    if(globeTreasure >= upgradeThreeCost){
        globeTreasure = globeTreasure - upgradeThreeCost
        treasurePerSecond = treasurePerSecond + 1
        upgradeThreeCost = Math.floor(upgradeThreeCost*1.25)
        upgradeThreeAmount++
        upgradeThreeAnnounce.innerText = `Amatuer Treasure Hunters $ ${upgradeThreeCost}\nIncrease treasure per click by 1\nYou have ${upgradeThreeAmount} Amatuer Treasur Hunters`
        treasureAnnouncer()
        tpsAnnouncer()
    }
}
function upgradeFour(){
    if(globeTreasure>= upgradeFourCost){
        globeTreasure = globeTreasure - upgradeFourCost
        treasurePerSecond = treasurePerSecond + 10
        upgradeFourCost = Math.floor(upgradeFourCost*1.25)
        upgradeFourAmount++
        upgradeFourAnnounce.innerText = `Ninja Pirates $ ${upgradeFourCost}\n   Increase treasure per click by 1\nYou have ${upgradeFourAmount} Ninja Pirates`
        treasureAnnouncer()
        tpsAnnouncer()
    }
}
function tpsCalculator(){
    globeTreasure= globeTreasure+treasurePerSecond
    treasureAnnouncer()
}
function tpsInterval(){
    setInterval(tpsCalculator, 1000)
}
tpsInterval()
tpsCalculator()
Initialize()