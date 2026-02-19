<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Casa Aromani - Padoca, Brunch e Cia no Brooklin, São Paulo. Pães artesanais, confeitaria, cafeteria e muito mais, feitos com amor.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="masthead" role="banner">
  <div class="container">
    <div class="header-inner">

      <!-- Logotipo -->
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo-link" aria-label="<?php bloginfo( 'name' ); ?> - Página Inicial">
        <?php
        if ( has_custom_logo() ) {
            the_custom_logo();
        } else {
            // Fallback: nome do site
            echo '<span style="font-size:1.5rem; font-weight:700; color:var(--cor-primaria);">' . get_bloginfo( 'name' ) . '</span>';
        }
        ?>
      </a>

      <!-- Navegação Desktop -->
      <nav id="nav-principal" role="navigation" aria-label="Menu Principal">
        <a href="#sobre">A Casa Aromani</a>
        <a href="#produtos">Produtos com Amor</a>
        <a href="#galeria">Água na Boca</a>
        <a href="#pet">Traga seu Pet</a>
        <a href="#encomendas">Encomendas</a>
        <a href="#contato" class="btn-fale-conosco">Fale com a gente</a>
      </nav>

      <!-- Botão Hamburger Mobile -->
      <button
        class="hamburger"
        id="btn-hamburger"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="menu-mobile"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </div>

  <!-- Menu Mobile -->
  <div id="menu-mobile" role="navigation" aria-label="Menu Mobile">
    <a href="#sobre" class="menu-mobile-link">A Casa Aromani</a>
    <a href="#produtos" class="menu-mobile-link">Produtos com Amor</a>
    <a href="#galeria" class="menu-mobile-link">Água na Boca</a>
    <a href="#pet" class="menu-mobile-link">Traga seu Pet</a>
    <a href="#encomendas" class="menu-mobile-link">Encomendas</a>
    <a href="#contato" class="btn-fale-conosco menu-mobile-link">Fale com a gente</a>
  </div>

</header>
