const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        const text2 = 'ボタンをクリックしました'
        document.getElementById('text').textContent =(text2);
      }, 2000);
});
