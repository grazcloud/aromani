<?php
/**
 * Template principal (fallback)
 * Utilizado para listagem de posts e páginas sem template específico.
 * Para a página inicial, o WordPress usa front-page.php automaticamente.
 */
get_header(); ?>

<main id="primary" role="main">
  <div class="container" style="padding-top:120px; padding-bottom:80px;">

    <?php if ( have_posts() ) : ?>

      <header class="page-header" style="text-align:center; margin-bottom:48px;">
        <?php
        if ( is_home() && ! is_front_page() ) {
            echo '<h1 class="secao-titulo">' . single_post_title() . '</h1>';
        } elseif ( is_archive() ) {
            the_archive_title( '<h1 class="secao-titulo">', '</h1>' );
            the_archive_description( '<div class="secao-subtitulo">', '</div>' );
        } elseif ( is_search() ) {
            echo '<h1 class="secao-titulo">Resultados para: ' . get_search_query() . '</h1>';
        }
        ?>
      </header>

      <div class="posts-grid" style="display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:32px; max-width:1100px; margin:0 auto;">
        <?php while ( have_posts() ) : the_post(); ?>
          <article id="post-<?php the_ID(); ?>" <?php post_class('produto-card'); ?>>
            <?php if ( has_post_thumbnail() ) : ?>
              <div class="post-thumbnail" style="margin:-32px -32px 24px; border-radius:8px 8px 0 0; overflow:hidden;">
                <a href="<?php the_permalink(); ?>">
                  <?php the_post_thumbnail( 'medium', array( 'style' => 'width:100%;height:200px;object-fit:cover;' ) ); ?>
                </a>
              </div>
            <?php endif; ?>

            <h2 style="font-size:1.25rem; font-weight:700; color:var(--cor-secundaria); margin-bottom:12px;">
              <a href="<?php the_permalink(); ?>" style="color:inherit;"><?php the_title(); ?></a>
            </h2>

            <div style="color:var(--cor-texto-claro); font-size:0.875rem; margin-bottom:12px;">
              <?php echo get_the_date(); ?>
            </div>

            <div style="color:var(--cor-texto); line-height:1.7;">
              <?php the_excerpt(); ?>
            </div>

            <a
              href="<?php the_permalink(); ?>"
              style="display:inline-block; margin-top:16px; color:var(--cor-secundaria); font-weight:600;"
            >
              Leia mais →
            </a>
          </article>
        <?php endwhile; ?>
      </div>

      <!-- Paginação -->
      <div style="text-align:center; margin-top:48px;">
        <?php the_posts_pagination( array(
          'prev_text' => '← Anterior',
          'next_text' => 'Próximo →',
        ) ); ?>
      </div>

    <?php else : ?>

      <div style="text-align:center; padding:80px 0;">
        <h2 class="secao-titulo">Nenhum conteúdo encontrado</h2>
        <p class="secao-subtitulo">Desculpe, não encontramos o que você está procurando.</p>
      </div>

    <?php endif; ?>

  </div>
</main>

<?php get_footer(); ?>
