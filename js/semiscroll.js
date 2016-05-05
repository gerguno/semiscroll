"use strict";

(function ($) {
    $.fn.semiscroll = function() {

        return this.each(function() {
            var gallery = {},
                $this = $(this),  //зробити наш елемент видимим у всіх областях видимості ( у "$(window).scroll()" його не видно)
                windowHeight = window.innerHeight;

            gallery.topPosition = Math.round($this.offset().top),
            gallery.bottomPosition = Math.round(gallery.topPosition + $this.height()),
                
            $this.addClass('pre-scroll');

            $(window).scroll( function() {

                    var scrolled = window.pageYOffset;
                    // console.log('scrolled: ' + scrolled + 'px');
                    // console.log('gallery top: ' + gallery.topPosition + 'px');
                    // console.log('gallery bottom: ' + gallery.bottomPosition + 'px');
                    // console.log('-------------------------');

                        if (scrolled < gallery.topPosition) {
                            // console.log('Pre-scroll');
                            $this.addClass('pre-scroll');
                            $this.removeClass('on-scroll');
                            $this.removeClass('post-scroll');
                        }

                        if (scrolled > gallery.topPosition && scrolled + windowHeight < gallery.bottomPosition) {    
                            // console.log('On-scroll');
                            $this.addClass('on-scroll');
                            $this.removeClass('post-scroll');
                        }  

                        if (scrolled + windowHeight > gallery.bottomPosition) {
                            // console.log('Post-scroll');
                            $this.removeClass('on-scroll');
                            $this.addClass('post-scroll');
                        }
            });
        });
    
    };

})(jQuery);

