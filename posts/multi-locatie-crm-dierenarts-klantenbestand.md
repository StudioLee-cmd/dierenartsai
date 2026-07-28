---
title: "Multi-locatie CRM voor dierenartsen: één klantenbestand"
slug: multi-locatie-crm-dierenarts-klantenbestand
date: "2026-07-28"
excerpt: "Groeit je praktijk naar twee of drie panden, dan splitst je klantenbestand vanzelf. Zo houd je één dossier per dier over alle vestigingen heen."
image: "/images/blog/multi-locatie-crm-dierenarts-klantenbestand.jpg"
authorSlug: "tim-van-der-lee"
tags: ["CRM", "Automatisering", "Dierenarts"]
cluster: "automatisering"
---

Een mevrouw loopt op donderdagochtend binnen bij je tweede vestiging. Haar kat is er vorig jaar geopereerd, alleen was dat in het pand drie dorpen verderop. De assistente achter de balie zoekt, vindt niets, en maakt een nieuwe kaart aan. Naam, geboortedatum, chipnummer. Twintig minuten later belt ze toch maar even naar de andere locatie om te vragen wat er destijds precies is gedaan.

Dat telefoontje kost je twee keer geld. Een keer bij haar, een keer bij de collega die haar te woord staat. En de kat heeft nu twee dossiers.

Zo ontstaat het probleem waar bijna elke groeiende dierenartsenpraktijk tegenaan loopt en dat vrijwel nergens beschreven staat: je klantenbestand splitst zich stilletjes op zodra je meer dan één pand hebt. Niet in één klap, maar dossier voor dossier, tot niemand meer weet welke versie de juiste is.

## Waarom het bestand vanzelf uit elkaar valt

De meeste praktijken groeien niet volgens plan naar drie vestigingen. Ze nemen een praktijk over, of ze openen een dependance omdat de wachtlijst te lang werd. En bij zo'n overname komt er een compleet tweede systeem mee, met eigen klanten, eigen tarieven en eigen gewoonten.

Dat systeem naast het bestaande laten draaien voelt op dat moment als de veilige keuze. Niemand hoeft om te leren, er gaat geen data verloren, en het werkt tenslotte allebei. Het probleem komt pas later, en het komt op vier plekken tegelijk:

- **Dubbele dossiers.** Hetzelfde dier staat op twee locaties onder een net iets andere naam. Welke van de twee heeft de actuele vaccinatiestatus?
- **Herinneringen vanaf de verkeerde plek.** De jaarlijkse oproep gaat uit vanuit het systeem waar het dier het laatst is geweest, terwijl het baasje intussen naar de dichterbij gelegen vestiging is overgestapt.
- **Een agenda die niet weet wat de andere doet.** De controle staat ingepland op locatie A, het dier komt binnen bij B, en de collega daar begint blanco.
- **Cijfers die niet optellen.** Je kunt niet zien hoeveel klanten je écht hebt, want een deel telt twee keer mee.

Geen van die vier is dramatisch op de dag dat hij gebeurt. Bij elkaar bepalen ze wel of je praktijk aanvoelt als één bedrijf of als twee losse praktijken die toevallig hetzelfde logo delen.

## Eén database, en een veld dat locatie heet

De oplossing is minder ingewikkeld dan de meeste mensen denken, en het is bijna altijd dezelfde: **één klantenbestand, met de vestiging als eigenschap van de afspraak in plaats van als eigenschap van de klant.**

Dat klinkt als een detail, maar het is de hele beslissing. Een klant hoort niet bij een pand. Een klant hoort bij jouw praktijk. Waar hij toevallig binnenloopt is een kenmerk van dat bezoek, net als de tijd en de behandelend dierenarts. Zet je het andersom, en maak je de vestiging eigenaar van de klant, dan bouw je de splitsing er zelf in.

Praktisch betekent dat drie dingen in je [crm voor dierenartsen](/crm):

1. **Eén klant- en dieren-record, gedeeld over alle panden.** Iedereen ziet dezelfde historie, ongeacht waar hij inlogt.
2. **Een locatieveld op de afspraak, de factuur en de voorraadregel.** Daarmee kun je alsnog per pand rapporteren zonder de data te scheiden.
3. **Een voorkeursvestiging op de klantkaart.** Dat is een voorkeur, geen slot. Ze mag afwijken van waar de klant vandaag zit.

