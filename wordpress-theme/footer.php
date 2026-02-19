<footer id="colophon" role="contentinfo">
  <div class="container">
    <div class="footer-grid">

      <!-- Logotipo -->
      <div class="footer-logo">
        <?php
        if ( has_custom_logo() ) {
            // Exibe logo personalizado (configure em Aparência > Customizar > Identidade do Site)
            the_custom_logo();
        } else {
            echo '<p style="font-size:1.5rem;font-weight:700;">' . get_bloginfo( 'name' ) . '</p>';
        }
        ?>
        <p>Onde o cuidado tem aroma e sabor</p>
      </div>

      <!-- Contato -->
      <div class="footer-secao">
        <h3>Contato</h3>

        <div class="footer-contato-item">
          <span class="icone" aria-hidden="true">📍</span>
          <div>
            <p>Endereço</p>
            <span><?php echo esc_html( get_theme_mod( 'endereco_linha1', 'R. Bacaetava, 344' ) ); ?></span>
            <span><?php echo esc_html( get_theme_mod( 'endereco_linha2', 'Brooklin, São Paulo - SP' ) ); ?></span>
          </div>
        </div>

        <div class="footer-contato-item">
          <span class="icone" aria-hidden="true">💬</span>
          <div>
            <p>WhatsApp</p>
            <a
              href="<?php echo esc_url( casa_aromani_whatsapp_simples() ); ?>"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 5531-8385
            </a>
          </div>
        </div>

        <div class="footer-contato-item">
          <span class="icone" aria-hidden="true">🕐</span>
          <div>
            <p>Horário</p>
            <span><?php echo esc_html( get_theme_mod( 'horario_semana', 'Seg - Sex: Das 06h às 20h' ) ); ?></span>
            <span><?php echo esc_html( get_theme_mod( 'horario_fds', 'Sáb - Dom: Das 7h às 16h' ) ); ?></span>
          </div>
        </div>
      </div>

      <!-- Redes Sociais -->
      <div class="footer-secao footer-sociais">
        <h3>Redes Sociais</h3>
        <p>Siga-nos nas redes sociais e fique por dentro das novidades!</p>
        <div class="footer-social-links">
          <?php
          $instagram_url = get_theme_mod( 'instagram_url', 'https://www.instagram.com/casa.aromani/' );
          if ( $instagram_url ) : ?>
            <a
              href="<?php echo esc_url( $instagram_url ); ?>"
              class="footer-social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Casa Aromani"
            >
              <!-- Ícone Instagram SVG -->
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          <?php endif; ?>
        </div>
      </div>

    </div>

    <!-- Rodapé inferior -->
    <div class="footer-bottom">
      <p>&copy; <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>

<!-- WhatsApp Flutuante -->
<a
  href="<?php echo esc_url( casa_aromani_whatsapp_url() ); ?>"
  class="whatsapp-flutuante"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Fale conosco pelo WhatsApp"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
</a>

<?php wp_footer(); ?>
</body>
</html>
