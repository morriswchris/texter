let syntax = window.location.search.substring(1);
let editor = syntax || "markdown";

// Update Title
document.getElementsByTagName("title").innerText=`Texter | ${syntax}`;

// Setup editor
e = ace.edit("editor");
e.setTheme("ace/theme/monokai");
e.getSession().setMode("ace/mode/" + editor.toLowerCase());

// focus
document.getElementById("editor").focus();
e.gotoLine(0);
