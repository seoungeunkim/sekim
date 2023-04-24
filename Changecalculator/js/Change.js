// 상품 값 설정 //
let MoneyKeep = 0;
let i = 0, j = 0, k = 0, a = 0, b = 0, c = 0, d = 0, e = 0, f = 0;
let Value1 = 0, Value2 = 0, Value3 = 0, Value4 = 0, Value5 = 0, Value6 = 0,
Value7 = 0, Value8 = 0, Value9 = 0;
const GoodsM = (GoodsMoney, Product_name) => {
    MoneyKeep += GoodsMoney;
    if (MoneyKeep <= 100000) {
        $('#PriceExp').html(inputNumberFormat(MoneyKeep));
        // 장바구니 상품 갯수 표현 //
        switch (GoodsMoney) {
            case 5550:
                i++;
                $('#Section1').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(5550)">-</article>
                        <article id="Numb1">${i}</article>
                        <article onclick="button_o(5550)">+</article>
                        <article id="Value1">${inputNumberFormat(Value1=GoodsMoney*i)}원</article>
                        <article onclick="x_button(${GoodsMoney*i},${5550})">x</article>
                    </section>
                `);
                $('#Section1').css('display', 'block');
                $('#Section1 section').css('display', 'block');
                break;
            case 3550:
                j++;
                $('#Section2').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(3550)">-</article>
                        <article id="Numb2">${j}</article>
                        <article onclick="button_o(3550)">+</article>
                        <article id="Value2">${inputNumberFormat(Value2=GoodsMoney*j)}원</article>
                        <article onclick="x_button(${GoodsMoney*j},${3550})">x</article>
                    </section>
                `);
                $('#Section2').css('display', 'block');
                $('#Section2 section').css('display', 'block');
                break;
            case 3200:
                k++;
                $('#Section3').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(3200)">-</article>
                        <article id="Numb3">${k}</article>
                        <article onclick="button_o(3200)">+</article>
                        <article id="Value3">${inputNumberFormat(Value3=GoodsMoney*k)}원</article>
                        <article onclick="x_button(${GoodsMoney*k},${3200})">x</article>
                    </section>
                `)
                $('#Section3').css('display', 'block');
                $('#Section3 section').css('display', 'block');
                break;
            case 1340:
                a++;
                $('#Section4').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(1340)">-</article>
                        <article id="Numb4">${a}</article>
                        <article onclick="button_o(1340)">+</article>
                        <article id="Value4">${inputNumberFormat(Value4=GoodsMoney*a)}원</article>
                        <article onclick="x_button(${GoodsMoney*a},${1340})">x</article>
                    </section>
                `)
                $('#Section4').css('display', 'block');
                $('#Section4 section').css('display', 'block');
                break;
            case 9520:
                b++;
                $('#Section5').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(9520)">-</article>
                        <article id="Numb5">${b}</article>
                        <article onclick="button_o(9520)">+</article>
                        <article id="Value5">${inputNumberFormat(Value5=GoodsMoney*b)}원</article>
                        <article onclick="x_button(${GoodsMoney*b},${9520})">x</article>
                    </section>
                `)
                $('#Section5').css('display', 'block');
                $('#Section5 section').css('display', 'block');
                break;
            case 1650:
                c++;
                $('#Section6').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(1650)">-</article>
                        <article id="Numb6">${c}</article>
                        <article onclick="button_o(1650)">+</article>
                        <article id="Value6">${inputNumberFormat(Value6=GoodsMoney*c)}원</article>
                        <article onclick="x_button(${GoodsMoney*c},${1650})">x</article>
                    </section>
                `)
                $('#Section6').css('display', 'block');
                $('#Section6 section').css('display', 'block');
                break;
            case 7550:
                d++;
                $('#Section7').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(7550)">-</article>
                        <article id="Numb7">${d}</article>
                        <article onclick="button_o(7550)">+</article>
                        <article id="Value7">${inputNumberFormat(Value7=GoodsMoney*d)}원</article>
                        <article onclick="x_button(${GoodsMoney*d},${7550})">x</article>
                    </section>
                `)
                $('#Section7').css('display', 'block');
                $('#Section7 section').css('display', 'block');
                break;
            case 1570:
                e++;
                $('#Section8').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(1570,)">-</article>
                        <article id="Numb8">${e}</article>
                        <article onclick="button_o(1570)">+</article>
                        <article id="Value8">${inputNumberFormat(Value8=GoodsMoney*e)}원</article>
                        <article onclick="x_button(${GoodsMoney*e},${1570})">x</article>
                    </section>
                `)
                $('#Section8').css('display', 'block');
                $('#Section8 section').css('display', 'block');
                break;
            case 9550:
                f++;
                $('#Section9').html(`
                    <section class="Shopping_value">
                        <article>${Product_name}</article>
                        <article onclick="button_b(9550)">-</article>
                        <article id="Numb9">${f}</article>
                        <article onclick="button_o(9550)">+</article>
                        <article id="Value9">${inputNumberFormat(Value9=GoodsMoney*f)}원</article>
                        <article onclick="x_button(${GoodsMoney*f},${9550})">x</article>
                    </section>
                `)
                $('#Section9').css('display', 'block');
                $('#Section9 section').css('display', 'block');
                break;
        }
    } else {
        $('#Warning_text').html('상품금액제한 100000원 초과!');
        $('.Warning').css('display', 'flex');
        MoneyKeep -= GoodsMoney;
    };
};

