/**
 A simple class that wraps a card. This is mostly a data class
*/

define(["dojo/_base/declare", "dojo/_base/lang"], function(declare, lang){
    return declare(null, {
        constructor: function(name, type){
            this._name = name;
            this._type = type;
            this._front = null;
            this._back = null;
        },

        insertFront: function(card){
            this._front = card;
        },

        insertBack: function(card){
            this._back = card;
        },

        equals: function(card){
            return this._name === card._name && this._type === card._type;
        },
    });
});
