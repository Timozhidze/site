const modalCount = 2;

for (let i = 1; i <= modalCount; i++) {

    const openBtn = document.getElementById(`but_modal${i}`);
    const modal = document.getElementById(`modal${i}`);
    const closeBtn = document.getElementById(`but_exit${i}`);


    if (openBtn && modal && closeBtn) {
        // Открытие
        openBtn.onclick = () => {
            modal.style.display = 'flex';   // или 'block', если не используете flex
        };
        // Закрытие по крестику/кнопке
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };
        // Закрытие по клику на фон (затемнение)
        modal.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}