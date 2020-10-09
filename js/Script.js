
let round = document.getElementById('round');
let fu_num = {
    n3_1: 0,
    n4_1: 50,
    n4_2: 50,
    n5_1: 50,
    n5_2: 50,
    n6_1: 50,
    n6_2: 50,
}
let set_int = 0;
let pound_ = setInterval(() => {
    set_int++;
    if (fu_num.n3_1 < 100) {
        fu_num.n3_1++;
    }
    console.log(set_int)
    if (set_int >= 99 && set_int <= 199) {
        if (set_int == 100) {
            fu_num.n4_1 = 100;
            fu_num.n4_2 = 100;
        }
        if (fu_num.n4_1 === 100) {
            fu_num.n4_2--
        }
    }
    if (set_int >= 199 && set_int <= 299) {
        if (set_int == 200) {
            fu_num.n5_1 = 100;
            fu_num.n5_2 = 0;
        }
        if (fu_num.n5_2 === 0) {
            fu_num.n5_1--
        }
    }
    if (set_int >= 299 && set_int <= 399) {
        if (set_int == 300) {
            fu_num.n6_1 = 0;
            fu_num.n6_2 = 0;
        }
        if (fu_num.n6_1 === 0) {
            fu_num.n6_2++
        }
    }
    round.style.clipPath = 'polygon(50% 50%, 0 100%, ' + fu_num.n3_1 + '% 100%, ' + fu_num.n4_1 + '% ' + fu_num.n4_2 + '%, ' + fu_num.n5_1 + '% ' + fu_num.n5_2 + '%, ' + fu_num.n6_1 + '% ' + fu_num.n6_2 + '%)';
    if (set_int === 11) {
        clearInterval(pound_);
    }
}, 10)