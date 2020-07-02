var Menu = {
  
    el: {
      ham: $('.header__menu'),
      menuTop: $('.header__menu-top'),
      menuMiddle: $('.header__menu-middle'),
      menuBottom: $('.header__menu-bottom'),
      navList: $('.header__listNav'),
      overlay: $('.overlay'),
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('header__menu-top-click');
      Menu.el.menuMiddle.toggleClass('header__menu-middle-click');
      Menu.el.menuBottom.toggleClass('header__menu-bottom-click');
      Menu.el.navList.delay(400).slideToggle();
      Menu.el.overlay.fadeToggle();
      $('body').toggleClass('overlay-body');
      Menu.el.overlay.click(function (e) {
        Menu.el.menuTop.removeClass('header__menu-top-click');
        Menu.el.menuMiddle.removeClass('header__menu-middle-click');
        Menu.el.menuBottom.removeClass('header__menu-bottom-click');
        Menu.el.navList.slideUp();
        Menu.el.overlay.fadeOut();
        $('body').removeClass('overlay-body');
      });
    }
  };
  
  Menu.init();