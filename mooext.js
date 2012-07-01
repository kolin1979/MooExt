var ExternalLinks = new Class({
    Implements:Options,
    options:{
        imageLocation:'images/ext.png',
        elementAttribute:'rel',
        attributeCondition:'ext',
        domain:''
    },
    initialize: function(selector, options){
        this.topelement = document.id(selector);
        if(!this.topelement){
            this.topelement = document.body;        
        }
        this.setOptions(options);
        this.elements = this.topelement.getElements('a');
        this.setLinks();
    },
    setLinks: function(){
        var re = new RegExp('(?:f|ht)tp(?:s)?\://((?!'+this.options.domain+'|www.'+this.options.domain+')[^/]+)', 'im');
        this.elements.each(function (el) {
            if (el.getProperty('href').test(re) == true || (el.getProperty(this.options.elementAttribute) == this.options.attributeCondition)) {
                el.setProperty('target', '_blank');
                el.setProperty('title', el.getProperty('title')+' [External link : opens in a new window]');
                var hyperlinkText = el.text;
                var extel = new Element('img', { 'src': this.options.imageLocation, 'alt': 'Opens in a new window' });
                if (el.getChildren('img').length == 0) {
                    extel.inject(el);
                }
            }
        }, this);
    }
});