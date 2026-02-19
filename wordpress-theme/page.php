<?php
/**
 * Template de Página Estática
 * Usado para páginas genéricas criadas no WordPress.
 */
get_header(); ?>

<main id="primary" role="main">
  <div class="container" style="padding-top:120px; padding-bottom:80px; max-width:800px;">

    <?php while ( have_posts() ) : the_post(); ?>

      <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
        <header style="text-align:center; margin-bottom:48px;">
          <h1 class="secao-titulo"><?php the_title(); ?></h1>
          <hr class="secao-divisor">
        </header>

        <div class="entry-content" style="color:var(--cor-texto); line-height:1.8; font-size:1.05rem;">
          <?php the_content(); ?>
        </div>
      </article>

    <?php endwhile; ?>

  </div>
</main>

<?php get_footer(); ?>
