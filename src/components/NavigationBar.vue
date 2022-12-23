<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light flex-column">
    <div class="container-fluid flex-md-column flex-lg-column">
      <RouterLink to="/" class="navbar-brand">
        <img src="../assets/logo.png" alt="" width="150" />
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Models</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/colors" class="nav-link">Colors</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/accessories" class="nav-link"
              >Accessories</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/summary" class="nav-link">Summary</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
