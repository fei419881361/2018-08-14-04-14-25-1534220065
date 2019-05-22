module.exports = function main(number) {
    let arr = init();
    let strNumber = number+"";
    let result = "";
    let line = 0;
    while(line<3){
        for(let i = 0; i<strNumber.length; i++){
            let temp = parseInt(strNumber.charAt(i));
            result += arr[temp][line];

            if(i != strNumber.length-1){
                result += " ";
            }
        }
        result += "\n"; 
        line++;
    }
    
    return result;
};

function init(){
    var arr = new Array();
    arr[0] = new Array()
    arr[0][0] = "._.";
    arr[0][1] = "|.|";
    arr[0][2] = "|_|";
    
    arr[1] = new Array()
    arr[1][0] = "...";
    arr[1][1] = "..|";
    arr[1][2] = "..|";
    arr[2] = new Array()
    arr[2][0] = "._.";
    arr[2][1] = "._|";
    arr[2][2] = "|_.";
    arr[3] = new Array()
    arr[3][0] = "._.";
    arr[3][1] = "._|";
    arr[3][2] = "._|";
    arr[4] = new Array()
    arr[4][0] = "...";
    arr[4][1] = "|_|";
    arr[4][2] = "..|";
    arr[5] = new Array()
    arr[5][0] = "._.";
    arr[5][1] = "|_.";
    arr[5][2] = "._|";
    arr[6] = new Array()
    arr[6][0] = "._.";
    arr[6][1] = "|_.";
    arr[6][2] = "|_|";
    arr[7] = new Array()
    arr[7][0] = "._.";
    arr[7][1] = "..|";
    arr[7][2] = "..|";
    arr[8] = new Array()
    arr[8][0] = "._.";
    arr[8][1] = "|_|";
    arr[8][2] = "|_|";
    arr[9] = new Array()
    arr[9][0] = "._.";
    arr[9][1] = "|_|";
    arr[9][2] = "..|";
    return arr;
}
