let buttonForVids = document.getElementById("head-vids");
let buttonForHeadline = document.getElementById("today-head");
let articleVids = document.getElementById("videos");
let articleHeadliners = document.getElementById("headliners");

buttonForHeadline.onclick = (ev) => {
    articleHeadliners.style.display = "block";
    articleVids.style.display = "none";
}

buttonForVids.onclick = (ev) => {
    articleHeadliners.style.display = "none";
    articleVids.style.display = "block";
}

