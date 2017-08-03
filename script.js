$( document ).ready( function () {

    var hamburger = $( '#hamburger' );
    // DRAWER:
    var drawer = $( '#drawer' );
    var overlay = $( '#drawer-overlay' );
    var close = $( '#close' );

    // MODAL:
    var modal = $( '#modal' );
    var closeModal = $( '#close-modal' );

    // EVENTLISTENER:
    hamburger.on( 'click', function () {
        toggle( 'show-drawer' );
    } );

    close.on( 'click', function () {
        toggle( 'hide-drawer' );
    } );


    overlay.on( 'click', function () {
        toggle( 'hide-drawer' );
    } );

    closeModal.on( 'click', function () {
        toggle( 'hide-modal' );
    } );

    // FUNCTIONS DECLARATION:

    setTimeout( function () {
        toggle( 'show-modal' );
    }, 1000 );

    function toggleOverlay( state ) {
        if ( state == true ) {
            overlay.on( 'click', function () {
                toggle( 'hide-drawer' );
            } );
        } else {
            overlay.off( 'click' );
        }
    }

    function toggle( action ) {
        switch ( action ) {
        case 'show-drawer':
            overlay.removeClass( 'hidden' );
            drawer.addClass( 'active' );
            break;
        case 'hide-drawer':
            drawer.removeClass( 'active' );
            overlay.addClass( 'hidden' );
            break;

        case 'show-modal':
            toggleOverlay( false );
            overlay.removeClass( 'hidden' );
            modal.removeClass( 'hidden' );
            break;
        case 'hide-modal':
            overlay.addClass( 'hidden' );
            modal.addClass( 'hidden' );
            toggleOverlay( true );
            break;
        }
    }

} );
