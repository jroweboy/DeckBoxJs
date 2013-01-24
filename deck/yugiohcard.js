/**
 This is an override for the card class that extends it to add yugioh specific data
*/

define(["dojo/_base/declare", "./Card"], function(declare, Card){
    return declare(Card, {
        //type is both the element "Earth Fire Light" and "Spell, Trap"
        //type 2 would be "effect, exceed" "continous, field, etc"
        constructor: function(name, type, type2, text, atk, def){
            this._type2 = type2;
            this._text = text;
            this._atk = atk;
            this._def = def;
        },
    });
});
