if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'WordCountWeb'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'WordCountWeb'.");
}
var WordCountWeb = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var throwCCE = Kotlin.throwCCE;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Unit = Kotlin.kotlin.Unit;
  function main$lambda$lambda(it) {
    return it.second;
  }
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function main$lambda(it) {
    var tmp$, tmp$_0, tmp$_1;
    var theText = (Kotlin.isType(tmp$ = ensureNotNull(document.getElementById('wordTextId')), HTMLInputElement) ? tmp$ : throwCCE()).value;
    var words = split(replace(replace(replace(replace(replace(theText, '\n', ' '), ',', ''), '.', ''), '!', ''), '?', ''), [' ']);
    var wordMap = LinkedHashMap_init();
    tmp$_0 = words.iterator();
    while (tmp$_0.hasNext()) {
      var word = tmp$_0.next();
      var capitalize_0 = capitalize(word);
      if (wordMap.get_11rb$(capitalize_0) == null) {
        wordMap.put_xwzc9p$(capitalize_0, 1);
      }
       else {
        var count = ensureNotNull(wordMap.get_11rb$(capitalize_0));
        var value = count + 1 | 0;
        wordMap.put_xwzc9p$(capitalize_0, value);
      }
    }
    var wordList = toList(wordMap);
    var sortedList = sortedWith(wordList, new Comparator$ObjectLiteral(compareByDescending$lambda(main$lambda$lambda)));
    var listItems = '';
    tmp$_1 = sortedList.iterator();
    while (tmp$_1.hasNext()) {
      var word_0 = tmp$_1.next();
      listItems += '<li> ' + word_0.first + ' - ' + word_0.second + '<\/li>';
    }
    ensureNotNull(document.getElementById('theList')).innerHTML = listItems;
    return Unit;
  }
  function main(args) {
    println('Hello World');
    var button = ensureNotNull(document.getElementById('buttonId'));
    button.addEventListener('click', main$lambda);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('WordCountWeb', _);
  return _;
}(typeof WordCountWeb === 'undefined' ? {} : WordCountWeb, kotlin);
