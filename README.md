MooExt
======

A plugin/class for mootools that examines links and identifies links that lead the user off the page and points them out.

basic usage:

var extLinks = new ExternalLinks('linkcontainer', {
    domain:'mysite.com'
});

will scan through all the 'a' elements in the 'linkcontainer' element. for each 'a' element it will check whether the 'href' link is in the passed domain.

Class:

var extLinks = new ExternalLinks(containerElement,
{
    imageLocation:'images/ext.png', // the location for the icon that identifies external links
    elementAttribute:'rel', // an alternative attribute that can be used to force a link within 'domain' to be external
    attributeCondition:'ext', // the value within elementAttribute to look for
    domain:'' // the websites domain, e.g. 'mysite.com'
});
