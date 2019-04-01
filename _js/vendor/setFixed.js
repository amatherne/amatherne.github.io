
// function setFixed(el, stop, startPos) {
//     trig = $(el)[0];
//     thisEl = $(el);
//     stopAt = $(stop)[0];
//     stopraw = $(stop);
//     startPos = startPos;
//     status = 'Page Load';
//     fixed = 'fixed';
//     rel = 'relative';
//     stop = 'stop';
//     prevStatus = '';
//     cssTop = thisEl.css('margin-top');
//     trigOnLoad = trig.offsetTop;

//     initFixed()
//     $(window).scroll(function() {
//         initFixed()
//     })

//     function initFixed() {


//         pageWidth = $(window).outerWidth();
//         // Start Settings
//         trigFromTop = trig.offsetTop;
//         trigHeight = trig.offsetHeight / 2;
//         plus = 0;
//         trigPoint = trigFromTop + trigHeight + plus;
//         windowHeight = $(window).height();
//         scrollTop = $(window).scrollTop();
//         mid = scrollTop + Math.floor(windowHeight / 2);
//         // Stop Settings
//         // fromBottom = stopAt.offsetTop;
//         bodyHeight = document.body.offsetHeight;
//         // stopPoint = fromBottom - trigHeight;
//         // Trigger Points
//         startFixed = trigPoint <= mid;
//         startRel = trigPoint > mid;
//         stopHere = mid >= stopPoint;

//         // if ( ( windowHeight < 950 || pageWidth < 1500 ) && mid < 500 ) {
//         //   $('.overlay-trigger').css('font-weight','400');
//         // } else {
//         //   $('.overlay-trigger').css('font-weight','bold');
//         // }

//         if (startFixed || startPos == fixed) {
//             status = fixed;
//             thisEl
//                 .css('position', 'fixed')
//                 .css('top', '50%')
//                 .css('bottom', 'initial')
//                 .css('transform', 'translateY(-50%) translateZ(0)')
//                 .css('margin-top', '0');
//         }
//         if (startRel && startPos != fixed) {
//             status = rel;
//             thisEl
//                 .css('position', 'relative')
//                 .css('top', '0%')
//                 .css('bottom', 'initial')
//                 .css('transform', 'translateY(0%) translateZ(0)')
//                 .css('margin-top', cssTop);
//         }
//         if (stopHere) {
//             status = stop;
//             thisEl
//                 .css('position', 'absolute')
//                 .css('top', 'initial')
//                 .css('bottom', '50%')
//                 .css('transform', 'translateY(-50%) translateZ(0)')
//                 .css('margin-top', '0');
//         }
//         if (pageWidth < 750) {
//             thisEl
//                 .css('top', 'initial')
//                 .css('bottom', 'initial')
//                 .css('transform', 'initial')
//                 .css('position', 'relative')
//                 .css('margin-top', '2em');
//         }
//         currStatus = prevStatus != status;
//         if (currStatus) {
//             console.log(status)
//             console.log(pageWidth)
//         }

//         // $('#mid').text(mid + 'px');
//         // $('#trig').text(trigOnLoad + 'px');
//         // $('#stop').text(stopPoint + 'px');
//         // $('#status').text(status);
//         // $('#start').text(startPos);

//         // $('#trigPoint').css('top', stopPoint);

//         prevStatus = status;
//     }
// }

// // console.log('fufuuufufck')

// $(document).ready(function () {
//     setFixed('.footer .container')
//     // console.log('i work')
// })




