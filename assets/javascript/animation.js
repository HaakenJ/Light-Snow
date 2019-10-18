/* Set the size of the svg according to the size of the viewport when opened.
    The viewbox of the svg determines the box it is inside, so the svg is sized
    according to the viewport every time the page is opened. */
var viewHeight = window.innerHeight,
    viewWidth = window.innerWidth;
$('svg').attr('viewBox', `0 0 ${viewWidth} ${viewHeight}`);

// Snowflake animation.
var animateSnowflake =
    anime({
        targets: '.snowflake',
        points: [{
            value: `1469.03,879.96 1446.53,802.99 1098.67,883.99 839.62,750.5 1101.05,615.78 1123.96,621.41 
                1443.13,699.76 1466.77,623.06 1209.49,559.91 1500.5,409.94 1455.94,341.06 1163.99,491.5 1235.38,259.83 1149.45,238.74 
                1054.11,548.12 795.06,681.61 795.06,414.63 1047.58,186.25 984.15,130.38 795.06,301.39 795.06,0.5 705.94,0.5 705.94,300.42 
                516.02,133.13 453.42,189.75 689.03,397.28 705.94,412.18 705.94,681.61 446.89,548.12 351.55,238.74 265.62,259.83 337.01,491.5 
                45.06,341.06 0.5,409.94 291.51,559.91 34.23,623.06 57.87,699.76 377.04,621.41 399.95,615.78 661.38,750.5 402.33,883.99 
                54.47,802.99 31.97,879.96 292.45,940.61 0.5,1091.06 45.06,1159.94 336.07,1009.98 268.71,1240.43 354.95,1260.51 438.51,974.62 
                444.51,954.1 705.94,819.39 705.94,1088.82 689.03,1103.72 453.42,1311.25 516.02,1367.87 705.94,1200.58 705.94,1500.5 
                795.06,1500.5 795.06,1199.61 984.15,1370.62 1047.58,1314.75 795.06,1086.37 795.06,819.39 1056.49,954.1 1062.49,974.62 
                1146.05,1260.51 1232.29,1240.43 1164.93,1009.98 1455.94,1159.94 1500.5,1091.06 1208.55,940.61`
        }],
        opacity: 0,
        easing: 'easeOutQuad',
        duration: 2000,
        loop: false,
        autoplay: false
    });

/* Animation for the main content of the page to appear after a delay to let
    the snowflake finish. */ 
var showPage = anime({
    targets: '.main-content',
    opacity: 1,
    duration: 2000,
    delay: 1000,
    loop: false,
    autoplay: false
});

// Animation to make the header on the opening page disappear.
var removeHeader = anime({
    targets: '.opening-header',
    opacity: 0,
    duration: 2000,
    loop: false,
    autoplay: false
})




