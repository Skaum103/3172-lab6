import React from 'react'

function Header() {
    return(
      <header class="pg-header">
        <h1>Homecook recipes</h1>
        <nav class="pg-main-nav">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="https://www.google.ca" target="_blank" rel="noopener">Search on Google</a></li>
              <li><a href="mailto:email@test.ca">Email Us</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header