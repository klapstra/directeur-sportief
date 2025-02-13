document.addEventListener("DOMContentLoaded", function () {
    // Lijst van renners (voorbeeld van de eerste 10 renners)
    const riders = [
        { name: "POGAČAR Tadej", team: "UAE Emirates - XRG", points: 4357 },
        { name: "EVENEPOEL Remco", team: "Soudal Quick-Step", points: 3467 },
        { name: "PHILIPSEN Jasper", team: "Alpecin - Deceuninck", points: 2826 },
        { name: "HIRSCHI Marc", team: "Tudor Pro Cycling", points: 2449 },
        { name: "VINGEGAARD Jonas", team: "Visma | Lease a Bike", points: 2042 },
        { name: "O’CONNOR Ben", team: "Jayco AlUla", points: 2034 },
        { name: "GIRMAY Biniam", team: "Intermarché - Wanty", points: 1999 },
        { name: "VAN DER POEL Mathieu", team: "Alpecin - Deceuninck", points: 1934 },
        { name: "ROGLIČ Primož", team: "Red Bull - BORA - hansgrohe", points: 1816 },
        { name: "MERLIER Tim", team: "Soudal Quick-Step", points: 1782 },
        { name: "PEDERSEN Mads", team: "Lidl - Trek", points: 1760 },
        { name: "JORGENSON Matteo", team: "Visma | Lease a Bike", points: 1759 },
        { name: "VAN AERT Wout", team: "Visma | Lease a Bike", points: 1714 },
        { name: "DE LIE Arnaud", team: "Lotto", points: 1687 },
        { name: "MCNULTY Brandon", team: "UAE Emirates - XRG", points: 1596 },
        { name: "YATES Adam", team: "UAE Emirates - XRG", points: 1543 },
        { name: "MAS Enric", team: "Movistar", points: 1475 },
        { name: "MILAN Jonathan", team: "Lidl - Trek", points: 1473 },
        { name: "RODRÍGUEZ Carlos", team: "INEOS - Grenadiers", points: 1470 },
        { name: "AYUSO Juan", team: "UAE Emirates - XRG", points: 1421 },
        { name: "VLASOV Aleksandr", team: "Red Bull - BORA - hansgrohe", points: 1358 },
        { name: "VAN GILS Maxim", team: "Red Bull - BORA - hansgrohe", points: 1355 },
        { name: "SKJELMOSE Mattias", team: "Lidl - Trek", points: 1329 },
        { name: "CARAPAZ Richard", team: "EF Education - Easypost", points: 1286 },
        { name: "ULISSI Diego", team: "XDS Astana", points: 1265 },
        { name: "ALMEIDA João", team: "UAE Emirates - XRG", points: 1265 },
        { name: "LANDA Mikel", team: "Soudal Quick-Step", points: 1203 },
        { name: "VAN EETVELT Lennert", team: "Lotto", points: 1199 },
        { name: "KOOIJ Olav", team: "Visma | Lease a Bike", points: 1185 },
        { name: "PIDCOCK Thomas", team: "Q36.5 Pro Cycling", points: 1179 },
        { name: "COSNEFROY Benoît", team: "Decathlon - AG2R La Mondiale", points: 1136 },
        { name: "WELLENS Tim", team: "UAE Emirates - XRG", points: 1128 },
        { name: "KRISTOFF Alexander", team: "Uno-X Mobility", points: 1069 },
        { name: "KÜNG Stefan", team: "Groupama - FDJ", points: 1060 },
        { name: "WILLIAMS Stephen", team: "Israel - Premier Tech", points: 1040 },
        { name: "ZINGLE Axel", team: "Visma | Lease a Bike", points: 1026 },
        { name: "ONLEY Oscar", team: "Picnic PostNL", points: 994 },
        { name: "ALAPHILIPPE Julian", team: "Tudor Pro Cycling", points: 964 },
        { name: "BARDET Romain", team: "Picnic PostNL", points: 962 },
        { name: "STRONG Corbin", team: "Israel - Premier Tech", points: 953 },
        { name: "MATTHEWS Michael", team: "Jayco AlUla", points: 946 },
        { name: "ARANBURU Alex", team: "Cofidis", points: 918 },
        { name: "BILBAO Pello", team: "Bahrain - Victorious", points: 909 },
        { name: "TIBERI Antonio", team: "Bahrain - Victorious", points: 894 },
        { name: "SKUJIŅŠ Toms", team: "Lidl - Trek", points: 890 },
        { name: "BETTIOL Alberto", team: "XDS Astana", points: 870 },
        { name: "NARVÁEZ Jhonatan", team: "UAE Emirates - XRG", points: 861 },
        { name: "DEL TORO Isaac", team: "UAE Emirates - XRG", points: 844 },
        { name: "GRÉGOIRE Romain", team: "Groupama - FDJ", points: 843 },
        { name: "MARTINEZ Lenny", team: "Bahrain - Victorious", points: 834 },
        { name: "CORT Magnus", team: "Uno-X Mobility", points: 831 },
        { name: "GROENEWEGEN Dylan", team: "Jayco AlUla", points: 826 },
        { name: "LAPORTE Christophe", team: "Visma | Lease a Bike", points: 825 },
        { name: "JEANNIÈRE Emilien", team: "TotalEnergies", points: 800 },
        { name: "MADOUAS Valentin", team: "Groupama - FDJ", points: 780 },
        { name: "GAUDU David", team: "Groupama - FDJ", points: 775 },
        { name: "BERNAL Egan", team: "INEOS - Grenadiers", points: 773 },
        { name: "MARTÍNEZ Daniel Felipe", team: "Red Bull - BORA - hansgrohe", points: 766 },
        { name: "BUITRAGO Santiago", team: "Bahrain - Victorious", points: 763 },
        { name: "GROVES Kaden", team: "Alpecin - Deceuninck", points: 745 },
        { name: "TRENTIN Matteo", team: "Tudor Pro Cycling", points: 731 },
        { name: "PITHIE Laurence", team: "Red Bull - BORA - hansgrohe", points: 723 },
        { name: "MEEUS Jordi", team: "Red Bull - BORA - hansgrohe", points: 723 },
        { name: "YATES Simon", team: "Visma | Lease a Bike", points: 714 },
        { name: "VACEK Mathias", team: "Lidl - Trek", points: 695 },
        { name: "BERCKMOES Jenno", team: "Lotto", points: 695 },
        { name: "SIVAKOV Pavel", team: "UAE Emirates - XRG", points: 694 },
        { name: "BAUDIN Alex", team: "EF Education - Easypost", points: 694 },
        { name: "VAUQUELIN Kévin", team: "Arkéa - B&B Hotels", points: 689 },
        { name: "VAN WILDER Ilan", team: "Soudal Quick-Step", points: 687 },
        { name: "GANNA Filippo", team: "INEOS - Grenadiers", points: 684 },
        { name: "ABRAHAMSEN Jonas", team: "Uno-X Mobility", points: 684 },
        { name: "WÆRENSKJOLD Søren", team: "Uno-X Mobility", points: 678 },
        { name: "LIPOWITZ Florian", team: "Red Bull - BORA - hansgrohe", points: 676 },
        { name: "STORER Michael", team: "Tudor Pro Cycling", points: 673 },
        { name: "KELDERMAN Wilco", team: "Visma | Lease a Bike", points: 672 },
        { name: "GEE Derek", team: "Israel - Premier Tech", points: 670 },
        { name: "ADRIÀ Roger", team: "Red Bull - BORA - hansgrohe", points: 668 },
        { name: "POLITT Nils", team: "UAE Emirates - XRG", points: 651 },
        { name: "NYS Thibau", team: "Lidl - Trek", points: 647 },
        { name: "VAN DEN BERG Marijn", team: "EF Education - Easypost", points: 646 },
        { name: "BLACKMORE Joseph", team: "Israel - Premier Tech", points: 642 },
        { name: "THIJSSEN Gerben", team: "Intermarché - Wanty", points: 639 },
        { name: "MOHORIČ Matej", team: "Bahrain - Victorious", points: 637 },
        { name: "POOLE Max", team: "Picnic PostNL", points: 636 },
        { name: "SHEFFIELD Magnus", team: "INEOS - Grenadiers", points: 634 },
        { name: "MOZZATO Luca", team: "Arkéa - B&B Hotels", points: 634 },
        { name: "MARTIN Guillaume", team: "Groupama - FDJ", points: 633 },
        { name: "ALBANESE Vincenzo", team: "EF Education - Easypost", points: 631 },
        { name: "TRATNIK Jan", team: "Red Bull - BORA - hansgrohe", points: 630 },
        { name: "CICCONE Giulio", team: "Lidl - Trek", points: 630 },
        { name: "VERMAERKE Kevin", team: "Picnic PostNL", points: 622 },
        { name: "DE KLEIJN Arvid", team: "Tudor Pro Cycling", points: 609 },
        { name: "ZAMBANINI Edoardo", team: "Bahrain - Victorious", points: 605 },
        { name: "HINDLEY Jai", team: "Red Bull - BORA - hansgrohe", points: 600 },
        { name: "HEALY Ben", team: "EF Education - Easypost", points: 600 },
        { name: "AULAR Orluis", team: "Movistar", points: 597 },
        { name: "FRETIN Milan", team: "Cofidis", points: 588 },
        { name: "LAPEIRA Paul", team: "Decathlon - AG2R La Mondiale", points: 584 },
        { name: "POWLESS Neilson", team: "EF Education - Easypost", points: 578 },
        { name: "BENNETT Sam", team: "Decathlon - AG2R La Mondiale", points: 571 },
        { name: "JOHANNESSEN Tobias Halland", team: "Uno-X Mobility", points: 569 },
        { name: "BENOOT Tiesj", team: "Visma | Lease a Bike", points: 564 },
        { name: "ARENSMAN Thymen", team: "INEOS - Grenadiers", points: 560 },
        { name: "GALL Felix", team: "Decathlon - AG2R La Mondiale", points: 557 },
        { name: "FORTUNATO Lorenzo", team: "XDS Astana", points: 556 },
        { name: "STUYVEN Jasper", team: "Lidl - Trek", points: 549 },
        { name: "SEGAERT Alec", team: "Lotto", points: 536 },
        { name: "GATE Aaron", team: "XDS Astana", points: 534 },
        { name: "ZANA Filippo", team: "Jayco AlUla", points: 528 },
        { name: "VANSEVENANT Mauri", team: "Soudal Quick-Step", points: 526 },
        { name: "PARET-PEINTRE Aurélien", team: "Decathlon - AG2R La Mondiale", points: 526 },
        { name: "VALTER Attila", team: "Visma | Lease a Bike", points: 523 },
        { name: "PIGANZOLI Davide", team: "Polti VisitMalta", points: 523 },
        { name: "CEPEDA Jefferson Alveiro", team: "Movistar", points: 517 },
        { name: "ACKERMANN Pascal", team: "Israel - Premier Tech", points: 503 },
        { name: "BAUHAUS Phil", team: "Bahrain - Victorious", points: 502 },
        { name: "SOLER Marc", team: "UAE Emirates - XRG", points: 500 },
        { name: "LEMMEN Bart", team: "Visma | Lease a Bike", points: 496 },
        { name: "VINE Jay", team: "UAE Emirates - XRG", points: 495 },
        { name: "VAN POPPEL Danny", team: "Red Bull - BORA - hansgrohe", points: 494 },
        { name: "GODON Dorian", team: "Decathlon - AG2R La Mondiale", points: 494 },
        { name: "CHRISTEN Jan", team: "UAE Emirates - XRG", points: 492 },
        { name: "CHAMPOUSSIN Clément", team: "XDS Astana", points: 492 },
        { name: "FISHER-BLACK Finn", team: "Red Bull - BORA - hansgrohe", points: 489 },
        { name: "LAMPERTI Luke", team: "Soudal Quick-Step", points: 486 },
        { name: "RUBIO Einer", team: "Movistar", points: 480 },
        { name: "KUSS Sepp", team: "Visma | Lease a Bike", points: 479 },
        { name: "DELETTRE Alexandre", team: "TotalEnergies", points: 473 },
        { name: "DE PLUS Laurens", team: "INEOS - Grenadiers", points: 471 },
        { name: "JEGAT Jordan", team: "TotalEnergies", points: 466 },
        { name: "TARLING Joshua", team: "INEOS - Grenadiers", points: 460 },
        { name: "KRIJNSEN Jelte", team: "Jayco AlUla", points: 459 },
        { name: "PARET-PEINTRE Valentin", team: "Soudal Quick-Step", points: 458 },
        { name: "IZAGIRRE Ion", team: "Cofidis", points: 457 },
        { name: "VENTURINI Clément", team: "Arkéa - B&B Hotels", points: 455 },
        { name: "THOMAS Geraint", team: "INEOS - Grenadiers", points: 454 },
        { name: "RODRÍGUEZ Cristián", team: "Arkéa - B&B Hotels", points: 452 },
        { name: "PELLIZZARI Giulio", team: "Red Bull - BORA - hansgrohe", points: 452 },
        { name: "ALEOTTI Giovanni", team: "Red Bull - BORA - hansgrohe", points: 449 },
        { name: "POELS Wout", team: "XDS Astana", points: 448 },
        { name: "BITTNER Pavel", team: "Picnic PostNL", points: 447 },
        { name: "SILVA Guillermo Thomas", team: "Caja Rural - Seguros RGA", points: 445 },
        { name: "TEUNISSEN Mike", team: "XDS Astana", points: 438 },
        { name: "MULUBRHAN Henok", team: "XDS Astana", points: 438 },
        { name: "MAGNIER Paul", team: "Soudal Quick-Step", points: 438 },
        { name: "LAZKANO Oier", team: "Red Bull - BORA - hansgrohe", points: 436 },
        { name: "LAURANCE Axel", team: "INEOS - Grenadiers", points: 435 },
        { name: "VAN ASBROECK Tom", team: "Israel - Premier Tech", points: 434 },
        { name: "SCHACHMANN Maximilian", team: "Soudal Quick-Step", points: 434 },
        { name: "PENHOËT Paul", team: "Groupama - FDJ", points: 433 },
        { name: "BJERG Mikkel", team: "UAE Emirates - XRG", points: 433 },
        { name: "BIERMANS Jenthe", team: "Arkéa - B&B Hotels", points: 432 },
        { name: "COQUARD Bryan", team: "Cofidis", points: 429 },
        { name: "VAN DEN BROEK Frank", team: "Picnic PostNL", points: 428 },
        { name: "PACHER Quentin", team: "Groupama - FDJ", points: 419 },
        { name: "CASTRILLO Pablo", team: "Movistar", points: 418 },
        { name: "SCHMID Mauro", team: "Jayco AlUla", points: 417 },
        { name: "RYAN Archie", team: "EF Education - Easypost", points: 414 },
        { name: "GAUTHERAT Pierre", team: "Decathlon - AG2R La Mondiale", points: 411 },
        { name: "NAESEN Oliver", team: "Decathlon - AG2R La Mondiale", points: 404 },
        { name: "TAMINIAUX Lionel", team: "Lotto", points: 401 },
        { name: "MOLLEMA Bauke", team: "Lidl - Trek", points: 401 },
        { name: "ANDRESEN Tobias Lund", team: "Picnic PostNL", points: 400 },
        { name: "WOODS Michael", team: "Israel - Premier Tech", points: 397 },
        { name: "VERMEERSCH Gianni", team: "Alpecin - Deceuninck", points: 396 },
        { name: "FOLDAGER Anders", team: "Jayco AlUla", points: 391 },
        { name: "ZIMMERMANN Georg", team: "Intermarché - Wanty", points: 386 },
        { name: "HIRT Jan", team: "Israel - Premier Tech", points: 384 },
        { name: "HERMANS Quinten", team: "Alpecin - Deceuninck", points: 384 },
        { name: "HAGENES Per Strand", team: "Visma | Lease a Bike", points: 383 },
        { name: "MORGADO António", team: "UAE Emirates - XRG", points: 378 },
        { name: "VELASCO Simone", team: "XDS Astana", points: 377 },
        { name: "DUNBAR Eddie", team: "Jayco AlUla", points: 376 },
        { name: "KUDUS Merhawi", team: "Burgos Burpellet BH", points: 375 },
        { name: "DE PRETTO Davide", team: "Jayco AlUla", points: 375 },
        { name: "BURGAUDEAU Mathieu", team: "TotalEnergies", points: 372 },
        { name: "GROßSCHARTNER Felix", team: "UAE Emirates - XRG", points: 370 },
        { name: "CHRISTEN Fabio", team: "Q36.5 Pro Cycling", points: 370 },
        { name: "VAN UDEN Casper", team: "Picnic PostNL", points: 369 },
        { name: "MIHKELS Madis", team: "EF Education - Easypost", points: 369 },
        { name: "VENDRAME Andrea", team: "Decathlon - AG2R La Mondiale", points: 368 },
        { name: "HIGUITA Sergio", team: "XDS Astana", points: 363 },
        { name: "AFFINI Edoardo", team: "Visma | Lease a Bike", points: 362 },
        { name: "SÁNCHEZ Pelayo", team: "Movistar", points: 360 },
        { name: "BISSEGGER Stefan", team: "Decathlon - AG2R La Mondiale", points: 360 },
        { name: "REX Laurenz", team: "Intermarché - Wanty", points: 355 },
        { name: "DVERSNES Fredrik", team: "Uno-X Mobility", points: 355 },
        { name: "BARONCINI Filippo", team: "UAE Emirates - XRG", points: 355 },
        { name: "TESSON Jason", team: "TotalEnergies", points: 349 },
        { name: "TEUNS Dylan", team: "Cofidis", points: 346 },
        { name: "HOELGAARD Markus", team: "Uno-X Mobility", points: 345 },
        { name: "DÉMARE Arnaud", team: "Arkéa - B&B Hotels", points: 344 },
        { name: "LUTSENKO Alexey", team: "Israel - Premier Tech", points: 343 },
        { name: "GAVIRIA Fernando", team: "Movistar", points: 342 },
        { name: "RIVERA Brandon Smith", team: "INEOS - Grenadiers", points: 339 },
        { name: "BENNETT George", team: "Israel - Premier Tech", points: 339 },
        { name: "KANTER Max", team: "XDS Astana", points: 338 },
        { name: "MIQUEL Pau", team: "Equipo Kern Pharma", points: 336 },
        { name: "MENTEN Milan", team: "Lotto", points: 335 },
        { name: "BERTHET Clément", team: "Decathlon - AG2R La Mondiale", points: 335 },
        { name: "ROTA Lorenzo", team: "Intermarché - Wanty", points: 334 },
        { name: "PLAPP Luke", team: "Jayco AlUla", points: 334 },
        { name: "NERURKAR Lukas", team: "EF Education - Easypost", points: 334 },
        { name: "RICCITELLO Matthew", team: "Israel - Premier Tech", points: 333 },
        { name: "MEURISSE Xandro", team: "Alpecin - Deceuninck", points: 330 },
        { name: "CAMPENAERTS Victor", team: "Visma | Lease a Bike", points: 330 },
        { name: "ROMO Javier", team: "Movistar", points: 326 },
        { name: "ANIOŁKOWSKI Stanisław", team: "Cofidis", points: 326 },
        { name: "LÓPEZ Juan Pedro", team: "Lidl - Trek", points: 321 },
        { name: "DOUBLE Paul", team: "Jayco AlUla", points: 321 },
        { name: "COSTIOU Ewen", team: "Arkéa - B&B Hotels", points: 320 },
        { name: "SHEEHAN Riley", team: "Israel - Premier Tech", points: 317 },
        { name: "CAPIOT Amaury", team: "Arkéa - B&B Hotels", points: 315 },
        { name: "TESFATSION Natnael", team: "Movistar", points: 312 },
        { name: "SCARONI Christian", team: "XDS Astana", points: 310 },
        { name: "WALSCHEID Max", team: "Jayco AlUla", points: 306 },
        { name: "BARGUIL Warren", team: "Picnic PostNL", points: 306 },
        { name: "CANAL Carlos", team: "Movistar", points: 302 },
        { name: "MOLANO Juan Sebastián", team: "UAE Emirates - XRG", points: 301 },
        { name: "FOSS Tobias", team: "INEOS - Grenadiers", points: 300 },
        { name: "BRENNER Marco", team: "Tudor Pro Cycling", points: 298 },
        { name: "WRIGHT Fred", team: "Bahrain - Victorious", points: 297 },
        { name: "MAJKA Rafał", team: "UAE Emirates - XRG", points: 294 },
        { name: "BRAET Vito", team: "Intermarché - Wanty", points: 294 },
        { name: "VOISARD Yannis", team: "Tudor Pro Cycling", points: 293 },
        { name: "MOLARD Rudy", team: "Groupama - FDJ", points: 289 },
        { name: "TEJADA Harold", team: "XDS Astana", points: 287 },
        { name: "CONSONNI Simone", team: "Lidl - Trek", points: 284 },
        { name: "WELSFORD Sam", team: "Red Bull - BORA - hansgrohe", points: 280 },
        { name: "MEINTJES Louis", team: "Intermarché - Wanty", points: 276 },
        { name: "STEINHAUSER Georg", team: "EF Education - Easypost", points: 275 },
        { name: "HOFSTETTER Hugo", team: "Israel - Premier Tech", points: 275 },
        { name: "LONARDI Giovanni", team: "Polti VisitMalta", points: 274 },
        { name: "DEWULF Stan", team: "Decathlon - AG2R La Mondiale", points: 274 },
        { name: "ASGREEN Kasper", team: "EF Education - Easypost", points: 272 },
        { name: "TURGIS Anthony", team: "TotalEnergies", points: 271 },
        { name: "KIRSCH Alex", team: "Lidl - Trek", points: 270 },
        { name: "SIMMONS Quinn", team: "Lidl - Trek", points: 269 },
        { name: "LECERF Junior", team: "Soudal Quick-Step", points: 266 },
        { name: "FAGÚNDEZ Eric Antonio", team: "Burgos Burpellet BH", points: 264 },
        { name: "VERONA Carlos", team: "Lidl - Trek", points: 263 },
        { name: "BERRADE Urko", team: "Equipo Kern Pharma", points: 263 },
        { name: "PAGE Hugo", team: "Intermarché - Wanty", points: 262 },
        { name: "WATSON Samuel", team: "INEOS - Grenadiers", points: 260 },
        { name: "PLUIMERS Rick", team: "Tudor Pro Cycling", points: 260 },
        { name: "VANHOUCKE Harm", team: "Q36.5 Pro Cycling", points: 259 },
        { name: "EWAN Caleb", team: "Jayco AlUla", points: 259 },
        { name: "DAINESE Alberto", team: "Tudor Pro Cycling", points: 258 },
        { name: "HARPER Chris", team: "Jayco AlUla", points: 250 },
        { name: "FEDOROV Yevgeniy", team: "XDS Astana", points: 249 },
        { name: "MOSCHETTI Matteo", team: "Q36.5 Pro Cycling", points: 248 },
        { name: "VERNON Ethan", team: "Israel - Premier Tech", points: 247 },
        { name: "CIMOLAI Davide", team: "Movistar", points: 247 },
        { name: "MALUCELLI Matteo", team: "XDS Astana", points: 246 },
        { name: "CRAS Steff", team: "TotalEnergies", points: 246 },
        { name: "BUSATTO Francesco", team: "Intermarché - Wanty", points: 246 },
        { name: "DEHAIRS Simon", team: "Alpecin - Deceuninck", points: 245 },
        { name: "BRAMBILLA Gianluca", team: "Q36.5 Pro Cycling", points: 243 },
        { name: "OLDANI Stefano", team: "Cofidis", points: 241 },
        { name: "JAKOBSEN Fabio", team: "Picnic PostNL", points: 241 },
        { name: "GACHIGNARD Thomas", team: "TotalEnergies", points: 241 },
        { name: "TILLER Rasmus", team: "Uno-X Mobility", points: 239 },
        { name: "VALGREN Michael", team: "EF Education - Easypost", points: 238 },
        { name: "RODRÍGUEZ Óscar", team: "INEOS - Grenadiers", points: 235 },
        { name: "HONORÉ Mikkel Frølich", team: "EF Education - Easypost", points: 235 },
        { name: "HAIG Jack", team: "Bahrain - Victorious", points: 234 },
        { name: "DONOVAN Mark", team: "Q36.5 Pro Cycling", points: 232 },
        { name: "TRONCHON Bastien", team: "Decathlon - AG2R La Mondiale", points: 229 },
        { name: "SCHULTZ Nick", team: "Israel - Premier Tech", points: 229 },
        { name: "KRAGH ANDERSEN Søren", team: "Lidl - Trek", points: 226 },
        { name: "HALLER Marco", team: "Tudor Pro Cycling", points: 224 },
        { name: "WANDAHL Frederik", team: "Red Bull - BORA - hansgrohe", points: 223 },
        { name: "LÓPEZ Harold Martín", team: "XDS Astana", points: 223 },
        { name: "VAN MOER Brent", team: "Lotto", points: 222 },
        { name: "TURNER Ben", team: "INEOS - Grenadiers", points: 222 },
        { name: "OLIVEIRA Nelson", team: "Movistar", points: 221 },
        { name: "LOOCKX Lander", team: "Unibet Tietema Rockets", points: 216 },
        { name: "LEKNESSUND Andreas", team: "Uno-X Mobility", points: 216 },
        { name: "PRADES Eduard", team: "Caja Rural - Seguros RGA", points: 213 },
        { name: "MAGLI Filippo", team: "VF Bardiani CSF - Faizanè", points: 212 },
        { name: "VAN GESTEL Dries", team: "Soudal Quick-Step", points: 210 },
        { name: "VAN BOVEN Luca", team: "Intermarché - Wanty", points: 207 },
        { name: "OLIVEIRA Rui", team: "UAE Emirates - XRG", points: 207 },
        { name: "LAMPAERT Yves", team: "Soudal Quick-Step", points: 207 },
        { name: "FORMOLO Davide", team: "Movistar", points: 207 },
        { name: "ARMIRAIL Bruno", team: "Decathlon - AG2R La Mondiale", points: 207 },
        { name: "ZANONCELLO Enrico", team: "VF Bardiani CSF - Faizanè", points: 206 },
        { name: "KONRAD Patrick", team: "Lidl - Trek", points: 206 },
        { name: "VAN DE PAAR Jarne", team: "Lotto", points: 204 },
        { name: "TEUTENBERG Tim Torn", team: "Lidl - Trek", points: 203 },
        { name: "LAFAY Victor", team: "Decathlon - AG2R La Mondiale", points: 203 },
        { name: "GARCÍA PIERNA Raúl", team: "Arkéa - B&B Hotels", points: 203 },
        { name: "HOWSON Damien", team: "Q36.5 Pro Cycling", points: 202 },
        { name: "DUJARDIN Sandy", team: "TotalEnergies", points: 202 },
        { name: "CATTANEO Mattia", team: "Soudal Quick-Step", points: 200 },
        { name: "ABERASTURI Jon", team: "Euskaltel - Euskadi", points: 200 },
        { name: "GUDMESTAD Tord", team: "Decathlon - AG2R La Mondiale", points: 198 },
        { name: "APARICIO Mario", team: "Burgos Burpellet BH", points: 198 },
        { name: "PARRA José Félix", team: "Equipo Kern Pharma", points: 197 },
        { name: "CEPEDA Jefferson Alexander", team: "EF Education - Easypost", points: 197 },
        { name: "CÔTÉ Pier-André", team: "Israel - Premier Tech", points: 196 },
        { name: "BOUWMAN Koen", team: "Jayco AlUla", points: 194 },
        { name: "HOLTER Ådne", team: "Uno-X Mobility", points: 192 },
        { name: "NEILANDS Krists", team: "Israel - Premier Tech", points: 191 },
        { name: "BARTA Will", team: "Movistar", points: 191 },
        { name: "MÜHLBERGER Gregor", team: "Movistar", points: 190 },
        { name: "MONIQUET Sylvain", team: "Cofidis", points: 189 },
        { name: "GARCÍA CORTINA Iván", team: "Movistar", points: 189 },
        { name: "ZWIEHOFF Ben", team: "Red Bull - BORA - hansgrohe", points: 188 },
        { name: "BARRÉ Louis", team: "Intermarché - Wanty", points: 188 },
        { name: "QUINTANA Nairo", team: "Movistar", points: 187 },
        { name: "HERREGODTS Rune", team: "UAE Emirates - XRG", points: 185 },
        { name: "GOVEKAR Matevž", team: "Bahrain - Victorious", points: 185 },
        { name: "FLYNN Sean", team: "Picnic PostNL", points: 185 },
        { name: "DINA Márton", team: "Euskaltel - Euskadi", points: 185 },
        { name: "BERNARD Julien", team: "Lidl - Trek", points: 185 },
        { name: "CARBONI Giovanni", team: "Unibet Tietema Rockets", points: 184 },
        { name: "LONARDI Giovanni", team: "Polti VisitMalta", points: 183 },
        { name: "GENIETS Kevin", team: "Groupama - FDJ", points: 183 },
        { name: "VAN DIJKE Tim", team: "Red Bull - BORA - hansgrohe", points: 182 },
        { name: "PRODHOMME Nicolas", team: "Decathlon - AG2R La Mondiale", points: 182 },
        { name: "PINARELLO Alessandro", team: "VF Bardiani CSF - Faizanè", points: 182 },
        { name: "BARCELÓ Fernando", team: "Caja Rural - Seguros RGA", points: 182 },
        { name: "BOL Cees", team: "XDS Astana", points: 181 },
        { name: "STEIMLE Jannik", team: "Q36.5 Pro Cycling", points: 180 },
        { name: "BONNEU Kamiel", team: "Intermarché - Wanty", points: 180 },
        { name: "UIJTDEBROEKS Cian", team: "Visma | Lease a Bike", points: 179 },
        { name: "KUBIŠ Lukáš", team: "Unibet Tietema Rockets", points: 179 },
        { name: "KIELICH Timo", team: "Alpecin - Deceuninck", points: 179 },
        { name: "HAYTER Ethan", team: "Soudal Quick-Step", points: 179 },
        { name: "PLOWRIGHT Jensen", team: "Alpecin - Deceuninck", points: 178 },
        { name: "ROMEO Iván", team: "Movistar", points: 177 },
        { name: "CLARKE Simon", team: "Israel - Premier Tech", points: 177 },
        { name: "VAN TRICHT Stan", team: "Alpecin - Deceuninck", points: 174 },
        { name: "BIZKARRA Mikel", team: "Euskaltel - Euskadi", points: 174 },
        { name: "RENARD Alexis", team: "Cofidis", points: 173 },
        { name: "BUCHMANN Emanuel", team: "Cofidis", points: 173 },
        { name: "LANGELLOTTI Victor", team: "INEOS - Grenadiers", points: 172 },
        { name: "HAJEK Alexander", team: "Red Bull - BORA - hansgrohe", points: 172 },
        { name: "SAINBAYAR Jambaljamts", team: "Burgos Burpellet BH", points: 171 },
        { name: "CHARMIG Anthon", team: "XDS Astana", points: 171 },
        { name: "BOU Joan", team: "Caja Rural - Seguros RGA", points: 171 },
        { name: "GUERREIRO Ruben", team: "Movistar", points: 170 },
        { name: "DE LA CRUZ David", team: "Q36.5 Pro Cycling", points: 168 },
        { name: "ALLEGAERT Piet", team: "Cofidis", points: 168 },
        { name: "KOPECKÝ Matyáš", team: "Novo Nordisk", points: 167 },
        { name: "CONTI Valerio", team: "Toscana Vini Fantini", points: 166 },
        { name: "DONNENWIRTH Tom", team: "Groupama - FDJ", points: 164 },
        { name: "TOUZÉ Damien", team: "Cofidis", points: 163 },
        { name: "BATTISTELLA Samuele", team: "EF Education - Easypost", points: 163 },
        { name: "VERRE Alessandro", team: "Arkéa - B&B Hotels", points: 161 },
        { name: "SLOCK Liam", team: "Lotto", points: 161 },
        { name: "KOGUT Oded", team: "Israel - Premier Tech", points: 160 },
        { name: "EENKHOORN Pascal", team: "Soudal Quick-Step", points: 160 },
        { name: "EEKHOFF Nils", team: "Picnic PostNL", points: 160 },
        { name: "EINHORN Itamar", team: "Israel - Premier Tech", points: 159 },
        { name: "EIKING Odd Christian", team: "Unibet Tietema Rockets", points: 159 },
        { name: "DE BONDT Dries", team: "Decathlon - AG2R La Mondiale", points: 159 },
        { name: "ARRIETA Igor", team: "UAE Emirates - XRG", points: 159 },
        { name: "VERGALLITO Luca", team: "Alpecin - Deceuninck", points: 158 },
        { name: "BEHRENS Niklas", team: "Visma | Lease a Bike", points: 158 },
        { name: "RUTSCH Jonas", team: "Intermarché - Wanty", points: 157 },
        { name: "RAFFERTY Darren", team: "EF Education - Easypost", points: 157 },
        { name: "NICOLAU Joel", team: "Caja Rural - Seguros RGA", points: 157 },
        { name: "KWIATKOWSKI Michał", team: "INEOS - Grenadiers", points: 157 },
        { name: "DE GENDT Aimé", team: "Cofidis", points: 157 },
        { name: "STEWART Jake", team: "Israel - Premier Tech", points: 155 },
        { name: "SEPÚLVEDA Eduardo", team: "Lotto", points: 154 },
        { name: "MAESTRI Mirco", team: "Polti VisitMalta", points: 154 },
        { name: "HOOLE Daan", team: "Lidl - Trek", points: 154 },
        { name: "ASKEY Lewis", team: "Groupama - FDJ", points: 154 },
        { name: "VERCHER Mattéo", team: "TotalEnergies", points: 153 },
        { name: "SOSA Iván Ramiro", team: "Equipo Kern Pharma", points: 152 },
        { name: "SCOTSON Callum", team: "Decathlon - AG2R La Mondiale", points: 152 },
        { name: "HAMILTON Chris", team: "Picnic PostNL", points: 152 },
        { name: "DESAL Ceriel", team: "Wagner Bazin WB", points: 152 },
        { name: "ROMELE Alessandro", team: "XDS Astana", points: 151 },
        { name: "GEOGHEGAN HART Tao", team: "Lidl - Trek", points: 151 },
        { name: "DEGENKOLB John", team: "Picnic PostNL", points: 151 },
        { name: "CHAVES Esteban", team: "EF Education - Easypost", points: 151 },
        { name: "BARRENETXEA Jon", team: "Movistar", points: 151 },
        { name: "ZIJLAARD Maikel", team: "Tudor Pro Cycling", points: 150 },
        { name: "UHLIG Henri", team: "Alpecin - Deceuninck", points: 149 },
        { name: "COSTA Rui", team: "EF Education - Easypost", points: 149 },
        { name: "NORDHAGEN Jørgen", team: "Visma | Lease a Bike", points: 147 },
        { name: "IRIBAR Unai", team: "Equipo Kern Pharma", points: 147 },
        { name: "GALVÁN Francisco", team: "Equipo Kern Pharma", points: 147 },
        { name: "FIORELLI Filippo", team: "VF Bardiani CSF - Faizanè", points: 147 },
        { name: "BALLERINI Davide", team: "XDS Astana", points: 147 },
        { name: "VAN DIJKE Mick", team: "Red Bull - BORA - hansgrohe", points: 145 },
        { name: "TOWNSEND Rory", team: "Q36.5 Pro Cycling", points: 145 },
        { name: "DE VRIES Hartthijs", team: "Unibet Tietema Rockets", points: 144 },
        { name: "CARUSO Damiano", team: "Bahrain - Victorious", points: 144 },
        { name: "ROLLAND Brieuc", team: "Groupama - FDJ", points: 143 },
        { name: "DE SCHUYTENEER Steffen", team: "Lotto", points: 143 },
        { name: "SBARAGLI Kristian", team: "Toscana Vini Fantini", points: 142 },
        { name: "MARIT Arne", team: "Intermarché - Wanty", points: 142 },
        { name: "GIBBONS Ryan", team: "Lidl - Trek", points: 142 },
        { name: "COVI Alessandro", team: "UAE Emirates - XRG", points: 140 },
        { name: "TRÆEN Torstein", team: "Bahrain - Victorious", points: 139 },
        { name: "SOBRERO Matteo", team: "Red Bull - BORA - hansgrohe", points: 139 },
        { name: "O'BRIEN Kelland", team: "Jayco AlUla", points: 139 },
        { name: "STORK Florian", team: "Tudor Pro Cycling", points: 138 },
        { name: "VANGHELUWE Warre", team: "Soudal Quick-Step", points: 137 },
        { name: "THOMAS Benjamin", team: "Cofidis", points: 136 },
        { name: "SWEENY Harry", team: "EF Education - Easypost", points: 135 },
        { name: "DE TIER Floris", team: "Wagner Bazin WB", points: 135 },
        { name: "CARR Simon", team: "Cofidis", points: 135 },
        { name: "VIVIANI Elia", team: "NNB", points: 134 },
        { name: "FUGLSANG Jakob", team: "Israel - Premier Tech", points: 133 },
        { name: "FRIGO Marco", team: "Israel - Premier Tech", points: 133 },
        { name: "BAIS Mattia", team: "Polti VisitMalta", points: 133 },
        { name: "CURRIE Logan", team: "Lotto", points: 131 },
        { name: "MARCELLUSI Martin", team: "VF Bardiani CSF - Faizanè", points: 130 },
        { name: "MEZGEC Luka", team: "Jayco AlUla", points: 129 },
        { name: "COVILI Luca", team: "VF Bardiani CSF - Faizanè", points: 129 },
        { name: "PETERS Nans", team: "Decathlon - AG2R La Mondiale", points: 128 },
        { name: "WARBASSE Larry", team: "Tudor Pro Cycling", points: 127 },
        { name: "MILESI Lorenzo", team: "Movistar", points: 127 },
        { name: "SWIFT Ben", team: "INEOS - Grenadiers", points: 126 },
        { name: "LIEPIŅŠ Emīls", team: "Q36.5 Pro Cycling", points: 126 },
        { name: "GELDERS Gil", team: "Soudal Quick-Step", points: 125 },
        { name: "BERHE Welay Hagos", team: "Jayco AlUla", points: 124 },
        { name: "ARTZ Huub", team: "Intermarché - Wanty", points: 124 },
        { name: "WALKER Max", team: "EF Education - Easypost", points: 123 },
        { name: "STAUNE-MITTET Johannes", team: "Decathlon - AG2R La Mondiale", points: 123 },
        { name: "ENGELHARDT Felix", team: "Jayco AlUla", points: 122 },
        { name: "PEDERSEN Rasmus Søjberg", team: "Decathlon - AG2R La Mondiale", points: 121 },
        { name: "OKAMIKA Ander", team: "Burgos Burpellet BH", points: 121 },
        { name: "LIENHARD Fabian", team: "Tudor Pro Cycling", points: 121 },
        { name: "ARNDT Nikias", team: "Bahrain - Victorious", points: 121 },
        { name: "ISIDORE Noa", team: "Decathlon - AG2R La Mondiale", points: 120 },
        { name: "RUSSO Clément", team: "Groupama - FDJ", points: 119 },
        { name: "PERSICO Davide", team: "Wagner Bazin WB", points: 119 },
        { name: "BERASATEGI Xabier", team: "Euskaltel - Euskadi", points: 119 },
        { name: "KULSET Johannes", team: "Uno-X Mobility", points: 118 },
        { name: "GUERNALEC Thibault", team: "Arkéa - B&B Hotels", points: 118 },
        { name: "DOULL Owain", team: "EF Education - Easypost", points: 117 },
        { name: "BRENNAN Matthew", team: "Visma | Lease a Bike", points: 117 },
        { name: "VAN SINTMAARTENSDIJK Roel", team: "Intermarché - Wanty", points: 116 },
        { name: "STITES Tyler", team: "Caja Rural - Seguros RGA", points: 116 },
        { name: "LEROUX Samuel", team: "TotalEnergies", points: 116 },
        { name: "DELBOVE Joris", team: "TotalEnergies", points: 116 },
        { name: "CONCI Nicola", team: "XDS Astana", points: 116 },
        { name: "LIVYNS Arjen", team: "Lotto", points: 115 },
        { name: "LEEMREIZE Gijs", team: "Picnic PostNL", points: 115 },
        { name: "JUNGELS Bob", team: "INEOS - Grenadiers", points: 115 },
        { name: "GONZÁLEZ Abner", team: "Caja Rural - Seguros RGA", points: 115 },
        { name: "CRAPS Lars", team: "Lotto", points: 115 },
        { name: "TIZZA Marco", team: "Wagner Bazin WB", points: 114 },
        { name: "BEULLENS Cedric", team: "Lotto", points: 114 },
        { name: "BAGIOLI Andrea", team: "Lidl - Trek", points: 114 },
        { name: "THEUNS Edward", team: "Lidl - Trek", points: 113 },
        { name: "GRUEL Thibaud", team: "Groupama - FDJ", points: 113 },
        { name: "EULÁLIO Afonso", team: "Bahrain - Victorious", points: 112 },
        { name: "OLIVEIRA Ivo", team: "UAE Emirates - XRG", points: 109 },
        { name: "KÄMNA Lennard", team: "Lidl - Trek", points: 109 },
        { name: "ROCHAS Rémy", team: "Groupama - FDJ", points: 108 },
        { name: "LOUVEL Matis", team: "Israel - Premier Tech", points: 108 },
        { name: "LE BERRE Mathis", team: "Arkéa - B&B Hotels", points: 108 },
        { name: "HOULE Hugo", team: "Israel - Premier Tech", points: 108 },
        { name: "GUTIÉRREZ Jorge", team: "Equipo Kern Pharma", points: 108 },
        { name: "DEKKER David", team: "Euskaltel - Euskadi", points: 108 },
        { name: "PEÑALVER Manuel", team: "Polti VisitMalta", points: 107 },
        { name: "MAIRE Adrien", team: "Unibet Tietema Rockets", points: 107 },
        { name: "SORARRAIN Gorka", team: "Caja Rural - Seguros RGA", points: 106 },
        { name: "FREDHEIM Stian", team: "Uno-X Mobility", points: 106 },
        { name: "RONHAAR Pim", team: "Baloise - Trek Lions", points: 105 },
        { name: "BRAZ AFONSO Clément", team: "Groupama - FDJ", points: 105 },
        { name: "LÓPEZ Jordi", team: "Euskaltel - Euskadi", points: 104 },
        { name: "GAROFOLI Gianmarco", team: "Soudal Quick-Step", points: 104 },
        { name: "CHUMIL Sergio Geovani", team: "Burgos Burpellet BH", points: 104 },
        { name: "TONEATTI Davide", team: "XDS Astana", points: 103 },
        { name: "DEL GROSSO Tibor", team: "Alpecin - Deceuninck", points: 103 },
        { name: "PARISINI Nicolò", team: "Q36.5 Pro Cycling", points: 102 },
        { name: "MULLEN Ryan", team: "Red Bull - BORA - hansgrohe", points: 102 },
        { name: "KRUIJSWIJK Steven", team: "Visma | Lease a Bike", points: 101 },
        { name: "HUENS Axel", team: "Unibet Tietema Rockets", points: 101 },
        { name: "GOOSSENS Kobe", team: "Intermarché - Wanty", points: 101 },
        { name: "SVRČEK Martin", team: "Soudal Quick-Step", points: 100 },
        { name: "PALENI Enzo", team: "Groupama - FDJ", points: 99 },
        { name: "HERRADA Jesús", team: "Cofidis", points: 98 },
        { name: "BADILATTI Matteo", team: "Q36.5 Pro Cycling", points: 98 },
        { name: "BOVEN Lars", team: "Alpecin - Deceuninck", points: 97 },
        { name: "THOMPSON Reuben", team: "Lotto", points: 96 },
        { name: "PEREZ Anthony", team: "Cofidis", points: 96 },
        { name: "OOMEN Sam", team: "Lidl - Trek", points: 96 },
        { name: "NIZZOLO Giacomo", team: "Q36.5 Pro Cycling", points: 95 },
        { name: "JOHANNINK Jelle", team: "Unibet Tietema Rockets", points: 95 },
        { name: "DELAPLACE Anthony", team: "Arkéa - B&B Hotels", points: 95 },
        { name: "VERVAEKE Louis", team: "Soudal Quick-Step", points: 94 },
        { name: "PICKRELL Riley", team: "Israel - Premier Tech", points: 94 },
        { name: "NORSGAARD Mathias", team: "Movistar", points: 93 },
        { name: "SAMITIER Sergio", team: "Cofidis", points: 92 },
        { name: "LATOUR Pierre", team: "TotalEnergies", points: 92 },
        { name: "GUGLIELMI Simon", team: "Arkéa - B&B Hotels", points: 92 },
        { name: "DE MARCHI Alessandro", team: "Jayco AlUla", points: 92 },
        { name: "VINOKUROV Nicolas", team: "XDS Astana", points: 91 },
        { name: "PEDERSEN Casper", team: "Soudal Quick-Step", points: 91 }
        // Voeg hier de rest van de renners toe...
    ];

    // Lijst van ploegen (voorbeeld van de eerste 5 ploegen)
    const teams = [
        { name: "UAE Team Emirates-XRG", points: 1248 },
        { name: "Visma | Lease a Bike", points: 831 },
        { name: "Lidl-Trek", points: 702 },
        { name: "Soudal Quick-Step", points: 698 },
        { name: "Red Bull-BORA-hansgrohe", points: 691 },
        { name: "Decathlon AG2R La Mondiale", points: 669 },
        { name: "Alpecin-Deceuninck", points: 641 },
        { name: "INEOS Grenadiers", points: 640 },
        { name: "Lotto", points: 569 },
        { name: "Israel-Premier Tech", points: 510 },
        { name: "Groupama-FDJ", points: 503 },
        { name: "Bahrain-Victorious", points: 500 },
        { name: "Jayco AlUla", points: 488 },
        { name: "EF Education-Easypost", points: 481 },
        { name: "Picnic PostNL", points: 477 },
        { name: "Movistar", points: 472 },
        { name: "Uno-X Mobility", points: 451 },
        { name: "Intermarché-Wanty", points: 447 },
        { name: "Arkea-B&B Hotels", points: 432 },
        { name: "Cofidis", points: 384 },
        { name: "XDS Astana", points: 351 },
        { name: "Tudor Pro Cycling", points: 344 },
        { name: "TotalEnergies", points: 318 },
        { name: "Q36.5 Pro Cycling", points: 215 },
        { name: "Unibet Tietema Rockets", points: 164 },
        // Voeg hier de rest van de ploegen toe...
    ];

    // Variabelen voor het team en het budget
    let budget = 10000;
    let selectedRiders = [];
    let selectedTeam = null;

    // Functie om het budget bij te werken
    function updateBudget() {
        document.getElementById("budget").textContent = budget;
    }

    // Functie om het totaal aantal punten te berekenen en weer te geven
    function updateTotalPoints() {
        const totalPointsElement = document.getElementById("total-points");
        const ridersTotal = selectedRiders.reduce((total, rider) => total + rider.points, 0);
        const teamTotal = selectedTeam ? selectedTeam.points : 0;
        const totalPoints = ridersTotal + teamTotal;
        totalPointsElement.textContent = totalPoints;
    }

    // Functie om renners weer te geven
    function displayRiders(filteredRiders = riders) {
        const riderList = document.getElementById("rider-list");
        if (!riderList) {
            console.error("Element met ID 'rider-list' niet gevonden in de DOM.");
            return;
        }
    
        riderList.innerHTML = "<h2>Renners</h2>"; // Reset de lijst
    
        // Voeg de zoekbalk toe aan het nieuwe blok
        const searchContainer = document.getElementById("search-container");
        if (!searchContainer) {
            console.error("Element met ID 'search-container' niet gevonden in de DOM.");
            return;
        }
    
        let searchBar = document.getElementById("search-bar");
        if (!searchBar) {
            searchBar = document.createElement("input");
            searchBar.type = "text";
            searchBar.id = "search-bar";
            searchBar.placeholder = "Zoek renner op naam, ploeg of punten...";
            searchBar.style.width = "100%";
            searchBar.style.padding = "10px";
            searchBar.style.marginBottom = "20px";
            searchBar.addEventListener("input", (event) => {
                console.log("Zoekterm:", event.target.value); // Debugging: controleer de zoekterm
                filterRiders(event.target.value);
            });
            searchContainer.appendChild(searchBar); // Plaats de zoekbalk in het nieuwe blok
        }
    
        // Maak een container voor de twee kolommen
        const columnsContainer = document.createElement("div");
        columnsContainer.style.display = "flex"; // Gebruik flexbox voor de kolommen
        columnsContainer.style.gap = "20px"; // Voeg wat ruimte tussen de kolommen toe
    
        // Maak de eerste kolom
        const column1 = document.createElement("div");
        column1.style.flex = "1"; // Gelijkmatige verdeling van de ruimte
    
        // Maak de tweede kolom
        const column2 = document.createElement("div");
        column2.style.flex = "1"; // Gelijkmatige verdeling van de ruimte
    
        // Verdeel de renners over de twee kolommen
        filteredRiders.forEach((rider, index) => {
            const button = document.createElement("button");
            button.textContent = `${rider.name} (${rider.team}) - ${rider.points} punten`;
            button.addEventListener("click", () => selectRider(rider));
    
            // Voeg de renner toe aan de eerste of tweede kolom
            if (index < filteredRiders.length / 2) {
                column1.appendChild(button);
            } else {
                column2.appendChild(button);
            }
        });
    
        // Voeg de kolommen toe aan de container
        columnsContainer.appendChild(column1);
        columnsContainer.appendChild(column2);
    
        // Voeg de container toe aan de lijst
        riderList.appendChild(columnsContainer);
    
        // Zorg ervoor dat de zoekbalk focus krijgt
        searchBar.focus();
    }

    // Functie om renners te filteren op basis van de zoekterm
    function filterRiders(searchTerm) {
        console.log("Filteren op zoekterm:", searchTerm); // Debugging: controleer de zoekterm

        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        // Filter de renners op naam, ploeg of punten
        const filteredRiders = riders.filter((rider) => {
            return (
                rider.name.toLowerCase().includes(lowerCaseSearchTerm) ||
                rider.team.toLowerCase().includes(lowerCaseSearchTerm) ||
                rider.points.toString().includes(lowerCaseSearchTerm)
            );
        });

        console.log("Gefilterde renners:", filteredRiders); // Debugging: controleer de gefilterde renners

        // Toon de gefilterde renners
        displayRiders(filteredRiders);
    }

    // Functie om ploegen weer te geven
    function displayTeams() {
        const teamList = document.getElementById("team-list");
        if (!teamList) {
            console.error("Element met ID 'team-list' niet gevonden in de DOM.");
            return;
        }

        teamList.innerHTML = "<h2>Ploegen</h2>"; // Reset de lijst

        teams.forEach((team) => {
            const button = document.createElement("button");
            button.textContent = `${team.name} - ${team.points} punten`;
            button.addEventListener("click", () => selectTeam(team));
            teamList.appendChild(button);
        });
    }

    // Functie om een renner te selecteren
    function selectRider(rider) {
        if (selectedRiders.length >= 12) {
            alert("Je kunt maximaal 12 renners selecteren!");
            return;
        }

        if (budget - rider.points < 0) {
            alert("Niet genoeg punten om deze renner te selecteren!");
            return;
        }

        if (selectedRiders.some((selected) => selected.name === rider.name)) {
            alert("Deze renner is al geselecteerd!");
            return;
        }

        selectedRiders.push(rider);
        budget -= rider.points;
        updateBudget();
        updateSelectedRiders();
        updateTotalPoints(); // Update het totaal aantal punten
        saveTeam();

        alert(`Je hebt ${rider.name} geselecteerd!`);
    }

    // Functie om een ploeg te selecteren
    function selectTeam(team) {
        if (selectedTeam !== null) {
            alert("Je hebt al een ploeg geselecteerd!");
            return;
        }

        if (budget - team.points < 0) {
            alert("Niet genoeg punten om deze ploeg te selecteren!");
            return;
        }

        selectedTeam = team;
        budget -= team.points;
        updateBudget();
        updateSelectedTeam();
        updateTotalPoints(); // Update het totaal aantal punten
        saveTeam();

        alert(`Je hebt ${team.name} geselecteerd!`);
    }

    // Functie om de geselecteerde renners weer te geven
    function updateSelectedRiders() {
        const riderList = document.getElementById("selected-riders");
        if (!riderList) {
            console.error("Element met ID 'selected-riders' niet gevonden in de DOM.");
            return;
        }

        riderList.innerHTML = "<h3>Geselecteerde Renners</h3>"; // Reset de lijst

        if (selectedRiders.length === 0) {
            riderList.innerHTML += "<p>Nog geen renners geselecteerd.</p>";
        } else {
            selectedRiders.forEach((rider, index) => {
                const riderItem = document.createElement("div");
                riderItem.classList.add("selected-rider");

                // Toon de renner en zijn punten
                const riderInfo = document.createElement("p");
                riderInfo.textContent = `${rider.name} (${rider.team}) - ${rider.points} punten`;
                riderItem.appendChild(riderInfo);

                // Voeg een verwijderknop toe
                const removeButton = document.createElement("button");
                removeButton.textContent = "Verwijder";
                removeButton.addEventListener("click", () => removeRider(index)); // Verwijder de renner bij klik
                riderItem.appendChild(removeButton);

                riderList.appendChild(riderItem);
            });
        }
    }

    // Functie om de geselecteerde ploeg weer te geven
    function updateSelectedTeam() {
        const teamDisplay = document.getElementById("selected-team");
        if (!teamDisplay) {
            console.error("Element met ID 'selected-team' niet gevonden in de DOM.");
            return;
        }

        teamDisplay.innerHTML = "<h3>Geselecteerde Ploeg</h3>"; // Reset de weergave

        if (selectedTeam) {
            const teamItem = document.createElement("div");
            teamItem.classList.add("selected-team");

            // Toon de ploeg en zijn punten
            const teamInfo = document.createElement("p");
            teamInfo.textContent = `${selectedTeam.name} - ${selectedTeam.points} punten`;
            teamItem.appendChild(teamInfo);

            // Voeg een verwijderknop toe
            const removeButton = document.createElement("button");
            removeButton.textContent = "Verwijder";
            removeButton.addEventListener("click", removeTeam); // Verwijder de ploeg bij klik
            teamItem.appendChild(removeButton);

            teamDisplay.appendChild(teamItem);
        } else {
            teamDisplay.innerHTML += "<p>Nog geen ploeg geselecteerd.</p>";
        }
    }

    // Functie om een renner te verwijderen
    function removeRider(index) {
        const removedRider = selectedRiders.splice(index, 1)[0]; // Verwijder de renner uit de lijst
        budget += removedRider.points; // Voeg de punten terug toe aan het budget
        updateBudget(); // Update het budget
        updateSelectedRiders(); // Update de lijst met geselecteerde renners
        updateTotalPoints(); // Update het totaal aantal punten
        saveTeam(); // Sla het team op in localStorage

        alert(`${removedRider.name} is verwijderd uit je team.`);
    }

    // Functie om de ploeg te verwijderen
    function removeTeam() {
        if (selectedTeam) {
            budget += selectedTeam.points; // Voeg de punten terug toe aan het budget
            selectedTeam = null; // Verwijder de ploeg
            updateBudget(); // Update het budget
            updateSelectedTeam(); // Update de weergave van de ploeg
            updateTotalPoints(); // Update het totaal aantal punten
            saveTeam(); // Sla het team op in localStorage

            alert("De ploeg is verwijderd uit je team.");
        }
    }

    // Functie om het team op te slaan in localStorage
    function saveTeam() {
        const teamData = {
            riders: selectedRiders,
            team: selectedTeam,
            budget: budget,
        };
        localStorage.setItem("directeurSportiefTeam", JSON.stringify(teamData));
    }

    // Functie om het team te laden vanuit localStorage
    function loadTeam() {
        const teamData = JSON.parse(localStorage.getItem("directeurSportiefTeam"));
        if (teamData) {
            selectedRiders = teamData.riders;
            selectedTeam = teamData.team;
            budget = teamData.budget;
            updateBudget();
            updateSelectedRiders();
            updateSelectedTeam();
            updateTotalPoints(); // Update het totaal aantal punten bij het laden van de pagina
        }
    }

    // Resetknop
    document.getElementById("reset-team").addEventListener("click", resetTeam);

    function resetTeam() {
        selectedRiders = [];
        selectedTeam = null;
        budget = 10000;
        updateBudget();
        updateSelectedRiders();
        updateSelectedTeam();
        updateTotalPoints(); // Update het totaal aantal punten
        localStorage.removeItem("directeurSportiefTeam");
        alert("Je team is gereset!");
    }

    // Roep de functies aan om de renners en ploegen weer te geven
    displayRiders();
    displayTeams();

    // Laad het team wanneer de pagina laadt
    loadTeam();
});