// 장바구니 x 버튼 //
const x_button = (ClearMoney, GoodsMoney) => {
    switch( GoodsMoney ){
        case 5550 :
            i = 0;
            MoneyKeep = MoneyKeep - Value1;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 3550 :
            j = 0;
            MoneyKeep = MoneyKeep - Value2;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 3200 :
            k = 0;
            MoneyKeep = MoneyKeep - Value3;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 1340 :
            a = 0;
            MoneyKeep = MoneyKeep - Value4;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 9520 :
            b = 0;
            MoneyKeep = MoneyKeep - Value5;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 1650 :
            c = 0;
            MoneyKeep = MoneyKeep - Value6;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 7550 :
            d = 0;
            MoneyKeep = MoneyKeep - Value7;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 1570 :
            e = 0;
            MoneyKeep = MoneyKeep - Value8;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
        case 9550 :
            f = 0;
            MoneyKeep = MoneyKeep - Value9;
            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
            break;
    }
    $(event.target).parents('section').css('display','none');
}

// 장바구니 -버튼 이벤트 //
const button_b = (ClearMoney) => {
    MoneyKeep = MoneyKeep - ClearMoney;
    if (MoneyKeep >= 0) {
        $('#PriceExp').html(inputNumberFormat(MoneyKeep));
        //장바구니 상품 갯수 빼기 //
        switch (ClearMoney) {
            case 5550:
                if (i > 0) {
                    i = i - 1;
                    $('#Numb1').html(i);
                    $('#Value1').html(inputNumberFormat(Value1 = Value1 - ClearMoney) + '원');
                    break;
                } else {
                    MoneyKeep = MoneyKeep + ClearMoney;
                    $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                    break;
                }
                case 3550:
                    if (j > 0) {
                        j = j - 1;
                        $('#Numb2').html(j);
                        $('#Value2').html(inputNumberFormat(Value2 = Value2 - ClearMoney) + '원');
                        break;
                    } else {
                        MoneyKeep = MoneyKeep + ClearMoney;
                        $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                        break;
                    }
                    case 3200:
                        if (k > 0) {
                            k = k - 1;
                            $('#Numb3').html(k);
                            $('#Value3').html(inputNumberFormat(Value3 = Value3 - ClearMoney) + '원');
                            break;
                        } else {
                            MoneyKeep = MoneyKeep + ClearMoney;
                            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                            break;
                        }
                        case 1340:
                            if (a > 0) {
                                a = a - 1;
                                $('#Numb4').html(a);
                                $('#Value4').html(inputNumberFormat(Value4 = Value4 - ClearMoney) + '원');
                                break;
                            } else {
                                MoneyKeep = MoneyKeep + ClearMoney;
                                $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                                break;
                            }
                            case 9520:
                                if (b > 0) {
                                    b = b - 1;
                                    $('#Numb5').html(b);
                                    $('#Value5').html(inputNumberFormat(Value5 = Value5 - ClearMoney) + '원');
                                    break;
                                } else {
                                    MoneyKeep = MoneyKeep + ClearMoney;
                                    $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                                    break;
                                }
                                case 1650:
                                    if (c > 0) {
                                        c = c - 1;
                                        $('#Numb6').html(c);
                                        $('#Value6').html(inputNumberFormat(Value6 = Value6 - ClearMoney) + '원');
                                        break;
                                    } else {
                                        MoneyKeep = MoneyKeep + ClearMoney;
                                        $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                                        break;
                                    }
                                    case 7550:
                                        if (d > 0) {
                                            d = d - 1;
                                            $('#Numb7').html(d);
                                            $('#Value7').html(inputNumberFormat(Value7 = Value7 - ClearMoney) + '원');
                                            break;
                                        } else {
                                            MoneyKeep = MoneyKeep + ClearMoney;
                                            $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                                            break;
                                        }
                                        case 1570:
                                            if (e > 0) {
                                                e = e - 1;
                                                $('#Numb8').html(e);
                                                $('#Value8').html(inputNumberFormat(Value8 = Value8 - ClearMoney) + '원');
                                                break;
                                            } else {
                                                MoneyKeep = MoneyKeep + ClearMoney;
                                                $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                                                break;
                                            }
                                            case 9550:
                                                if (f > 0) {
                                                    f = f - 1;
                                                    $('#Numb9').html(f);
                                                    $('#Value9').html(inputNumberFormat(Value9 = Value9 - ClearMoney) + '원');
                                                    break;
                                                } else {
                                                    MoneyKeep = MoneyKeep + ClearMoney;
                                                    $('#PriceExp').html(inputNumberFormat(MoneyKeep));
                                                    break;
                                                }
        }
    } else {
        $('#Warning_text').html('가격은 최소 0원입니다!');
        $('.Warning').css('display', 'flex');
        MoneyKeep = MoneyKeep + ClearMoney;
    }
}
// 장바구니 +버튼 이벤트 //
const button_o = (ClearMoney) => {
    MoneyKeep = MoneyKeep + ClearMoney;
    if (MoneyKeep <= 100000) {
        $('#PriceExp').html(inputNumberFormat(MoneyKeep));
        //장바구니 상품 갯수 빼기 //
        switch (ClearMoney) {
            case 5550:
                i = i + 1;
                $('#Numb1').html(i);
                $('#Value1').html(inputNumberFormat(Value1 = Value1 + ClearMoney) + '원');
                break;
            case 3550:
                j = j + 1;
                $('#Numb2').html(j);
                $('#Value2').html(inputNumberFormat(Value2 = Value2 + ClearMoney) + '원');
                break;
            case 3200:
                k = k + 1;
                $('#Numb3').html(k);
                $('#Value3').html(inputNumberFormat(Value3 = Value3 + ClearMoney) + '원');
                break;
            case 1340:
                a = a + 1;
                $('#Numb4').html(a);
                $('#Value4').html(inputNumberFormat(Value4 = Value4 + ClearMoney) + '원');
                break;
            case 9520:
                b = b + 1;
                $('#Numb5').html(b);
                $('#Value5').html(inputNumberFormat(Value5 = Value5 + ClearMoney) + '원');
                break;
            case 1650:
                c = c + 1;
                $('#Numb6').html(c);
                $('#Value6').html(inputNumberFormat(Value6 = Value6 + ClearMoney) + '원');
                break;
            case 7550:
                d = d + 1;
                $('#Numb7').html(d);
                $('#Value7').html(inputNumberFormat(Value7 = Value7 + ClearMoney) + '원');
                break;
            case 1570:
                e = e + 1;
                $('#Numb8').html(e);
                $('#Value8').html(inputNumberFormat(Value8 = Value8 + ClearMoney) + '원');
                break;
            case 9550:
                f = f + 1;
                $('#Numb9').html(f);
                $('#Value9').html(inputNumberFormat(Value9 = Value9 + ClearMoney) + '원');
                break;
        }
    } else {
        $('#Warning_text').html('상품금액제한 100000원 초과!');
        $('.Warning').css('display', 'flex');
        MoneyKeep = MoneyKeep - ClearMoney;
    }
}

