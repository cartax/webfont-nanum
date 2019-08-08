// the semi-colon before the function invocation is a safety net against concatenated 
// scripts and/or other plugins that are not closed properly
;(function ( $, window, document, undefined ) {
    Starter = window.Starter || {};

    Starter.init = function() {

        this.initHighlightjs();
        this.onMenuOpened();
        this.addMenuClass();
        this.onHashChangeAnimation();

    }

    Starter.initHighlightjs = function() {
        if ( !$('.highlight').length ) { return; }
        hljs.initHighlightingOnLoad();
    }

    Starter.onMenuOpened = function() {
        $('#navbtn, #navbg').on('click.Starter.menuOpened', function(e){
            if(!$(this).length) { return; }

            e = e || window.e;
            e.preventDefault();

            $('body').toggleClass('menu-opened');
        });
    }

    Starter.addMenuClass = function() {
        $('#page-navigation, #secondary').find('a').each(function(){
            if(!$(this).length) { return; }

            reg_string = getFilename(window.location.pathname);
            reg_pattern = '^(?:'+ getFilename(this.getAttribute('href')) +')$';
            reg_exp = new RegExp(reg_pattern, 'gi');

            if (!reg_pattern || !reg_string.match(reg_exp)) { return; }
            
            var list = $(this).parents('ul');

            var current_item = $(this).parent();
            var parent_item = $(this).parents('li')[1];
            var ancestor_item = $(this).parents('li')[2];

            $(current_item).addClass('current');

            if (list.length > 1) {
                $(parent_item).addClass('current-parent');
            } 

            if(list.length == 3) {
                $(ancestor_item).addClass('current-ancestor');
            }
        });
    }

    Starter.onHashChangeAnimation = function() {
        var doHashChangeAnimate = function(hash) {
            var duration = 100;
            $('html,body').stop().animate({ 
                scrollTop: $(hash).offset().top - $('#masthead').height()
            }, duration, function() {
                window.history.replaceState({}, '', hash);
            });
        };

        // When a document ready
        if ( !!window.location.hash ) {
            doHashChangeAnimate(window.location.hash);
        }

        // Add hashChanged event handler 
        $('a').each(function(){
            if ( !this.hash ){ return; }
            $(this).on('click.Starter.hashChangeAnimation', {href:this.getAttribute('href')}, function(e){
                e = e || window.e;
                if ( /^#/.test(e.data.href) ) {
                    e.preventDefault();
                } else {
                    e.stopPropagation();
                }
                doHashChangeAnimate(this.hash); 
            });
        });
    }

    function getPath(path) {
        return (!!path) ? path : window.location.pathname;;
    }
    function getFilename(path) {
        return getPath(path).replace(/^.*[\\\/]/, '').split('.').shift();
    }

    Starter.init();
})( jQuery, window, document );