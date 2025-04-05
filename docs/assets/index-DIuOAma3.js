(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();var n=`       
CEEFAX 1 302  Thue 20 Oct     21:39

BBC              FOOTBALL

ERIKSSON RULES OUT SWEDEN SWITCH          303
Cattermole blow stuns Sunderland          304
Huth pleads guilty to FA charge           305
Kenny drugs ban appeal dismissed          306
Notts County takeover is approved         307
Beckham 'should go to World Cup'          308
Wenger cools Walcott injury fears         309
League awaits Briatore F1 ruling          310
West Ham to challenge FA charges          311

CHAMPIONS LEAGUE ' GOAL UPDATES           316
Championship            317
JP Trophy latest        319
In-vision updates       336 Vidiprinter

Wed team news     Champions League        315
News in brief     323  Football gossip    339

FIXTURES/RESULTS/TABLES SECTION           339

How Ceefax switches to Digital TV 697
`;document.querySelector("#teletext").innerHTML=n.trim();
