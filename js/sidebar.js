// loading =============
window.addEventListener('load', () => {
    let loading = document.querySelector('#loading')
    loading.style.display = 'none'

    // test loading 
    // setTimeout(function() {
    //     loading.style.display = "none";
    // }, 5000);
})

let menu = [
    {
        menu_type: 1,
        menu_name: '',
        menu_path: ''
    },
    {
        menu_type: 2,
        menu_name: '',
        menu_path: ''
    }
]

let contentSidebar = document.getElementById('content-sidebar')
let sidebar = `
  <div class="sidebar" id="sidebar">
    <div class="title-header">
        <h2>Dashboard</h2>
        <i class='bx bx-menu' style="cursor: pointer;" onclick="handleSidebar()"></i>
    </div>
    <div class="menu">
        <div class="menu-list" onclick="goPage('dashboard.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Dashboard</span>
        </div>
        <div class="menu-list" onclick="goPage('alert.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Alert</span>
        </div>
        <div class="menu-list" onclick="goPage('table.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Table</span>
        </div>
        <div class="menu-list" onclick="goPage('chart.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Chart</span>
        </div>
        <div class="menu-list" onclick="goPage('form.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Form</span>
        </div>
        <div class="menu-list" onclick="goPage('card.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Card</span>
        </div>
        <div class="menu-list" onclick="goPage('button.html')">
            <i class='bx bxs-dashboard'></i>
            <span>Button</span>
        </div>
        <div class="menu-list-dropdown" onclick="openMenuList('list-menu-form')">
            <div class="list-dropdown">
                <i class='bx bxs-dashboard'></i>
                <span>Authentication</span>
            </div>
            <i class='bx bxs-down-arrow'></i>
        </div>
        <div class="list-menu" id="list-menu-form">
            <span class="list-item-menu">Login</span>
            <span class="list-item-menu">Register</span>
            <span class="list-item-menu">list 3</span>
            <span class="list-item-menu">list 4</span>
        </div>
    </div>
    <div class="footer-menu">
        <i class='bx bxs-log-in'></i>
        <span>Logout</span>
    </div>
  </div>
  `
contentSidebar.innerHTML = sidebar

const checkScreenWidth = () => {
  let sidebar = document.querySelector('.sidebar')
  if (window.screen.width > 768) {
    sidebar.classList.remove('active')
  }else{
    sidebar.classList.add('active')
  }
}
window.addEventListener('resize', checkScreenWidth)
checkScreenWidth()

const handleSidebar = () => {
    let sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('active')
}

const openMenuList = (id_list_menu) => {
  let listMenu = document.getElementById(id_list_menu)
  listMenu.classList.toggle('active')
}

const goPage = (path_page) => {
    window.location.href = path_page
}