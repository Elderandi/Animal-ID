drop table if exists animal;
drop table if exists mainclass;
drop table if exists subgroup;
drop table if exists maingroup;

create table maingroup (
    maingroup_id serial primary key,
    maingroup_name text
);

insert into maingroup (maingroup_name)
values

---------- 01 ------------ 02 -------03------- 04 --------- 05 ---------- 06 - Animals
('Amphibians'), ('Arthropods'), ('Bird'), ('Fish'), ('Mammals'), ('Reptiles');

    create table subgroup (
        subgroup_id serial primary key,
        subgroup_name text,
        maingroup_ref INTEGER,
        FOREIGN KEY (maingroup_ref) REFERENCES maingroup (maingroup_id)
    );

    insert into subgroup (subgroup_name, maingroup_ref)
    values

    --------- 01 ------------ 02 ---------------- 03 ---- Amphibians
    ('Salientia', 1), ('Caudata', 1), ('Gymnophiona', 1),

    ------------ 04 ---------------- 05 ------------- 06 -------------- 07 ---- Arthropods
    ('Chelicerates', 2), ('Crustaceans', 2), ('Hexapods', 2), ('Myriapods', 2),

    ---------- 08 ------------------ 09 ---- Bird
    ('Neognathae', 3), ('Palaeognathae', 3),

    -------------- 10 ----------------- 11 ------------------- 12 --------------- 13 --- Fish
    ('Actinopterygii', 4), ('Agnatha', 4), ('Chondrichthyes', 4),  ('Sarcopterygii', 4),

    ----------- 14 ----------------- 15 ---- Mammals
    ('Prototheria', 5), ('Theriiformes', 5),

    ---------- 16 ----------------- 17 --------------- 18 ---- Reptiles
    ('Crocodilia', 6), ('Lepidosauria', 6), ('Testudines', 6);

        create table mainclass (
            mainclass_id serial primary key,
            mainclass_name text,
            subgroup_ref INTEGER,
            mainclass_definition TEXT,
            order_list TEXT,
            mainclass_image TEXT,
            FOREIGN KEY (subgroup_ref) REFERENCES subgroup (subgroup_id)
        );

        insert into mainclass (mainclass_name, subgroup_ref, mainclass_definition, order_list, mainclass_image)
        values

        -- A M P H I B I A N S
        --- 01 --- Amphibians : Salientia
        ('Archaeobatrachia', 1, 'The Archaeobatrachia are a suborder of Anura containing various primitive frogs and toads. As the name literally suggests, these are the most primitive frogs. Many of the species (28 in total) show certain physiological characteristics which are not present in other frogs and toads, thus giving rise to this group. They are largely found in Eurasia, New Zealand, the Philippines, and Borneo, and are characteristically small. In addition, the family Ascaphidae is found in the Pacific Northwest and northern rocky mountains of the United States, and is only represented by two species.',
        'Ascaphidae, Bombinatoridae, Alytidae, Leiopelmatidae', './images/api/main_class/Amphibians-Salientia/archaeobatrachia.png'),
        --- 02 --- Amphibians : Salientia
        ('Mesobatrachia', 1, 'The Mesobatrachia are the second-largest of the Anura suborders of amphibians. At the end of 2016, it contained 3 superfamilies (Pelobatoidea, Pelodytoidea and Pipoidea), 6 families, 16 genera, and 244 species. Recognized as a group in 1993, the name (meso- "middle" batrachia "frogs") is contrasted with the primitive Archaeobatrachia and the more diverse and advanced Neobatrachia.',
        'Megophryidae, Pelobatidae, Pelodytidae, Pipidae, Rhinophrynidae, Scaphiopodidae', './images/api/main_class/Amphibians-Salientia/mesobatrachia.png'),
        --- 03 --- Amphibians : Salientia
        ('Neobatrachia', 1, 'The Neobatrachia are a suborder of the Anura, the order of frogs and toads. This suborder is the most advanced and apomorphic of the three anuran orders alive today, hence its name, which literally means "new frogs" (from the hellenic words neo, meaning "new" and batrachia, meaning "frogs"). It is also by far the largest of the three; with more than 5,000 different species that make up over 96% of all living anurans. The differentiation between Archaeobatrachia, Mesobatrachia, and Neobatrachia is based primarily on anatomic differences, especially the skeletal structure, as well as several visible characteristics and behaviors.',
        'Bufonoidea, Dendrobatoidea, Hyloidea, Microhylidae, Ranoidea', './images/api/main_class/Amphibians-Salientia/neobatrachia.png'),

        --- 04 --- Amphibians : Caudata
        ('Cryptobranchoidea', 2, 'The Cryptobranchoidea are a suborder of salamanders found in the eastern United States, China, Taiwan, and Japan. They are known as primitive salamanders, in contrast to Salamandroidea, or advanced salamanders. Some species of the fully aquatic Cryptobranchidae family are known as giant salamanders due to their large size.',
        'Cryptobranchidae, Hynobiidae', './images/api/main_class/Amphibians-Caudata/cryptobranchoidea.png'),
        --- 05 --- Amphibians : Caudata
        ('Salamandroidea', 2, 'The Salamandroidea are a suborder of salamanders, referred to as advanced salamanders. The members of the suborder are found worldwide except for Antarctica, sub-Saharan Africa, and Oceania. They differ from suborder Cryptobranchoidea as the angular and prearticular bones in their lower jaws are fused, and all members use internal fertilization. The female is fertilized by means of a spermatophore, a sperm-containing cap placed by the male in her cloaca. The sperm is stored in spermathecae on the roof of the cloaca until it is needed at the time of oviposition.',
        'Ambystomatidae, Amphiumidae, Dicamptodontidae, Plethodontidae, Proteidae, Rhyacotritonidae, Salamandridae', './images/api/main_class/Amphibians-Caudata/salamandroidea.png'),
        --- 06 --- Amphibians : Caudata
        ('Sirenoidea', 2, 'Sirenidae, the sirens, are a family of aquatic salamanders. Family members have very small fore limbs, and lack hind limbs altogether. In one species, the skeleton in their fore limbs is made of only cartilage. In contrast to most other salamanders, they have external gills bunched together on the neck in both larval and adult states. Sirens are found only in the Southeastern United States and northern Mexico. Although they are primarily carnivorous, they are the only salamanders observed eating plant material.',
        'Pseudobranchus, Siren', './images/api/main_class/Amphibians-Caudata/sirenoidea.png'),

        --- 07 --- Amphibians : Gymnophiona
        ('Apoda', 3, 'Caecilians (/sɪˈsɪlɪən/, New Latin, blind ones) are a group of limbless, serpentine amphibians. They mostly live hidden in the ground, making them the least familiar order of amphibians. All modern caecilians and their closest fossil relatives are grouped as a clade, Apoda, within the larger group Gymnophiona, which also includes more primitive extinct caecilian-like amphibians. Caecilians are mostly distributed in the tropics of South and Central America, Africa, and southern Asia. Their diet consists of earthworms and small subterranean creatures.',
        'Caecilian', './images/api/main_class/Amphibians-Gymnophiona/apoda.png'),


        -- A R T H R O P O D S
        --- 08 --- Arthropods : Chelicerates
        ('Xiphosura', 4, 'The Xiphosura are an order of marine merostome chelicerates that includes a large number of extinct lineages and only four extant species in the family Limulidae, which includes the horseshoe crabs. The group has hardly changed in millions of years; the modern horseshoe crabs look almost identical to prehistoric genera such as the Jurassic Mesolimulus, and are considered to be living fossils. The most notable difference between ancient and modern forms is that the abdominal segments in present species are fused into a single unit in adults.',
        'Xiphosurida','./images/api/main_class/Arthropods-Chelicerates/xiphosura.png'),
        --- 09 --- Arthropods : Chelicerates
        ('Arachnid', 4, 'Arachnids are a class of joint-legged invertebrate animals, in the subphylum Chelicerata. All arachnids have eight legs, although the front pair of legs in some species has converted to a sensory function, while in other species, different appendages can grow large enough to take on the appearance of extra pairs of legs. The term is derived from the Greek word ἀράχνη (aráchnē), meaning "spider". Spiders are the largest order in the class, which also includes scorpions, ticks, mites, harvestmen, and solifuges.',
        'Acari, Amblypygi, Araneae, Opiliones, Palpigradi, Pseudoscorpiones, Ricinulei, Schizomida, Scorpiones, Solifugae, Thelyphonida', './images/api/main_class/Arthropods-Chelicerates/arachnid.png'),

        --- 10  --- Arthropods : Crustaceans
        ('Branchiopoda', 5, 'Branchiopoda is a class of crustaceans. It comprises fairy shrimp, clam shrimp, Cladocera, Notostraca and the Devonian Lepidocaris. They are mostly small, freshwater animals that feed on plankton and detritus.',
        'Anostraca, Notostraca, Laevicaudata, Spinicaudata, Cyclestherida, Cladocera', './images/api/main_class/Arthropods-Crustaceans/Branchiopoda.png'),
        --- 11  --- Arthropods : Crustaceans
        ('Remipedia', 5, 'Remipedia is a class of blind crustaceans found in coastal aquifers which contain saline groundwater, with populations identified in almost every ocean basin so far explored, including in Australia, the Caribbean Sea, and the Atlantic Ocean. The first described remipede was the fossil Tesnusocaris goldichi (Lower Pennsylvanian), but, since 1979, at least seventeen living species have been identified with global distribution throughout the neo-tropical zone. Genetic studies have implied that remipedes are the crustaceans most closely related to insects, so much so that they and insects may be considered a "sister group" to all other crustacea.',
        'Godzilliidae, Micropacteridae, Speleonectidae', './images/api/main_class/Arthropods-Crustaceans/Remipedia.png'),
        --- 12  --- Arthropods : Crustaceans
        ('Cephalocarida', 5, 'The Cephalocarida are a class in the subphylum Crustacea comprising only 12 benthic species. They were discovered in 1955 by Howard L. Sanders, and are commonly referred to as horseshoe shrimps. They have been grouped together with the Remipedia in the Xenocarida. Although a second family, Lightiellidae, is sometimes used, all cephalocaridans are generally considered to belong in just one family: Hutchinsoniellidae. Though no fossil record of cephalocaridans has been found, most specialists believe them to be primitive among crustaceans.',
        'Chiltoniella, Hampsonellus, Hutchinsoniella, Lightiella, Sandersiella', './images/api/main_class/Arthropods-Crustaceans/Cephalocarida.png'),
        --- 13  --- Arthropods : Crustaceans
        ('Maxillopoda', 5, 'Maxillopoda is a diverse class of crustaceans including barnacles, copepods and a number of related animals. It does not appear to be a monophyletic group, and no single character unites all the members.',
        'Thecostraca, Tantulocarida, Branchiura, Pentastomida, Mystacocarida, Copepoda', './images/api/main_class/Arthropods-Crustaceans/Maxillopoda.png'),
        --- 14  --- Arthropods : Crustaceans
        ('Ostracoda', 5, 'Ostracods, or ostracodes, are a class of the Crustacea, sometimes known as seed shrimp. Some 70,000 species (only 13,000 of which are extant) have been identified, grouped into several orders. They are small crustaceans, typically around 1 mm (0.039 in) in size, but varying from 0.2 to 30 mm (0.0079 to 1.1811 in) in the case of Gigantocypris. Their bodies are flattened from side to side and protected by a bivalve-like, chitinous or calcareous valve or "shell". The hinge of the two valves is in the upper region of the body. Ostracods are grouped together based on gross morphology, but the group may not be monophyletic; their molecular phylogeny remains ambiguous.',
        'Myodocopa, Myodocopida, Halocyprida, Podocopa, Platycopida, Podocopida', './images/api/main_class/Arthropods-Crustaceans/Ostracoda.png'),
        --- 15  --- Arthropods : Crustaceans
        ('Malacostraca', 5, 'Malacostraca is the largest of the six classes of crustaceans, containing about 40,000 living species, divided among 16 orders. Its members, the malacostracans, display a great diversity of body forms and include crabs, lobsters, crayfish, shrimp, krill, woodlice, amphipods, mantis shrimp and many other, less familiar animals. They are abundant in all marine environments and have colonised freshwater and terrestrial habitats. They are segmented animals, united by a common body plan comprising 20 body segments (rarely 21), and divided into a head, thorax, and abdomen.',
        'Eumalacostraca, Hoplocarida, Phyllocarida', './images/api/main_class/Arthropods-Crustaceans/Malacostraca.png'),

        --- 16  --- Arthropods : Hexapods
        ('Collembola', 6, 'Springtails (Collembola) form the largest of the three lineages of modern hexapods that are no longer considered insects (the other two are the Protura and Diplura). Although the three orders are sometimes grouped together in a class called Entognatha because they have internal mouthparts, they do not appear to be any more closely related to one another than they all are to insects, which have external mouthparts.',
        'Entomobryomorpha, Poduromorpha, Symphypleona', './images/api/main_class/Arthropods-Hexapods/Collembola.png'),
        --- 17  --- Arthropods : Hexapods
        ('Protura', 6, 'The Protura, or proturans, and sometimes nicknamed coneheads, are very small (less than 2 mm long), soil-dwelling animals, so inconspicuous they were not noticed until the 20th century. The Protura constitute an order of hexapods that were previously regarded as insects, and sometimes treated as a class in their own right. Some evidence indicates the Protura are basal to all other hexapods, although not all researchers consider them Hexapoda, rendering the monophyly of Hexapoda unsettled. Uniquely among hexapods, proturans show anamorphic development, whereby body segments are added during moults. There are close to 800 species, described in seven families. Nearly 300 species are contained in a single genus, Eosentomon.',
        'Acerentomata, Eosentomata, Sinentomata', './images/api/main_class/Arthropods-Hexapods/Protura.png'),
        --- 18  --- Arthropods : Hexapods
        ('Diplura', 6, 'The order Diplura is one of the four groups of hexapods, alongside insects, springtails and Protura. They are sometimes called "two-pronged bristletails".',
        'Campodeidae, Procampodeidae, Projapygidae, Anajapygidae, Japygidae, Heterojapygidae, Dinjapygidae, Evalljapygidae, Parajapygidae, Octostigmatidae', './images/api/main_class/Arthropods-Hexapods/Diplura.png'),
        --- 19  --- Arthropods : Hexapods
        ('Insecta', 6, 'Insects (from Latin insectum, a calque of Greek ἔντομον [éntomon], "cut into sections") are a class of hexapod invertebrates within the arthropod phylum that have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae. They are the most diverse group of animals on the planet, including more than a million described species and representing more than half of all known living organisms. The number of extant species is estimated at between six and ten million, and potentially represent over 90% of the differing animal life forms on Earth. Insects may be found in nearly all environments, although only a small number of species reside in the oceans, a habitat dominated by another arthropod group, crustaceans.',
        'Archaeognatha, Blattodea, Coleoptera, Dermaptera, Diptera, Embioptera, Ephemeroptera, Hemiptera, Hymenoptera, Lepidoptera, Mantodea, Mecoptera, Megaloptera, Neuroptera, Notoptera, Odonata, Orthoptera, Phasmatodea, Phthiraptera, Plecoptera, Psocodea, Raphidioptera, Siphonaptera, Strepsiptera, Thysanoptera, Thysanura, Trichoptera, Zoraptera, Zygentoma', './images/api/main_class/Arthropods-Hexapods/Insecta.png'),

        --- 20  --- Arthropods : Myriapods
        ('Chilopoda', 7, 'Centipedes are arthropods belonging to the class Chilopoda of the subphylum Myriapoda. They are elongated metameric creatures with one pair of legs per body segment. Centipedes are known to be highly venomous, and often inject paralyzing venom.',
        'Scutigeromorpha, Lithobiomorpha, Craterostigmomorpha, Scolopendromorpha, Geophilomorpha', './images/api/main_class/Arthropods-Myriapods/Chilopoda.png'),
        --- 21  --- Arthropods : Myriapods
        ('Diplopoda', 7, 'Millipedes are a group of arthropods that are characterised by having two pairs of jointed legs on most body segments; they are known scientifically as the class Diplopoda, the name being derived from this feature.',
        'Penicillata, Chilognatha', './images/api/main_class/Arthropods-Myriapods/Diplopoda.png'),
        --- 22  --- Arthropods : Myriapods
        ('Pauropoda', 7, 'Pauropods are small, pale, millipede-like arthropods. Around 830 species in twelve families are found worldwide, living in soil and leaf mould. They look rather like centipedes, but are probably the sister group to millipedes.',
        'Hexamerocerata, Tetramerocerata', './images/api/main_class/Arthropods-Myriapods/Pauropoda.png'),
        --- 23  --- Arthropods : Myriapods
        ('Symphyla', 7, 'Symphylans, also known as garden centipedes or pseudocentipedes, are soil-dwelling arthropods of the class Symphyla in the subphylum Myriapoda.',
        'Scutigerellidae, Scolopendrellidae', './images/api/main_class/Arthropods-Myriapods/Symphyla.png'),


        -- B I R D S
        --- 24 --- Birds : Neognathae
        ('Galloanserae', 8, 'Fowl are birds belonging to one of two biological orders, namely the gamefowl or landfowl (Galliformes) and the waterfowl (Anseriformes). Studies of anatomical and molecular similarities suggest these two groups are close evolutionary relatives; together, they form the fowl clade which is scientifically known as Galloanserae (initially termed Galloanseri). This clade is also supported by morphological and DNA sequence data as well as retrotransposon presence/absence data.',
        'Anseriformes, Pangalliformes, Dromornithidae', null),
        --- 25 --- Birds : Neognathae
        ('Neoaves', 8, 'Neoaves is a clade that consists of all modern birds (Neornithes or Aves) with the exception of Paleognathae (ratites and kin) and Galloanserae (ducks, chickens and kin). The early diversification of the various neoavian groups occurred very rapidly around the Cretaceous–Paleogene extinction event, and attempts to resolve their relationships with each other have resulted initially in much controversy.',
        'Columbea, Passerea', null),

        --- 26 --- Birds : Palaeognathae
        ('Apterygiformes', 9, 'An order of flightless ground birds (superorder Palaeognathae) having vestigial wings, long bills, and small eyes and being coextensive with a family (Apterygidae) that includes the New Zealand kiwis and extinct related birds of Australia and New Zealand.',
        'Apterygidae', null),
        --- 27 --- Birds : Palaeognathae
        ('Casuariiformes', 9, 'The Casuariiformes is an order of large flightless bird that has four surviving members: the three species of cassowary, and the only remaining species of emu. They are classified as one family Casuariidae or two, with the emu split off into its own family Dromaiidae. All four living members are native to Australia-New Guinea, but some possible extinct taxa occurred in other landmasses.',
        'Casuariidae, Dromaiidae', null),
        --- 28 --- Birds : Palaeognathae
        ('Rheiformes', 9, 'Rheidae is a family of flightless ratite birds which first appeared in the Paleocene. It is today represented by the sole living genus Rhea, but also contains several extinct genera.',
        'Rheidae', null),
        --- 29 --- Birds : Palaeognathae
        ('Struthioniformes', 9, 'Struthionidae is a family of flightless ratite birds which first appeared during the Miocene epoch, though various Paleocene, Eocene and Oligocene ratites may belong to this group.',
        'Struthio', null),
        --- 30 --- Birds : Palaeognathae
        ('Tinamiformes', 9, 'Tinamous, inambus yutos form an order (Tinamiformes), comprising a single family (Tinamidae) with two distinct subfamilies, containing 47 species of birds found in Mexico, Central America, and South America. The word "tinamou" comes from the Galibi term for these birds, tinamu. One of the most ancient living groups of bird, they first appear in the fossil record in the Miocene epoch. Tinamous have traditionally been regarded as the sister group of the flightless ratites, but recent work places them well within the ratite radiation, implying basal ratites could fly.',
        'Tinaminae, Nothurinae', null),


        -- F I S H
        --- 31 --- Fish : Actinopterygii
        ('Chondrostei', 10, 'Chondrostei are primarily cartilaginous fish showing some degree of ossification. It is thought that the cartilaginous condition is derived, and that the ancestors of this group were bony fish with fully ossified skeletons.',
        'Acipenseriformes, Polypteriformes', './images/api/main_class/Fish-Actinopterygii/Chondrostei.png'),
        --- 32 --- Fish : Actinopterygii
        ('Cladistia', 10, 'Cladistia is a clade of bony fishes that currently consists of few anguilliform remnants of an ancient diversity. Their major synapomorphies are a dorsal fin with independent rays, and a posteriorly elongated parasphenoid.',
        'Guildayichthyiformes, Polypteriformes', './images/api/main_class/Fish-Actinopterygii/Cladistia.png'),
        --- 33 --- Fish : Actinopterygii
        ('Neopterygii', 10, 'Neopterygii are a group of fish. Neopterygii means "new fins". Only a few changes occurred during their evolution from the earlier actinopterygians. They appeared sometime in the Late Permian, before the time of the dinosaurs. The Neopterygii are a very successful group of fish, because they can move more rapidly than their ancestors. Their scales and skeletons began to lighten during their evolution, and their jaws became more powerful and efficient. While electroreception and the ampullae of Lorenzini are present in all other groups of fish, with the exception of hagfish (although hagfish are not Actinopterygii, they are Agnathans}, Neopterygii have lost this sense, even if it has later been re-evolved within Gymnotiformes and catfishes, which possess nonhomologous teleost ampullae.',
        'Lepisosteiformes, Amiiformes, Osteoglossiformes, Hiodontiformes, Elopiformes, Albuliformes, Notacanthiformes, Anguilliformes, Saccopharyngiformes, Clupeiformes, Gonorynchiformes, Cypriniformes, Characiformes, Gymnotiformes, Siluriformes, Argentiniformes, Salmoniformes, Esociformes, Osmeriformes, Ateleopodiformes, Stomiiformes, Aulopiformes, Myctophiformes, Lampriformes, Polymixiiformes, Percopsiformes, Batrachoidiformes, Lophiiformes, Gadiformes, Ophidiiformes, Mugiliformes, Atheriniformes, Beloniformes, Cetomimiformes, Cyprinodontiformes, Stephanoberyciformes, Beryciformes, Zeiformes, Gobiesociformes, Gasterosteiformes, Syngnathiformes, Synbranchiformes, Tetraodontiformes, Pleuronectiformes, Scorpaeniformes, Perciformes', './images/api/main_class/Fish-Actinopterygii/Neopterygii.png'),

        --- 34 --- Fish : Agnatha
        ('Cyclostomata', 11, 'Cyclostomata is a group of agnathans that comprises the living jawless fishes: the lampreys and hagfishes. Both groups have round mouths that lack jaws but have retractable horny teeth. The name Cyclostomata means "round mouths".',
        'Myxini, Hyperoartia', './images/api/main_class/Fish-Agnatha/Cyclostomata.png'),

        --- 35 --- Fish : Chondrichthyes
        ('Elasmobranchii', 12, 'Elasmobranchii is a subclass of Chondrichthyes or cartilaginous fish. Members of this subclass are characterised by having five to seven pairs of gill clefts opening individually to the exterior, rigid dorsal fins and small placoid scales on the skin. The teeth are in several series; the upper jaw is not fused to the cranium, and the lower jaw is articulated with the upper. The details of this jaw anatomy vary between species, and help distinguish the different elasmobranch clades. The pelvic fins in males are modified to create claspers for the transfer of sperm. There is no swim bladder, instead these fish maintain buoyancy with large livers rich in oil. The earliest elasmobranch fossils came from the Devonian and many surviving orders date back to the Cretaceous, or even earlier. Many species became extinct during the Permian and there was a burst of adaptive radiation during the Jurassic. Extant species are classified under Selachii (Selachimorpha), the modern sharks, and Batoidea, the rays, skates and sawfish.',
        'Heterodontiformes, Orectolobiformes, Lamniformes, Carcharhiniformes, Hexanchiformes, Squaliformes, Squatiniformes, Pristiophoriformes, Torpediniformes, Pristiformes, Rajiformes, Myliobatiformes', './images/api/main_class/Fish-Chondrichthyes/Elasmobranchii.png'),
        --- 36 --- Fish : Chondrichthyes
        ('Holocephali', 12, 'The subclass Holocephali is a taxon of cartilaginous fish in the class Chondrichthyes. The earliest fossils are of teeth and come from the Devonian period.',
        'Chimaeriformes', './images/api/main_class/Fish-Chondrichthyes/Holocephali.png'),

        --- 37 --- Fish : Sarcopterygii
        ('Actinistia', 13, 'Actinistia is a subclass of mostly fossil lobe-finned fishes. This subclass contains the coelacanths, including the two living coelacanths, both of the genus Latimeria: the West Indian Ocean coelacanth and the king of the sea.',
        'Coelacanthiformes, Rebellatricidae', './images/api/main_class/Fish-Sarcopterygii/Actinistia.png'),
        --- 38 --- Fish : Sarcopterygii
        ('Rhipidistia', 13, 'The Rhipidistia, also known as dipnotetrapodomorphs are a clade of lobe-finned fishes which include the tetrapods and lungfishes.',
        'Dipnomorpha, Tetrapodomorpha', './images/api/main_class/Fish-Sarcopterygii/Rhipidistia.png'),


        -- M A M M A L S
        --- 39 --- Mammals : Prototheria
        ('Monotremata', 14, 'Monotremes are one of the three main groups of mammals, along with placentals (Eutheria) and marsupials (Metatheria). The monotremes are typified by laying eggs rather than bearing live young, and by structural differences in their brains, jaws, digestive and reproductive tracts, and other body parts compared to the more common mammalian types. However, like all mammals, the female monotremes nurse their young with milk.',
        'Platypoda, Tachyglossa', null),

        --- 40 --- Mammals : Theriiformes
        ('Afrotheria', 15, 'Afrotheria is a clade of mammals, the living members of which belong to groups that are either currently living in Africa or of African origin: golden moles, elephant shrews (also known as sengis), tenrecs, aardvarks, hyraxes, elephants, sea cows, and several extinct clades. They share few anatomical features but many are partly or entirely African in their distribution. This probably reflects the fact that Africa was an island continent through the early Cenozoic. Because the continent was isolated by water, Laurasian groups such as insectivores, rabbits, carnivorans and ungulates could not become established. Instead, the niches occupied by those groups were filled by tenrecs, hyraxes and elephants that evolved from the ancestral afrothere. This adaptive radiation may have occurred in response to the Cretaceous–Paleogene mass extinction.',
        'Macroscelidea, Afrosoricida, Tubulidentata, Hyracoidea, Proboscidea, Sirenia', null),
        --- 41 --- Mammals : Theriiformes
        ('Xenarthra', 15, 'The superorder Xenarthra is a group of placental mammals, extant today only in the Americas and represented by anteaters, tree sloths, and armadillos. The origins of the order can be traced as far back as the Paleocene, as early as 59 million years ago in South America. Xenarthrans developed and diversified extensively in South America during its long period of isolation in the early to mid Cenozoic Era. They had invaded the Antilles by the early Miocene and, starting about 9 Mya, spread to Central and North America as part of the Great American Interchange. Nearly all of the formerly abundant megafaunal xenarthrans, such as ground sloths, glyptodonts, and pampatheres, became extinct at the end of the Pleistocene. Xenarthrans share several characteristics not present in other placental mammals. The name Xenarthra, which means "strange joints", was chosen because their vertebral joints have extra articulations unlike other mammals. This trait is referred to as "xenarthry". Also, unlike other mammals, the ischium and sacrum are fused. The males have internal testicles, which are located between the bladder and the rectum. Furthermore, xenarthrans have the lowest metabolic rates among the therians.',
        'Cingulata, Pilosa', null),
        --- 42 --- Mammals : Theriiformes
        ('Boreoeutheria', 15, 'Boreoeutheria (synonymous with Boreotheria) (Greek: βόρειο "north" + ευ "good" + θεριό "beast") is a clade (magnorder) of placental mammals that is composed of the sister taxa Laurasiatheria (most hoofed mammals, most pawed carnivores, and several other groups) and Euarchontoglires (Supraprimates). It is now well supported by DNA sequence analyses, as well as retrotransposon presence or absence data.',
        'Laurasiatheria, Euarchontoglires', null),


        -- R E P T I L E S
        --- 43 --- Reptiles : Crocodilia
        ('Gavialoidea', 16, 'Gavialoidea is one of three superfamilies of crocodylians, the other two being Alligatoroidea and Crocodyloidea. Although many extinct species are known, only the gharial Gavialis gangeticus and the false gharial Tomistoma schlegelii are alive today.',
        'Gavialis', './images/api/main_class/Reptiles-Crocodilia/Gavialoidea.png'),
        --- 44 --- Reptiles : Crocodilia
        ('Brevirostres', 16, 'Brevirostres is a clade of crocodylians that includes alligatoroids and crocodyloids. Brevirostres are crocodylians with short snouts, and are distinguished from the long, slender-snouted gharials. It is defined phylogenetically as the last common ancestor of Alligator mississippiensis (the American alligator) and Crocodylus niloticus (the Nile crocodile) and all of its descendants.',
        'Alligatoroidea, Crocodyloidea', './images/api/main_class/Reptiles-Crocodilia/Brevirostres.png'),

        --- 45 --- Reptiles : Lepidosauria
        ('Rhynchocephalia', 17, 'Rhynchocephalia is an order of lizard-like reptiles that includes only two living species of tuatara (Sphenodon punctatus and Sphenodon guntheri), which only inhabit parts of New Zealand. Despite its current lack of diversity, the Rhynchocephalia at one time included a wide array of genera in several families and represents a lineage stretching back to the Mesozoic Era. Many of the niches occupied by lizards today were then held by sphenodontians. There were even several successful groups of aquatic sphenodontians such as pleurosaurs and the bizarre Ankylosphenodon.',
        'Sphenodontidae', './images/api/main_class/Reptiles-Lepidosauria/Rhynchocephalia.png'),
        --- 46 --- Reptiles : Lepidosauria
        ('Squamata', 17, 'The Squamata, or the scaled reptiles, are the largest recent order of reptiles, comprising all lizards and snakes. With over 10,000 species, it is also the second-largest order of extant vertebrates, after the perciform fish, and roughly equal in number to the Saurischia (one of the two major groups of dinosaurs). Members of the order are distinguished by their skins, which bear horny scales or shields. They also possess movable quadrate bones, making it possible to move the upper jaw relative to the neurocranium. This is particularly visible in snakes, which are able to open their mouths very wide to accommodate comparatively large prey. They are the most variably sized order of reptiles, ranging from the 16 mm (0.63 in) dwarf gecko (Sphaerodactylus ariasae) to the 5.21 m (17.1 ft) green anaconda (Eunectes murinus) and the now-extinct mosasaurs, which reached lengths of 14 m (46 ft). Among the other reptiles, squamates are most closely related to the tuatara, which strongly resembles lizards.',
        'Dibamidae, Gekkota, Lacertoidea, Scincomorpha, Toxicofera', './images/api/main_class/Reptiles-Lepidosauria/Squamata.png'),

        --- 47 --- Reptiles : Testudines
        ('Cryptodira', 18, 'Cryptodira is a suborder of Testudines that includes most living tortoises and turtles. Cryptodira differ from Pleurodira (side-neck turtles) in that they lower their necks and pull the heads straight back into the shells, instead of folding their necks sideways along the body under the shells margins. They include among their species freshwater turtles, snapping turtles, tortoises, soft-shell turtles, and sea turtles.',
        'Eucryptodira', './images/api/main_class/Reptiles-Testudines/Cryptodira.png'),
        --- 48 --- Reptiles : Testudines
        ('Pleurodira', 18, 'The Pleurodira are one of the two living suborders of turtles, the other being the Cryptodira. In many cases in the nomenclature of animals, ranks such as suborder are considered of little importance apart from nomenclatural or taxonomic reasons. However, this is not the case with the suborders of the turtles. This division represents a very deep evolutionary divide between two very different types of turtles. The physical differences between them, although anatomical and largely internal, are nonetheless significant, and the zoogeographic implications of them are substantial. The Pleurodira are known more commonly as the side-necked turtles and the name Pleurodira quite literally translates to side neck, whereas the Cryptodira are known as hidden-necked turtles. The Pleurodira turtles are restricted to the Southern Hemisphere, largely to Australia, South America, and Africa. Within the Pleurodira, two living families are represented: Chelidae, also known as the Austro-South American side-necked turtles, and the Pelomedusidae, also known as the Afro-South American side-necked turtles.',
        'Podocnemididae, Chelidae, Pelomedusidae', './images/api/main_class/Reptiles-Testudines/Pleurodira.png');


