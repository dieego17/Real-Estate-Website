const header__hambur = document.getElementById("header__hambur")
const section__login = document.getElementById("section__login")
const login__close = document.getElementById("login__close")



header__hambur.addEventListener("click", (event) =>{
    if(section__login.classList.contains("displaynone")){
        section__login.classList.remove("displaynone")
        section__login.classList.add("displayflex")
        header__hambur.classList.add("colorMarron")
    }else{
        section__login.classList.add("displaynone")
        section__login.classList.remove("displayflex")
        header__hambur.classList.remove("colorMarron")
    }
})

login__close.addEventListener("click", (event) =>{
    section__login.classList.add("displaynone")
    section__login.classList.remove("displayflex")
    header__hambur.classList.remove("colorMarron")
})