// 받는돈 설정 //
let PaymentKeep = 0;
const Payment = (PayMentMoney) => {
    PaymentKeep += PayMentMoney;
    if (PaymentKeep <= 100000) {
        $('#PaymentExp').html(inputNumberFormat(PaymentKeep));
    } else {
        $('#Warning_text').html('지불금액제한 100000원 초과!');
        $('.Warning').css('display', 'flex');
        PaymentKeep -= PayMentMoney;
    };
};

// 값 콤마 //
function inputNumberFormat(obj) {
    return obj = comma(obj);
};

// 콤마 입력 //
function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
};

$(window).on('load', function () {

    // 구매하기, 받는돈 -> 거스름돈 //   
    const GoodsLine = (() => {
        let ChangeMoney = 0;
        $('.purchase_B').on('click', function () {
            if ($('#PaymentExp').html() != '' && $('#PriceExp').html() != '') {
                if (MoneyKeep <= PaymentKeep) {
                    $('.ChangeResult').html('');
                    const MoneyStore = {
                        '50,000원': 50000,
                        '10,000원': 10000,
                        '5,000원': 5000,
                        '1,000원': 1000,
                        '500원': 500,
                        '100원': 100,
                        '50원': 50,
                        '10원': 10
                    };
                    ChangeMoney = PaymentKeep - MoneyKeep;
                    $('.ChangeResult2').html(inputNumberFormat(ChangeMoney));
                    $.each(MoneyStore, function (i, item) {
                        ChangeValue = parseInt(ChangeMoney / item);
                        MoneyS = ChangeMoney % item;
                        ChangeMoney = MoneyS;
                        $('.ChangeResult').append(i + ': ' + ChangeValue + '<br>');
                    });
                } else {
                    $('#Warning_text').html('상품금액에 비해 지불금액이 적습니다!');
                    $('.Warning').css('display', 'flex');
                };
            } else {
                $('#Warning_text').html('상품금액, 지불금액을 확인해주세요!');
                $('.Warning').css('display', 'flex');
            };
        });
    })();

    // 초기화 버튼 //
    $('.ResetImg').on('click', function () {
        MoneyKeep = 0;
        PaymentKeep = 0;
        $('.ChangeResult').html('');
        $('.ChangeResult2').html('');
        $('#PriceExp').html('');
        $('#PaymentExp').html('');
        $('.Shopping_basket section').html('');
        $('.Shopping_Number article').html('');
        $('.Shopping_basket section').css('display', 'none');
        i = 0;
        j = 0;
        k = 0;
        a = 0;
        b = 0;
        c = 0;
        d = 0;
        e = 0;
        f = 0;
    });

    // 조명 켜기 //
    $('.light_off').on('click', function () {
        $('.light_Background').css('opacity', '0');
        $('.light_Background').css('z-index', '-10');
        $('.light_off').css('display', 'none');
        $('.light_on').css('display', 'block');
        $('.light_Text').css('display', 'none');
    });

    // 조명 끄기 //
    $('.light_on').on('click', function () {
        $('.light_Background').css('opacity', '0.8');
        $('.light_Background').css('z-index', '2000');
        $('.light_off').css('display', 'block');
        $('.light_on').css('display', 'none');
        $('.light_Text').css('display', 'block');
    });

    // 장바구니 열고 닫기 //
    let bool_a = true;
    $('.ShoppingButton').on('click', function () {
        if (bool_a == true) {
            $('.Shopping_basket').css('marginLeft', '510px');
            $('.ShoppingButton').css('marginLeft', '505px');
            $('.Shopping_Number').css('marginLeft', '510px');
            $('.Shopping_basket').css('zIndex', '2200');
            $('.ShoppingButton').css('zIndex', '2200');
            bool_a = false;
        } else {
            $('.Shopping_basket').css('marginLeft', '0px');
            $('.ShoppingButton').css('marginLeft', '0px');
            $('.Shopping_Number').css('marginLeft', '0px');
            $('.Shopping_basket').css('zIndex', '0');
            $('.ShoppingButton').css('zIndex', '0');
            bool_a = true;
        }
    });

    // 자식 이벤트 중복 방지 //
    $('.StoreBox').on('click', function () {
        return false;
    });

    // 경고창 확인button //
    $('#Warning_click').on('click', function(){
        $('.Warning').css('display', 'none');
    })
});