create table animal (
    animal_id serial primary key,
    animal_name TEXT, ----------------------------------------- 01 -
    mainclass_ref INTEGER, ------------------------------------ 02 -
    sci_name TEXT, -------------------------------------------- 03 - Scientific name represents, the Binomial and Trinomial name.
    image1 TEXT, ---------------------------------------------- 04 -
    image2 TEXT, ---------------------------------------------- 05 -
    intro TEXT, ----------------------------------------------- 06 - Intro includes: Geographic data.
    description TEXT, ----------------------------------------- 07 -
    behaviour TEXT, ------------------------------------------- 08 -
    def_mech TEXT, -------------------------------------------- 09 -
    diet TEXT, ------------------------------------------------ 10 -  Diet includes: Hunting mechanisms and methods.
    FOREIGN KEY (mainclass_ref) REFERENCES mainclass (mainclass_id)
);

-------------------| 01         | 02           | 03      | 04    | 05    | 06   | 07        | 08        | 09      | 10 |
insert into animal (animal_name, mainclass_ref, sci_name, image1, image2, intro, description, behaviour, def_mech, diet)
values

--<<< A M P H I B I A N S --- S A L I E N T I A
----- Amphibians : Salientia : Neobatrachia
('Blue Poison Dart Frog', 3, 'Dendrobates Tinctorius', null, null, null, null, null, null, null),










