const inbox = document.getElementById("inbox");
let lastCheckedIndex = null;

inbox.addEventListener("click", function (e) {
  if (e.target.type !== "checkbox") return;

  const checkboxes = [...inbox.querySelectorAll('input[type="checkbox"]')];
  const currentIndex = checkboxes.indexOf(e.target);

  // اگر Shift نگرفته یا تیک برداشته شده، فقط این رو به‌روز کن
  if (!e.shiftKey || !e.target.checked) {
    lastCheckedIndex = currentIndex;
    return;
  }

  // انتخاب آیتم‌های بین lastChecked و currentIndex
  const [start, end] = [lastCheckedIndex, currentIndex].sort((a, b) => a - b);
  checkboxes.forEach((cb, i) => {
    if (i >= start && i <= end) cb.checked = true;
  });

  lastCheckedIndex = currentIndex;
});
