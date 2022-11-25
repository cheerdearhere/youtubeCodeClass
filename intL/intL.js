
function displayData(insert){
    console.log(insert);
}
//숫자 나타내기(조회수, like 등)
const views = 9844324;
displayData(views);
var formatter = new Intl.NumberFormat('ko');
const basicForm = formatter.format(views);
displayData(basicForm);//9,844,324
formatter = new Intl.NumberFormat('ko', {notation:'compact'});
const compactKoForm = formatter.format(views);
displayData(compactKoForm);//984만
formatter = new Intl.NumberFormat('en', {notation:'compact'});
const compactEnForm = formatter.format(views);
displayData(compactEnForm);//9.8M
formatter = new Intl.NumberFormat('en', {
    notation:'compact', 
    compactDisplay:'long'
});
const compactEnLongForm = formatter.format(views);
displayData(compactEnLongForm);//9.8 million
formatter = new Intl.NumberFormat(navigator.language, {
    notation:'compact', 
    compactDisplay:'long'
});
const userLongForm = formatter.format(views);
displayData(userLongForm);//사용자 지정 언어 형식

//가격나타내기
const price = 10000;
formatter = new Intl.NumberFormat('ko',{
    style:'currency',
    currency: 'krw',
    notation: 'compact'
});
displayData(formatter.format(price));//W1만
