import './style.css'

var my_text = ""
for(let i = 0; i < 24; i++)
{
    for(let j = 0; j < 40; j++)
    {
        my_text += String.fromCharCode('a'.charCodeAt(0) + j)
    }
    my_text += "\n"
}

var my_text_2 = `       
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
`
document.querySelector<HTMLDivElement>('#teletext')!.innerHTML = my_text_2.trim()
