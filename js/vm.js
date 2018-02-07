/*
 * @author Abhijith
 */


require(['ojs/ojcore', 'knockout', 'jquery', 
         'ojs/ojknockout', 'ojs/ojmasonrylayout', 'ojs/ojbutton','ojs/ojavatar','ojs/ojmenu'],
function(oj, ko, $)
{
  $(
    function()
    {
      function MyModel() {
        var self = this;
     
        self.chemicals = [
            { name: 'Amsu SP',
              bdaymsg: 'Happy birthday to my stylish sis...😘😘😍. My childhood would not hav been so special without u by my side.. There is no better sis or crazy friend than u..😉. U mean the world to me👯‍♀. I hope ur Birthday brings u a lot of ❤ & joy...',  
              ismsg: true,
              avatar: 'css/images/Amsu.PNG',
              avs:'xl',
              msgpath:'',
              avatarDiv: 'avatar-div2x2',
              sizeClass: 'oj-masonrylayout-tile-2x2' },
          { name: 'Arya IS',
              bdaymsg: 'May your birthday be as awesome as you are.\n Love you, my sweet friend. HAPPPY BIRTHDAY',  
              ismsg: true,
              avatar: 'css/images/Arya.PNG',
              msgpath:'',
              avs:'md',
              avatarDiv: 'avatar-div2x1',
              sizeClass: 'oj-masonrylayout-tile-2x1' },
          
          { name: 'Sreejith SJ',
              bdaymsg: 'Happy birthday....\n Wish you a bright healthy nd exciting future..',  
              ismsg: true,
              avatar: 'css/images/Sreejith.PNG',
              msgpath:'',
              avs:'md',
              avatarDiv: 'avatar-div2x1',
              sizeClass: 'oj-masonrylayout-tile-2x1' },
          { name: 'Arjun',
              bdaymsg: 'Wish u a special Happy Birthday .. Dear Alaka Chechi 🤘💛 🎂',  
              ismsg: true,
              avatar: 'css/images/Arjun.PNG',
              msgpath:'',
              avs:'md',
              avatarDiv: 'avatar-div2x1',
              sizeClass: 'oj-masonrylayout-tile-2x1' },
          { name: 'Jithu', 
              symbol: 'He',
              bdaymsg:'',
              ismsg:false,
              msgpath:'css/images/jithu_1.png',
              avatar: 'css/images/Jithu.PNG',
              avs:'xl',
              avatarDiv: 'avatar-div2x2',
              sizeClass: 'oj-masonrylayout-tile-2x2' },
          { name: 'Nani Janardhan',
              bdaymsg: 'Light and blow out each candle on your birthday cake 🎂...not because it is what people do..but to celebrate another special day of your extraordinary life🍾🥂🎊🎉.     Happy Birthday Mrs Abhijith 😊',  
              ismsg: true,
              avatar: 'css/images/Jana.PNG',
              avs:'xl',
              msgpath:'',
              avatarDiv: 'avatar-div2x2',
              sizeClass: 'oj-masonrylayout-tile-2x2' },
          
          { name: 'Vineeth',
              bdaymsg: 'Many more happy BDay Alaka. Hope you soon reach Bangalore. Wish you all the succuss ahead.',  
              ismsg: true,
              avatar: 'css/images/Vineeth.PNG',
              msgpath:'',
              avs:'md',
              avatarDiv: 'avatar-div2x1',
              sizeClass: 'oj-masonrylayout-tile-2x1' },
          { name: 'Achan',
              bdaymsg: 'Happy Birthday Alaka',  
              ismsg: true,
              avatar: 'css/images/Achan.PNG',
              msgpath:'',
              avs:'md',
              avatarDiv: 'avatar-div2x1',
              sizeClass: 'oj-masonrylayout-tile-2x1' },
          { name: 'Amma',
              bdaymsg: 'Happy Birthday Alaka, Wish you all the best',  
              ismsg: true,
              avatar: 'css/images/Amma.PNG',
              msgpath:'',
              avs:'md',
              avatarDiv: 'avatar-div2x1',
              sizeClass: 'oj-masonrylayout-tile-2x1' },
          { name: 'AnchuSree', 
              bdaymsg:'',
              ismsg:false,
              msgpath:'css/images/anchu_1.png',
              avatar: 'css/images/Anchu.PNG',
              avs:'xxl',
              avatarDiv: 'avatar-div3x2',
              sizeClass: 'oj-masonrylayout-tile-3x2' },
          { name: 'Abhijith', 
              bdaymsg:'Many Many Happy Returns of the day my soul:-* We have been celebrating this mass day for years and years. Everytime it will be a distinct one,as it sounds now also. There is no need to draft a long story, abstract will be I heart you. Wish you splendid year ahead with me :-) and bear with me :-D',
              ismsg:true,
              msgpath:'css/images/jithu_1.png',
              avatar: 'css/images/Abhijith.PNG',
              avs:'xl',
              avatarDiv: 'avatar-div2x2',
              sizeClass: 'oj-masonrylayout-tile-2x2' }
          
            
        ];
        
        //Flip a tile.
        demoFlipTile = function(data, event)
        {
          var target = event.target;
          var tile = $(target).closest(".demo-tile");

          var tileFront = tile.find(".demo-tile-front");
          var tileBack = tile.find(".demo-tile-back");

          var bForward = tileBack.hasClass("demo-hidden");
          var f = function() { 
            demoFlipEnd(tile, tileFront, tileBack, bForward);
          };
          tile[0]._flipFunc = f;
          tile[0].addEventListener("transitionend", f, false);
          tile[0].addEventListener("webkittransitionend", f, false);

          //Unhide the new side of the tile to which it is flipping, 
          //and flip that side by 180 degrees so that it is facing the 
          //opposite direction of the current side.  The new side will
          //then be facing the user after the tile itself is flipped by 
          //180 degrees.  
          if (bForward)
          {
            tileBack.removeClass("demo-hidden");
            tileBack.addClass("demo-flipped");
          }
          else
          {
            tileFront.removeClass("demo-hidden");
            tileFront.addClass("demo-flipped");
          }

          //Flip the tile itself.
          tile.addClass(bForward ? 
                          "demo-flip-forward" : 
                          "demo-flip-backward");
        };

        //Called after the flip transition ends.
        demoFlipEnd = function(tile, tileFront, tileBack, bForward)
        {
          var f = tile[0]._flipFunc;
          tile[0]._flipFunc = null;
          tile[0].removeEventListener("transitionend", f, false);
          tile[0].removeEventListener("webkittransitionend", f, false);

          var button = null;
          if (bForward)
          {
            //Remove the flip class from the tile itself so the tile is
            //no longer rotated.
            tile.removeClass("demo-flip-forward");
            //Hide the old side of the tile that is no longer showing.
            tileFront.addClass("demo-hidden");
            //Remove the flip class from the new side of the tile so 
            //that it is no longer rotated.  This side still faces the
            //user because the tile itself is no longer rotated.
            tileBack.removeClass("demo-flipped");
            //Find the flip button on the new tile side.
            button = tileBack.find(".demo-back-flip-icon");
          }
          else
          {
            //Remove the flip class from the tile itself so the tile is
            //no longer rotated.
            tile.removeClass("demo-flip-backward");
            //Hide the old side of the tile that is no longer showing.
            tileBack.addClass("demo-hidden");
            //Remove the flip class from the new side of the tile so 
            //that it is no longer rotated.  This side still faces the
            //user because the tile itself is no longer rotated.
            tileFront.removeClass("demo-flipped");
            //Find the flip button on the new tile side.
            button = tileFront.find(".demo-front-flip-icon");
          }
          //Before the tile was flipped, the button used to flip the 
          //tile had focus, so now restore focus to the flip button on
          //the side of the tile that is now showing.
          button[0].focus();
        };
        
        getTileId = function(index)
        {
          return 'tile' + (index + 1);
        };
        
        getButtonId = function(index)
        {
          return 'flipButton' + (index + 1);
        };
        
        getFrontButtonLabel = function(data)
        {
          return 'Flip forward ' + data.name;
        };
        
        getBackButtonLabel = function(data)
        {
          return 'Flip back ' + data.name;
        };
        
        getFrontButtonStartIcon = function()
        {
          return 'oj-fwk-icon-caret-end oj-component-icon';
        };
        
        getBackButtonStartIcon = function()
        {
          return 'oj-fwk-icon-caret-start oj-component-icon';
        };
        getLabelId = function(index)
        {
          return 'label' + (index + 1);
        };
        
        getDragHandleId = function(index)
        {
          return 'dragHandle' + (index + 1);
        };
        
        getDragHandleLabelledBy = function(index)
        {
          return getDragHandleId(index) + ' ' + getLabelId(index);
        };
        
      }
    
         
      ko.applyBindings(new MyModel(), 
        document.getElementById('content'));
    }
  );
});  
