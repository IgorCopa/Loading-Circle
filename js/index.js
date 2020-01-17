let looping = document.getElementById('sqd');
    let looping2 = document.getElementById('sqdIN');
    let looping3 = document.getElementById('sqdInner');
    let angle = 0;
    let angle2 = 360;
    let angle3 = 90;

    const begin = () => {
        spin1();
        spin2();
        spin3();
    }

    const spin1 = () => {
        looping.style.transform=`rotate(${angle}deg)`;
        angle++;
        if(angle==360){
            angle=0;
        }
        let animar1 = requestAnimationFrame(spin1);
    }

    const spin2 = () => {
        looping2.style.transform=`rotate(${angle2}deg)`;
        angle2--;
        if(angle2==0){
            angle2=360;
        }
        let animar2 = requestAnimationFrame(spin2);
    }

    const spin3 = () => {
        looping3.style.transform=`rotate(${angle3}deg)`;
        angle3++;
        if(angle3==360){
            angle3=0;
        }
        let animar3 = requestAnimationFrame(spin3);
    }
    
window.addEventListener('load', begin);