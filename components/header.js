function setupHeader() {
  const customIconUrl = "https://i.postimg.cc/7Z81NTtw/image.png";
  if (customIconUrl) {
    const brandContainer = document.getElementById("brandLogoContainer");
    if(brandContainer) brandContainer.innerHTML = `<img src="${customIconUrl}" alt="Logo">`;
    
    const appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
    if(appleIcon) appleIcon.href = customIconUrl;
  }
}
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
