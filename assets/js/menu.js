jQuery(document).ready(function($){
    $('.main-header .menu-handle').click(function(event) {
        var _this = $(this);
        var _toggle_menu = $('.toggle-menu');
        var _page_content = $('.page-content');
        var _menu_icon = $('.main-header .menu-handle');
        if(_toggle_menu.hasClass('show')){
          _toggle_menu.removeClass('show');  
          _page_content.removeClass('slide-a-abit');
          _menu_icon.removeClass('slide-a-abit');
        } 
        else{
          _toggle_menu.addClass('show');  
          _page_content.addClass('slide-a-abit');
          _menu_icon.addClass('slide-a-abit');
        } 
        return false;
    });
});