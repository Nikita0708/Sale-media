function openbox(id) {
  display = document.getElementById(id).style.display;

  if (display == 'none') {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}
function openbox2(id) {
  display = document.getElementById(id).style.display;

  if (display == 'none') {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}
function closeitem(id) {
  display = document.getElementById(id).style.display;

  if (display == 'block') {
    document.getElementById(id).style.display = 'none';
  } else {
    document.getElementById(id).style.display = 'block';
  }
}
function openinput(id) {
  display = document.getElementById(id).style.display;

  if (display == 'none') {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}
function opentel(id) {
  display = document.getElementById(id).style.display;

  if (display == 'none') {
    document.getElementById(id).style.display = 'block';
  } else {
    document.getElementById(id).style.display = 'none';
  }
}
function closewhy(id) {
  position = document.getElementById(id).style.position;

  if (position == 'sticky') {
    document.getElementById(id).style.position = 'unset';
  }
}
function opentown(id) {
  display = document.getElementById(id).style.display;

  if (display == 'none') {
    document.getElementById(id).style.display = 'flex';
  }
}
function closetown(id) {
  display = document.getElementById(id).style.display;

  if (display == 'flex') {
    document.getElementById(id).style.display = 'none';
  }
}

document.addEventListener('click', function (e) {
  const el = e.target.closest('.menu');
  if (el) {
    el.classList.toggle('active-menu');
  }
});
document.addEventListener('click', function (e) {
  const cl = e.target.closest('.menu2');
  if (cl) {
    cl.classList.toggle('active-menu2');
  }
});
