function studentDetails(i) { 
    var classDetails = {
        classTeacher: 'Anjani',
        students: [{name: "Anjali", roll: "1"}, {name: "Bhavya", roll: "2"}, {name: "Neha", roll: "3"}]
    };

    const arr = new Array;

    arr.push(classDetails.students[i].name);
    arr.push(classDetails.students[i].roll);

    return arr;
}


// Input and output has already been handled for you

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let remainder = '';
process.stdin.on('data', function (chunk) {
    let t = parseInt(chunk);
    let ans = studentDetails(1);
    for(var i=0; i<ans.length; i++)
    {
        process.stdout.write(ans[i]+'\n');
    }
    process.exit();
});