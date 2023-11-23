let buttonForVids = document.getElementById("head-vids");
let buttonForHeadline = document.getElementById("today-head");
let articleVids = document.getElementById("videos");
let articleHeadliners = document.getElementById("headliners");

buttonForHeadline.onclick = (ev) => {
    buttonForHeadline.style.color = "#000000";
    buttonForVids.style.color = "rgba(31,31,31,.4)";
    articleHeadliners.style.display = "block";
    articleVids.style.display = "none";
}

buttonForVids.onclick = (ev) => {
    buttonForHeadline.style.color = "rgba(31,31,31,.4)";
    buttonForVids.style.color = "#000000";
    articleHeadliners.style.display = "none";
    articleVids.style.display = "block";
}