const checkScreenWidth = () => {
  let sidebar = document.querySelector('.sidebar');
  if (window.screen.width > 768) {
    sidebar.classList.remove('active');
  }else{
    sidebar.classList.add('active');
  }
}
window.addEventListener('resize', checkScreenWidth)
checkScreenWidth()

const handleSidebar = () => {
    let sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('active')
}