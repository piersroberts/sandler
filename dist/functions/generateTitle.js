!function(t,e){for(var s in e)t[s]=e[s]}(exports,function(t){var e={};function s(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=t,s.c=e,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){var r=s(1),i=r.createGrammar({attempt:["has to","wants to","tries to","is tricked in to","loses a bet and has to","confusingly tries to","mistakingly gets to"],modified_attempt:["#attempt#","#attempt#","#attempt#","#attempt#","almost #attempt#","nearly #attempt#"],premise:["battle","join forces with","convince","win a dance contest against","tickle","wrestle","hide from","speculate the origin of","gay flirt with","dress up as","feed","go twos up on","frighten","sell his business to","play snooker for","work for","outmanoeuvre","chaufer around","bake a cake for","be a butler for","trick","spend some quality time with","think about","find out the secret of","come up with a name for","prepare breakfast for","write a song about"],quality:["mythical ","big fat ","cis male ","hungry ","terrible ","closeted ","genius ","autistic ","snooty ","vegetarian ","sneaky ","recovering ",""],success_level:["a struggling","a successful","an up and coming","a has-been","a washed up","a radical","a dedicated","an experimental"],artist:["writer","juggler","actor","dancer","quiz show host","rapper","method actor"],character:["a #quality#baseball coach","Mona Lisa","a foreign leader","a tramp","Hitler's mum","a futuristic #job#","his own sister","a really #emotion# #job#","Elvis Presley","Cool Hand Luke","a baddy from a recent videogame","a #emotion# black lady","the alpha dog","a famous cricketer","Prince Charles","an army general","3 different characters","an Internet billionare","a #quality#husband","someones pet","#job#-dog","#success_level# #artist#","an animated princess"],emotion:["miserable","enthusiastic","drunk","racist","forgetful","clumsy","unethical","greedy","bored"],job:["postman","ghost","bank manager","taxi driver","hairdresser","balet dancer","chef","police cop","paramedic","estate agent","man","girl"],role:[" pretends to be #character# and"," is #character# and"," plays #character# and",""],country:["an alternative Britain","Brazil","Spain","Neptune","the Gypsies","Hearts","the prom"],region:["the room","the world","the whole country","ancient Rome","a hotel for dogs"],animal:["bird","hamster","baby","goldfish","animal","creature","cat","ferret"],antagonist:["a pope","a mayor","his friend's dad","mechahitler","the King of #country#","his shadow","Dracula","some boys","everyone","some dogs","every #job# in #region#","a newspaper guy","a tiny little #animal#"],macguffin:[],industry:["narcotics","dairy","financial","toy","weapons","pet food","meat product"],presidents:["of America","","of a major #industry# company"],opportunity:["save","take down","marry","get a sneaky kiss from","please","win the heart of","dance with"],prize:["a car","twenty quid","the election!","some more Lego","a lifetime of happiness","some more tokens","the game!"],resolution:["#opportunity# the president #presidents#","save the world","#opportunity# his #emotion# wife","inherit a fortune","win #prize#","#opportunity# the Prime Minister of England","#opportunity# his boss","#opportunity# his childhood crush","#opportunity# the other main character","save the day","make everyone happy again","make the leap back home","get paid","go home","go back to his own planet"],plot:["in order to #resolution#","because he needs to #resolution#","so that he can #resolution#","because he's #emotion#"],origin:["Adam Sandler#role# #modified_attempt# #premise# #antagonist# #plot#"]});i.addModifiers(r.baseEngModifiers),e.handler=function(t,e,s){s(null,{statusCode:200,body:i.flatten("#origin#")})}},function(t,e){var s=function(){var t=function(t,e,r){this.errors=[],void 0===r.raw&&(this.errors.push("Empty input for node"),r.raw=""),t instanceof s.Grammar?(this.grammar=t,this.parent=null,this.depth=0,this.childIndex=0):(this.grammar=t.grammar,this.parent=t,this.depth=t.depth+1,this.childIndex=e),this.raw=r.raw,this.type=r.type,this.isExpanded=!1,this.grammar||this.errors.push("No grammar specified for this node "+this)};function e(t,e){this.node=t;var s=e.split(":");this.target=s[0],1===s.length?this.type=2:(this.rule=s[1],"POP"===this.rule?this.type=1:this.type=0)}function r(t,e){this.raw=e,this.grammar=t,this.falloff=1,Array.isArray(e)?this.defaultRules=e:("string"==typeof e||e instanceof String)&&(this.defaultRules=[e])}t.prototype.toString=function(){return"Node('"+this.raw+"' "+this.type+" d:"+this.depth+")"},t.prototype.expandChildren=function(e,r){if(this.children=[],this.finishedText="",this.childRule=e,void 0!==this.childRule){var i=s.parse(e);i.errors.length>0&&(this.errors=this.errors.concat(i.errors));for(var a=0;a<i.length;a++)this.children[a]=new t(this,a,i[a]),r||this.children[a].expand(r),this.finishedText+=this.children[a].finishedText}else this.errors.push("No child rule provided, can't expand children")},t.prototype.expand=function(t){if(!this.isExpanded)switch(this.isExpanded=!0,this.expansionErrors=[],this.type){case-1:this.expandChildren(this.raw,t);break;case 0:this.finishedText=this.raw;break;case 1:this.preactions=[],this.postactions=[];var r=s.parseTag(this.raw);this.symbol=r.symbol,this.modifiers=r.modifiers;for(var i=0;i<r.preactions.length;i++)this.preactions[i]=new e(this,r.preactions[i].raw);for(i=0;i<r.postactions.length;i++);for(i=0;i<this.preactions.length;i++)0===this.preactions[i].type&&this.postactions.push(this.preactions[i].createUndo());for(i=0;i<this.preactions.length;i++)this.preactions[i].activate();this.finishedText=this.raw;var a=this.grammar.selectRule(this.symbol,this,this.errors);this.expandChildren(a,t);for(i=0;i<this.modifiers.length;i++){var n=this.modifiers[i],o=[];if(n.indexOf("(")>0){var h=/\(([^)]+)\)/.exec(this.modifiers[i]);if(!h||h.length<2);else{o=h[1].split(",");n=this.modifiers[i].substring(0,n.indexOf("("))}}var l=this.grammar.modifiers[n];l?this.finishedText=l(this.finishedText,o):(this.errors.push("Missing modifier "+n),this.finishedText+="((."+n+"))")}for(i=0;i<this.postactions.length;i++)this.postactions[i].activate();break;case 2:this.action=new e(this,this.raw),this.action.activate(),this.finishedText=""}},t.prototype.clearEscapeChars=function(){this.finishedText=this.finishedText.replace(/\\\\/g,"DOUBLEBACKSLASH").replace(/\\/g,"").replace(/DOUBLEBACKSLASH/g,"\\")},e.prototype.createUndo=function(){return 0===this.type?new e(this.node,this.target+":POP"):null},e.prototype.activate=function(){var e=this.node.grammar;switch(this.type){case 0:this.ruleSections=this.rule.split(","),this.finishedRules=[],this.ruleNodes=[];for(var s=0;s<this.ruleSections.length;s++){var r=new t(e,0,{type:-1,raw:this.ruleSections[s]});r.expand(),this.finishedRules.push(r.finishedText)}e.pushRules(this.target,this.finishedRules,this);break;case 1:e.popRules(this.target);break;case 2:e.flatten(this.target,!0)}},e.prototype.toText=function(){switch(this.type){case 0:return this.target+":"+this.rule;case 1:return this.target+":POP";case 2:return"((some function))";default:return"((Unknown Action))"}},r.prototype.selectRule=function(t){if(this.conditionalRule){var e=this.grammar.expand(this.conditionalRule,!0);if(this.conditionalValues[e])if(null!=(r=this.conditionalValues[e].selectRule(t)))return r}if(this.ranking)for(var s=0;s<this.ranking.length;s++){var r;if(null!=(r=this.ranking.selectRule()))return r}if(void 0!==this.defaultRules){var i=0,a=this.distribution;switch(a||(a=this.grammar.distribution),a){case"shuffle":this.shuffledDeck&&0!==this.shuffledDeck.length||(this.shuffledDeck=function(t,e){var s,r,i=t.length;for(;0!==i;)r=Math.floor(Math.random()*i),s=t[i-=1],t[i]=t[r],t[r]=s;return t}(Array.apply(null,{length:this.defaultRules.length}).map(Number.call,Number),this.falloff)),i=this.shuffledDeck.pop();break;case"weighted":t.push("Weighted distribution not yet implemented");break;case"falloff":t.push("Falloff distribution not yet implemented");break;default:i=Math.floor(Math.pow(Math.random(),this.falloff)*this.defaultRules.length)}return this.defaultUses||(this.defaultUses=[]),this.defaultUses[i]=++this.defaultUses[i]||1,this.defaultRules[i]}return t.push("No default rules defined for "+this),null},r.prototype.clearState=function(){this.defaultUses&&(this.defaultUses=[])};var i=function(t,e,s){this.key=e,this.grammar=t,this.rawRules=s,this.baseRules=new r(this.grammar,s),this.clearState()};i.prototype.clearState=function(){this.stack=[this.baseRules],this.uses=[],this.baseRules.clearState()},i.prototype.pushRules=function(t){var e=new r(this.grammar,t);this.stack.push(e)},i.prototype.popRules=function(){this.stack.pop()},i.prototype.selectRule=function(t,e){return this.uses.push({node:t}),0===this.stack.length?(e.push("The rule stack for '"+this.key+"' is empty, too many pops?"),"(("+this.key+"))"):this.stack[this.stack.length-1].selectRule()},i.prototype.getActiveRules=function(){return 0===this.stack.length?null:this.stack[this.stack.length-1].selectRule()},i.prototype.rulesToJSON=function(){return JSON.stringify(this.rawRules)};var a=function(t,e){this.modifiers={},this.loadFromRawObj(t)};function n(t){var e=t.toLowerCase();return"a"===e||"e"===e||"i"===e||"o"===e||"u"===e}a.prototype.clearState=function(){for(var t=Object.keys(this.symbols),e=0;e<t.length;e++)this.symbols[t[e]].clearState()},a.prototype.addModifiers=function(t){for(var e in t)t.hasOwnProperty(e)&&(this.modifiers[e]=t[e])},a.prototype.loadFromRawObj=function(t){if(this.raw=t,this.symbols={},this.subgrammars=[],this.raw)for(var e in this.raw)this.raw.hasOwnProperty(e)&&(this.symbols[e]=new i(this,e,this.raw[e]))},a.prototype.createRoot=function(e){return new t(this,0,{type:-1,raw:e})},a.prototype.expand=function(t,e){var s=this.createRoot(t);return s.expand(),e||s.clearEscapeChars(),s},a.prototype.flatten=function(t,e){return this.expand(t,e).finishedText},a.prototype.toJSON=function(){for(var t=Object.keys(this.symbols),e=[],s=0;s<t.length;s++){var r=t[s];e.push(' "'+r+'" : '+this.symbols[r].rulesToJSON())}return"{\n"+e.join(",\n")+"\n}"},a.prototype.pushRules=function(t,e,s){void 0===this.symbols[t]?(this.symbols[t]=new i(this,t,e),s&&(this.symbols[t].isDynamic=!0)):this.symbols[t].pushRules(e)},a.prototype.popRules=function(t){this.symbols[t]||this.errors.push("Can't pop: no symbol for key "+t),this.symbols[t].popRules()},a.prototype.selectRule=function(t,e,s){if(this.symbols[t])return this.symbols[t].selectRule(e,s);for(var r=0;r<this.subgrammars.length;r++)if(this.subgrammars[r].symbols[t])return this.subgrammars[r].symbols[t].selectRule();return s.push("No symbol for '"+t+"'"),"(("+t+"))"};var o={replace:function(t,e){return t.replace(new RegExp(e[0].replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),e[1])},capitalizeAll:function(t){for(var e,s="",r=!0,i=0;i<t.length;i++)(e=t.charAt(i))>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"?r?(s+=t.charAt(i).toUpperCase(),r=!1):s+=t.charAt(i):(r=!0,s+=t.charAt(i));return s},capitalize:function(t){return t.charAt(0).toUpperCase()+t.substring(1)},a:function(t){if(t.length>0){if("u"===t.charAt(0).toLowerCase()&&t.length>2&&"i"===t.charAt(2).toLowerCase())return"a "+t;if(n(t.charAt(0)))return"an "+t}return"a "+t},firstS:function(t){console.log(t);var e=t.split(" "),s=o.s(e[0])+" "+e.slice(1).join(" ");return console.log(s),s},s:function(t){switch(t.charAt(t.length-1)){case"s":case"h":case"x":return t+"es";case"y":return n(t.charAt(t.length-2))?t+"s":t.substring(0,t.length-1)+"ies";default:return t+"s"}},ed:function(t){switch(t.charAt(t.length-1)){case"s":return t+"ed";case"e":return t+"d";case"h":case"x":return t+"ed";case"y":return n(t.charAt(t.length-2))?t+"d":t.substring(0,t.length-1)+"ied";default:return t+"ed"}}};return(s={createGrammar:function(t){return new a(t)},parseTag:function(t){for(var e={symbol:void 0,preactions:[],postactions:[],modifiers:[]},r=s.parse(t),i=void 0,a=0;a<r.length;a++)if(0===r[a].type){if(void 0!==i)throw"multiple main sections in "+t;i=r[a].raw}else e.preactions.push(r[a]);if(void 0===i);else{var n=i.split(".");e.symbol=n[0],e.modifiers=n.slice(1)}return e},parse:function(t){var e=0,s=!1,r=[],i=!1,a=[],n=0,o="",h=void 0;if(null===t)return(r=[]).errors=a,r;function l(e,s,i){var n;s-e<1&&(1===i&&a.push(e+": empty tag"),2===i&&a.push(e+": empty action")),n=void 0!==h?o+"\\"+t.substring(h+1,s):t.substring(e,s),r.push({type:i,raw:n}),h=void 0,o=""}for(var u=0;u<t.length;u++){if(i)i=!1;else switch(t.charAt(u)){case"[":0!==e||s||(n<u&&l(n,u,0),n=u+1),e++;break;case"]":0!==--e||s||(l(n,u,2),n=u+1);break;case"#":0===e&&(s?(l(n,u,1),n=u+1):(n<u&&l(n,u,0),n=u+1),s=!s);break;case"\\":i=!0,o+=t.substring(n,u),n=u+1,h=u}}return n<t.length&&l(n,t.length,0),s&&a.push("Unclosed tag"),e>0&&a.push("Too many ["),e<0&&a.push("Too many ]"),(r=r.filter((function(t){return 0!==t.type||0!==t.raw.length}))).errors=a,r}}).baseEngModifiers=o,s.TraceryNode=t,s.Grammar=a,s.Symbol=i,s.RuleSet=r,s}();t.exports=s}]));