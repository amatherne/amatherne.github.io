




function centerContentResizer( par, chld ){
    container = par;
	content = container+' '+chld;
    $containerHeight = $(container).outerHeight();
    $contentHeight = $(content).outerHeight() + 120;
    if ( $containerHeight < $contentHeight ) {
    	$(container).css('min-height', $contentHeight);
    }
}




// $(document).ready(function () {
// 	// Scroll Triggers
// 	// console.log('Scroll Triggers Active')
// 	// const sections = document.querySelectorAll('.scroll-trigger');
// 	// const activeClass = 'active';
// 	// window.addEventListener('scroll', () => {
// 	//   	scrollHandler();
// 	// });

// 	// scrollHandler = function() {
// 	//   	var trigger_point = '300',
// 	//       	scrollPos = window.pageYOffset;

// 	// 	for (i = 0; i < sections.length; i++) {
// 	//     	const element = sections[i];
// 	//     	const elementScrollOffset = element.offsetTop - trigger_point;
// 	// 		if (scrollPos >= elementScrollOffset) {
// 	// 	      	element.classList.add(activeClass);
// 	// 	    } else if (scrollPos < elementScrollOffset) {
// 	// 	      	element.classList.remove(activeClass);
// 	// 	    }
// 	//   	}
// 	// };
// 	// scrollHandler();

	


// })




// Custom Animations
// $.Velocity
//     .RegisterEffect("transition.leftIn", {
//         defaultDuration: 300,
//         calls: [
//             [ { opacity: 1, translateX: [ 0, 50 ] } ]
//         ]
//     })
//     .RegisterEffect("transition.leftOut", {
//         defaultDuration: 100,
//         calls: [
//             [ { opacity: 0, translateX: [50, 0] } ]
//         ]
//     });


// $.Velocity
//     .RegisterEffect("transition.textIn", {
//         defaultDuration: 300,
//         calls: [
//             [ { opacity: 1, translateY: [ 0, 350 ] } ]
//         ]
//     })
//     .RegisterEffect("transition.textOut", {
//         defaultDuration: 100,
//         calls: [
//             [ { opacity: 0, translateY: [350, 0] } ]
//         ]
//     });


// $.Velocity
//     .RegisterEffect("transition.slideIn", {
//         defaultDuration: [ 100, 300 ],
//         calls: [
//             [ { opacity: [ 1,0 ], left: [ 0, 100 ], translateZ: [0,0] } ]
//         ]
//     });
// $.Velocity
//     .RegisterEffect("transition.slideOut", {
//         defaultDuration: 100,
//         calls: [
//             [ { opacity: [ 0,1 ], left: [100, 0], translateZ: [0,0]  } ]
//         ]
//     });

















