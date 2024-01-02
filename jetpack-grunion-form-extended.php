<?php

/*
Plugin Name: Jetpack Form Extended
Description: Add a contact form to any post, page or text widget.  Emails will be sent to the post's author by default, or any email address you choose.  As seen on WordPress.com.
Plugin URI: http://automattic.com/#
AUthor: Automattic, Inc.
Author URI: http://automattic.com/
Version: 1.0.1
License: GPLv3 or later
*/

add_action( 'plugins_loaded', function() {
    $jetpack_form_dir = 'JETPACK__PLUGIN_DIR'; // GRUNION_PLUGIN_DIR
    if ( defined( $jetpack_form_dir ) ) {
        $module = __DIR__.DIRECTORY_SEPARATOR.'modules'.DIRECTORY_SEPARATOR.'grunion-contact-form.php';
        include_once $module;
        $plugin = \Grunion_Contact_Form_Extended::init();
    } else {
        add_action( 'admin_notices', 'grunion_form_plugin_fail_load' );
    }
});

/**
 * Show in WP Dashboard notice about the plugin is not activated.
 *
 * @since 1.0.0
 *
 * @return void
 */
function grunion_form_plugin_fail_load() {
	$screen = get_current_screen();
	if ( isset( $screen->parent_file ) && 'plugins.php' === $screen->parent_file && 'update' === $screen->id ) {
		return;
	}

	$plugin = 'jetpack/jetpack.php';
        $installed_plugins = get_plugins();
	if ( isset( $installed_plugins[ $plugin ] ) ) {
		if ( ! current_user_can( 'activate_plugins' ) ) {
			return;
		}

		$activation_url = wp_nonce_url( 'plugins.php?action=activate&amp;plugin=' . $plugin . '&amp;plugin_status=all&amp;paged=1&amp;s', 'activate-plugin_' . $plugin );

		$message = '<h3>' . esc_html__( 'You\'re not using Grunion Form Extended yet!', 'elementor-pro' ) . '</h3>';
		$message .= '<p>' . esc_html__( 'Activate the JetPack plugin to start using all of Grunion Form Extended plugin’s features.', 'elementor-pro' ) . '</p>';
		$message .= '<p>' . sprintf( '<a href="%s" class="button-primary">%s</a>', $activation_url, esc_html__( 'Activate Now', 'elementor-pro' ) ) . '</p>';
	} else {
		if ( ! current_user_can( 'install_plugins' ) ) {
			return;
		}

		$install_url = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=jetpack' ), 'install-plugin_jetpack' );

		$message = '<h3>' . esc_html__( 'Grunion Form Extended plugin requires installing the JetPack plugin', 'elementor-pro' ) . '</h3>';
		$message .= '<p>' . esc_html__( 'Install and activate the JetPack plugin to access all the features.', 'elementor-pro' ) . '</p>';
		$message .= '<p>' . sprintf( '<a href="%s" class="button-primary">%s</a>', $install_url, esc_html__( 'Install Now', 'elementor-pro' ) ) . '</p>';
	}

	echo '<div class="error">' . $message . '</div>'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
}