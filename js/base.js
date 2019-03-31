function showChatPopup(id) {
	const popup = document.getElementById(id);
	popup.classList.toggle('show');

	if (!popup.classList.contains('show')) return;

	const items = document.getElementsByClassName('item');
	const itemsKeys = Object.keys(items);

	itemsKeys.forEach(itemKey => {
		const itemUserId = items[itemKey].childNodes['1'].childNodes['1'].childNodes['3'].id;
		if (itemUserId != id) {
			const popup = document.getElementById(itemUserId);
			popup.classList.remove('show');
		}
	});
}
