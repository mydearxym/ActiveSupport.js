'use strict';

var _ = require('lodash');
var Inflections = require('./Inflections');

var Inflector = {};

Inflector.inflections = new Inflections();

Inflector.inflections.plural(/$/, 's');
Inflector.inflections.plural(/s$/i, 's');
Inflector.inflections.plural(/^(ax|test)is$/i, '$1es');
Inflector.inflections.plural(/(octop)us$/i, '$1i');
Inflector.inflections.plural(/(vir)us$/i, '$1uses');
Inflector.inflections.plural(/(alias|status)$/, '$1es');
Inflector.inflections.plural(/(bu)s$/i, '$1ses');
Inflector.inflections.plural(/(buffal|tomat)o$/i, '$1oes');
Inflector.inflections.plural(/([ti])um$/i, '$1a');
Inflector.inflections.plural(/([ti])a$/i, '$1a');
Inflector.inflections.plural(/sis$/i, 'ses');
Inflector.inflections.plural(/(?:([^f])fe|([lr])f)$/i, '$1$2ves');
Inflector.inflections.plural(/(hive)$/i, '$1s');
Inflector.inflections.plural(/([^aeiouy]|qu)y$/i, '$1ies');
Inflector.inflections.plural(/(x|ch|ss|sh)$/i, '$1es');
Inflector.inflections.plural(/(matr|vert|ind)(?:ix|ex)$/i, '$1ices');
Inflector.inflections.plural(/^(m|l)ouse$/i, '$1ice');
Inflector.inflections.plural(/^(m|l)ice$/i, '$1ice');
Inflector.inflections.plural(/^(ox)$/i, '$1en');
Inflector.inflections.plural(/^(oxen)$/i, '$1');
Inflector.inflections.plural(/(quiz)$/i, '$1zes');

Inflector.inflections.singular(/s$/i, '');
Inflector.inflections.singular(/(ss)$/i, '$1');
Inflector.inflections.singular(/(n)ews$/i, '$1ews');
Inflector.inflections.singular(/([ti])a$/i, '$1um');
Inflector.inflections.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, '$1sis');
Inflector.inflections.singular(/(^analy)(sis|ses)$/i, '$1sis');
Inflector.inflections.singular(/([^f])ves$/i, '$1fe');
Inflector.inflections.singular(/(hive)s$/i, '$1');
Inflector.inflections.singular(/(tive)s$/i, '$1');
Inflector.inflections.singular(/([lr])ves$/i, '$1f');
Inflector.inflections.singular(/(c[lr])oves$/i, '$1ove');
Inflector.inflections.singular(/([^aeiouy]|qu)ies$/i, '$1y');
Inflector.inflections.singular(/(s)eries$/i, '$1eries');
Inflector.inflections.singular(/(m)ovies$/i, '$1ovie');
Inflector.inflections.singular(/(x|ch|ss|sh)es$/i, '$1');
Inflector.inflections.singular(/^(m|l)ice$/i, '$1ouse');
Inflector.inflections.singular(/(bus)(es)?$/i, '$1');
Inflector.inflections.singular(/(o)es$/i, '$1');
Inflector.inflections.singular(/^(toe)s$/i, '$1');
Inflector.inflections.singular(/(shoe)s$/i, '$1');
Inflector.inflections.singular(/(cris|test)(is|es)$/i, '$1is');
Inflector.inflections.singular(/^(a)x[ie]s$/i, '$1xis');
Inflector.inflections.singular(/(octop|vir)(us|i)$/i, '$1us');
Inflector.inflections.singular(/(alias|status)(es)?$/i, '$1');
Inflector.inflections.singular(/^(ox)en/i, '$1');
Inflector.inflections.singular(/(vert|ind)ices$/i, '$1ex');
Inflector.inflections.singular(/(matr)ices$/i, '$1ix');
Inflector.inflections.singular(/(quiz)zes$/i, '$1');
Inflector.inflections.singular(/(database)s$/i, '$1');

Inflector.inflections.irregular('person', 'people');
Inflector.inflections.irregular('man', 'men');
Inflector.inflections.irregular('child', 'children');
Inflector.inflections.irregular('sex', 'sexes');
Inflector.inflections.irregular('move', 'moves');
Inflector.inflections.irregular('zombie', 'zombies');

Inflector.inflections.uncountable('equipment',
  'information', 'rice', 'money', 'species', 'series', 'fish',
  'sheep', 'jeans', 'police');

module.exports = (function() {

  var STRPROTO = String.prototype;

  function isRegExp(test) {
    return test instanceof RegExp;
  };

  STRPROTO.sub = function(test, rep) {
    var regex;
    if (isRegExp(test))    regex = test;
    if (!isRegExp(test))   regex = new RegExp(test);
    if (this.match(regex)) return this.replace(regex, rep);
  };

  STRPROTO.isEmpty = function() { return this.length === 0; };

  STRPROTO.pluralize = function() {
    return applyInflections(this, Inflector.inflections.plurals);
  };

  STRPROTO.singularize = function() {
    return applyInflections(this, Inflector.inflections.singulars);
  };

  // STRPROTO.camelize = function(term, lowercase_first_letter) {
  //   var string = term.toString();
  //   if (lowercase_first_letter) {
  //     string = string.sub(/^[a-z\d]*/g, )
  //   }
  // };

  //     def camelize(term, uppercase_first_letter = true)
  //   string = term.to_s
  //   if uppercase_first_letter
  //     string = string.sub(/^[a-z\d]*/) { inflections.acronyms[$&] || $&.capitalize }
  //   else
  //     string = string.sub(/^(?:#{inflections.acronym_regex}(?=\b|[A-Z_])|\w)/) { $&.downcase }
  //   end
  //   string.gsub!(/(?:_|(\/))([a-z\d]*)/i) { "#{$1}#{inflections.acronyms[$2] || $2.capitalize}" }
  //   string.gsub!('/', '::')
  //   string
  // end

  function applyInflections(word, rules) {
    var returner, result = _.clone(word.toString());
    if (result.isEmpty() || _.include(Inflector.inflections.uncountables, result.toLowerCase())) return result;
    for (var i in rules) {
      var rule        = rules[i][0];
      var replacement = rules[i][1];
      if (result.sub(rule, replacement)) {
        returner = result.sub(rule, replacement);
        break;
      }
    }
    return returner;
  };
  
}).call(this);