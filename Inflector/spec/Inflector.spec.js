'use strict';

describe('Inflector', function() {

  var Inflector;
  beforeEach(function() {
    Inflector = require('../lib/Inflector');
  });

  describe('String#sub', function() {
    it('is different from String#replace because it returns undefined if no match is found', function() {
      expect('hello'.replace('hi', 'hello')).toEqual('hello');
      expect('hello'.sub('hi', 'hello')).toEqual(undefined);
    });
  });

  describe('String#isEmpty', function() {
    it('returns true if the string has a length of zero', function() {
      expect('hi'.isEmpty()).toEqual(false);
      expect(''.isEmpty()).toEqual(true);
    });
  });

  describe('String#pluralize', function() {

    it('pluralizes words', function() {
      expect('post'.pluralize()).toEqual('posts');
      expect('greens'.pluralize()).toEqual('greens');
      expect('axis'.pluralize()).toEqual('axes');
      expect('testis'.pluralize()).toEqual('testes');
      expect('octopus'.pluralize()).toEqual('octopi');
      expect('diagnosis'.pluralize()).toEqual('diagnoses');
      expect('analysis'.pluralize()).toEqual('analyses');
      expect('virus'.pluralize()).toEqual('viruses');
      expect('status'.pluralize()).toEqual('statuses');
      expect('alias'.pluralize()).toEqual('aliases');
      expect('bus'.pluralize()).toEqual('buses');
      expect('buffalo'.pluralize()).toEqual('buffaloes');
      expect('tomato'.pluralize()).toEqual('tomatoes');
      expect('tium'.pluralize()).toEqual('tia');
      expect('tia'.pluralize()).toEqual('tia');
      expect('fife'.pluralize()).toEqual('fives');
      expect('hive'.pluralize()).toEqual('hives');
      expect('soliloquy'.pluralize()).toEqual('soliloquies');
      expect('ex'.pluralize()).toEqual('exes');
      expect('matrix'.pluralize()).toEqual('matrices');
      expect('vertex'.pluralize()).toEqual('vertices');
      expect('index'.pluralize()).toEqual('indices');
      expect('mouse'.pluralize()).toEqual('mice');
      expect('louse'.pluralize()).toEqual('lice');
      expect('ox'.pluralize()).toEqual('oxen');
      expect('oxen'.pluralize()).toEqual('oxen');
      expect('quiz'.pluralize()).toEqual('quizzes');
      expect('person'.pluralize()).toEqual('people');
      expect('man'.pluralize()).toEqual('men');
      expect('woman'.pluralize()).toEqual('women');
      expect('child'.pluralize()).toEqual('children');
      expect('sex'.pluralize()).toEqual('sexes');
      expect('move'.pluralize()).toEqual('moves');
      expect('cow'.pluralize()).toEqual('cows');
      expect('zombie'.pluralize()).toEqual('zombies');
      expect('equipment'.pluralize()).toEqual('equipment');
      expect('information'.pluralize()).toEqual('information');
      expect('rice'.pluralize()).toEqual('rice');
      expect('money'.pluralize()).toEqual('money');
      expect('species'.pluralize()).toEqual('species');
      expect('series'.pluralize()).toEqual('series');
      expect('sheep'.pluralize()).toEqual('sheep');
      expect('jeans'.pluralize()).toEqual('jeans');
      expect('police'.pluralize()).toEqual('police')
    });

  });

  describe('String#singularize', function() {

    it('singularizes words', function() {
      expect('posts'.singularize()).toEqual('post');
      expect('sweetness'.singularize()).toEqual('sweetness');
      expect('sweetnesses'.singularize()).toEqual('sweetness');
      expect('news'.singularize()).toEqual('news');
      expect('tia'.singularize()).toEqual('tium');
      expect('analyses'.singularize()).toEqual('analysis');
      expect('diagnoses'.singularize()).toEqual('diagnosis');
      expect('parantheses'.singularize()).toEqual('paranthesis');
      expect('prognoses'.singularize()).toEqual('prognosis');
      expect('synopses'.singularize()).toEqual('synopsis');
      expect('theses'.singularize()).toEqual('thesis');
      expect('fives'.singularize()).toEqual('fife');
      expect('hives'.singularize()).toEqual('hive');
      expect('tives'.singularize()).toEqual('tive');
      expect('cloves'.singularize()).toEqual('clove');
      expect('soliloquies'.singularize()).toEqual('soliloquy');
      expect('series'.singularize()).toEqual('series');
      expect('movies'.singularize()).toEqual('movie');
      expect('fishes'.singularize()).toEqual('fish');
      expect('lice'.singularize()).toEqual('louse');
      expect('oreos'.singularize()).toEqual('oreo');
      expect('toes'.singularize()).toEqual('toe');
      expect('potatoes'.singularize()).toEqual('potato');
      expect('shoes'.singularize()).toEqual('shoe');
      expect('crises'.singularize()).toEqual('crisis');
      expect('testes'.singularize()).toEqual('testis');
      expect('axes'.singularize()).toEqual('axis');
      expect('octopi'.singularize()).toEqual('octopus');
      expect('aliases'.singularize()).toEqual('alias');
      expect('oxen'.singularize()).toEqual('ox');
      expect('vertices'.singularize()).toEqual('vertex');
      expect('matrices'.singularize()).toEqual('matrix');
      expect('quizzes'.singularize()).toEqual('quiz');
      expect('databases'.singularize()).toEqual('database');
      expect('people'.singularize()).toEqual('person');
      expect('men'.singularize()).toEqual('man');
      expect('women'.singularize()).toEqual('woman');
      expect('children'.singularize()).toEqual('child');
      expect('sexes'.singularize()).toEqual('sex');
      expect('moves'.singularize()).toEqual('move');
      expect('cows'.singularize()).toEqual('cow');
      expect('zombies'.singularize()).toEqual('zombie');
      expect('equipment'.singularize()).toEqual('equipment');
      expect('information'.singularize()).toEqual('information');
      expect('rice'.singularize()).toEqual('rice');
      expect('money'.singularize()).toEqual('money');
      expect('species'.singularize()).toEqual('species');
      expect('series'.singularize()).toEqual('series');
      expect('sheep'.singularize()).toEqual('sheep');
      expect('jeans'.singularize()).toEqual('jeans');
      expect('police'.singularize()).toEqual('police');
    });

  });

  describe('String#camelize', function() {
    it('changes a string to camelcase', function() {
    // By default, +camelize+ converts strings to UpperCamelCase. If the argument
    // to +camelize+ is set to <tt>:lower</tt> then +camelize+ produces
    // lowerCamelCase.
    
    // +camelize+ will also convert '/' to '::' which is useful for converting
    // paths to namespaces.
    
    //   'active_model'.camelize                # => "ActiveModel"
    //   'active_model'.camelize(:lower)        # => "activeModel"
    //   'active_model/errors'.camelize         # => "ActiveModel::Errors"
    //   'active_model/errors'.camelize(:lower) # => "activeModel::Errors"
    
    // As a rule of thumb you can think of +camelize+ as the inverse of
    // +underscore+, though there are cases where that does not hold:
    
    //   'SSLError'.underscore.camelize # => "SslError"

    });
  });

  // # Returns the plural form of the word in the string.
  // #
  // # If passed an optional +locale+ parameter, the word will be
  // # pluralized using rules defined for that language. By default,
  // # this parameter is set to <tt>:en</tt>.
  // #
  // #   'post'.pluralize             # => "posts"
  // #   'octopus'.pluralize          # => "octopi"
  // #   'sheep'.pluralize            # => "sheep"
  // #   'words'.pluralize            # => "words"
  // #   'CamelOctopus'.pluralize     # => "CamelOctopi"
  // #   'ley'.pluralize(:es)         # => "leyes"

});