--<<<----- A R T H R O P O D S --- C H E L I C E R A T E S

---------- Arthropods : Chelicerates : Arachnid
('Red Widow Spider', 9, 'Latrodectus Bishopi', null, null, null, null, null, null, null),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

---------- Arthropods : Chelicerates : Arachnid
('Redback Spider', 9, 'Latrodectus Hasseltii', null, null, null, null, null, null, null),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

---------- Arthropods : Chelicerates : Arachnid
('Southern Black Widow', 9, 'Latrodectus Mactans', null, null, null, null, null, null, null),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

---------- Arthropods : Chelicerates : Arachnid
('Sydney Funnel-Web Spider', 9, 'Atrax Robustus',
'./images/api/arachnid/sydney_funnel_web_spider1.png',
'./images/api/arachnid/sydney_funnel_web_spider2.png',
--- Intro
'The Sydney funnel-web spider is a species of venomous mygalomorph spider native to eastern Australia, usually found within a 100 km radius of Sydney.
It is a member of a group of spiders known as Australian funnel-web spiders. Its bite is capable of causing serious injury or death in humans if left untreated.',
--- Description
'The Sydney funnel-web spider has a body length ranging from 1 to 5 cm (0.4 to 2 in).
Both sexes are glossy and darkly coloured, ranging from blue-black, to black, to brown or dark-plum coloured.
The carapace covering the cephalothorax is almost hairless and appears smooth and glossy.
Another characteristic are finger-like spinnerets at the end of their abdomen.
The shorter-lived male is smaller than the female but longer legged.
The average leg length for the spider in general is six to seven centimeters.
As part of its milking programme in January 2016, the Australian Reptile Park received a male Sydney funnel-web spider with a 10-centimetre (4 in) leg span.
The spider was described by the park as the largest specimen that it had seen.',
--- Behaviour
'Sydney funnel-web spiders typically build silk-lined tubular burrow retreats with collapsed "tunnels" or open "funnel" entrances from which irregular trip-lines radiate over the ground.
Sydney funnel-webs burrow in sheltered habitats where they can find a moist and humid climate, for instance under rocks, logs or borer holes in rough-barked trees. The long-lived female funnel-webs spend most of the time in their silk-lined tubular burrow retreats.
Waiting for potential prey to walk across the trip-lines, the females rush out and subdue their prey by injecting their venom.
Males tend to wander during the warmer months of the year, looking for receptive females to mate with. This makes encounters with male specimens more likely as they sometimes wander into backyards or houses, or fall into swimming pools.
The spiders can survive such immersion for up to twenty-four hours, trapping air bubbles on hairs around their abdomen. The spiders are mainly active at night, as typical day-time conditions would dehydrate them.
During the day, they seek cover in cool, moist hideaways. After heavy rain, spider activity is increased as their burrows may be flooded.
When threatened or provoked, funnel-web spiders will display aggressive behaviour, rearing up on their hind legs and displaying their fangs.
When biting, the funnel-web spiders maintain a tight grip on their victim, often biting repeatedly.',
--- Defense Mechanism
'Funnel-web spider venom contains a compound known as atracotoxin, an ion channel inhibitor, which makes the venom highly toxic for humans and other primates.
However, it does not affect the nervous system of other mammals.
These spiders typically deliver a full envenomation when they bite, often striking repeatedly, due to their defensiveness and large chitinous cheliceral fangs.
There has been no reported case of severe envenoming by female funnel-web spiders, which is consistent with the finding that the venom of female specimens is less potent than the venom of their male counterparts.
In the case of severe envenomation, the time to onset of symptoms is less than one hour, with a study about funnel-web spider bites finding a median time of 28 minutes.
This same study revealed that children are at a particular risk of severe funnel-web envenoming, with 42% of all cases of severe envenoming being children.
There is at least one recorded case of a small child dying within 15 minutes of a bite from a Sydney funnel-web spider.
The antivenom was developed by a team headed by Struan Sutherland at the Commonwealth Serum Laboratories in Melbourne.
Since the antivenom became available in 1981, there have been no recorded fatalities from Sydney funnel-web spider bites.
In September 2012, it was reported that stocks of antivenom were running low, and members of the public were asked to catch the spiders so that they could be milked for their venom.
One dose of antivenom requires around 70 milkings from a spider. The bite of a Sydney funnel-web is initially very painful, with clear fang marks separated by several millimetres.
The size of fangs is responsible for the initial pain. In some cases the spider will remain attached until dislodged by shaking or flicking it off.
A funnel-web bite is regarded as a medical emergency requiring immediate hospital treatment.
Current guidelines for antivenom recommend two vials, or four vials if symptoms of envenomation are severe.
Patients are assessed every fifteen minutes, with further vials recommended if symptoms do not resolve.
The most vials used to treat a bite is 12. The patient was a 10-year-old boy who was bitten in February 2017 by a male funnel-web spider hiding in a shoe.',
--- Diet
'Potential prey includes arthropods, lizards and frogs.'),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

