function getFact(n) {
    var factorial = 1;
    for (i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

function getPermu(n, r) {
    return getFact(n) / getFact(n - r);
}

function getCombi(n, r) {
    return getFact(n) / (getFact(n - r) * getFact(r));
}

function solvePermu() {
    var input1 = document.getElementById("permu-form-n").value;
    var input2 = document.getElementById("permu-form-r").value;
    var print = document.getElementById('permu-answer');
    print.innerHTML = `<p>Answer: <br>n (objects):${input1}<br> r(sample): ${input2} </p><h1> ${getPermu(input1, input2)}</h1>`
}

function solveCombi() {
    var input1 = document.getElementById("combi-form-n").value;
    var input2 = document.getElementById("combi-form-r").value;
    var print = document.getElementById('combi-answer');
    print.innerHTML = `<p>Answer: <br>n (objects):${input1}<br> r(sample): ${input2} </p><h1> ${getCombi(input1, input2)}</h1>`
}

function getFibo(terms) {
    var input = document.getElementById("fibo-terms").value;
    let n1 = 0, n2 = 1, nextTerm;
    const block = document.getElementById("fibo-answer");
    var insertP = "";

    insertP += "Fibonacci Numbers: " + `<br>`
    insertP += n1 + ", &nbsp;";
    insertP += n2 + ", &nbsp;";
    for (let i = 1; i < input; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        insertP += nextTerm + ", &nbsp;";
    }

    block.innerHTML = insertP;

}

function getFn() {
    var input = document.getElementById("fibo-terms").value;
    var insertF = "";
    const fn = "F(n): &nbsp;"
    const block = document.getElementById("fibo-fn");

    insertF += fn + `<br>`
    for (let i = 0; i <= input; i++) {
        insertF += i + ", &nbsp;";
    }

    block.innerHTML = insertF;
}

function getLn() {
    var input = document.getElementById("lucas-terms").value;
    var insertF = "";
    const ln = "L(n): &nbsp;"
    const block = document.getElementById("lucas-ln");

    insertF += ln + `<br>`
    for (let i = 1; i <= input; i++) {
        insertF += i + ", &nbsp;";
    }

    block.innerHTML = insertF;
}

// function getLucas(){
//     var input = document.getElementById("lucas-terms").value;
//     let n1 = 2, n2 = 1, nextTerm;
//     const block = document.getElementById("lucas-answer");
//     var insertP = "";

//     insertP += "Lucas Numbers: " + `<br>`
//     insertP += n1 + ", &nbsp;";
//     insertP += n2 + ", &nbsp;";
//     for (let i = 2; i < input; i++) {
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//         insertP += nextTerm + ", &nbsp;";
//     }

//     block.innerHTML = insertP;

// }