angular.module('animalid')
  .controller('atarthropodControl', function($scope) {

var Data = [
   
        { name:'Chelicerates', color:'#aee', children:[
            { name:'Xiphosura', children:[
                { name:'Xiphosurida', children:[
                    { name:'Limulina', color:'#222' }, 
                ]},
            ]},
            { name:'Arachnid', children:[
                { name:'Acari', children:[
                    { name:'Acariformes', color:'#555' },
                    { name:'Parasitiformes', color:'#444' }, 
                ]},
                { name:'Amblypygi', children:[
                    { name:'Paracharontidae', color:'#333' },
                    { name:'Charinidae', color:'#222' }, 
                    { name:'Charontidae', color:'#333' }, 
                    { name:'Phrynichidae', color:'#222' }, 
                    { name:'Phrynidae', color:'#333' }, 
                ]},
                { name:'Araneae', children:[
                    { name:'Mesothelae', color:'#444' },
                    { name:'Opisthothelae', color:'#555' }, 
                ]},
                { name:'Opiliones', children:[
                    { name:'Cyphophthalmi', color:'#222' }, 
                    { name:'Eupnoi', color:'#333' }, 
                    { name:'Dyspnoi', color:'#222' }, 
                    { name:'Laniatores', color:'#333' }, 
                    { name:'Tetrophthalmi', color:'#222' }, 
                ]},
                { name:'Palpigradi', children:[
                    { name:'Allokoenenia', color:'#555' },
                    { name:'Eukoenenia', color:'#444' },
                    { name:'Koeneniodes', color:'#555' },
                    { name:'Leptokoenenia', color:'#444' },
                    { name:'Prokoenenia', color:'#555' },
                    { name:'Triadokoenenia', color:'#444' }, 
                ]},
                { name:'Pseudoscorpiones', children:[
                    { name:'Chthonioidea', color:'#333' },
                    { name:'Neobisioidea', color:'#222' },
                    { name:'Garypoidea', color:'#333' },
                    { name:'Cheiridioidea', color:'#222' },
                    { name:'Feaelloidea', color:'#333' },
                    { name:'Cheliferoidea', color:'#222' },
                ]},
                { name:'Ricinulei', children:[
                    { name:'Cryptocellus', color:'#555' },
                    { name:'Pseudocellus', color:'#444' }, 
                    { name:'Ricinoides', color:'#555' }, 
                ]},
                { name:'Schizomida', children:[
                    { name:'Hubbardiidae', color:'#222' },
                    { name:'Protoschizomidae', color:'#333' }, 
                ]},
                { name:'Scorpiones', children:[
                    { name:'Buthoidea', color:'#444' },
                    { name:'Chaeriloidea', color:'#555' },
                    { name:'Chactoidea', color:'#444' },
                    { name:'Iuroidea', color:'#555' }, 
                    { name:'Pseudochactoidea', color:'#444' },
                    { name:'Scorpionoidea', color:'#555' },
                ]},
                { name:'Solifugae', children:[
                    { name:'Ammotrechidae', color:'#222' },
                    { name:'Ceromidae', color:'#333' }, 
                    { name:'Daesiidae', color:'#222' }, 
                    { name:'Eremobatidae', color:'#333' }, 
                    { name:'Galeodidae', color:'#222' }, 
                    { name:'Gylippidae', color:'#333' }, 
                    { name:'Hexisopodidae', color:'#222' }, 
                    { name:'Karschiidae', color:'#333' }, 
                    { name:'Melanoblossidae', color:'#222' }, 
                    { name:'Mummuciidae', color:'#333' }, 
                    { name:'Rhagodidae', color:'#222' }, 
                    { name:'Solpugidae', color:'#333' }, 
                ]},
                { name:'Thelyphonida', children:[
                    { name:'Thelyphonidae', color:'#444' }, 
                ]},
            ]},
        ]},
        { name:'Crustaceans', color:'#aee', children:[
            { name:'Branchiopoda', children:[
                    { name:'Sarsostraca', children:[
                        { name:'Anostraca', color:'#abc' },
                    ]},
                    { name:'Phyllopoda', children:[
                        { name:'Notostraca', color:'#000' },
                        { name:'Laevicaudata', color:'#222' },
                        { name:'Spinicaudata', color:'#000' },
                        { name:'Cyclestherida', color:'#222' },
                        { name:'Cladocera', color:'#000' },
                    ]},
                ]},
            { name:'Remipedia', children:[
                    { name:'Nectiopoda', children:[
                        { name:'Godzilliidae', color:'#abc' },
                        { name:'Micropacteridae', color:'#6481af' },
                        { name:'Speleonectidae', color:'#abc' },
                    ]},
                   
                ]},
            { name:'Cephalocarida', children:[
                    { name:'Chiltoniella', color:'#000' },
                    { name:'Hampsonellus', color:'#333' }, 
                    { name:'Hutchinsoniella', color:'#000' }, 
                    { name:'Lightiella', color:'#333' }, 
                    { name:'Sandersiella', color:'#000' }, 
                ]},
            { name:'Maxillopoda', children:[
                    { name:'Thecostraca', children:[
                        { name:'Facetotecta', color:'#abc' },
                        { name:'Ascothoracida', color:'#6481af' },
                        { name:'Cirripedia', color:'#abc' },
                    ]},
                    { name:'Tantulocarida', children:[
                        { name:'Basipodellidae', color:'#000' },
                        { name:'Deoterthridae', color:'#222' },
                        { name:'Doryphallophoridae', color:'#000' },
                        { name:'Microdajidae', color:'#222' },
                    ]},
                    { name:'Branchiura', children:[
                        { name:'Arguloida', color:'#6481af' },
                    ]}, 
                    { name:'Pentastomida', children:[
                        { name:'Cephalobaenida', color:'#222' },
                        { name:'Porocephalida', color:'#000' },
                        { name:'Raillietiellida', color:'#222' },
                        { name:'Reighardiida', color:'#000' },
                    ]}, 
                    { name:'Mystacocarida', children:[
                        { name:'Ctenocheilocaris', color:'#abc' },
                        { name:'Derocheilocaris', color:'#6481af' },
                    ]}, 
                    { name:'Copepoda', children:[
                        { name:'Calanoida', color:'#222' },
                        { name:'Cyclopoida', color:'#000' },
                        { name:'Gelyelloida', color:'#222' },
                        { name:'Harpacticoida', color:'#000' },
                        { name:'Misophrioida', color:'#222' },
                        { name:'Monstrilloida', color:'#000' },
                        { name:'Mormonilloida', color:'#222' },
                        { name:'Platycopioida', color:'#000' },
                        { name:'Poecilostomatoida', color:'#222' },
                        { name:'Siphonostomatoida', color:'#000' },
                    ]}, 
                ]},
            { name:'Ostracoda', children:[
                    { name:'Myodocopa', children:[
                        { name:'Myodocopida', color:'#abc' },
                        { name:'Halocyprida', color:'#6481af' },
                    ]}, 
                    { name:'Podocopa', children:[
                        { name:'Platycopida', color:'#222' },
                        { name:'Podocopida', color:'#000' },
                    ]},  
                ]},
            { name:'Malacostraca', children:[
                    { name:'Eumalacostraca', children:[
                        { name:'Syncarida', color:'#abc' },
                        { name:'Peracarida', color:'#6481af' },
                        { name:'Eucarida', color:'#abc' },
                    ]}, 
                    { name:'Hoplocarida', children:[
                        { name:'Stomatopoda', color:'#000' },
                    ]}, 
                    { name:'Phyllocarida', children:[
                        { name:'Leptostraca', color:'#abc' },
                    ]}, 
                ]},
        ]},
        { name:'Hexapods', children:[
            { name:'Collembola', children:[
                { name:'Entomobryomorpha', children:[
                    { name:'Coenaletoidea', color:'#85ad7b' },
                    { name:'Entomobryoidea', color:'#609652' },
                    { name:'Isotomoidea', color:'#85ad7b' },
                    { name:'Tomoceroidea', color:'#609652' },
                ]}, 
                { name:'Poduromorpha', children:[
                    { name:'Gulgastruroidea', color:'#bfa969' },
                    { name:'Hypogastruroidea', color:'#ff9d00' },
                    { name:'Isotogastruroidea', color:'#bfa969' },
                    { name:'Neanuroidea', color:'#ff9d00' },
                    { name:'Onychiuroidea', color:'#bfa969' },
                    { name:'Poduroidea', color:'#ff9d00' },
                ]}, 
                { name:'Symphypleona', children:[
                    { name:'Dicyrtomoidea', color:'#85ad7b' },
                    { name:'Katiannoidea', color:'#609652' },
                    { name:'Sminthuroidea', color:'#85ad7b' },
                    { name:'Sminthurididoidea', color:'#609652' },
                    { name:'Sturmioidea', color:'#85ad7b' },
                ]}, 
                { name:'Neelipleona', color:'#ff9d00' },
            ]}, 
            { name:'Protura', children:[
                { name:'Hesperentomidae', color:'#85ad7b' },
                { name:'Protentomidae', color:'#609652' },
                { name:'Acerentomidae', color:'#85ad7b' },
                { name:'Antelientomidae', color:'#609652' },
                { name:'Eosentomidae', color:'#85ad7b' },
                { name:'Fujientomidae', color:'#609652' },
                { name:'Sinentomidae', color:'#85ad7b' },
                ]}, 
            { name:'Diplura', children:[
                { name:'Campodeidae', children:[
                    { name:'Campodea', color:'#ff9d00' },
                    { name:'Cestocampa', color:'#bfa969' },
                    { name:'Clivocampa', color:'#ff9d00' },
                    { name:'Edriocampa', color:'#bfa969' },
                    { name:'Eumesocampa', color:'#ff9d00' },
                    { name:'Eutrichocampa', color:'#bfa969' },
                    { name:'Haplocampa', color:'#ff9d00' },
                    { name:'Helladocampa', color:'#bfa969' },
                    { name:'Hystrichocampa', color:'#ff9d00' },
                    { name:'Litocampa', color:'#bfa969' },
                    { name:'Meiocampa', color:'#ff9d00' },
                    { name:'Metriocampa', color:'#bfa969' },
                    { name:'Oncinocampa', color:'#ff9d00' },
                    { name:'Paratachycampa', color:'#bfa969' },
                    { name:'Patrizicampa', color:'#ff9d00' },
                    { name:'Plusiocampa', color:'#bfa969' },
                    { name:'Podocampa', color:'#ff9d00' },
                    { name:'Remycampa', color:'#bfa969' },
                    { name:'Torocampa', color:'#ff9d00' },
                    ]}, 
                { name:'Procampodeidae', color:'#85ad7b' },
                { name:'Projapygidae', color:'#609652' },
                { name:'Anajapygidae', color:'#85ad7b' },
                { name:'Japygidae', children:[
                    { name:'Evalljapyginae', color:'#ff9d00' },
                    { name:'Gigasjapyginae', color:'#bfa969' },
                    { name:'Heterojapyginae', color:'#ff9d00' },
                    { name:'Japyginae', color:'#bfa969' },
                    { name:'Indjapyginae', color:'#ff9d00' },
                    { name:'Japygellinae', color:'#bfa969' },
                    { name:'Provalljapyginae', color:'#ff9d00' },
                ]}, 
                { name:'Heterojapygidae', color:'#85ad7b' },
                { name:'Dinjapygidae', color:'#609652' },
                { name:'Evalljapygidae', color:'#85ad7b' },
                { name:'Parajapygidae', color:'#609652' },
                { name:'Octostigmatidae', color:'#85ad7b' },
                ]}, 
            { name:'Insecta', children:[
                { name:'Archaeognatha', children:[
                        { name:'Machilidae', color:'#ff9d00' },
                        { name:'Meinertellidae', color:'#bfa969' },
                    ]}, 
                { name:'Blattodea', children:[
                        { name:'Cockroaches', color:'#609652' },
                        { name:'Isoptera', color:'#85ad7b' },
                    ]}, 
                { name:'Coleoptera', children:[
                        { name:'Adephaga', color:'#ff9d00' },
                        { name:'Archostemata', color:'#bfa969' },
                        { name:'Myxophaga', color:'#ff9d00' },
                        { name:'Polyphaga', color:'#bfa969' },
                    ]}, 
                { name:'Dermaptera', children:[
                        { name:'Neodermaptera', color:'#609652' },
                    ]}, 
                { name:'Diptera', color:'#bfa969' },
                { name:'Embioptera', children:[
                        { name:'Andesembiidae', color:'#609652' },
                        { name:'Anisembiidae', color:'#85ad7b' },
                        { name:'Australembiidae', color:'#609652' },
                        { name:'Clothodidae', color:'#85ad7b' },
                        { name:'Embiidae', color:'#609652' },
                        { name:'Embonychidae', color:'#85ad7b' },
                        { name:'Notoligotomidae', color:'#609652' },
                        { name:'Oligotomidae', color:'#85ad7b' },
                        { name:'Teratembiidae', color:'#609652' },
                        { name:'Sorellembiidae', color:'#85ad7b' },
                    ]}, 
                { name:'Ephemeroptera', children:[
                        { name:'Pannota', color:'#ff9d00' },
                        { name:'Schistonota', color:'#bfa969' },
                    ]}, 
                { name:'Hemiptera', children:[
                        { name:'Auchenorrhyncha', color:'#609652' },
                        { name:'Coleorrhyncha', color:'#85ad7b' },
                        { name:'Heteroptera', color:'#609652' },
                        { name:'Sternorrhyncha', color:'#85ad7b' },
                    ]}, 
                { name:'Hymenoptera', children:[
                        { name:'Apocrita', color:'#ff9d00' },
                        { name:'Symphyta', color:'#bfa969' },
                    ]}, 
                { name:'Lepidoptera', children:[
                        { name:'Aglossata', color:'#609652' },
                        { name:'Glossata', color:'#85ad7b' },
                        { name:'Heterobathmiina', color:'#609652' },
                        { name:'Zeugloptera', color:'#85ad7b' },
                    ]}, 
                { name:'Mantodea', children:[
                        { name:'Acanthopidae', color:'#ff9d00' },
                        { name:'Amorphoscelididae', color:'#bfa969' },
                        { name:'Chaeteessidae', color:'#ff9d00' },
                        { name:'Empusidae', color:'#bfa969' },
                        { name:'Eremiaphilidae', color:'#ff9d00' },
                        { name:'Hymenopodidae', color:'#bfa969' },
                        { name:'Iridopterygidae', color:'#ff9d00' },
                        { name:'Liturgusidae', color:'#bfa969' },
                        { name:'Mantidae', color:'#ff9d00' },
                        { name:'Mantoididae', color:'#bfa969' },
                        { name:'Metallyticidae', color:'#ff9d00' },
                        { name:'Sibyllidae', color:'#bfa969' },
                        { name:'Tarachodidae', color:'#ff9d00' },
                        { name:'Thespidae', color:'#bfa969' },
                        { name:'Toxoderidae', color:'#ff9d00' },
                    ]}, 
                { name:'Mecoptera', children:[
                        { name:'Apteropanorpidae', color:'#85ad7b' },
                        { name:'Bittacidae', color:'#609652' },
                        { name:'Boreidae', color:'#85ad7b' },
                        { name:'Choristidae', color:'#609652' },
                        { name:'Eomeropidae', color:'#85ad7b' },
                        { name:'Meropeidae', color:'#609652' },
                        { name:'Nannochoristidae', color:'#85ad7b' },
                        { name:'Panorpidae', color:'#609652' },
                        { name:'Panorpodidae', color:'#85ad7b' },
                    ]}, 
                { name:'Megaloptera', children:[
                        { name:'Corydalidae', color:'#ff9d00' },
                        { name:'Sialidae', color:'#bfa969' },
                    ]}, 
                { name:'Neuroptera', children:[
                        { name:'Hemerobiiformia', color:'#609652' },
                        { name:'Myrmeleontiformia', color:'#85ad7b' },
                    ]}, 
                { name:'Notoptera', children:[
                        { name:'Grylloblattidae', color:'#ff9d00' },
                        { name:'Mantophasmatidae', color:'#bfa969' },
                    ]}, 
                { name:'Odonata', children:[
                        { name:'Epiprocta', color:'#609652' },
                        { name:'Zygoptera', color:'#85ad7b' },
                    ]},
                { name:'Orthoptera', children:[
                        { name:'Ensifera', color:'#ff9d00' },
                        { name:'Caelifera', color:'#bfa969' },
                    ]},
                { name:'Phasmatodea', children:[
                        { name:'Agathemerodea', color:'#609652' },
                        { name:'Timematodea', color:'#85ad7b' },
                        { name:'Verophasmatodea', color:'#609652' },
                    ]},
                { name:'Phthiraptera', children:[
                        { name:'Anoplura', color:'#bfa969' },
                        { name:'Rhyncophthirina', color:'#ff9d00' },
                        { name:'Ischnocera', color:'#bfa969' },
                        { name:'Amblycera', color:'#ff9d00' },
                    ]}, 
                { name:'Plecoptera', children:[
                        { name:'Arctoperlaria', color:'#85ad7b' },
                    ]},
                { name:'Psocodea', color:'#ff9d00' },
                { name:'Raphidioptera', children:[
                        { name:'Raphidiomorpha', color:'#85ad7b' },
                    ]},
                { name:'Siphonaptera', children:[
                        { name:'Ceratophyllomorpha', color:'#ff9d00' },
                        { name:'Hystrichopsyllomorpha', color:'#bfa969' },
                        { name:'Pulicomorpha', color:'#ff9d00' },
                        { name:'Pygiopsyllomorpha', color:'#bfa969' },
                    ]}, 
                { name:'Strepsiptera', children:[
                        { name:'Bahiaxenidae', color:'#609652' },
                        { name:'Bohartillidae', color:'#85ad7b' },
                        { name:'Callipharixenidae', color:'#609652' },
                        { name:'Corioxenidae', color:'#85ad7b' },
                        { name:'Elenchidae', color:'#609652' },
                        { name:'Halictophagidae', color:'#85ad7b' },
                        { name:'Mengenillidae', color:'#609652' },
                        { name:'Myrmecolacidae', color:'#85ad7b' },
                        { name:'Stylopidae', color:'#609652' },
                    ]}, 
                { name:'Thysanoptera', children:[
                        { name:'Terebrantia', color:'#bfa969' },
                        { name:'Tubulifera', color:'#ff9d00' },
                    ]}, 
                { name:'Thysanura', color:'#85ad7b' },
                { name:'Trichoptera', children:[
                        { name:'Annulipalpia', color:'#ff9d00' },
                        { name:'Integripalpia', color:'#bfa969' },
                        { name:'Spicipalpia', color:'#ff9d00' },
                    ]}, 
                { name:'Zoraptera', color:'#85ad7b' },
                { name:'Zygentoma', children:[
                        { name:'Lepismatidae', color:'#ff9d00' },
                        { name:'Nicoletiidae', color:'#bfa969' },
                        { name:'Lepidotrichidae', color:'#ff9d00' },
                        { name:'Maindroniidae', color:'#bfa969' },
                        { name:'Protrinemuridae', color:'#ff9d00' },
                    ]}, 
            ]}, 
        ]},
        { name:'Myriapods', children:[
            { name:'Chilopoda', children:[
                { name:'Scutigeromorpha', children:[
                        { name:'Pselliodidae', color:'#896b5c' },
                        { name:'Scutigeridae', color:'#543d31' },
                        { name:'Scutigerinidae', color:'#896b5c' },
                    ]}, 
                { name:'Lithobiomorpha', children:[
                        { name:'Henicopidae', color:'#152c47' },
                        { name:'Lithobiidae', color:'#000' },
                    ]}, 
                { name:'Craterostigmomorpha', children:[
                        { name:'Craterostigmidae', color:'#543d31' },
                    ]}, 
                { name:'Scolopendromorpha', children:[
                        { name:'Cryptopidae', color:'#000' },
                        { name:'Scolopendridae', color:'#152c47' },
                        { name:'Scolopocryptopidae', color:'#000' },
                    ]}, 
                { name:'Geophilomorpha', children:[
                        { name:'Himantariidae', color:'#543d31' },
                        { name:'Mecistocephalidae', color:'#896b5c' },
                        { name:'Neogeophilidae', color:'#543d31' },
                        { name:'Geophilidae', color:'#896b5c' },
                        { name:'Oryidae', color:'#543d31' },
                        { name:'Linotaeniidae', color:'#896b5c' },
                    ]}, 
            ]}, 
            { name:'Diplopoda', children:[
                { name:'Penicillata', children:[
                        { name:'Hypogexenidae', color:'#152c47' },
                        { name:'Lophoproctidae', color:'#000' },
                        { name:'Polyxenidae', color:'#152c47' },
                        { name:'Synxenidae', color:'#000' },
                    ]}, 
                { name:'Chilognatha', children:[
                        { name:'Pentazonia', color:'#543d31' },
                        { name:'Helminthomorpha', color:'#896b5c' },
                    ]}, 
            ]},
            { name:'Symphyla', children:[
                { name:'Scutigerellidae', color:'#152c47' },
                { name:'Scolopendrellidae', color:'#000' },
            ]},  
            { name:'Pauropoda', children:[
                { name:'Hexamerocerata', color:'#543d31' },
                { name:'Tetramerocerata', children:[
                        { name:'Afrauropodidae', color:'#000' },
                        { name:'Antichtopauropodidae', color:'#152c47' },
                        { name:'Brachypauropodidae', color:'#000' },
                        { name:'Colinauropodidae', color:'#152c47' },
                        { name:'Diplopauropodidae', color:'#000' },
                        { name:'Eirmopauropodidae', color:'#152c47' },
                        { name:'Eurypauropodidae', color:'#000' },
                        { name:'Hansenauropodidae', color:'#152c47' },
                        { name:'Pauropodidae', color:'#000' },
                        { name:'Polypauropodidae', color:'#152c47' },
                        { name:'Sphaeropauropodidae', color:'#000' },
                    ]}, 
            ]}, 
            
        ]},
];

(function ($) {
    var M = Math,
        $div, $pie, $svg, fnArc, fnX, fnY, Df;
    Df = {
        pad: 5,
        speed: 500,
        width: 1300,
        height: null,
        radius: null,
        inits: function () {
            this.height = this.width;
            this.radius = this.width / 2;

            $div = $.select('#animaltree');

            fnX = $.scale.linear().range([0, 2 * M.PI]);
            fnY = $.scale.pow().exponent(1.3).domain([0, 1]).range([0, Df.radius]);
        },
    };
    Df.inits();
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    $svg = $div.append('svg') //
    .attr('width', Df.width + Df.pad * 2) //
    .attr('height', Df.height + Df.pad * 2) //
    .append('g') //
    .attr('transform', 'translate(' + [Df.radius + Df.pad, Df.radius + Df.pad] + ')');

    $pie = $.layout.partition() //
    .sort(null) //
    .value(function (d) {
        return 5.8 - d.depth;
    });

    fnArc = $.svg.arc() //
    .startAngle(function (d) {
        return M.max(0, M.min(2 * M.PI, fnX(d.x)));
    }) //
    .endAngle(function (d) {
        return M.max(0, M.min(2 * M.PI, fnX(d.x + d.dx)));
    }) //
    .innerRadius(function (d) {
        return M.max(0, d.y ? fnY(d.y) : d.y);
    }) //
    .outerRadius(function (d) {
        return M.max(0, fnY(d.y + d.dy));
    });

    function isParentOf(p, c) {
        if (p === c) {
            return true;
        }
        if (p.children) {
            return p.children.some(function (d) {
                return isParentOf(d, c);
            });
        }
        return false;
    }

    function color(d) {
        var colors, a, b;
        //
        if (d.children) {
            // There is a maximum of two children!
            colors = d.children.map(color);
            a = $.hsl(colors[0]);
            b = $.hsl(colors[1]);
            // L*a*b* might be better here...
            return $.hsl((a.h + b.h) / 2, a.s * 1.2, a.l / 1.2);
        }
        return d.color || '#fff';
    }

    function maxY(d) {
        return d.children ? M.max.apply(M, d.children.map(maxY)) : d.y + d.dy;
    }

    // Interpolate the scales!

    function arcTween(d) {
        var xd, yd, yr;
        //
        xd = $.interpolate(fnX.domain(), [d.x, d.x + d.dx]);
        yd = $.interpolate(fnY.domain(), [d.y, maxY(d)]);
        yr = $.interpolate(fnY.range(), [d.y ? 20 : 0, Df.radius]);

        return function (d) {
            return function (t) {
                fnX.domain(xd(t));
                fnY.domain(yd(t)).range(yr(t));
                return fnArc(d);
            };
        };
    }

    function brightness(rgb) {
        return (rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114);
    }

    function _init(json) {
        var nodes, path, text, textEnter;

        function click(d) {
            path.transition().duration(Df.speed).attrTween('d', arcTween(d));

            text.style('visibility', function (e) {
                return isParentOf(d, e) ? null : $.select(this).style('visibility');
            }) //
            .transition().duration(Df.speed) //
            .attrTween('text-anchor', function (d) {
                return function () {
                    return fnX(d.x + d.dx / 2) > M.PI ? 'end' : 'start';
                };
            }) //
            .attrTween('transform', function (d) {
                var multiline = (d.name || '').split(' ').length > 1;
                //
                return function () {
                    var angle, rotate;
                    //
                    angle = fnX(d.x + d.dx / 2) * 180 / M.PI - 90;
                    rotate = angle + (multiline ? - 0.5 : 0);

                    return ['rotate(', rotate, ')', //
                    'translate(', fnY(d.y) + Df.pad, ')', //
                    'rotate(', angle > 90 ? - 180 : 0, ')'].join('');
                };
            }) //
            .style('fill-opacity', function (e) {
                return isParentOf(d, e) ? 1 : 1e-6;
            }) //
            .each('end', function (e) {
                $.select(this).style('visibility', isParentOf(d, e) ? null : 'hidden');
            });
        }

        nodes = $pie.nodes({
            children: json
        });

        path = $svg.selectAll('path').data(nodes);
        path.enter() //
        .append('path') //
        .attr({
            'd': fnArc,
            'fill-rule': 'evenodd',
            'id': function (d, i) {
                return 'path-' + i;
            },
        }) //
        .style('fill', color) //
        .on('click', click);

        text = $svg.selectAll('text').data(nodes);

        textEnter = text.enter().append('text');
        textEnter.style({
            'fill-opacity': 1,
            'font-family': 'code bold',
            'font-size': 10,
            'letter-spacing': 2,
            'text-shadow':("0px 0px 20px black"),
            'fill': function (d) {
                return brightness($.rgb(color(d))) < 125 ? '#eee' : '#000';
            },
        }) //
        .attr({
            'dy': '.2em',
            'text-anchor': function (d) {
                return fnX(d.x + d.dx / 2) > M.PI ? 'end' : 'start';
            },
            'transform': function (d) {
                var multiline, angle, rotate, rotated;
                //
                multiline = (d.name || '').split('  ').length > 1;
                angle = fnX(d.x + d.dx / 2) * 180 / M.PI - 90;
                rotate = angle + (multiline ? - 0.5 : 0);
                rotated = (angle > 90 ? - 180 : 0);
                //
                return ['rotate(', rotate, ')', //
                'translate(', fnY(d.y) + Df.pad, ')', //
                'rotate(', rotated, ')'].join('');
            },
        }) //
        .on('click', click);

        textEnter.append('tspan') //
        .attr('x', 0) //
        .text(function (d) {
            return (d.depth ? d.name.split('  ')[0] : '');
        }) //
        .append('tspan') //
        .attr({
            'x': 0,
            'dy': '1em',
        }) //
        .text(function (d) {
            return (d.depth ? d.name.split('  ')[1] || '' : '');
        });
    }
    _init(Data);

}(d3));

  });