---------- Arthropods : Chelicerates : Arachnid
('Western Black Widow Spider', 9, 'Latrodectus Hesperus', null, null, null, null, null, null, null),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

---------- Arthropods : Chelicerates : Arachnid
('White-Tailed Spider', 9, 'Lampona Cylindrata',
'./images/api/arachnid/white_tailed_spider1.png',
'./images/api/arachnid/white_tailed_spider2.png',
--- Intro
'White-tailed spiders are spiders native to southern and eastern Australia, and so named because of the whitish tips at the end of their abdomens. 
Common species are Lampona cylindrata and Lampona murina. Both these species have been introduced to New Zealand.',
--- Description
'The two common species are similar in appearance; L. cylindrata is slightly larger with females being up to 18 mm long while males are up to 12 mm in body length.
The legs span approximately 28 mm. The two species are not easily distinguished without microscopic examination.
They are slender spiders with dark reddish to grey, cigar-shaped body and dark orange-brown banded legs.
The grey abdomen has two pairs of faint white spots and—usually but not always—a distinct white spot at the tip just above the spinnerets. 
The similarities have led people to think there is only one species of white-tailed spider.
It is possible that not all white-tailed species have been identified. The descriptor, white tail, is applied to a variety of species of spiders for which a distal white mark on their abdomen is a distinctive feature; other markings disappear with moultings but the white tail remains to adulthood.',
--- Behaviour
'They live in gardens and inside houses, beneath bark and rocks, in leaf litter and are often found in the folds of clothes, towels and shoes.
They do not build webs. Most active at night, they hunt for other spiders.',
--- Defense Mechanism
'A common perception is that white tail spider bites can be associated with long term skin infections, and in rarer cases progression to necrosis.
This is an attribution of infections presenting to medical care with a complaint of "spider bite." Venom has no bacteria, and infections do not arise from spider bites.
The well-described brown recluse bite is direct damage to skin and tissue. It has a limited area and does not spread. No formal studies have found evidence for associating necrosis with white tail spider bites.
White tail spider bites may cause a small red or discolored bump, similar to an insect bite, that burns or itches.
The issue of necrosis in some bite cases in published studies begins with a paper presented at the International Society on Toxinology World Congress held in Brisbane in 1982.
Both the white-tailed spider and the wolf spider were considered as candidates for possibly causing suspected spider bite necrosis in the Australian context.
In Brazil the recluse spider was identified as linked to necrosis.
Following this initial report, numerous other cases implicated white-tailed spiders in causing necrotic ulcers.
All of these cases lacked a positively identified spider — or even a spider bite in some cases.
Additionally, there had not been a case of arachnogenic necrosis reported in the two hundred years of European colonisation before these cases.
Of the 130 cases of white tail spider bites studied by Isbister and Gray, more than 60% reported that the person had been bitten by spiders that had got into clothing, towels or beds.
Clinical toxicologist Geoffrey Isbister studied 130 cases of arachnologist-identified white-tailed spider bites, and found no necrosis or confirmed infections, concluding that such outcomes are very unlikely for a white-tailed spider bite.
The major effects from a bite in this study were local (pain, a red mark, local swelling and itchiness); and rarely systemic (nausea, vomiting, malaise or headache). All these symptoms are generally mild and resolve over time.',
--- Diet
'Their favoured prey are the black house spider (Badumna insignis) and the closely related brown house spider (Badumna longinqua), both of which are, like the whitetail, native to Australia but have been inadvertently introduced to New Zealand.'),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>

