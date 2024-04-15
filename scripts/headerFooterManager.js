class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = 
        `
        <ul class="navbar">
            <li class="dropdown">
                <a href="index.html" class="dropbtn">Home</a>
            </li>
            <li class="dropdown">
                <a href="games.html" class="dropbtn">Games</a>
                <div class="dropdown-content">
                    <a href="dart_the_dog.html">Dart The Dog</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="franchises.html">Franchises</a>
                <div class="dropdown-content">
                    <a href="dart_the_dog_franchise.html">Dart The Dog</a>
                </div>
            </li>   
        </ul>
        `
    }
}

customElements.define('custom-navbar', CustomNavBar)