const btnArr1 = document.querySelectorAll('.btn-card1');

console.log(btnArr1);

btnArr1.forEach((btncard1) => {
    btncard1.addEventListener("click", () => {
        console.log(btncard1);

        btncard1.style.color = "blue"; 
    });
});

const btnArr2 = document.querySelectorAll('.btn-card');

console.log(btnArr2);

btnArr2.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn);

        btn.style.color = "blue";

    })
})