Punt 2 is degene die praktijkeigenaren over de streep trekt, want de angst is meestal dat je met één bestand geen zicht meer houdt op hoe de afzonderlijke vestigingen presteren. Het omgekeerde is waar. Met één bestand en een locatieveld kun je pas echt vergelijken, omdat beide panden dan met dezelfde definities meten.

Welke velden er verder op zo'n gedeelde kaart horen hebben we los uitgewerkt in het stuk over [welke velden je op de patiëntkaart zet](/blog/dierenarts-crm-patientgegevens-terugkomende-klanten).

![Assistente houdt een chiplezer tegen een kat in een reismand op de balie, terwijl de hand van het baasje op de rand van de mand rust](/images/blog/multi-locatie-crm-dierenarts-klantenbestand-2.jpg)

## Wie mag wat zien: de vraag die je vooraf moet beantwoorden

Zodra alles in één bestand staat, komt de vraag die je bij twee losse systemen nooit hoefde te stellen. Mag een assistente op locatie C de volledige historie inzien van een dier dat altijd bij A komt?

Het antwoord is bijna altijd ja voor de medische inhoud, en genuanceerder voor de rest. Een praktische verdeling die in de meeste praktijken werkt:

- **Medisch dossier: overal zichtbaar.** Als een dier ergens binnenkomt, moet de dierenarts kunnen zien wat er is gebeurd. Alles anders is onverantwoord.
- **Financieel: zichtbaar, niet bewerkbaar.** De balie op elke locatie moet openstaande posten kunnen zien, maar kwijtschelden of corrigeren blijft bij een beperkte groep.
- **Persoonlijke notities over de klant: beperkt.** Een aantekening als "belt vaak buiten openingstijd" is bruikbaar voor de balie en ongemakkelijk als de klant hem via een inzageverzoek terugziet. Wees hier terughoudend, ongeacht wie het kan lezen.

Leg dit vast voordat je migreert, niet erna. Rechten achteraf terugdraaien in een systeem waar dertig mensen al aan gewend zijn kost je meer discussie dan de hele overzetting.

## De migratie: waar het in de praktijk misgaat

De grootste fout bij het samenvoegen van twee bestanden is dat mensen beginnen met importeren. Begin met vergelijken.

**Zoek eerst de overlap.** Draai beide bestanden op chipnummer tegen elkaar aan, en daarna op de combinatie achternaam plus postcode. Het chipnummer is je sterke signaal, de naam is het zwakke: dezelfde kat staat op de ene locatie als Muis en op de andere als Muisje.

**Kies per dubbel welke de leidende is** en behandel de tweede als een aanvulling, niet als een concurrent. In de praktijk is dat bijna altijd het dossier met de meest recente medische gebeurtenis, niet het oudste.

**Trek de datumvelden gelijk.** Vaccinatie-vervaldata, laatste controle, gewichtsmetingen. Als deze twee systemen ooit los hebben gedraaid, staan hier verschillen in, en dat is precies het veld waar je oproepen op gaat afvuren.

**Draai de eerste maand dubbel.** Niet omdat je het oude systeem nodig hebt, maar omdat je wilt kunnen terugkijken als iemand zegt dat er iets mist. Zet er een einddatum op, anders draai je over een jaar nog steeds twee systemen.

**Communiceer één keer naar de klant, kort.** Niet als excuus, maar als voordeel: "vanaf nu ziet elke vestiging de historie van uw dier, u hoeft niets meer opnieuw te vertellen." Dat is precies het punt.

## Wat het aan de voorkant oplevert

Zodra het bestand één is, verandert er ook iets aan de kant die de klant merkt.

Herinneringen gaan uit vanuit één plek, met de juiste vervaldatum en met de voorkeursvestiging erin. Geen twee oproepen meer voor dezelfde vaccinatie omdat beide systemen dachten dat ze aan de beurt waren. Dat is meteen het moment waarop [klantcommunicatie automatiseren als dierenarts](/automatisering) pas echt werkt: een flow op een versnipperd bestand vermenigvuldigt de rommel, een flow op een schoon bestand vermenigvuldigt het resultaat.

Ook de telefoon wordt anders. Wie opneemt, of dat nu de balie is of een [ai telefonist voor dierenartsen](/voice-ai) buiten openingstijd, ziet dezelfde kaart. Een baasje dat belt over een dier dat gisteren bij de andere vestiging is geweest, krijgt geen "dat kan ik hier niet zien" te horen.

En je kunt eindelijk zien wat een klant waard is over alle panden heen. Dat is niet alleen een boekhoudkundig cijfer: het is de basis onder elke keuze over openingstijden, bezetting en of die derde vestiging wel of niet rendeert.

