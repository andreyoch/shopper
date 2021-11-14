document.addEventListener("DOMContentLoaded", () => {
    let inputAllLines = document.querySelector(".allStringInputs"),
           inputLines = document.getElementsByClassName("stringInputs"),
        oneStrinInput = document.getElementsByClassName("oneStrinInput"),
         inputButtons = document.getElementsByClassName("inputButtons"),
            buttonAdd = document.getElementsByClassName("buttonAdd"),
       buttonSubtract = document.getElementsByClassName("buttonSubtract"),
                goods = document.getElementsByTagName("input"),
         submitButton = document.getElementsByClassName("submitButton"),
     placeForBestShop = document.querySelector(".theBestOffer");
       



    let goodsValues = [];
    let newLine = '<div class="oneStrinInput"><div class="inputText"><input type="text" value="" name="goodsName" class="goodsNameInput" placeholder="Введите название товара" autocomplete="off"></div><div class="inputButtons"><div hidden class="buttonAdd">+</div><div class="buttonSubtract">-</div></div></div>';
    buttonSubtract[0].classList.add("hiddenClass");

    
    let subtractMethod = function () {
        oneStrinInput[0].remove();
        goodsValues.pop();
    };

    let noteGoods = function () {
        for (let i = 0; i < goods.length; i++) {
            goodsValues[i] = goods[i].value;
        }
    };



        
        
        
    //data
    let products = [{
        "product name": "ziemniaki",
        prices: {
            Aushan: 2,
            Biedronka: 2.99,
            Dino: 0.85,
            Polo: 1.99,
        }
    }, {
        "product name": "jablka",
        prices: {
            Aushan: 3.69,
            Biedronka: 3.49,
            Dino: 3.49,
            Polo: 3.49,
        }
    }, {
        "product name": "kurczak",
        prices: {
            Aushan: 14.48,
            Biedronka: 16.49,
            Dino: 15.99,
            Polo: 15.99,
        }
    }, {
        "product name": "pieczarki",
        prices: {
            Aushan: 7.97,
            Biedronka: 6.99,
            Dino: 8.99,
            Polo: 6.99,
        }
    }];
    //data
    
        
    
    
    
    buttonAdd[0].addEventListener("click", () => {
        inputLines[0].insertAdjacentHTML('afterbegin', newLine);
        inputButtons[0].classList.add("hiddenClass");
        buttonSubtract[buttonSubtract.length - 1].classList.remove("hiddenClass");
    });


    buttonSubtract[buttonSubtract.length - 1].addEventListener("click", () => {
        if (oneStrinInput.length === 2) {
            subtractMethod();
            buttonSubtract[0].classList.add("hiddenClass");
        } else {
            subtractMethod();
        }         
    });


    submitButton[0].addEventListener("click", (event) => {
        event.preventDefault();
        //Variables for prices
        let sumAushan = 0, sumBiedronka = 0, sumDino = 0, sumPolo = 0;
        noteGoods();
        //Algorithm for counting final price
        for (let goodsValuesCounter = 0; goodsValuesCounter < goodsValues.length; goodsValuesCounter++) {
            for (let productsCounter = 0; productsCounter < products.length; productsCounter++) {
                if (goodsValues[goodsValuesCounter] === products[productsCounter]["product name"]) {
                    let {Aushan, Biedronka, Dino, Polo} = products[productsCounter].prices;
                    sumAushan = sumAushan + Aushan;
                    sumBiedronka = sumBiedronka + Biedronka;
                    sumDino = sumDino + Dino;
                    sumPolo = sumPolo + Polo; 

                    if (goodsValuesCounter === goodsValues.length - 1) {
                        placeForBestShop.innerHTML = `Стоимость всех продуктов в магазине Aushan: ${sumAushan.toFixed(2)} PLN<br>
                            Стоимость всех продуктов в магазине Biedronka: ${sumBiedronka.toFixed(2)} PLN<br>
                            Стоимость всех продуктов в магазине Dino: ${sumDino.toFixed(2)} PLN<br>
                            Стоимость всех продуктов в магазине Polo: ${sumPolo.toFixed(2)} PLN<br>`;
                        console.log(sumAushan, sumBiedronka, sumDino, sumPolo);
                    }
                }
            }
        }
    });
});