---------- Arthropods : Chelicerates : Xiphosura
('Mangrove Horseshoe Crab', 8, 'Carcinoscorpius Rotundicauda',
'./images/api/xiphosura/mangrove_horseshoe_crab1.png',
'./images/api/xiphosura/mangrove_horseshoe_crab2.png',
--- Intro
'The mangrove horseshoe crab (Carcinoscorpius Rotundicauda) is a chelicerate arthropod found in marine and brackish waters.
Despite its name, it is more closely related to spiders and scorpions than to crabs.
It is the only species in the genus Carcinoscorpius. The mangrove horseshoe crab occurs only in Asia and can be found in India, Indonesia, Malaysia, the Philippines, Singapore, Thailand and Hong Kong.
There are four extant species of horseshoe crab. The biology, ecology and breeding patterns of C. Rotundicauda and the two other Asian horseshoe crab species, Tachypleus Gigas and Tachypleus Tridentatus, have not been as well documented as those of the North American species Limulus polyphemus.
All four extant species of horseshoe crabs are anatomically very similar.',
--- Description
'The basic body plan of a horseshoe crab consists of three parts: the prosoma, the opisthosoma and the telson. The prosoma is the dome-shaped part at the front.
The marginally-spined middle is called the opisthosoma, and the rear extension that looks like a spike is the telson, which is commonly described as the tail.
The telson is used to turn itself right side up when overturned. The mangrove horseshoe crab grows up to 40 centimeters in length (including the tail), and its whole body is protected by a hard, dark brown carapace.
Uncommon for chelicerates, horseshoe crabs have two compound eyes. The main function of these compound eyes is to find a mate. In addition, they have two median eyes, two rudimentary lateral eyes, and an endoparietal eye on their carapace and two ventral eyes located on the underside by the mouth.
Scientists believe the two ventral eyes aid in the orientation of the horseshoe crab when swimming.
Each individual has six pairs of appendages. The first pair, the chelicerae, is used to place food in its mouth. The next pair of legs are the pedipalps, which are used for walking. The rest of the legs are used for locomotion and are known as pusher legs.
Located behind their legs are book gills. These gills are used for propulsion to swim and to exchange respiratory gases.',
--- Behaviour
null,
--- Defense Mechanism
'The tail is called the telson. It is long and pointed. Although the telson looks intimidating, it is not dangerous, poisonous or used to sting.
Horseshoe crabs are not known to be aggresive, but use their shell to protect them selves from potential pedators',
--- Diet
'Mangrove horseshoe crabs are selective benthic feeders, feeding mainly on insect larvae, small fish, oligochaetes, small crabs and thin-shelled bivalves.
Lacking jaws, it grinds up the food with bristles on its legs and places it in its mouth using its chelicerae.
The ingested food then enters the cuticle-lined oesophagus and then the proventriculus. The proventriculus is made up of a crop and a gizzard.
The crop can expand to fit the ingested food, while the gizzard grinds the food into a pulp.
Studies have found that mangrove horseshoe crabs have a strong preference for insect larvae over the other organisms on which it also feeds.'),
------------------------------------------------------------------------------------------------------------------------------------------------------->>>>>










--<<<---------- B I R D S
--------------- Birds : Neognathae : Neoaves
('Peregrine Falcon', 25, 'Falco Peregrinus', null, null, null, null, null, null, null),










--<<<--------------- F I S H
-------------------- Fish : Chondrichthyes : Elasmobranchii
('Great White Shark', 35, 'Carcharodon Carcharias', null, null, null, null, null, null, null),










--<<<-------------------- M A M M A L S --- P R O T O T H E R I A
------------------------- Mammals : Prototheria : Monotremata
('Platypus', 39, 'Ornithorhynchus Anatinus', null, null, null, null, null, null, null),










--<<<-------------------- M A M M A L S --- T H E R I I F O R M E S
------------------------- Mammals : Theriiformes : Boreoeutheria
('Red Panda', 42, 'Ailurus Fulgens', null, null, null, null, null, null, null),










--<<<------------------------- R E P T I L E S
------------------------------ Reptiles : Lepidosauria : Squamata
('Spiny Bush Viper', 46, 'Atheris Hispida', null, null, null, null, null, null, null);