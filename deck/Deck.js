/**
 this is a base class for a generic deck which can be overwritten with more 
specific decks to cover different card games with other rules and so forth
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
        insertTop: function(){
            
        }
    }
});
