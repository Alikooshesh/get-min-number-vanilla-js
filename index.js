function getMin(){
    let numList = []

    while(numList.length<101){
        let userNum = +prompt("give me a number")
        if(!isNaN(userNum)){
            numList.push(userNum)
        }
    }

    numList = numList.sort((item1 , item2) => item1-item2)

    console.log(numList[0])
}