<?php
/**
 * Template da Página Inicial (Front Page)
 * Este template é usado automaticamente quando configurado em
 * Configurações > Leitura > Sua página inicial exibe > Uma página estática
 */
get_header(); ?>

<main id="primary" role="main">

  <!-- ===========================
       HERO / BANNER
       =========================== -->
  <section id="hero" aria-label="Banner principal">
    <div class="hero-slides" id="heroSlides">

      <!-- Slide 1 -->
      <div class="hero-slide ativo" aria-hidden="false">
        <img
          src="<?php echo get_template_directory_uri(); ?>/images/banner1.jpg"
          alt="Bolo artesanal com café"
          loading="eager"
        >
      </div>

      <!-- Slide 2 -->
      <div class="hero-slide" aria-hidden="true">
        <img
          src="<?php echo get_template_directory_uri(); ?>/images/banner2.jpg"
          alt="Tortas especiais"
          loading="lazy"
        >
      </div>

      <!-- Slide 3 -->
      <div class="hero-slide" aria-hidden="true">
        <img
          src="<?php echo get_template_directory_uri(); ?>/images/banner3.jpg"
          alt="Sanduíche artesanal"
          loading="lazy"
        >
      </div>

      <!-- Slide 4 -->
      <div class="hero-slide" aria-hidden="true">
        <img
          src="<?php echo get_template_directory_uri(); ?>/images/banner4.jpg"
          alt="Café e pão de queijo"
          loading="lazy"
        >
      </div>
    </div>

    <!-- Conteúdo centralizado sobre o banner -->
    <div class="hero-conteudo">
      <div class="hero-conteudo-inner">
        <img
          src="<?php echo get_template_directory_uri(); ?>/images/logo-banner.png"
          alt="Casa Aromani"
          class="hero-logo animate-fade-in"
        >
        <p class="hero-tagline animate-fade-in">Onde o cuidado tem aroma e sabor</p>
        <p class="hero-local animate-fade-in">Padoca, Brunch e Cia • Brooklin, São Paulo</p>
      </div>
    </div>

    <!-- Indicadores de slide (dots) -->
    <div class="hero-dots" id="heroDots" role="group" aria-label="Slides de imagem">
      <button class="hero-dot ativo" data-slide="0" aria-label="Ir para slide 1" aria-current="true"></button>
      <button class="hero-dot" data-slide="1" aria-label="Ir para slide 2"></button>
      <button class="hero-dot" data-slide="2" aria-label="Ir para slide 3"></button>
      <button class="hero-dot" data-slide="3" aria-label="Ir para slide 4"></button>
    </div>
  </section>


  <!-- ===========================
       SOBRE / A CASA AROMANI
       =========================== -->
  <section id="sobre" aria-labelledby="titulo-sobre">
    <div class="container">
      <div class="sobre-intro">
        <h2 id="titulo-sobre" class="secao-titulo">A Casa Aromani</h2>
        <hr class="secao-divisor">
        <p>
          No coração do Brooklin, a Casa Aromani é mais do que uma padaria.
          É um refúgio onde cada produto é feito com dedicação e carinho,
          transformando momentos simples em experiências memoráveis.
        </p>
        <p>
          Nossa missão é oferecer produtos artesanais de alta qualidade,
          preparados diariamente com ingredientes selecionados. Do pão quentinho
          do café da manhã aos doces irresistíveis da tarde, cada item carrega
          o sabor do cuidado e da tradição.
        </p>
      </div>

      <div class="sobre-cards">
        <div class="sobre-card">
          <div class="sobre-card-icone" aria-hidden="true">❤️</div>
          <h3>Feito com Amor</h3>
          <p>Cada receita é preparada com dedicação e paixão, seguindo tradições que passam de geração em geração.</p>
        </div>

        <div class="sobre-card">
          <div class="sobre-card-icone" aria-hidden="true">🥐</div>
          <h3>Produtos Frescos</h3>
          <p>Tudo é feito diariamente, garantindo frescor e qualidade em cada mordida.</p>
        </div>

        <div class="sobre-card">
          <div class="sobre-card-icone" aria-hidden="true">🌾</div>
          <h3>Tradição &amp; Qualidade</h3>
          <p>Combinamos técnicas tradicionais com ingredientes selecionados para resultados excepcionais.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- ===========================
       PRODUTOS COM AMOR
       =========================== -->
  <section id="produtos" aria-labelledby="titulo-produtos">
    <div class="container">
      <div style="text-align:center; margin-bottom:64px;">
        <h2 id="titulo-produtos" class="secao-titulo">Produtos com Amor</h2>
        <hr class="secao-divisor">
        <p class="secao-subtitulo">
          Descubra nossa variedade de produtos artesanais, preparados diariamente com ingredientes selecionados.
        </p>
      </div>

      <div class="produtos-grid">

        <!-- Pães Artesanais -->
        <div class="produto-card">
          <div class="produto-card-header">
            <div class="produto-card-icone" aria-hidden="true">🥐</div>
            <div>
              <h3>Pães Artesanais</h3>
              <p>Pães frescos, crocantes por fora e macios por dentro, assados diariamente</p>
            </div>
          </div>
          <div class="produto-tags">
            <span class="produto-tag">Pão Francês</span>
            <span class="produto-tag">Ciabatta</span>
            <span class="produto-tag">Italiano</span>
            <span class="produto-tag">Multigrãos</span>
            <span class="produto-tag">Brioche</span>
            <span class="produto-tag">Croissant</span>
            <span class="produto-tag">Salgados</span>
          </div>
        </div>

        <!-- Confeitaria -->
        <div class="produto-card">
          <div class="produto-card-header">
            <div class="produto-card-icone" aria-hidden="true">🎂</div>
            <div>
              <h3>Confeitaria</h3>
              <p>Doces irresistíveis feitos com receitas especiais e ingredientes premium</p>
            </div>
          </div>
          <div class="produto-tags">
            <span class="produto-tag">Bolo</span>
            <span class="produto-tag">Torta</span>
            <span class="produto-tag">Carolina</span>
            <span class="produto-tag">Cookie</span>
            <span class="produto-tag">Pudim</span>
          </div>
        </div>

        <!-- Cafeteria -->
        <div class="produto-card">
          <div class="produto-card-header">
            <div class="produto-card-icone" aria-hidden="true">☕</div>
            <div>
              <h3>Cafeteria</h3>
              <p>Cafés especiais, chás e bebidas preparadas com carinho</p>
            </div>
          </div>
          <div class="produto-tags">
            <span class="produto-tag">Espresso</span>
            <span class="produto-tag">Cappuccino</span>
            <span class="produto-tag">Café Coado</span>
            <span class="produto-tag">Chás Especiais</span>
            <span class="produto-tag">Mocha</span>
            <span class="produto-tag">Café Gelado</span>
          </div>
        </div>

        <!-- Brunch -->
        <div class="produto-card">
          <div class="produto-card-header">
            <div class="produto-card-icone" aria-hidden="true">🍽️</div>
            <div>
              <h3>Brunch</h3>
              <p>Opções deliciosas para seu café da manhã ou brunch especial</p>
            </div>
          </div>
          <div class="produto-tags">
            <span class="produto-tag">Sanduíches</span>
            <span class="produto-tag">Tapiocas</span>
            <span class="produto-tag">Ovos Mexidos</span>
            <span class="produto-tag">Toasts</span>
            <span class="produto-tag">Soda Italiana</span>
            <span class="produto-tag">Pão de Queijo</span>
          </div>
        </div>

      </div>
    </div>
  </section>


  <!-- ===========================
       GALERIA - ÁGUA NA BOCA
       =========================== -->
  <section id="galeria" aria-labelledby="titulo-galeria">
    <div class="container">
      <div style="text-align:center; margin-bottom:64px;">
        <h2 id="titulo-galeria" class="secao-titulo">Água na Boca</h2>
        <hr class="secao-divisor">
        <p class="secao-subtitulo">
          Cada foto conta uma história de sabor e dedicação. Venha provar você mesmo!
        </p>
      </div>

      <div class="galeria-grid">
        <!-- Adicione suas imagens abaixo -->
        <!-- Substitua os src pelas imagens reais -->
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-bolo-chocolate.jpg" alt="Bolo de chocolate" loading="lazy">
          <div class="galeria-overlay"><span>Bolo de Chocolate</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-carolinas.jpg" alt="Carolinas" loading="lazy">
          <div class="galeria-overlay"><span>Carolinas</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-padaria.jpg" alt="Padaria" loading="lazy">
          <div class="galeria-overlay"><span>Nossa Padaria</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-paes.jpg" alt="Pães artesanais" loading="lazy">
          <div class="galeria-overlay"><span>Pães Artesanais</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-sanduiche.jpg" alt="Sanduíche" loading="lazy">
          <div class="galeria-overlay"><span>Sanduíche</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-toast-bacon.jpg" alt="Toast com bacon" loading="lazy">
          <div class="galeria-overlay"><span>Toast com Bacon</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-toast-salmon.jpg" alt="Toast com salmão" loading="lazy">
          <div class="galeria-overlay"><span>Toast com Salmão</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-torta.jpg" alt="Torta" loading="lazy">
          <div class="galeria-overlay"><span>Torta</span></div>
        </div>
        <div class="galeria-item">
          <img src="<?php echo get_template_directory_uri(); ?>/images/gallery-tortas-vitrine.jpg" alt="Tortas na vitrine" loading="lazy">
          <div class="galeria-overlay"><span>Vitrine de Tortas</span></div>
        </div>
      </div>
    </div>
  </section>


  <!-- ===========================
       PET FRIENDLY
       =========================== -->
  <section id="pet" aria-labelledby="titulo-pet">
    <div class="container">
      <div class="pet-inner">

        <div class="pet-imagem">
          <img
            src="<?php echo get_template_directory_uri(); ?>/images/pet-friendly.png"
            alt="Pet Friendly - Traga seu cachorro para a Casa Aromani"
            loading="lazy"
          >
        </div>

        <div class="pet-texto">
          <h2 id="titulo-pet" class="secao-titulo" style="text-align:left;">Traga seu Pet!</h2>
          <hr class="secao-divisor" style="margin-left:0;">
          <p>
            Na Casa Aromani, seu melhor amigo também é bem-vindo! Temos um espaço
            especial e acolhedor para você curtir um delicioso brunch ou café da
            manhã com seu pet.
          </p>
          <p>
            Acreditamos que momentos especiais ficam ainda melhores na companhia
            de quem amamos — e isso inclui nossos companheiros de quatro patas.
          </p>
          <span class="pet-badge">🐾 Pet Friendly</span>
        </div>

      </div>
    </div>
  </section>


  <!-- ===========================
       ENCOMENDAS
       =========================== -->
  <section id="encomendas" aria-labelledby="titulo-encomendas">
    <div class="container">
      <div style="text-align:center; margin-bottom:64px;">
        <h2 id="titulo-encomendas" class="secao-titulo">Encomendas</h2>
        <hr class="secao-divisor">
        <p class="secao-subtitulo">
          Realizamos encomendas para festas, eventos e coffee breaks com todo
          o cuidado e carinho que a Casa Aromani tem a oferecer.
        </p>
      </div>

      <div class="encomendas-grid">

        <!-- Festas -->
        <div class="encomenda-card">
          <div class="encomenda-icone" aria-hidden="true">🎁</div>
          <h3>Festas</h3>
          <p>Bolos personalizados, doces e salgados para tornar sua festa ainda mais especial. Planejamos tudo com carinho para você.</p>
          <div class="encomenda-tags">
            <span class="encomenda-tag">Bolos Personalizados</span>
            <span class="encomenda-tag">Mesa de Doces</span>
            <span class="encomenda-tag">Salgados</span>
            <span class="encomenda-tag">Tortas Especiais</span>
          </div>
        </div>

        <!-- Eventos -->
        <div class="encomenda-card">
          <div class="encomenda-icone" aria-hidden="true">📅</div>
          <h3>Eventos</h3>
          <p>Cardápios completos para eventos corporativos, aniversários e celebrações de todos os tamanhos.</p>
          <div class="encomenda-tags">
            <span class="encomenda-tag">Finger Foods</span>
            <span class="encomenda-tag">Mini Sanduíches</span>
            <span class="encomenda-tag">Tortas Salgadas</span>
            <span class="encomenda-tag">Brunch Completo</span>
          </div>
        </div>

        <!-- Coffee Breaks -->
        <div class="encomenda-card">
          <div class="encomenda-icone" aria-hidden="true">☕</div>
          <h3>Coffee Breaks</h3>
          <p>Coffee breaks sofisticados para reuniões e eventos corporativos, com produtos frescos e apresentação impecável.</p>
          <div class="encomenda-tags">
            <span class="encomenda-tag">Café &amp; Bebidas</span>
            <span class="encomenda-tag">Pães Artesanais</span>
            <span class="encomenda-tag">Frios e Queijos</span>
            <span class="encomenda-tag">Doces e Bolos</span>
          </div>
        </div>

      </div>

      <div class="encomendas-cta">
        <p>Entre em contato para fazer seu pedido com antecedência!</p>
        <a
          href="<?php echo esc_url( casa_aromani_whatsapp_simples() ); ?>"
          class="btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Fazer Encomenda pelo WhatsApp
        </a>
      </div>
    </div>
  </section>

</main>

<?php get_footer(); ?>
