angular.module('animalid')
  .controller('animaltreeControl', function($scope) {

// var Data = [
//     { name:'Amphibians', children:[
//         { name:'Caudata', children:[
//             { name:'Cryptobranchoidea', children:[
//                 { name:'Cryptobranchidae', color:'#0b592a' },
//                 { name:'Hynobiidae', color:'#24603c' },  
//             ]},
//             { name:'Salamandroidea', children:[
//                 { name:'Ambystomatidae', color:'#173523' },
//                 { name:'Amphiumidae', color:'#132b1d' },
//                 { name:'Dicamptodontidae', color:'#173523' },
//                 { name:'Plethodontidae', color:'#132b1d' },
//                 { name:'Proteidae', color:'#173523' },  
//                 { name:'Rhyacotritonidae', color:'#132b1d' },
//                 { name:'Salamandridae', color:'#173523' },  
//             ]},
//             { name:'Sirenoidea', children:[
//                 { name:'Pseudobranchus', color:'#24603c' },
//                 { name:'Siren', color:'#0b592a' },  
//             ]},
//         ]},
//         { name:'Gymnophiona', children:[
//             { name:'Apoda', children:[
//                 { name:'Caeciliidae', color:'#132b1d' },
//                 { name:'Chikilidae', color:'#173523' },
//                 { name:'Dermophiidae', color:'#132b1d' },
//                 { name:'Herpelidae', color:'#173523' },
//                 { name:'Ichthyophiidae', color:'#132b1d' },
//                 { name:'Indotyphlidae', color:'#173523' },
//                 { name:'Rhinatrematidae', color:'#132b1d' },
//                 { name:'Scolecomorphidae', color:'#173523' },  
//                 { name:'Siphonopidae', color:'#132b1d' },
//                 { name:'Typhlonectidae', color:'#173523' },  
//             ]},
//         ]},
//         { name:'Salientia', children:[
//             { name:'Archaeobatrachia', children:[
//                 { name:'Ascaphidae', color:'#24603c' },
//                 { name:'Bombinatoridae', color:'#0b592a' },
//                 { name:'Alytidae', color:'#24603c' },
//                 { name:'Leiopelmatidae', color:'#0b592a' },   
//             ]},
//             { name:'Mesobatrachia', children:[
//                 { name:'Pelobatidae', color:'#132b1d' },
//                 { name:'Pelodytidae', color:'#173523' },
//                 { name:'Pipidae', color:'#132b1d' },
//                 { name:'Rhinophrynidae', color:'#173523' },
//                 { name:'Scaphiopodidae', color:'#132b1d' },
//                 { name:'Megophryidae', color:'#173523' }, 
//             ]},
//             { name:'Neobatrachia', children:[
//                 { name:'Bufonoidea', color:'#24603c' },
//                 { name:'Dendrobatoidea', color:'#0b592a' },
//                 { name:'Hyloidea', color:'#24603c' },
//                 { name:'Microhylidae', color:'#0b592a' },
//                 { name:'Ranoidea', color:'#24603c' },   
//             ]},
//         ]},
//     ]},



//     { name:'Arthropods', children:[
//         { name:'Chelicerates', color:'#aee', children:[
//             { name:'Xiphosura', children:[
//                 { name:'Xiphosurida', children:[
//                     { name:'Limulina', color:'#222' }, 
//                 ]},
//             ]},
//             { name:'Arachnid', children:[
//                 { name:'Acari', children:[
//                     { name:'Acariformes', color:'#555' },
//                     { name:'Parasitiformes', color:'#444' }, 
//                 ]},
//                 { name:'Amblypygi', children:[
//                     { name:'Paracharontidae', color:'#333' },
//                     { name:'Charinidae', color:'#222' }, 
//                     { name:'Charontidae', color:'#333' }, 
//                     { name:'Phrynichidae', color:'#222' }, 
//                     { name:'Phrynidae', color:'#333' }, 
//                 ]},
//                 { name:'Araneae', children:[
//                     { name:'Mesothelae', color:'#444' },
//                     { name:'Opisthothelae', color:'#555' }, 
//                 ]},
//                 { name:'Opiliones', children:[
//                     { name:'Cyphophthalmi', color:'#222' }, 
//                     { name:'Eupnoi', color:'#333' }, 
//                     { name:'Dyspnoi', color:'#222' }, 
//                     { name:'Laniatores', color:'#333' }, 
//                     { name:'Tetrophthalmi', color:'#222' }, 
//                 ]},
//                 { name:'Palpigradi', children:[
//                     { name:'Allokoenenia', color:'#555' },
//                     { name:'Eukoenenia', color:'#444' },
//                     { name:'Koeneniodes', color:'#555' },
//                     { name:'Leptokoenenia', color:'#444' },
//                     { name:'Prokoenenia', color:'#555' },
//                     { name:'Triadokoenenia', color:'#444' }, 
//                 ]},
//                 { name:'Pseudoscorpiones', children:[
//                     { name:'Chthonioidea', color:'#333' },
//                     { name:'Neobisioidea', color:'#222' },
//                     { name:'Garypoidea', color:'#333' },
//                     { name:'Cheiridioidea', color:'#222' },
//                     { name:'Feaelloidea', color:'#333' },
//                     { name:'Cheliferoidea', color:'#222' },
//                 ]},
//                 { name:'Ricinulei', children:[
//                     { name:'Cryptocellus', color:'#555' },
//                     { name:'Pseudocellus', color:'#444' }, 
//                     { name:'Ricinoides', color:'#555' }, 
//                 ]},
//                 { name:'Schizomida', children:[
//                     { name:'Hubbardiidae', color:'#222' },
//                     { name:'Protoschizomidae', color:'#333' }, 
//                 ]},
//                 { name:'Scorpiones', children:[
//                     { name:'Buthoidea', color:'#444' },
//                     { name:'Chaeriloidea', color:'#555' },
//                     { name:'Chactoidea', color:'#444' },
//                     { name:'Iuroidea', color:'#555' }, 
//                     { name:'Pseudochactoidea', color:'#444' },
//                     { name:'Scorpionoidea', color:'#555' },
//                 ]},
//                 { name:'Solifugae', children:[
//                     { name:'Ammotrechidae', color:'#222' },
//                     { name:'Ceromidae', color:'#333' }, 
//                     { name:'Daesiidae', color:'#222' }, 
//                     { name:'Eremobatidae', color:'#333' }, 
//                     { name:'Galeodidae', color:'#222' }, 
//                     { name:'Gylippidae', color:'#333' }, 
//                     { name:'Hexisopodidae', color:'#222' }, 
//                     { name:'Karschiidae', color:'#333' }, 
//                     { name:'Melanoblossidae', color:'#222' }, 
//                     { name:'Mummuciidae', color:'#333' }, 
//                     { name:'Rhagodidae', color:'#222' }, 
//                     { name:'Solpugidae', color:'#333' }, 
//                 ]},
//                 { name:'Thelyphonida', children:[
//                     { name:'Thelyphonidae', color:'#444' }, 
//                 ]},
//             ]},
//         ]},
//         { name:'Crustaceans', color:'#aee', children:[
//             { name:'Branchiopoda', children:[
//                     { name:'Sarsostraca', children:[
//                         { name:'Anostraca', color:'#222' },
//                     ]},
//                     { name:'Phyllopoda', children:[
//                         { name:'Notostraca', color:'#222' },
//                         { name:'Laevicaudata', color:'#222' },
//                         { name:'Spinicaudata', color:'#222' },
//                         { name:'Cyclestherida', color:'#222' },
//                         { name:'Cladocera', color:'#222' },
//                     ]},
//                 ]},
//             { name:'Remipedia', children:[
//                     { name:'Nectiopoda', children:[
//                         { name:'Godzilliidae', color:'#222' },
//                         { name:'Micropacteridae', color:'#222' },
//                         { name:'Speleonectidae', color:'#222' },
//                     ]},
                   
//                 ]},
//             { name:'Cephalocarida', children:[
//                     { name:'Chiltoniella', color:'#222' },
//                     { name:'Hampsonellus', color:'#333' }, 
//                     { name:'Hutchinsoniella', color:'#222' }, 
//                     { name:'Lightiella', color:'#333' }, 
//                     { name:'Sandersiella', color:'#222' }, 
//                 ]},
//             { name:'Maxillopoda', children:[
//                     { name:'Thecostraca', children:[
//                         { name:'Facetotecta', color:'#222' },
//                         { name:'Ascothoracida', color:'#222' },
//                         { name:'Cirripedia', color:'#222' },
//                     ]},
//                     { name:'Tantulocarida', children:[
//                         { name:'Basipodellidae', color:'#222' },
//                         { name:'Deoterthridae', color:'#222' },
//                         { name:'Doryphallophoridae', color:'#222' },
//                         { name:'Microdajidae', color:'#222' },
//                     ]},
//                     { name:'Branchiura', children:[
//                         { name:'Arguloida', color:'#222' },
//                     ]}, 
//                     { name:'Pentastomida', children:[
//                         { name:'Cephalobaenida', color:'#222' },
//                         { name:'Porocephalida', color:'#222' },
//                         { name:'Raillietiellida', color:'#222' },
//                         { name:'Reighardiida', color:'#222' },
//                     ]}, 
//                     { name:'Mystacocarida', children:[
//                         { name:'Ctenocheilocaris', color:'#222' },
//                         { name:'Derocheilocaris', color:'#222' },
//                     ]}, 
//                     { name:'Copepoda', children:[
//                         { name:'Calanoida', color:'#222' },
//                         { name:'Cyclopoida', color:'#222' },
//                         { name:'Gelyelloida', color:'#222' },
//                         { name:'Harpacticoida', color:'#222' },
//                         { name:'Misophrioida', color:'#222' },
//                         { name:'Monstrilloida', color:'#222' },
//                         { name:'Mormonilloida', color:'#222' },
//                         { name:'Platycopioida', color:'#222' },
//                         { name:'Poecilostomatoida', color:'#222' },
//                         { name:'Siphonostomatoida', color:'#222' },
//                     ]}, 
//                 ]},
//             { name:'Ostracoda', children:[
//                     { name:'Myodocopa', children:[
//                         { name:'Myodocopida', color:'#222' },
//                         { name:'Halocyprida', color:'#222' },
//                     ]}, 
//                     { name:'Podocopa', children:[
//                         { name:'Platycopida', color:'#222' },
//                         { name:'Podocopida', color:'#222' },
//                     ]},  
//                 ]},
//             { name:'Malacostraca', children:[
//                     { name:'Eumalacostraca', children:[
//                         { name:'Syncarida', color:'#222' },
//                         { name:'Peracarida', color:'#222' },
//                         { name:'Eucarida', color:'#222' },
//                     ]}, 
//                     { name:'Hoplocarida', children:[
//                         { name:'Stomatopoda', color:'#222' },
//                     ]}, 
//                     { name:'Phyllocarida', children:[
//                         { name:'Leptostraca', color:'#222' },
//                     ]}, 
//                 ]},
//         ]},
//         { name:'Hexapods', color:'#aee', children:[
//             { name:'Collembola', color:'#aee' },
//             { name:'Protura', color:'#ee3' },
//             { name:'Diplura', color:'#ece' },
//             { name:'Insecta', color:'#dad' },
//         ]},
//         { name:'Myriapods', color:'#aee', children:[
//             { name:'Chilopoda', color:'#aee' },
//             { name:'Diplopoda', color:'#ee3' },
//             { name:'Pauropoda', color:'#ece' },
//             { name:'Symphyla', color:'#dad' },
//         ]},
//     ]},



//     { name:'Birds', children:[
//         { name:'Neognathae', color:'#aee', children:[
//             { name:'Galloanserae', color:'#aee' },
//             { name:'Neoaves', color:'#aee' },
//         ]},
//         { name:'Palaeognathae', color:'#dad', children:[
//             { name:'Apterygidae', color:'#aee' },
//             { name:'Casuariiformes', color:'#aee' },
//             { name:'Rheiformes', color:'#aee' },
//             { name:'Struthioniformes', color:'#aee' },
//             { name:'Tinamiformes', color:'#aee' },
//         ]},
//     ]},



//     { name:'Fish', children:[
//         { name:'Actinopterygii', color:'#aee', children:[
//             { name:'Chondrostei', color:'#aee' },
//             { name:'Cladistia', color:'#ee3' },
//             { name:'Neopterygii', color:'#ece' },
//         ]},
//         { name:'Agnatha', color:'#ee3', children:[
//             { name:'Cyclostomata', color:'#ee3' },
//         ]},
//         { name:'Chondrichthyes', color:'#ece', children:[
//             { name:'Elasmobranchii', color:'#aee' },
//             { name:'Holocephali', color:'#ee3' },
//         ]},
//         { name:'Sarcopterygii', color:'#ece', children:[
//             { name:'Actinistia', color:'#aee' },
//             { name:'Rhipidistia', color:'#ee3' },
//         ]},
//     ]},



//     { name:'Mammals', children:[
//         { name:'Prototheria', color:'#ee3', children:[
//             { name:'Monotremata', color:'#ece', children:[
//                 { name:'Lemon', color:'#ee3' },
//                 ]},
//         ]},
//         { name:'Theriiformes', children:[
//             { name:'Afrotheria', children:[
//                 { name:'Anise', color:'#3a4' },
//                 { name:'Black Pepper', color:'#3a4' },
                
//             ]},
//             { name:'Xenarthra', children:[
//                 { name:'Anise', color:'#3a4' },
//                 { name:'Black Pepper', color:'#3a4' },
//                 { name:'Cinnamon', color:'#ee3' },
//             ]},
//             { name:'Boreoeutheria', children:[
//                 { name:'Anise', color:'#3a4' },
//                 { name:'Black Pepper', color:'#3a4' },
//                 { name:'Cinnamon', color:'#ee3' },
//             ]},
//         ]},
//     ]},



//     { name:'Reptiles', children:[
//          { name:'Crocodilia', children:[
//                 { name:'Gavialoidea', color:'#3a4' },
//                 { name:'Brevirostres', color:'#3a4' },
//             ]},
//         { name:'Lepidosauria', children:[
//                 { name:'Rhynchocephalia', color:'#3a4' },
//                 { name:'Squamata', color:'#3a4' },
//             ]},
//         { name:'Testudines', children:[
//                 { name:'Cryptodira', color:'#3a4' },
//                 { name:'Pleurodira', color:'#3a4' },
//             ]},
//     ]},
// ];



  });
