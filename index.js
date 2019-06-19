// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function wordUpper(str){
    var wordArray=str.split(" ");
    for(let i=0;i<wordArray.length;i++){
        var char=wordArray[i].charAt(0);
        wordArray[i]=wordArray[i].replace(char,function replace(char){
            return char.toUpperCase();
        })
    }
    return wordArray.join(" ");
}
console.log(wordUpper(sentence));

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
function getMoney(str){
    return str.substr(1);
}
console.log(getMoney(money))