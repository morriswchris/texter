let languages = [{"description": "ABAP", "content": "ABAP"} ,{"description": "ABC", "content": "ABC"} ,{"description": "ActionScript", "content": "ActionScript"} ,{"description": "ADA", "content": "ADA"} ,{"description": "Apache_Conf", "content": "Apache_Conf"} ,{"description": "AsciiDoc", "content": "AsciiDoc"} ,{"description": "Assembly_x86", "content": "Assembly_x86"} ,{"description": "AutoHotKey", "content": "AutoHotKey"} ,{"description": "BatchFile", "content": "BatchFile"} ,{"description": "C9Search", "content": "C9Search"} ,{"description": "C_Cpp", "content": "C_Cpp"} ,{"description": "Cirru", "content": "Cirru"} ,{"description": "Clojure", "content": "Clojure"} ,{"description": "Cobol", "content": "Cobol"} ,{"description": "coffee", "content": "coffee"} ,{"description": "ColdFusion", "content": "ColdFusion"} ,{"description": "CSharp", "content": "CSharp"} ,{"description": "CSS", "content": "CSS"} ,{"description": "Curly", "content": "Curly"} ,{"description": "D", "content": "D"} ,{"description": "Dart", "content": "Dart"} ,{"description": "Diff", "content": "Diff"} ,{"description": "Dockerfile", "content": "Dockerfile"} ,{"description": "Dot", "content": "Dot"} ,{"description": "Dummy", "content": "Dummy"} ,{"description": "DummySyntax", "content": "DummySyntax"} ,{"description": "Eiffel", "content": "Eiffel"} ,{"description": "EJS", "content": "EJS"} ,{"description": "Elixir", "content": "Elixir"} ,{"description": "Elm", "content": "Elm"} ,{"description": "Erlang", "content": "Erlang"} ,{"description": "Forth", "content": "Forth"} ,{"description": "FTL", "content": "FTL"} ,{"description": "Gcode", "content": "Gcode"} ,{"description": "Gherkin", "content": "Gherkin"} ,{"description": "Gitignore", "content": "Gitignore"} ,{"description": "Glsl", "content": "Glsl"} ,{"description": "golang", "content": "golang"} ,{"description": "Groovy", "content": "Groovy"} ,{"description": "HAML", "content": "HAML"} ,{"description": "Handlebars", "content": "Handlebars"} ,{"description": "Haskell", "content": "Haskell"} ,{"description": "haXe", "content": "haXe"} ,{"description": "HTML", "content": "HTML"} ,{"description": "HTML_Ruby", "content": "HTML_Ruby"} ,{"description": "INI", "content": "INI"} ,{"description": "Io", "content": "Io"} ,{"description": "Jack", "content": "Jack"} ,{"description": "Jade", "content": "Jade"} ,{"description": "Java", "content": "Java"} ,{"description": "JavaScript", "content": "JavaScript"} ,{"description": "JSON", "content": "JSON"} ,{"description": "JSONiq", "content": "JSONiq"} ,{"description": "JSP", "content": "JSP"} ,{"description": "JSX", "content": "JSX"} ,{"description": "Julia", "content": "Julia"} ,{"description": "LaTeX", "content": "LaTeX"} ,{"description": "LESS", "content": "LESS"} ,{"description": "Liquid", "content": "Liquid"} ,{"description": "Lisp", "content": "Lisp"} ,{"description": "LiveScript", "content": "LiveScript"} ,{"description": "LogiQL", "content": "LogiQL"} ,{"description": "LSL", "content": "LSL"} ,{"description": "Lua", "content": "Lua"} ,{"description": "LuaPage", "content": "LuaPage"} ,{"description": "Lucene", "content": "Lucene"} ,{"description": "Makefile", "content": "Makefile"} ,{"description": "Markdown", "content": "Markdown"} ,{"description": "Mask", "content": "Mask"} ,{"description": "MATLAB", "content": "MATLAB"} ,{"description": "MEL", "content": "MEL"} ,{"description": "MUSHCode", "content": "MUSHCode"} ,{"description": "MySQL", "content": "MySQL"} ,{"description": "Nix", "content": "Nix"} ,{"description": "ObjectiveC", "content": "ObjectiveC"} ,{"description": "OCaml", "content": "OCaml"} ,{"description": "Pascal", "content": "Pascal"} ,{"description": "Perl", "content": "Perl"} ,{"description": "pgSQL", "content": "pgSQL"} ,{"description": "PHP", "content": "PHP"} ,{"description": "Powershell", "content": "Powershell"} ,{"description": "Praat", "content": "Praat"} ,{"description": "Prolog", "content": "Prolog"} ,{"description": "Properties", "content": "Properties"} ,{"description": "Protobuf", "content": "Protobuf"} ,{"description": "Python", "content": "Python"} ,{"description": "R", "content": "R"} ,{"description": "RDoc", "content": "RDoc"} ,{"description": "RHTML", "content": "RHTML"} ,{"description": "Ruby", "content": "Ruby"} ,{"description": "Rust", "content": "Rust"} ,{"description": "SASS", "content": "SASS"} ,{"description": "SCAD", "content": "SCAD"} ,{"description": "Scala", "content": "Scala"} ,{"description": "Scheme", "content": "Scheme"} ,{"description": "SCSS", "content": "SCSS"} ,{"description": "SH", "content": "SH"} ,{"description": "SJS", "content": "SJS"} ,{"description": "Smarty", "content": "Smarty"} ,{"description": "snippets", "content": "snippets"} ,{"description": "Soy_Template", "content": "Soy_Template"} ,{"description": "Space", "content": "Space"} ,{"description": "SQL", "content": "SQL"} ,{"description": "Stylus", "content": "Stylus"} ,{"description": "SVG", "content": "SVG"} ,{"description": "Tcl", "content": "Tcl"} ,{"description": "Tex", "content": "Tex"} ,{"description": "Text", "content": "Text"} ,{"description": "Textile", "content": "Textile"} ,{"description": "Toml", "content": "Toml"} ,{"description": "Twig", "content": "Twig"} ,{"description": "Typescript", "content": "Typescript"} ,{"description": "Vala", "content": "Vala"} ,{"description": "VBScript", "content": "VBScript"} ,{"description": "Velocity", "content": "Velocity"} ,{"description": "Verilog", "content": "Verilog"} ,{"description": "VHDL", "content": "VHDL"} ,{"description": "XML", "content": "XML"} ,{"description": "XQuery", "content": "XQuery"} ,{"description": "YAML", "content": "YAML"}];

chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    suggest(languages.filter(function(language){
      return language.content.toLowerCase().indexOf(text.toLowerCase()) >= 0;
    }));
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: `${chrome.extension.getURL("index.html")}?${text}`});
    });
  });
