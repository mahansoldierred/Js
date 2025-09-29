const numbers = [
    {id : 1 , name : 'html'},
    {id : 2 , name : 'css'}
];

numbers.sort(function(a,b){
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if(nameA<nameB) return -1;
    if(nameB>nameA) return 1;
    return 0 ;
});

console.log(numbers);
