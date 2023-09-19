
const createHomePage = () => {
    const openedTab = document.querySelector('.opened-tab-content')
    const tabHeader = document.createElement('div')
    tabHeader.classList.add('tab-header')
    tabHeader.textContent = `Home`

    openedTab.appendChild(tabHeader)
}

export { createHomePage }