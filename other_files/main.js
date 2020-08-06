function insert(number) {
    $('.screen').val($('.screen').val()+number);
}
function eqaul() {

    ans=(eval($('.screen').val()));
    if (ans>=10**21){
        ans=ans.toLocaleString('fullwide', {useGrouping:false})
        console.log(ans)
        $('.screen').val(ans)
    }
    else{
        $('.screen').val(ans)
    }

}
function ce() {
    $('.screen').val('');
}