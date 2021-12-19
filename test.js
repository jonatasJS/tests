document.addEventListener('keyup', e => {
	let test = document.querySelectorAll('[title="Encerrar"]');
	let ele = test[e.key];
	console.log(ele);
	console.log(e.key);
	if (ele) {
		ele.click();
		setTimeout(() => {
			const star = document.querySelectorAll('[data-title="Excelente"]')[0];
			if (star) star.click();
			else return;

			setTimeout(() => {
				const final = document.querySelectorAll('[data-slick-index="0"]')[0];
				if (final) final.click();
				else return;

				setTimeout(() => {
					const btnConclu = document.querySelectorAll('[tabindex="11"]')[0];
					if (btnConclu) btnConclu.click();
					else return;

				}, 1000);
			}, 1000);
		}, 1000);
		return;
	}
	else return;
});

document.addEventListener('keyup', e => {
	let test = document.querySelectorAll('[title="Atender"]');
	let ele = test[e.key];
	console.log(ele);
	console.log(e.key);
	if (ele) {
		ele.click();
		setTimeout(() => {
			const star = document.querySelectorAll('[data-dismiss="modal"]')[6];
			if (star) star.click();
			else return;

		}, 1000);
		return;
	}
	else return;
});





//X =1032pxY =1382px

/*async function logArrayElements(ele, index, array) {
	ele.addEventlistiner('keydown', e => {
		console.log(e.key);
	});
}

test.forEach(logArrayElements); 
function contextMenuClick(element){
	var evt = element.ownerDocument.createEvent('MouseEvents');

	var RIGHT_CLICK_BUTTON_CODE = 2; // the same for FF and IE

	evt.initMouseEvent('contextmenu', true, true,
			 element.ownerDocument.defaultView, 1, 0, 0, 0, 0, false,
			 false, false, false, RIGHT_CLICK_BUTTON_CODE, null);

	if (document.createEventObject){
			// dispatch for IE
		 return element.fireEvent('onclick', evt)
	 }
	else{
		 // dispatch for firefox + others
		return !element.dispatchEvent(evt);
	}
}
contextMenuClick(document.querySelectorAll('[class="select2-results-dept-0 select2-result select2-result-selectable"]')[3])
*/