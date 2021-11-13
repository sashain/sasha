<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link"
                to="/">Home</g-link>
        <g-link class="nav__link"
                to="/services/">Services</g-link>
        <g-link class="nav__link"
                to="/learning/">Learning Center</g-link>
        <g-link class="nav__link"
                to="/about/">About Us</g-link>
        <g-link class="nav__link"
                to="/contact/">Contact Us</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
<style src="../styles.css" />
