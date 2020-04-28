function swt(id1, id2) {
  var etiPub = document.getElementById(id1);
  var pubEti = document.getElementById(id2);
  console.log(etiPub.classList.value);

  if (etiPub.classList.value == "tag-active") {
    etiPub.classList.value = "not-active";
    pubEti.classList.value = "tag-active";
  }
  if (etiPub.classList.value == "tag-active") {
    return;
  } else {
    etiPub.classList.value = "tag-active";
    pubEti.classList.value = "not-active";
  }
}
