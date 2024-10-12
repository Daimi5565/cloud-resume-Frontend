document.addEventListener("DOMContentLoaded", function() {
  let visitorCount = localStorage.getItem('visitorCount');
  
  if (!visitorCount) {
    visitorCount = 1; // First time visitor
  } else {
    visitorCount = parseInt(visitorCount) + 1; // Increment for each new visit
  }

  localStorage.setItem('visitorCount', visitorCount);

  document.getElementById('visitor-count').textContent = visitorCount;
});
