<?php
/**
 * Casa Aromani - functions.php
 * Funções e configurações do tema
 */

// Suporte a recursos do tema
function casa_aromani_setup() {
    // Suporte a título dinâmico no <head>
    add_theme_support( 'title-tag' );

    // Suporte a imagens destacadas
    add_theme_support( 'post-thumbnails' );

    // Suporte a HTML5
    add_theme_support( 'html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ) );

    // Registrar menus de navegação
    register_nav_menus( array(
        'menu-principal' => __( 'Menu Principal', 'casa-aromani' ),
    ) );

    // Suporte ao logotipo personalizado no Customizer
    add_theme_support( 'custom-logo', array(
        'height'      => 64,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );
}
add_action( 'after_setup_theme', 'casa_aromani_setup' );

// Enfileirar estilos e scripts
function casa_aromani_scripts() {
    // Estilo principal do tema
    wp_enqueue_style(
        'casa-aromani-style',
        get_stylesheet_uri(),
        array(),
        '1.0.0'
    );

    // Google Fonts (opcional)
    wp_enqueue_style(
        'google-fonts',
        'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap',
        array(),
        null
    );

    // Script principal do tema
    wp_enqueue_script(
        'casa-aromani-script',
        get_template_directory_uri() . '/js/main.js',
        array(),
        '1.0.0',
        true // Carregar no rodapé
    );

    // Passar variáveis PHP para o JavaScript
    wp_localize_script( 'casa-aromani-script', 'casaAromaniData', array(
        'ajaxUrl' => admin_url( 'admin-ajax.php' ),
        'nonce'   => wp_create_nonce( 'casa-aromani-nonce' ),
    ) );
}
add_action( 'wp_enqueue_scripts', 'casa_aromani_scripts' );

// Widgets (sidebar e rodapé)
function casa_aromani_widgets_init() {
    register_sidebar( array(
        'name'          => __( 'Barra Lateral', 'casa-aromani' ),
        'id'            => 'sidebar-1',
        'description'   => __( 'Adicione widgets aqui.', 'casa-aromani' ),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ) );
}
add_action( 'widgets_init', 'casa_aromani_widgets_init' );

// Limitar o comprimento do excerpt
function casa_aromani_excerpt_length( $length ) {
    return 30;
}
add_filter( 'excerpt_length', 'casa_aromani_excerpt_length' );

// Customizer - Opções do tema
function casa_aromani_customize_register( $wp_customize ) {
    // Seção: Informações do Restaurante
    $wp_customize->add_section( 'casa_aromani_info', array(
        'title'    => __( 'Informações da Casa Aromani', 'casa-aromani' ),
        'priority' => 30,
    ) );

    // WhatsApp
    $wp_customize->add_setting( 'whatsapp_numero', array(
        'default'           => '551155318385',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'whatsapp_numero', array(
        'label'   => __( 'Número do WhatsApp (com código do país, sem + ou espaços)', 'casa-aromani' ),
        'section' => 'casa_aromani_info',
        'type'    => 'text',
    ) );

    // Instagram
    $wp_customize->add_setting( 'instagram_url', array(
        'default'           => 'https://www.instagram.com/casa.aromani/',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( 'instagram_url', array(
        'label'   => __( 'URL do Instagram', 'casa-aromani' ),
        'section' => 'casa_aromani_info',
        'type'    => 'url',
    ) );

    // Endereço
    $wp_customize->add_setting( 'endereco_linha1', array(
        'default'           => 'R. Bacaetava, 344',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'endereco_linha1', array(
        'label'   => __( 'Endereço - Linha 1', 'casa-aromani' ),
        'section' => 'casa_aromani_info',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'endereco_linha2', array(
        'default'           => 'Brooklin, São Paulo - SP',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'endereco_linha2', array(
        'label'   => __( 'Endereço - Linha 2', 'casa-aromani' ),
        'section' => 'casa_aromani_info',
        'type'    => 'text',
    ) );

    // Horário de funcionamento
    $wp_customize->add_setting( 'horario_semana', array(
        'default'           => 'Seg - Sex: Das 06h às 20h',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'horario_semana', array(
        'label'   => __( 'Horário - Dias da Semana', 'casa-aromani' ),
        'section' => 'casa_aromani_info',
        'type'    => 'text',
    ) );

    $wp_customize->add_setting( 'horario_fds', array(
        'default'           => 'Sáb - Dom: Das 7h às 16h',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'horario_fds', array(
        'label'   => __( 'Horário - Final de Semana', 'casa-aromani' ),
        'section' => 'casa_aromani_info',
        'type'    => 'text',
    ) );
}
add_action( 'customize_register', 'casa_aromani_customize_register' );

// Funções auxiliares
function casa_aromani_whatsapp_url() {
    $numero = get_theme_mod( 'whatsapp_numero', '551155318385' );
    return 'https://api.whatsapp.com/send/?phone=' . $numero . '&text&type=phone_number&app_absent=0';
}

function casa_aromani_whatsapp_simples() {
    $numero = get_theme_mod( 'whatsapp_numero', '551155318385' );
    return 'https://wa.me/' . $numero;
}
