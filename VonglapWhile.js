//bai1: tính tổng các số đc nhập, nếu nhập -1 thì dừng lại.
/*let num = +prompt('number');
let total= 0;
while (num !== -1){
    total += num;
    num = +prompt('number');
}
document.write(total);*/
//bai2: tạo thẻ hr có độ dài từ 1 đến 100.
let i =1
while (i < 100) {
    document.write('<hr width = ' + i + '%>');
    i++;
}