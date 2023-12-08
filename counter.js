let skill1 = document.getElementById("skill1-number");
        let skill2 = document.getElementById("skill2-number");
        let skill3 = document.getElementById("skill3-number");
        let skill4 = document.getElementById("skill4-number");
        let skill5 = document.getElementById("skill5-number");
        let s1 = 0;
        let s2 = 0;
        let s3 = 0;
        let s4 = 0;
        let s5 = 0;

        setInterval (() => {
            if (s1 == 65){
                clearInterval();
            } else {
            s1 += 1;
            skill1.innerHTML = s1 + "%";
            }
            if (s2 == 75){
                clearInterval();
            } else {
            s2 += 1;
            skill2.innerHTML = s2 + "%";
            }
            if (s3 == 40){
                clearInterval();
            } else {
            s3 += 1;
            skill3.innerHTML = s3 + "%";
            }
            if (s4 == 80){
                clearInterval();
            } else {
            s4 += 1;
            skill4.innerHTML = s4 + "%";
            }
            if (s5 == 80){
                clearInterval();
            } else {
            s5 += 1;
            skill5.innerHTML = s5 + "%";
            }
    }, 30)