<div class="container"><div class="row justify-content-center"><div class="col-lg-10 col-xl-8 mx-auto"><p class="lees-ook my-5 px-4 py-3 rounded-3 fs-6 text-dark" style="background-color: rgba(193, 255, 114, 0.18);"><strong class="text-dark">Lees ook:</strong> <a href="/blog/multi-pet-huishouden-binden-dierenarts-family-crm-klantcommunicatie" class="text-dark fw-semibold">Meerdere dieren onder één huishouden koppelen in je CRM</a> →</p></div></div></div>

## De drie fouten die groeiende praktijken hier maken

**Wachten tot het pijn doet.** Twee systemen samenvoegen bij 4.000 dossiers is een project van een paar weken. Bij 15.000 is het een project met een projectleider. De goedkoopste dag om dit te doen is de dag dat je de tweede vestiging opent, niet het jaar erna.

**De vestiging eigenaar maken van de klant.** Dit is de fout die het meeste terugkomt, omdat hij bij één pand nooit opvalt en bij het tweede pand meteen structureel wordt. Als je klantkaart een vast veld "vestiging" heeft dat bepaalt wie hem mag zien, heb je twee bestanden gebouwd die er als één uitzien.

**Denken dat het een softwarekeuze is.** De meeste praktijksystemen kunnen dit prima. Wat ontbreekt is meestal geen functie maar een afspraak: wie voert nieuwe klanten in, met welke schrijfwijze, en wie controleert op dubbelen. Zonder die afspraak loopt het nieuwe systeem binnen een halfjaar net zo vol met dubbele kaarten als het oude.

## Veelgestelde vragen

**Moeten alle vestigingen dezelfde tarieven hanteren als het bestand gedeeld is?**
Nee. Tarief hoort bij de vestiging, net als de agenda en de voorraad. Je kunt prima één klantenbestand hebben met per locatie een eigen prijslijst. Wel verstandig: leg vast waaróm ze verschillen, want de klant die beide panden bezoekt gaat er een keer naar vragen.

**Wat als we straks weer een praktijk overnemen?**
Dan is dit precies waarom je het nu inricht. Een gedeeld bestand met een locatieveld schaalt naar een vierde en vijfde pand zonder dat de structuur verandert. Twee losse systemen samenvoegen wordt met elke overname exponentieel duurder.

**Hoe voorkomen we dat er alsnog dubbele kaarten ontstaan?**
Zoeken op chipnummer als eerste stap bij elke intake, en een wekelijkse controle op mogelijke dubbelen. Veel systemen kunnen die controle automatisch draaien. Zet hem aan, want handmatig gaat niemand dit volhouden.

**Is dit AVG-technisch toegestaan?**
Gegevens delen binnen één verwerkingsverantwoordelijke, dus binnen jouw praktijk met meerdere locaties, is toegestaan mits je grondslag en bewaartermijn kloppen en je vastlegt wie waarbij kan. Neem het op in je verwerkingsregister en je privacyverklaring. Gaat het om echt gescheiden juridische entiteiten, laat dat dan even toetsen, want dan liggen de afspraken anders.

**Hoe lang duurt zo'n samenvoeging?**
Dat hangt volledig af van het aantal dossiers en hoe schoon ze zijn, dus daar bestaat geen algemeen getal voor dat iets over jouw situatie zegt. Wat wel houvast geeft: het dedupliceren kost bijna altijd meer tijd dan de technische import.

## Kort samengevat

Een praktijk met meerdere vestigingen splitst zijn klantenbestand vanzelf, tenzij je er iets tegen doet. Het antwoord is één gedeeld bestand waarin de vestiging een kenmerk is van de afspraak, niet van de klant.

Regel het in deze volgorde: eerst de rechtenvraag beantwoorden, dan dedupliceren op chipnummer, dan de datumvelden gelijktrekken, dan pas migreren. En leg vast wie nieuwe klanten invoert en hoe, want zonder die afspraak loopt ook een schoon systeem weer vol.

Wil je weten waar in jouw huidige opzet dossiers en oproepen uit elkaar lopen, begin dan bij de voorkant: we bouwen een [gratis website voor dierenartsen](/gratis-website) waarin de intake meteen in één bestand landt in plaats van in het systeem van de vestiging waar iemand toevallig op klikte. Werken we samen, dan geldt onze Groei-of-Geld-Terug Garantie, zodat je niet betaalt voor beloftes maar voor resultaat.
