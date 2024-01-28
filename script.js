document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('change-size-btn').addEventListener('click', function () {
        var resizableBox = document.getElementById('resizable-box');
        var prevBtn = document.getElementById('prev-btn');
        var changeSizeBtn = document.getElementById('change-size-btn');
        var content = document.querySelector('.content');
        var reloadBtnContainer = document.getElementById('reload-btn-container');
        resizableBox.classList.toggle("minimized");

        prevBtn && (prevBtn.style.display = 'none');
        changeSizeBtn && (changeSizeBtn.style.display = 'none');
        content && (content.style.display = 'none');
        reloadBtnContainer.style.display = 'block';


    });

    document.getElementById('reload-btn').addEventListener('click', function () {
        var resizableBox = document.getElementById('resizable-box');
        var prevBtn = document.getElementById('prev-btn');
        var changeSizeBtn = document.getElementById('change-size-btn');
        var content = document.querySelector('.content');
        var reloadBtnContainer = document.getElementById('reload-btn-container');

        resizableBox.classList.remove("minimized");

        prevBtn && (prevBtn.style.display = 'block');
        changeSizeBtn && (changeSizeBtn.style.display = 'block');
        content && (content.style.display = 'block');
        reloadBtnContainer.style.display = 'none';
    });
});