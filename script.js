document.addEventListener('DOMContentLoaded', function () {
    var resizableBox = document.getElementById('resizable-box');
    var prevBtn = document.getElementById('prev-btn');
    var changeSizeBtn = document.getElementById('change-size-btn');
    var content = document.querySelector('.content');
    var reloadBtnContainer = document.getElementById('reload-btn-container');
    var imageBox = document.querySelector('.image-box');
    var cafeButton = document.getElementById('cafe-button');
    var youtubeButton = document.getElementById('youtube-button');

    document.getElementById('change-size-btn').addEventListener('click', function () {
        resizableBox.classList.toggle("minimized");

        prevBtn && (prevBtn.style.display = 'none');
        changeSizeBtn && (changeSizeBtn.style.display = 'none');
        content && (content.style.display = 'none');
        reloadBtnContainer.style.display = 'block';
        imageBox && (imageBox.style.display = 'none');
        cafeButton && (cafeButton.style.display = 'none');
        youtubeButton && (youtubeButton.style.display = 'none');
    });

    document.getElementById('reload-btn').addEventListener('click', function () {
        resizableBox.classList.remove("minimized");

        prevBtn && (prevBtn.style.display = 'block');
        changeSizeBtn && (changeSizeBtn.style.display = 'block');
        content && (content.style.display = 'block');
        reloadBtnContainer.style.display = 'none';
        imageBox && (imageBox.style.display = 'block');
        cafeButton && (cafeButton.style.display = 'block');
        youtubeButton && (youtubeButton.style.display = 'block');
    });

    document.getElementById('cafe-button').addEventListener('click', function () {
        window.open('https://cafe.naver.com/steamindiegame?iframe_url_utf8=%2FArticleRead.nhn%253Fclubid%3D27842958%2526articleid%3D14524809', '_blank'); 
    });

    document.getElementById('youtube-button').addEventListener('click', function () {
        window.open('https://www.youtube.com/watch?v=J5DS7wDq7Lo', '_blank'); 
    });

});
