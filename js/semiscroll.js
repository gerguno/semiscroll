"use strict";

(function ($) {
    $.fn.semiscroll = function() {

        return this.each(function() {
            var gallery = {},
                $this = $(this);  //зробити наш елемент видимим у всіх областях видимості ( у "$(window).scroll()" його не видно)

            gallery.topPosition = $this.offset().top;
            gallery.bottomPosition = gallery.topPosition + $this.height();

            $this.addClass('pre-scroll');


            $(window).scroll( function() {

                    var scrolled = window.pageYOffset;
                    console.log('scrolled: ' + scrolled + 'px');
                    console.log('gallery top: ' + gallery.topPosition + 'px');
                    console.log('gallery bottom: ' + gallery.bottomPosition + 'px');
                    console.log('-------------------------');

                        if (gallery.bottomPosition >= scrolled + document.documentElement.clientHeight && scrolled >= gallery.topPosition) {    
                            $this.addClass('on-scroll');
                            $this.removeClass('post-scroll');
                            console.log('On-scroll');
                        }  



                        if (gallery.bottomPosition <= scrolled + document.documentElement.clientHeight) {
                            console.log('Post-scroll');
                            $this.addClass('post-scroll');
                        }


                        if (scrolled <= gallery.topPosition) {
                            console.log('Pre-scroll');
                            $this.addClass('pre-scroll');
                            $this.removeClass('on-scroll');
                            $this.removeClass('post-scroll');
                        }
            });
        });
    
    };

})(jQuery);

