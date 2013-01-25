/**
 this is a base class for a generic deck which can be overwritten with more 
specific decks to cover different card games with other rules and so forth

This is implemented using a doubly linked list. Not sure if that's needed and 
if I need to simplify life later I will. I just feel that it can be useful for
games that have rules that allow you to add a card to the bottom of the deck.

Hmm.... actually that still hasn't convinced myself since that problem can be
easily solved with a simple double pointer singly linked list.... Well,,, we'ver
*/

define(["dojo/_base/declare"], function(declare){
    return declare(null, {
        // Member variables
        constructor: function(){
           this._size = 0;
           this._top = null;
           this._bot = null; 
        },
        
        // functions to make my life easier
        // people may not necessarily need to use these
        // always returns zero? (why not?)
        insertTop: function(card){
            if (_top == null){
                this._top = card;
                this._bot = card;
            } else if (_bot.equals(_top)){
                this._top = card;
                this._bot.insertFront(card);
                card.insertBack(this._bot);
            } else {
                this._top.insertFront(card);
                card.insertBack(this._top);
                this._top = card;
            }
            size++;
            return 0;
        },

        insertBot: function(card){
            if (_bot == null){
                this._top = card;
                this._bot = card;
            } else if (_bot.equals(_top)){
                this._bot = card;
                this._top.insertBack(card);
                card.insertFront(this._top);
            } else {
                this._bot.insertBack(card);
                card.insertFront(this._top);
                this._bot = card;
            }
            size++;
            return 0;
        },

        // returns the index at which the card was inserted
        // returns -1 if the after_this card was not found
        insertAfter: function(card, after_this){
            var pointer = _top;
            if (pointer == null){
                return insertTop(card);
            }
            var i = 0;
            while (pointer != null){
                i++;
                if (pointer.equals(card){
                    pointer.insertFront(card);
                    pointer.insertBack(card._back);
                    card.insertBack(pointer);
                    size++;
                    return i;
                } else {
                    pointer = pointer._back;
                }
            }
            return -1;
        },

        insertAfterIndex: function(card, index){
            // since this is a dual linked list there is a 
            // potential optimaztion here where you can start from the 
            // bottom if the index is greater than size/2. But I'm still
            // not sure I want a dual linked list so I'm not using that
            // var pointer = (size/2 > index) ? this._top : this._bot;
            var pointer = this._top;
            if (pointer == null){
                return insertTop(card);
            }
            var i = 0;
            while (pointer != null){
                if (i == index){
                    pointer.insertFront(card);
                    pointer.insertBack(card._back);
                    card.insertBack(pointer);
                    size++;
                    return i;
                } else {
                    pointer = (size/2 > index) ? pointer._back;
                    i++;
                }
            }
            return -1;
        },
    }
});
